export const PULL_REQUEST_FRAGMENT = `fragment PullRequestFragment on PullRequest {
  __typename
  id
  title
  number
  state
  isDraft
  bodyText
  url
  state
  updatedAt
  repository {
    name
    owner {
      ... on User {
        login
      }
      ... on Organization {
        login
      }
    }
  }
  assignees(first: 3)  {
    nodes {
      name
      url
      avatarUrl
      login
    }
  }
  labels(first: 4) @include(if: $includeLabels) {
    nodes {
      color
      name
      description
      url
    }
  }
  projectItems(first: 2) {
    nodes {
      project {
        title
        url
      }
      fieldValueByName(name: $projectFieldValue) {
        __typename
        ... on ProjectV2ItemFieldSingleSelectValue {
          description
          name
          color
          id
          field {
            ... on ProjectV2SingleSelectField {
              name
            }
          }
        }
      }
    }
  }
  timelineItems(first: 36, itemTypes: CONNECTED_EVENT) @include(if: $includeLinking) {
    filteredCount
    nodes {
      ... on ConnectedEvent {
        __typename
        subject {
          ... on Issue {
            __typename
            id
            url
            state
            title
          }
        }
      }
    }
  }
  milestone @include(if: $includeMilestone) {
    dueOn
    number
    title
    id
    url
    updatedAt
    description
  }
  comments(last: 4) @include(if: $includeComments) {
    nodes {
      id
      updatedAt
      bodyText
      url
      isMinimized
      author {
        login
        url
        avatarUrl
      }
    }
  }
}`;
