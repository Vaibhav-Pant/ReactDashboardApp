import Dashboard from "./pages/Dashboard/Dashboard"
import Transaction from "./pages/Transaction/Transaction"
import Support from "./pages/Support/Support";
import {useState} from 'react'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";



const App = () => {


  const [show, setShow] = useState(false);
  const toggle = () => {
      setShow((prev) => (!prev));
  }

  const router = createHashRouter([
    {
      path: "/",
      element: <Dashboard show={show} toggle={toggle}/>,
    },
    {
      path: "/Transaction",
      element: <Transaction show={show} toggle={toggle}/>,
    },
    {
      path: "/Support",
      element: <Support show={show} toggle={toggle}/>,
    }
  ]);

  return (
    <div>
          <RouterProvider router={router} />
    </div>
  ) 
}

export default App
