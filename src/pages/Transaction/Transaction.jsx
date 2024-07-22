import NavBar from "../../Components/NavBar"
import MainFrame from "./MainFrame"

const Transaction = ({ show, toggle }) => {
  return (
    <>
      <NavBar
        show={show} toggle={toggle} heading="Transaction"
      />
      <MainFrame />
    </>
  )
}

export default Transaction