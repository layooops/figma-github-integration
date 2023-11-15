import { DRAFT_ISSUE_FRAGMENT, ISSUE_FRAGMENT } from '../issue';
import { PULL_REQUEST_FRAGMENT } from '../pull-request';

export const PROJECT_VARIABLES =
  '$includeIssues: Boolean = true, $includeDraftIssues: Boolean = true, $includePullRequests: Boolean = true';
export const PROJECT_FRAGMENT = `
${ISSUE_FRAGMENT}
${DRAFT_ISSUE_FRAGMENT}
${PULL_REQUEST_FRAGMENT}
fragment ProjectFragment on ProjectV2 {
  id
  title
  url
  closed
  public
  shortDescription
  fields(first: 20) {
    totalCount
    nodes {
      ... on ProjectV2SingleSelectField {
        __typename
        name
        id
        dataType
        options {
          name
          color
          id
        }
      }
    }
  }
  owner {
    __typename
    ... on Organization {
      name
      login
      url
      avatarUrl
    }
    ... on User {
      name
      login
      url
      avatarUrl
    }
  }
  items(first: $quantity, orderBy: {field: POSITION, direction: DESC}) {
    totalCount
    nodes {
      content {
        ...IssueFragment @include(if: $includeIssues)
        ...DraftIssueFragment @include(if: $includeDraftIssues)
        ...PullRequestFragment @include(if: $includePullRequests)
      }
    }
  }
}
`;
