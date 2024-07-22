import styled from 'styled-components'

const MainFrame = () => {
  return (
    <Global>

      <Top>
        <div className="first">
          <div className='heading'>Total Portfolio Value
            <img src="./images/info.svg" alt="info" />
          </div>
          <div className="value">₹ 112,312.24</div>
        </div>

        <div className="second">
          <div className='heading'>Wallet Balance</div>
          <div>
            <div>
              <div className="value">22.39401000</div>
              <div className="curr">BTC</div>
            </div>
            <div>
              <div className="value">₹ 1,300.00</div>
              <div className="curr">INR</div>
            </div>
          </div>
        </div>

        <div className="third">
          <button className='btn'>
            <img src="./images/down.svg" alt="down" />
            Deposit
          </button>
          <button className='btn'>
            <img src="./images/up.svg" alt="up" />
            Withdraw
          </button>
        </div>
      </Top>

      <Middle>
        <Box1>
          <div className="first">

            <div>
              <div className="heading">Current Price</div>
              <div>
                <div className="value">₹ 26,670.25</div>
                <div style={{ color: "rgba(5, 150, 105, 1)" }}>
                  <img src="./images/arrow.png" alt="arrow" />
                  0.04%
                </div>
              </div>
            </div>

            <div>
              <button className='btn'>
                <img src="./images/add.svg" alt="add" />
                Buy
              </button>
              <button className='btn'>
                <img src="./images/remove.svg" alt="sell" />
                Sell
              </button>
            </div>

          </div>

          <div className="second">
            <div>
              <span>1H</span>
              <span>1D</span>
              <span>1W</span>
              <span>1M</span>
            </div>
          </div>

          <div className="third">
            <img src="./images/v26.png" alt="v26" />
            <div>
              <img src="./images/v27.png" alt="v27" />
            </div>
          </div>

          <div className="fourth">
            <span>7:15 PM</span>
            <span>12:55 PM</span>
            <span>6:35 PM</span>
            <span>12:15 PM</span>
            <span>5:55 PM</span>
          </div>

        </Box1>

        <Box2>
          <div className="heading">Recent Transactions</div>

          <div className="details">

            <div className="transaction">

              <div className="logo">
                <img src="./images/dollar.svg" alt="$" />
              </div>

              <div>
                <div>
                  <div className='transHeading'>INR Deposit</div>
                  <div className='transDate'>2022-06-09 7:06 PM</div>
                </div>

                <div className='transValue'>+ ₹81,123.10</div>
              </div>

            </div>

            <div className="transaction">

              <div className="logo">
                <img src="./images/bitcoin.svg" alt="$" />
              </div>

              <div>
                <div>
                  <div className='transHeading'>BTC Sell</div>
                  <div className='transDate'>2022-05-27 12:32 PM</div>
                </div>

                <div className='transValue'>
                  <div>- 12.48513391 BTC</div>
                  <div className='transDate'>+ $81,123.10</div>
                </div>
              </div>

            </div>

            <div className="transaction">

              <div className="logo">
                <img src="./images/dollar.svg" alt="$" />
              </div>

              <div>
                <div>
                  <div className='transHeading'>INR Deposit</div>
                  <div className='transDate'>2022-02-08 9:32 PM</div>
                </div>

                <div className='transValue'>
                  + ₹25,123.37
                </div>
              </div>

            </div>
          </div>

          <div className="viewAll">
            <button>View All</button>
          </div>

        </Box2>

      </Middle>

      <Bottom>
        <div className="box bg1">
          <div>
            <button>Loans</button>
          </div>
          <div>Learn more about Loans- Keep your Bitcoin, access it's value without selling it</div>
        </div>

        <div className="box bg2">
          <div>
            <button>Contact</button>
          </div>
          <div>Learn more about our real estate, mortgage, and corporate account services</div>
        </div>
      </Bottom>

    </Global>
  )
}

export default MainFrame


const Global = styled.div`
  .heading{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
    color: rgba(83, 93, 102, 1);
    font-size: 14px;
    font-weight: 500;
  }

  .value{
    color: black;
    font-size: 20px;
    word-break: normal;
  }

  .btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 10px 16px;
    border-radius: 15px;
    border: 0;
    background-color: rgba(95, 0, 217, 1);
    font-size: 14px;
    color: white;
    cursor: pointer;
  }

`

const Top = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 40px;
  padding: 20px;


  .first{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }

  .second{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .second > div:nth-child(2){
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }

  .second > div:nth-child(2) > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .curr{
    background-color: rgba(243, 243, 247, 1);
    font-size: 14px;
    text-align: center;
    width: 32px;
    height: 22px;
    border-radius: 8px;
  }



  .third{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }


  @media screen and (max-width: 955px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 30px;

    .second{
      align-items: center;
    }
  }

  @media screen and (max-width: 465px){
    
    .second > div:nth-child(2){
      flex-direction: column;
      gap:20px
    }
  }

`

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
  margin: 20px 40px;
  /* background-color: green; */

  @media screen and (max-width: 955px){
    flex-direction: column;
    margin: 20px 30px;
  }
`

const Box1 = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
  padding: 20px;
  background-color: white;

  .first{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .first > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .first > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }


  .first > div:nth-child(1) > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 15px;
  }



  .second{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .second > div{
    display: flex;
    flex-direction: row;
    background-color: rgba(243, 243, 247, 1);
    border-radius: 5px;
    padding: 2px;
  }
  .second > div > span{
    padding: 5px 10px;
    margin: 1px;
    color: rgba(121, 126, 130, 1);
    cursor: pointer;
  }
  .second > div > span:hover{
    background-color: white;
    border-radius: 10px;
    color: black;
  }


  .third{
    position: relative;
  }
  .third > div{
    min-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .third img{
    width: 100%;
    display: block;
    height: auto;
  }


  .fourth{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    color: rgba(121, 126, 130, 1);
  }


  @media screen and (max-width: 490px){
    .first{
      flex-direction: column;
      gap: 10px;
    }
  }

`

const Box2 = styled.div`

  background-color: white;
  padding: 30px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .details{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }


  .transaction{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .logo{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: rgba(243, 243, 247, 1);
    position: relative;
  }

  .logo img{
    position: absolute;
    top: 30%;
    left: 30%;
  }

  .transaction > div:nth-child(2){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 70px;
    width: 100%;
  }

  .transaction > div:nth-child(2) > div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }


  .transHeading{
    color: rgba(23, 23, 23, 1);
    font-size: 16px;
  }

  .transDate{
    color: rgba(121, 126, 130, 1);
    font-size: 14px;
  }

  .transValue{
    color: rgba(23, 23, 23, 1);
    font-size: 16px;
    font-weight: 500;
    text-align: right;
  }

  .viewAll button{
    background-color: rgba(238, 238, 244, 1);
    width: 100%;
    padding: 10px;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
  }

  @media screen and (max-width: 480px){
    padding: 30px 10px;
    .transaction{
      gap: 10px;
    }
    .transaction > div:nth-child(2){
      gap: 0px;
    }
  }

`

const Bottom = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: space-evenly;
  gap: 20px;
  margin: 20px 40px;
  /* background-color: green; */



  .box{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: flex-start; */
    gap: 10px;
    padding: 20px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 500;
    min-width: 31%;

  }

  .bg1{
    background-image: url("./images/Visual-1.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg1 button{
    background-color: rgba(95, 0, 217, 1);
    color: white;
  }

  .bg2{
    background-color: rgba(95, 0, 217, 1);
    background-image: url("./images/Visual.svg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }

  .bg2 button{
    background-color: white;
    color: rgba(95, 0, 217, 1);
  }


  .box button{
    padding: 3px 8px;
    border: 0;
    border-radius: 15px;
    font-size: 12px;
    cursor: pointer;
  }

  
  @media screen and (max-width: 955px){
    flex-direction: column;
    gap: 30px;
  }




`