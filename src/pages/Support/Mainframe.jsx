import styled from "styled-components"

const Mainframe = () => {
    return (
        <>
            <Main>
                <Box1>

                    <div className="first">
                        <div>
                            <img src="./images/email.svg" alt="email" />
                            <h1>Contact Us</h1>
                        </div>

                        <div className="text">
                            Have a question or just want to know more? Feel free to reach out to us.
                        </div>
                    </div>

                    <div className="second">
                        <div>You will receive responce within 24 hours of time of submit.</div>
                        <form action="">
                            <div>
                                <div>
                                    <div><label htmlFor="name">Name *</label></div>
                                    <div><input type="text" required name="name" id="name" placeholder="King" /></div>
                                </div>
                                <div>
                                    <div><label htmlFor="surname">Surname *</label></div>
                                    <div><input type="text" required name="surname" id="surname" placeholder="Pat" /></div>
                                </div>
                            </div>

                            <div>
                                <div><label htmlFor="email">Email *</label></div>
                                <div><input type="text" required name="email" id="email" placeholder="name@mail.com" /></div>
                            </div>

                            <div>
                                <div><label htmlFor="message">Message</label></div>
                                <div><input type="text" name="message" id="message" placeholder="Your Message" /></div>
                            </div>
                        </form>

                        <div className="terms">
                            <input type="checkbox" required />&nbsp;&nbsp;
                            I agree with <a href="/">Terms & conditions</a>
                        </div>

                        <div className="btns">
                            <button>Send a Message</button>
                            <button>Book a Meeting</button>
                        </div>
                    </div>

                </Box1>


                <Box2>
                    <div className="first">
                        <div>
                            <img src="./images/chat.svg" alt="chat" />
                            <h1>Live Chat</h1>
                        </div>

                        <div className="text">
                            Don't have time to wait for the answer? Chat with us now.
                        </div>
                    </div>

                    <div className="box">
                        <div>
                            <div>
                                <button>Chatbot</button>
                            </div>
                            <div>Chat with us now</div>
                        </div>
                    </div>
                </Box2>
            </Main>
        </>
    )
}

export default Mainframe

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 30px;

    .first{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        max-width: 30%;
    }

    .first > div:nth-child(1){
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }

    @media screen and (max-width: 945px){
        .first{
            min-width: 100%;
        }
    }
`

const Box1 = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;


    .text{
        color: rgba(83, 93, 102, 1);
        font-size: 14px;
    }

    .second{
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 14px;
        color: rgba(23, 23, 23, 1);
        font-weight: 500;
        padding: 20px;
    }

    .second form{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .second form input{
        padding: 6px 10px;
        border-radius: 5px;
        border: 0.5px solid #c6c3c3;
        width: 100%;
        margin-top: 5px;
    }

    .second form > div:nth-child(1){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    } 

    .second form > div:nth-child(3) input{
        padding: 6px 10px 50px 6px;
    }

    .terms {
        font-size: 12px;
    }
    .terms a{
        color: rgba(95, 0, 217, 1);
        text-decoration: none;
    }

    .btns button{
        padding: 10px;
        border: 0;
        border-radius: 10px;
        width: 100%;
        margin: 2px 0px;
        cursor: pointer;
    }
    .btns > button:nth-child(1){
        pointer-events: none;
        background-color: rgba(216, 221, 226, 1);
        /* cursor: not-allowed; */
    }

    @media screen and (max-width: 945px){
        flex-direction: column;
        gap: 50px;

    }

`
const Box2 = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 100px;


    .box{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        min-width: 50%;
    }

    .box > div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;

    padding: 20px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 500;
    width: 90%;
    color: white;

    background-color: rgba(95, 0, 217, 1);
    background-image: url("./images/Visual.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }


  .box button{
    padding: 3px 8px;
    border: 0;
    border-radius: 15px;
    font-size: 14px;
    background-color: white;
    color: rgba(95, 0, 217, 1);
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (max-width: 945px){
    flex-direction: column;
    padding: 20px;

    .box{
        min-width: 100%;
    }
    .box > div{
        width: 100%;
    }
  }
`

