import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword
   ,sendEmailVerification,sendPasswordResetEmail,updateProfile} from "firebase/auth";
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Login.css';





const Login = () => {
  const [name,setName]=useState('');
  const[email,setEmail]=useState('');
  const [password,setPasword]=useState('');
  const [error,setError]=useState('');
  const [isLogin,setIsLogin]=useState(false);
  const auth = getAuth();
  const{signInUsingGoogle}=useAuth();
  const location=useLocation();
  const history=useHistory();
  const redirect_uri=location.state?.from||'/home';
  const handleGoogleLogin=()=>{
    signInUsingGoogle()
      .then(result=>{
        history.push(redirect_uri);

    })

  }
      const toggleLogin=e=>{
        setIsLogin(e.target.checked)
      }
      const handleNameChange=e=>{
        setName(e.target.value);
      }

     const handleEmailChange=e=>{
       setEmail(e.target.value)
     }
 
     const handlePasswordlChange=e=>{
       setPasword(e.target.value)
     }
 


  const handleRegistratiion=(e)=>{
    e.preventDefault();
    console.log(email,password);

    if(password.length<6){
      setError('password must be 6 charactar long')
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setError('password must contain 2 upper case');
        return;
    }
     if(isLogin) {
       processLogin(email,password);
     }
     else{
       registerNewUser(email,password);
     }

  
  }

  const processLogin=(email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      setError('');
    })
    .catch(error=>{
      setError(error.message);
    })
  }


    const registerNewUser=(email,password)=>{
          createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const user =result.user;
      console.log(user);
      setError('');
      verifyEmail();
      setUserName();
    })
    .catch(error=>{
      setError(error.message)
    })
    }

    const setUserName=()=>{
      updateProfile(auth.currentUser,{displayName:name})
      .then(result=>{})
    }

    const verifyEmail=()=>{
      sendEmailVerification(auth.currentUser)
      .then(result=>{
        
      })
    }

      const handleResetPassword=()=>{
        sendPasswordResetEmail(auth,email)
        .then(result=>{ })
      }

  
    return (
        <div className="login-form">
            <div>
           <Form onSubmit={handleRegistratiion}>
               <h2 style={{color:"cadetblue"}}>Please {isLogin?'Login' : 'register'}</h2>
                
                 {!isLogin && <Form.Group className="mb-3" id="inlineFormInputGroupUsername">
                         <Form.Label>user name</Form.Label>
                         <Form.Control onBlur={handleNameChange}
                           required
                           type="text"
                           placeholder="user name"
                         />
                       </Form.Group>}
                             <Form.Group  className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                    
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordlChange} type="password" placeholder="Password" required/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={toggleLogin} type="checkbox" label="All Ready Registerd?" />
                      </Form.Group>
                      <div className="text-danger">{error}</div>
                      <Button onClick={handleRegistratiion} variant="warning" type="submit">
                       {isLogin?'Login':'Register'}
                      </Button><br/><br/>
                      <Button onClick={handleResetPassword} variant="secondary" type="submit">
                       Reset password
                      </Button>
                     </Form>
                
                <div>-------or-------</div>
                <Button onClick={handleGoogleLogin} variant="success" type="submit">
                  Google sign in
                 </Button></div>
        </div>
    );
};

export default Login;