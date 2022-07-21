import {Link} from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='header'>
        <h1><a href="/">SomSite</a></h1>
        <div className="links">
          {!user ? <>
            <Link to={'/register'} >Register</Link>
            <Link to={'/login'}>Sig in</Link>
            </>: (
            <Link to={'/logout'}>Logout</Link>
          )}
        </div>
    </div>
  )
}

export default Header