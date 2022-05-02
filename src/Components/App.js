import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ListPage from './ListPage';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
`;

const AppContainer = styled.div`
    background-color: AliceBlue;
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const App = () => {
    return (
        <AppContainer>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="list" element={<ListPage />} />
                </Routes>
            </Router>
        </AppContainer>
    );
};

export default App;
