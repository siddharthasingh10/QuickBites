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
    return (
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  }
  export default Header;