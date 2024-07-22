import styled from 'styled-components'
import DropDown from './DropDownList'
import SideMenu from './MenuBar'
import { useState } from 'react'



const NavBar = ({show, toggle, heading}) => {

    const [showMenu, setShowMenu] = useState(false);

    const menubar = () => {
        setShowMenu((prev) => (!prev));
    }

    return (
        
        <Header>
            {
                show ? <SideMenu show={show} toggle={toggle} /> : ""
            }
            <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#000000"} fill={"none"}>
                <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
                
            <div className='navbar'>
                <h2>{heading}</h2>
                <img src="/images/user.svg" alt="icon" onClick={menubar} />
                {
                    showMenu ? <DropDown /> : ""
                }
            </div>
        </Header>
    );
}

export default NavBar;


const Header = styled.div`
    background: rgba(255, 255, 255, 1);
    border-bottom: 0.5px solid #b7b7b8;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    padding: 0px 20px;
    height: 64px;
    position: relative;
    min-width: 100%;

    img{
        cursor: pointer;
    }


    .navbar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
    }

    svg{
        cursor: pointer;
    }

`