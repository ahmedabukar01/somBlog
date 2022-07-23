import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(()=>{
    user = JSON.parse(localStorage.getItem('user'))
  },[user]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () =>{
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }

  return (
    <div className='header'>
        <h1><a href="/">SomSite</a></h1>
        <div className="links">
          {!user ? <>
            <Link to={'/register'} >Register</Link>
            <Link to={'/login'}>Sig in</Link>
            </>: (
            <Button variant='secondary' onClick={onLogout}>Logout</Button>
          )}
        </div>
    </div>
  )
}

export default Header