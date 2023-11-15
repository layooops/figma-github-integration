import type { IssueState, PullRequestState } from '@octokit/graphql-schema';

import { AutoLayout, SVG } from '../../../../widget-components';
import { Colors, iconStyles } from '../../../styles';
import {
  IconIssueClosed,
  IconIssueDraft,
  IconIssueOpened,
  IconPullRequestClosed,
  IconPullRequestDraft,
  IconPullRequestOpened,
} from '../../icons';
import { CustomText } from '../custom-text';

interface StateLabelIconProps extends AutoLayoutProps {
  state: IssueState | PullRequestState | 'DRAFT';
  icon: SVGProps;
  text?: string;
}

interface IssueStateLabelProps {
  state: IssueState | PullRequestState | 'DRAFT';
  type: 'Issue' | 'PullRequest';
  iconOnly?: boolean;
}

const IssueStateColors = {
  DRAFT: '#6E7781',
  OPEN: '#2DA44E',
  CLOSE: '#8250DF',
};

const PullRequestStateColors = {
  DRAFT: '#6E7781',
  OPEN: '#2DA44E',
  CLOSE: '#CF222E',
  MERGED: '#8250DF',
  QUEUED: '#9A6700',
};

const getGithubIssueState = ({
  state,
  fill,
}: {
  state: IssueState | 'DRAFT';
  fill?: string;
}): { text: string; src: string } => {
  switch (state) {
    case 'OPEN':
      return {
        text: 'Open',
        src: IconIssueOpened(fill ?? IssueStateColors.OPEN),
      };
    case 'CLOSED':
      return {
        text: 'Close',
        src: IconIssueClosed(fill ?? IssueStateColors.CLOSE),
      };
    default:
      return {
        text: 'Draft',
        src: IconIssueDraft(fill ?? IssueStateColors.OPEN),
      };
  }
};

const getGithubPullRequestState = ({
  state,
  fill,
}: {
  state: PullRequestState | 'DRAFT';
  fill?: string;
}): { text: string; src: string } => {
  switch (state) {
    case 'OPEN':
      return {
        text: 'Open',
        src: IconPullRequestOpened(fill ?? PullRequestStateColors.OPEN),
      };
    case 'MERGED':
      return {
        text: 'Merged',
        src: IconPullRequestClosed(fill ?? PullRequestStateColors.MERGED),
      };
    case 'CLOSED':
      return {
        text: 'Closed',
        src: IconPullRequestClosed(fill ?? PullRequestStateColors.CLOSE),
      };
    default:
      return {
        text: 'Draft',
        src: IconPullRequestDraft(fill ?? PullRequestStateColors.DRAFT),
      };
  }
};

const StateLabel = ({
  text,
  icon: { src: iconSrc, fill, ...iconRest },
  ...rest
}: StateLabelIconProps) => {
  if (!text) {
    return (
      <SVG
        width={iconStyles.sizing.small}
        height={iconStyles.sizing.small}
        src={iconSrc}
        fill={fill}
        {...iconRest}
      />
    );
  }
  return (
    <AutoLayout
      width="hug-contents"
      padding={{ horizontal: 12, vertical: 4 }}
      verticalAlignItems="center"
      horizontalAlignItems={'center'}
      cornerRadius={100}
      spacing={4}
      {...rest}
    >
      <SVG
        width={iconStyles.sizing.small}
        height={iconStyles.sizing.small}
        src={iconSrc}
        {...iconRest}
      />
      <CustomText fill={Colors.white} size="small">
        {text}
      </CustomText>
    </AutoLayout>
  );
};

export const IssueStateLabel = ({ state, type, iconOnly = true }: IssueStateLabelProps) => {
  if (type === 'Issue' && state !== 'MERGED') {
    return (
      <StateLabel
        name="StateLabel"
        fill={PullRequestStateColors[state]}
        state={state}
        icon={{
          src: getGithubIssueState({
            state: state,
            fill: !iconOnly ? Colors.white : undefined,
          }).src,
        }}
        text={!iconOnly ? getGithubIssueState({ state: state }).text : undefined}
      />
    );
  }

  if (type === 'PullRequest') {
    return (
      <StateLabel
        name="StateLabel"
        fill={PullRequestStateColors[state]}
        state={state}
        icon={{
          src: getGithubPullRequestState({
            state: state,
            fill: !iconOnly ? Colors.white : undefined,
          }).src,
        }}
        text={!iconOnly ? getGithubPullRequestState({ state: state }).text : undefined}
      />
    );
  }
};
