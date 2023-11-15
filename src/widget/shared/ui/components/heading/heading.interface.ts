export type HeadingLevel = 'one' | 'two' | 'three';

export interface HeadingProps extends TextProps {
  level: HeadingLevel;
}
