import { createGlobalStyle } from 'styled-components'
import '../style/font.css'

const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: #FFFFFF ;
        max-width: 1440px;
        margin: auto;
        font-family: 'Montserrat', sans-serif;    }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
