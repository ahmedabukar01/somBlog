import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

const Header = () => {

  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(()=>{
    user = JSON.parse(localStorage.getItem('user'))
  },[user])

  return (
    <div className='header'>
        <h1><a href="/">SomSite</a></h1>
        <div className="links">
          {!user ? <>
            <Link to={'/register'} >Register</Link>
            <Link to={'/login'}>Sig in</Link>
            </>: (
            <Button variant='secondary'>Logout</Button>
          )}
        </div>
    </div>
  )
}

export default Header