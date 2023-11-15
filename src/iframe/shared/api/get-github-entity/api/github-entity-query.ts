export const ISSUE_ID_QUERY = `query IssueID ($owner: String!, $repo: String!, $number: Int!) {
  repository(owner: $owner, name: $repo) {
    issue(number: $number) {
      id
      title
    }
    pullRequest(number: $number) {
      id
      title
    }
  }
}`;

export const REPO_ID_QUERY = `query RepoID ($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
    id
    name
    url
  }
}`;

export const PROJECT_ID_QUERY = `query ProjectID ($owner: String!, $number: Int!) {
  repositoryOwner(login: $owner) {
    ... on User {
      projectV2(number: $number) {
        id
        title
      }
    }
    ... on Organization {
      projectV2(number: $number) {
        id
        title
      }
    }
  }
}`;
