export const ISSUE_VARIABLES =
  '$projectFieldValue: String = "Status", $includeLabels: Boolean = true, $includeMilestone: Boolean = false, $includeComments: Boolean = false, $includeLinking: Boolean = false';

export const ISSUE_FRAGMENT = `fragment IssueFragment on Issue {
  __typename
  id
  title
  number
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
  assignees(first: 3) {
    nodes {
      name
      url
      avatarUrl
      login
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
  timelineItems(first: 8, itemTypes: CONNECTED_EVENT) @include(if: $includeLinking) {
    filteredCount
    nodes {
      ... on ConnectedEvent {
        __typename
        subject {
          ... on PullRequest {
            __typename
            id
            title
            state
            url
          }
        }
      }
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

export const DRAFT_ISSUE_FRAGMENT = `fragment DraftIssueFragment on DraftIssue {
   __typename
  id
  title
  bodyText
  updatedAt
  assignees(first: 3) {
    nodes {
      name
      url
      avatarUrl
      login
    }
  }
  projectV2Items(first: 2) {
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
}`;
