import { padStart } from 'lodash'
import { createGlobalStyle } from 'styled-components'

export function rgba(hex, opacity) {
  const alpha = Math.round(opacity * 255)
  return `${hex}${padStart(alpha.toString(16), 2, '0')}`
}

export const COLORS = {
  primary: '#F2AB27',
  secondary: '#D9C382',
  black: '#323E40',
  white: '#FEF9F1',
  gray: '#5B6363',
}

export const SPACES = {
  gap: 5,
  topSpace: 0,
  bottomSpace: 0,
}

export default createGlobalStyle`
  .h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: bold;
    color: ${COLORS.primary};
  }

  .h4 {
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    color: ${COLORS.white},
  }

  .body {
    font-size: 16px;
    line-height: 22px;
    color: ${COLORS.black};
  }

  .tiny {
    font-size: 12px;
    line-height: 14px;
    color: ${COLORS.black};
    font-weight: bold;
  }

  .link {
    font-size: 16px;
    line-height: 22px;
    color: ${COLORS.white};
    font-weight: bold;
    text-decoration: underline,
  }

  .main-container {
    backgroundColor: ${COLORS.black};
    flex: 1,
  }
`
