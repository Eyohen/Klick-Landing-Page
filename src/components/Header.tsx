import { styled } from 'styled-components'
import { GlobalProps } from '../types/global'

type HeaderStyleProps = {
    width?: number,
    height: number,
}
const HeaderStyle = styled.div<HeaderStyleProps>`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    // background-color: white;
    border: 1px solid black;
    width: ${props => `${props.width}px` || "100%"};
    height: ${props => `${props.height}px` || "100vh"};
    padding: 10px
    `

type HeaderProps = {
    children: React.ReactNode,
    globalProps?: GlobalProps,
}
const Header : React.FC<HeaderProps> = ({ children, globalProps }) => {
    return <HeaderStyle width={globalProps?.width} height={100}> {children}</HeaderStyle>
}

export {
    Header
};
export default Header;