
import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import firebase from '../../Firebase/firebase'
import {useSelector, useDispatch} from 'react-redux'
import { logUser } from '../../store/login'



const Login = () => {   
    let dispatch = useDispatch();

    const auth = firebase.auth();
     const db = firebase.firestore();
     // update firestore settings
     db.settings({timestampsInSnapshots:true});

     const [email, setEmail] = React.useState('');
     const [password, setPassword] = React.useState('');


    function handleSubmit(e){
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            console.log(cred);
            auth.currentUser
            .getIdToken()
            .then((token) => {
                dispatch(logUser())
                localStorage.setItem('token', token)
                console.log(token)
            });
        });
    
    }

    // if (connected === "true") {
    //     return <Redirect to='/dashboard' />;
    // }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={({target}) => setEmail(target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={({target}) => setPassword(target.value)}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className="forgot-password text-right">
                Forgot <Link to="/">password?</Link>
            </p>
        </form>
        <button>
            <Link to="/">
                Home
            </Link>
        </button>
        </>

    )
}

export default Login