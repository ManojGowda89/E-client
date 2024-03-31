
import ReactDOM from 'react-dom/client'

import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import "./Components/css/main.css"
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Auth/Login.jsx'
import Signup from './Pages/Auth/Signup.jsx'
import Pagenotfound from './Pages/Pagenotfound.jsx'
import PrivatePolicy from './Pages/PrivatePolicy.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter([
  
  {
    path: '/',
    element:<Home/>,
    errorElement:<Pagenotfound/>
  },
  {
    path :"/about",
    element:<About />
  },
  {

    path:"/login",
    element: <Login />,
  },
{
  path:"/signup",
  element: <Signup />

},{

  path:"/contact",
  element: <Contact/>
},
{
  path:"/private_policy",
  element: <PrivatePolicy/>
}
  





])
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)
