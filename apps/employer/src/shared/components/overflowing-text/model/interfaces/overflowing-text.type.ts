import type { TextProps } from '@radix-ui/themes'

export type OverflowingTextProps = TextProps & {
  rows?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
}
