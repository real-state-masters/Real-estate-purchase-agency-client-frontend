import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import firebase from '../../Firebase/firebase'

const SignUp = () => {
    const auth = firebase.auth();
    const db = firebase.firestore();
     // update firestore settings
    db.settings({timestampsInSnapshots:true});

     const signUpFetch = function fetchFormSignUp(token) {
        return fetch("https://real-estate-client-api.herokuapp.com/sign-up", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
        }, 
        })
        .then((response) => response.text())
        .then((data) => {
        console.log(data);
        })
        .catch((error) => console.log(error));
    }


    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');



    function handleSubmit (e){
        e.preventDefault();

         auth.createUserWithEmailAndPassword(email, password)
         .then((cred) => {
             console.log(cred.user);
             return cred.user.uid;
         })
         .then((firebaseUID) => {
            auth.currentUser.getIdToken().then((token) => {
            console.log(token)
            signUpFetch(token);
            });    
        });

    }


    return(
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={({target}) =>setEmail(target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={({target}) =>setPassword(target.value)}/>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered log in?
            </p>
        </form>
    )
}

export default SignUp
