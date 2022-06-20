import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <h1><a href="/">SomSite</a></h1>
        <div className="links">
          <Link to={'/register'} >Register</Link>
          <Link to={'/login'}>Sig in</Link>
        </div>
    </div>
  )
}

export default Header