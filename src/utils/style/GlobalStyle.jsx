import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: #FFFFFF ;
        max-width: 1440px;
        margin: auto;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
