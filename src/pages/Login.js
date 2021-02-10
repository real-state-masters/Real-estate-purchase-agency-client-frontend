import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/login'

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.login)

    console.log(data);
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(login({ username, password }));
      }
    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            id="username" 
            value={username}
            onChange={({ target }) => setUsername(target.value)}/>

            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={({ target }) => setPassword(target.value)}/>
            <button onClick={handleSubmit}>Enviar</button>
        </form>
    )
}

export default Login
