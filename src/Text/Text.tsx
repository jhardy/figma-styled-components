import styled, { css } from 'styled-components'

export type TextSizes = 'small' | 'medium' | 'large' | 'xlarge'
export type TextWeights = 'normal' | 'medium' | 'bold'

export interface TextProps {
  size?: TextSizes
  weight?: TextWeights
  inverted?: boolean
}
   // tslint:disable:object-literal-sort-keys
const textAttributes = {
  small: {
    fontSize: `11px`,
    lineHeight: `16px`,

    letterSpacing: { positive: `0.005em`, negative: `.01em` }
  },
  medium: {
    fontSize: `12px`,
    lineHeight: `16px`,
    letterSpacing: { positive: `0`, negative: `.005em;` }
  },
  large: {
    fontSize: `13px`,
    lineHeight: `24px`,
    letterSpacing: { positive: `-.0025em`, negative: `.0025em` }
  },
  xlarge: {
    fontSize: `14px`,
    lineHeight: `24px`,
    letterSpacing: { positive: `-.001em`, negative: `-.001em` }
  }
}

const getTextWeight = (weight: TextWeights) => {
  switch (weight) {
    case 'bold':
      return 600
    case 'medium':
      return 500
    default:
      return 400
  }
}

const getTextStyles = (
  size: TextSizes = 'small',
  weight: TextWeights = 'normal',
  onNegative: boolean = false
) => {
  const textStyles = textAttributes[size]
  const variant = onNegative ? 'negative' : 'positive'

  return css`
    font-weight: ${getTextWeight(weight)};
    font-size: ${textStyles.fontSize};
    letter-spacing: ${textStyles.letterSpacing[variant]};
    line-height: ${textStyles.lineHeight};
  `
}

export const Text = styled.span<TextProps>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  color: ${(props) => (props.inverted ? '#ffffff' : 'rgba(0, 0, 0, 0.8)')};
  ${(props) => getTextStyles(props.size, props.weight, props.inverted)}
`
