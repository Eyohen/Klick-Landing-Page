import { styled } from 'styled-components'
import { useState, useEffect } from 'react'
import { COLORS } from '../constants/Color'

const ContainerStyle = styled.div<Props>`
    width: ${props => `${props.width}px` || "100%"};
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${COLORS.BACKGROUND};
    box-sizing: border-box;
`

type Props = {
    width: number,
}
const SubContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.BACKGROUND}
    `

const SubContainer = ({ children }: { children: React.ReactNode }) => {
    return <SubContainerStyle>
        {children}
    </SubContainerStyle>
}

type GlobalProps = {
    width: number,
}
type ContainerProps = {
    children: React.ReactNode,
    globalProps: GlobalProps,
}

const Container = ({ children, globalProps: { width } }: ContainerProps) => {
    return <ContainerStyle width={width}> {children}</ContainerStyle>
}

export {
    SubContainer,
    Container
};
export default Container;