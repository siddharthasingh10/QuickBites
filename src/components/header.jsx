import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
      <div className='header'>
        <Title />
        <NavItems />
      </div>
    );
  }
  
  function Title() {
    return (
      <a href='/'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPlQNFCCT_qqTb7ifS-C-nb0D-FnF_Iqk2Q&s'
          alt='logo'
          className='logo'
        />
      </a>
    );
  }
  
  function NavItems() {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (
      <div className='nav-items'>
        <ul>
          <li><Link  to='/'  className="nav-link">Home</Link></li>
          <li> <Link to='/about'  className="nav-link">About</Link></li>
          <li> <Link to='/contact'  className="nav-link">Contact</Link></li>
          
          <li>Cart</li>
          { isLoggedIn ?
           <li onClick={()=>setIsLoggedIn(false)} >Logout</li>
           :<li  onClick={()=>setIsLoggedIn(true)}>Login</li>}
        </ul>
      </div>
    );
  }
  export default Header;