import NavBar from '../../Components/NavBar'
import MainFrame from './MainFrame'


const Dashboard = ({show, toggle}) => {

    return (
        <>
            <NavBar show={show} toggle={toggle} heading="Dashboard" />
            <MainFrame />
        </>
    );
}

export default Dashboard;
