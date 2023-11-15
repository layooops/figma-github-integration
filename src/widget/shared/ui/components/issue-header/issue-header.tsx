import { AutoLayout } from '../../../../widget-components';
import { IconButton } from '../button';

interface IssueHeaderProps extends AutoLayoutProps {
  onClick: () => void;
  openedMore?: boolean;
  title: FigmaDeclarativeNode;
  contentPreview?: FigmaDeclarativeNode;
  disabled?: boolean;
}

export const IssueHeader = ({
  openedMore,
  title,
  onClick,
  contentPreview: headerContent,
  disabled = false,
  ...rest
}: IssueHeaderProps) => {
  return (
    <AutoLayout
      direction="vertical"
      verticalAlignItems="center"
      spacing={8}
      padding={{ horizontal: 16, vertical: 16 }}
      width="fill-parent"
      {...rest}
    >
      <AutoLayout direction="horizontal" spacing={8} width="fill-parent" verticalAlignItems="start">
        {title}
        <IconButton
          onClick={onClick}
          icon="chevron"
          appearance="ghost"
          size="extra-small"
          iconRotation={openedMore ? 180 : 0}
          state={disabled ? 'disabled' : openedMore ? 'selected' : 'default'}
        />
      </AutoLayout>
      {headerContent}
    </AutoLayout>
  );
};
