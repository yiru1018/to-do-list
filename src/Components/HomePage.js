import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.h1`
    margin: 0px;
`;

const HomePage = () => {
    let navigate = useNavigate();

    return (
        <div>
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
