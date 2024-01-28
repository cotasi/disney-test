import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navwrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.show ? '#090b13' : 'transparent'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 50;
`;

const Logo = styled.h1`
    display: inline-block;
    margin: 0;
    > a {
        display: block;
        padding: 20px 0;
        > img { width: 100px; display: block;}
    }
`;

const Nav = () => {
    const [show,setshow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 0) {
                setshow(true);
            } else {
                setshow(false);
            }
        });

        return () => { window.removeEventListener('scroll',()=>{})}
    })


    return (
       <Navwrapper show={show}>
        <Logo><Link to="/"><img src="/svg/logo.svg" alt="logo" /></Link></Logo>
       </Navwrapper>
    );
};

export default Nav;