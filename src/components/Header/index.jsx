import KasaLogo from '../../assets/LOGO.png'
import styled from 'styled-components'

const HomeLogo = styled.img`
    width: 86%
`

function Header() {
    return (
        <HeaderWrapper>
            <h1>Header</h1>
            <HomeLogo src={KasaLogo}>
        </HeaderWrapper>
        
    )
}

export default Header