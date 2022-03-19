import {useState, useEffect} from 'react'

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
  return (
    <div className='register'>
        <h1>Register</h1>
        <p>Welcome please create new account</p>
        <form className='form'>
            <div className="input-group">
                <input type="text" 
                    placeholder='Name'
                    name="name"/>
            </div>
            <div className="input-group">
                <input type="email" 
                    placeholder='Email'
                    name="email"/>
            </div>
            <div className="input-group">
                <input type="password" 
                    placeholder='Password'
                    name="password"/>
            </div>
            <div className="input-group">
                <input type="password" 
                    placeholder='Confirm password'
                    name="password2"/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register