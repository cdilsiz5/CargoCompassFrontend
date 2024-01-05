import React, { useEffect, useState } from "react";
import Input from '../../Components/Input/Input';
import heroBanner from '../../Components/Assets/hero-banner.jpg'
import {Navbar} from '../../Components/Navbar/Navbar'
import {Footer} from '../../Components/Footer/Footer'
const Login = (props) => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  useEffect(() => {
    setErrorMessage(undefined);
  }, [userEmail, userPassword]);

  const onClickLogin = async (event) => {
    // event.preventDefault();
    // const { history, dispatch } = props;
    // const { push } = history;

    // const creds = {
    //   userEmail,
    //   userPassword,
    // };
    // setErrorMessage(undefined);
    // try {
    //   await dispatch(loginHandler(creds));
    //   push("/");
    // } catch (apiError) {
    //   setErrorMessage(true);
    // }
  };
  const buttonEnabled = userEmail && userPassword;

  return (
    <div >
      <section style={{ backgroundImage: `url(${heroBanner})`}}>
      <Navbar></Navbar>
      <div className="loginForm" style={{display:'flow-root'}}>
      <form className="form-group" style={{marginTop:'200px',marginBottom:'150px'}} >
        < h1 className="text-center">Login</h1>
          <Input label="Email" name="userEmail" type="text" onChange={(event) => { setUserEmail(event.target.value); }}></Input>
          <Input label="Password" name="userPassword" type="password"onChange={(event) => {setUserPassword(event.target.value);}}></Input>
          {errorMessage && (<div className="alert alert-danger" role="alert">Wrong Email Or Password</div>)}
          <button  disabled={!buttonEnabled}  className="btn"onClick={onClickLogin}>Login</button>
      </form>
      </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
export default Login;
