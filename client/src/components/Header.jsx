import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1>Somblogs</h1>
        <div className="links">
          <a href="/register" >Register</a>
          <a href='/login'>Sig in</a>
        </div>
    </div>
  )
}

export default Header