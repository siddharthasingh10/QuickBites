import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import About from './components/About';
import Error from './components/Error';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenu from './components/restaurantMenu';
import Profile from './components/profile';

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}
 export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
      children:[{
        path:"profile",
        element:<Profile/>

      }]
      },
      {
        path:"/contact",
        element:<Contact  />
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu  />
      },

    ]
  }
  

])



export default App;
