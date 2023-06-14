import { styled } from 'styled-components'
import { GlobalProps } from '../types/global'
import { COLORS } from '../constants/Color'

type HeaderStyleProps = {
    width?: number,
    height: number,
}
const HeaderStyle = styled.div<HeaderStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // border: 1px solid black;
    width: ${props => `${props.width}px` || "100%"};
    height: ${props => `${props.height}px` || "100vh"};
    padding: 10px;
    margin-top: 20px
    `

type HeaderProps = {
    globalProps?: GlobalProps,
}
const Header: React.FC<HeaderProps> = ({ globalProps }) => {
    return <HeaderStyle width={globalProps?.width} height={100}>
        {/* Logo section */}
        <div style={{
            width: '100px', height: '60px', display: 'flex', flexDirection: 'row',
            alignItems: 'center',
        }}>
            <img src="../src/assets/logo.jpg" alt="Google Logo"
                style={{
                    margin: '10px'
                }} />
            <p style={{
                fontFamily: "Poppins", fontSize: '50px',
                padding: 0, margin: 0, fontWeight: 'bold',
                color: COLORS.SECONDARY
            }}> Klick </p>
        </div>

        {/* Email section */}
        <p >
            <a href='mailto:info@klick.africa'
                style={{
                    fontFamily: "Poppins", fontSize: '30px',
                    color: 'white', padding: 0, margin: 0,
                    fontWeight: 'bold',
                    textDecoration: 'none',
                }}> info@klick.africa</a>
        </p>
    </HeaderStyle>
}

export {
    Header
};
export default Header;