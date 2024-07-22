import NavBar from "../../Components/NavBar"
import Mainframe from "./Mainframe"

const Support = ({show, toggle}) => {
  return (
    <>
        <NavBar
            show={show}
            toggle={toggle}
            heading="Support"
        />
        <Mainframe/>
    </>
  )
}

export default Support