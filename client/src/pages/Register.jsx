import {useState, useEffect} from 'react'

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleEmail = (e) =>{
        setEmail(e.target.email.value);
        console.log(email)
    }

    const submitForm = (e) =>{
        e.preventDefault();
        // const data = {...name, email, password,password2}
        // console.log(data);
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
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
            </div>
            <div className="input-group">
                <input type="email" 
                    placeholder='Email'
                    name="email" 
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
            </div>
            <div className="input-group">
                <input type="password" 
                    placeholder='Password'
                    name="password"
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
            </div>
            <div className="input-group">
                <input type="password" 
                    placeholder='Confirm password'
                    name="password2" 
                    required
                    value={password2}
                    onChange={(e)=>setPassword2(e.target.value)}
                    />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register