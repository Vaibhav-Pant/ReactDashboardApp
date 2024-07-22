import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const MenuBar = (props) => {


    return (
        <>
            <NAVMENU>
                <div className='heading'>
                    <img onClick={props.toggle} src="images/ham.svg" alt="ham" />
                    <div>
                        <h2>Side Menu</h2>
                    </div>
                </div>
                <ul className='lists'>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "bgColor" : ""}
                        onClick={props.toggle}
                    >
                        <li>
                            <img src="/images/dash.svg" alt="dash" />
                            Dashboard
                        </li>
                    </NavLink>
                    <NavLink
                        to="/Transaction"
                        className={({ isActive }) =>
                            isActive ? "bgColor" : ""}
                        onClick={props.toggle}
                    >
                        <li>
                            <img src="/images/trans.svg" alt="trans" />
                            Transaction
                        </li>
                    </NavLink>
                    <NavLink
                        to="/Support"
                        className={({ isActive }) =>
                            isActive ? "bgColor" : ""}
                        onClick={props.toggle}
                    >
                        <li>
                            <img src="/images/supp.svg" alt="supp" />
                            Support
                        </li>
                    </NavLink>

                </ul>

            </NAVMENU>
        </>
    )

}

export default MenuBar;


const NAVMENU = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 10px 10px;
    border-right: 0.5px solid rgba(238, 238, 244, 1);
    position: fixed;
    height: 100%;
    top: 0;
    left:0;
    background-color: rgba(255, 255, 255, 1);
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow-x: hidden;

    .heading{
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        padding: 0px 20px;
        gap: 20px;
    }

    .heading img{
        cursor: pointer;
    }

    h2{
        color: rgba(95, 0, 217, 1);
        font-size:26px;
        border-radius: 5px;
    }

    .lists{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }

    .lists li{
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        border-radius: 10px;
        font-size: 18px;
        padding: 10px 20px;
        cursor: pointer;    
        color: black;
    }
    
    .lists a{
        color: black;
        text-decoration: none;
    }

    .bgColor{
        background-color: rgba(159, 159, 167, 0.895);
        border-radius: 5px;
    }

`