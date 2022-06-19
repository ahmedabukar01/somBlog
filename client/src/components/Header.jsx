

const Header = () => {
  return (
    <div className='header'>
        <h1>Somblogs</h1>
        <div className="links">
          <a href={'/register'} >Register</a>
          <a to={'/login'}>Sig in</a>
        </div>
    </div>
  )
}

export default Header