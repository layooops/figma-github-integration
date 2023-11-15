import type { HeadingProps } from './heading.interface';

import { Text } from '../../../../widget-components';
import { HeadingLevelStyles } from './heading-styles';

export const Heading = ({ children, level, ...rest }: HeadingProps) => {
  return (
    <Text fontSize={HeadingLevelStyles[level].fontSize} {...rest}>
      {children}
    </Text>
  );
};
