import { css } from 'react-emotion'

import * as CSS from 'csstype'

import { mq, styled, ThemeProps } from '../styles'


type BasicTypes = number | string | undefined

export type Arrayable<T> = T | T[]

const toPx = (n: number | string) => (typeof n === 'number' ? `${n}px` : n)
const arr = (n: Arrayable<BasicTypes>): BasicTypes[] =>
  Array.isArray(n) ? n : [n]

  // TOTO add auto-fit and auto-fill
  // repeat(auto-fill, minmax(16rem, 1fr))
interface GridContainerProps {
  /** <number> number of even columns in layout;
   *  <string> hatchback for `grid-column-template` css property
   */
  columns?: Arrayable<string | number>
  /** number of even rows in layout
   *  when passed a string - hatchback for `grid-column-template` css property
   */
  rows?: Arrayable<string | number>
  gap?: Arrayable<string | number>
  /** grid-flow @default `row` */
  flow?: CSS.GridAutoFlowProperty
  justifyItems?: Arrayable<CSS.JustifyItemsProperty>
  alignItems?: Arrayable<CSS.AlignItemsProperty>
  height?: Arrayable<CSS.HeightProperty<string | number>>
  minHeight?: Arrayable<CSS.MinHeightProperty<string | number>>
}

const gridContainerStyles = ({
  theme,
  columns = 12,
  rows,
  gap = theme.gap || 16,
  flow = 'row',
  justifyItems,
  alignItems,
  height,
  minHeight,
}: ThemeProps & GridContainerProps) => {
  const gridTemplateColumns =
    typeof columns === 'string'
      ? columns
      : arr(columns).map(col => `repeat(${col}, 1fr)`)

  // Possibly undefined, but that's ignored by emotion
  const gridTemplateRows =
    rows &&
    (typeof rows === 'string'
      ? rows
      : arr(rows).map(row => `repeat(${row}, 1fr)`))

  return css(
    {
      display: 'grid',
      gridAutoFlow: flow,
      overflow: 'hidden',
    },
    mq({
      gridTemplateColumns,
      gridTemplateRows,
      gridGap: arr(gap).map(toPx),
      justifyItems,
      alignItems,
      height: arr(height).map(toPx),
      minHeight: arr(minHeight).map(toPx),
    })
  )
}

export const Container = styled<GridContainerProps, 'div'>('div')`
  ${gridContainerStyles};
`

interface GridItemProps {
  /** hatchback for `grid-column` css property */
  column?: CSS.GridColumnProperty
  /** horizontal grid item position in cell units, alias for `grid-column-start` css property */
  left?: Arrayable<CSS.GridColumnStartProperty>
  /** column span length in cell units */
  width?: Arrayable<string | number>
  /** row span length in cell units */
  row?: CSS.GridRowProperty
  /** vertical grid item position in cell units, alias for `grid-row-start` css property */
  top?: Arrayable<CSS.GridColumnEndProperty>
  /** grid-row span length in cell units */
  height?: Arrayable<string | number>
  /** `justify-self` css property */
  justifySelf?: Arrayable<CSS.JustifySelfProperty>
  /** `align-self` css property */
  alignSelf?: Arrayable<CSS.AlignSelfProperty>
  /** `justify-content` css property */
  justifyContent?: Arrayable<CSS.JustifyContentProperty>
  /** `align-content` css property */
  alignContent?: Arrayable<CSS.JustifyContentProperty>
  /** `text-align` css property */
  textAlign?: Arrayable<CSS.TextAlignProperty>
}

const gridItemStyles = ({
  theme,
  column,
  left,
  width = 1,
  row,
  top,
  height,
  justifySelf,
  alignSelf,
  justifyContent,
  alignContent,
  textAlign,
}: ThemeProps & GridItemProps) => {
  const gridColumnStart = left && arr(left).map(start => `${start}`)
  const gridColumnEnd = arr(width).map(span => `span ${span}`)
  const gridRowStart = top && arr(top).map(start => `${start}`)
  const gridRowEnd = height && arr(height).map(span => `span ${span}`)

  return css(
    {
      overflow: 'hidden',
      display: 'flex',
      flexFlow: ' column wrap',
    },
    mq({
      gridColumnStart,
      gridColumnEnd,
      gridColumn: column,
      gridRowStart,
      gridRowEnd,
      gridRow: row,
      justifySelf,
      alignSelf,
      justifyContent,
      alignContent,
      textAlign,
    })
  )
}

export const Item = styled<GridItemProps, 'div'>('div')`
  ${gridItemStyles};
`
