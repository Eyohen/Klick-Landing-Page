import { styled } from 'styled-components'

const ContainerStyle = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: white;
`
const SubContainerStyle = styled(ContainerStyle)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    `
    
const SubContainer = ({ children }: { children: React.ReactNode }) => {
    return <SubContainerStyle>
        {children}
    </SubContainerStyle>
}

const Container = ({ children }: { children: React.ReactNode }) => {
    return <ContainerStyle>
        {children}
    </ContainerStyle>
}

export {
    SubContainer,
    Container
};
export default Container;