import { styled } from 'styled-components'
import { COLORS } from '../constants/Color'
import { GlobalProps } from '../types/global'

type ContainerStyleProps = {
    width: number,
}
const ContainerStyle = styled.div<ContainerStyleProps>`
    width: ${props => `${props.width}px` || "100%"};
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${COLORS.BACKGROUND};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SubContainerStyle = styled.div<GlobalProps>`
    display: flex;
    flex-direction: column;
    width: 80%;
    min-width: ${props => 0.9 * props.width + "px" || "100%"};
    height: 100vh;
    `
type SubContainerProps = {
    children: React.ReactNode,
    globalProps: GlobalProps,
}
const SubContainer: React.FC<SubContainerProps> = ({ children, globalProps: { width } }) => {
    return <SubContainerStyle width={width}> {children} </SubContainerStyle>
}

type ContainerProps = {
    children: React.ReactNode,
    globalProps: GlobalProps,
}
const Container: React.FC<ContainerProps> = ({ children, globalProps: { width } }) => {
    return <ContainerStyle width={width}> {children} </ContainerStyle>
}

export {
    SubContainer,
    Container
};
export default Container;