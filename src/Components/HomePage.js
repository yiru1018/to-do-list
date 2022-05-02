import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
`;

const Title = styled.h1`
    margin: 0px;
`;

const HomePage = () => {
    let navigate = useNavigate();

    return (
        <div>
            <GlobalStyle />
            <Title>React todo list practice</Title>
            <button
                onClick={() => {
                    navigate('list');
                }}
            >
                click to start
            </button>
        </div>
    );
};

export default HomePage;
