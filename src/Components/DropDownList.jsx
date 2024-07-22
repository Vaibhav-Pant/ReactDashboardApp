import styled from 'styled-components'

const DropDownList = () => {
  return (
    <Container>
        <ul>
            <li>Account</li>
            <li>Settings</li>
            <li>Logout</li>
        </ul>
    </Container>
  )
}

export default DropDownList

const Container = styled.div`
    width: 100px;
    height: fit-content;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    right: 0px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    right: 50px;
    top: 100%;
    background-color: #ffffff;

    ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

    ul li{

        list-style: none;
        padding: 3px 10px;
        color: black;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
    }

    ul li:hover{
        /* color: #1999e8; */
        background-color: #edf2f7
    }

`