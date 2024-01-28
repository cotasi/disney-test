import React from 'react';
import Nav from './comp/Nav';
import styled from 'styled-components';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Banner from './comp/Banner';

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 50px);
  padding: 0 36px;
  &::after {
    content: '';
    display: block;
    background: url('/svg/home-background.png') no-repeat center/cover fixed;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Routes>
        <Route path="/" element={<>테스트</>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
