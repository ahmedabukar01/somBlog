import {useState, useEffect} from 'react'

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const submitForm = (e) =>{
        e.preventDefault();

        console.log(e.target.name.value)

        // setData({
        //     name: e.target.name.value,
        //     email: e.target.email.value,
        //     password: e.target.password.value,
        //     password2: e.target.name.value,
        // })
        // console.log(data)
    }
  return (
    <div className='register'>
        <h1>Register</h1>
        <p>Welcome please create new account</p>
        <form className='form' onSubmit={submitForm}>
            <div className="input-group">
                <input type="text" 
                    placeholder='Name'
                    name="name"
                    required/>
            </div>
            <div className="input-group">
                <input type="email" 
                    placeholder='Email'
                    name="email" required/>
            </div>
            <div className="input-group">
                <input type="password" 
                    placeholder='Password'
                    name="password" required/>
            </div>
            <div className="input-group">
                <input type="password" 
                    placeholder='Confirm password'
                    name="password2" required/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register