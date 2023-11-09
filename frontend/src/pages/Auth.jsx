import styles from "../styles/authComponents/Auth.module.scss";
import MainContainer from "../components/Containers/MainContainer";
import { Title } from "../components/Titles/Titles";
import {useState, useEffect} from 'react';


const Auth = () => {
  //login
    const [email, setEmail]=useState("");
    const [pw, setPw]=useState("");
    //register
    const [regEmail, setRegEmail]=useState("");
    const [regPw, setRegPw]=useState("");

  return (
    <MainContainer>
{/* login */}

    <form action="submit" onSubmit={e=> e.preventDefault()}>
      <div className={styles.container}>
        <Title>Login</Title>
        <span>Email: </span>
        <input type="email" autoComplete="username" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <span>PAssword: </span>
        <input type="password" onChange={(e)=>setPw(e.target.value)} value={pw} autoComplete="password"/>

        <button>Login NOW</button>
      </div>
      </form>

      {/* REGISTER FORM */}
      <form action="submit" onSubmit={(e)=>e.preventDefault()} className={styles.registerFrom}>

       <div className={styles.container}>
        <Title>Register</Title>
        <span>Email:</span>
        <input type="email" onChange={(e)=>setRegEmail(e.target.value)} value={regEmail} autoComplete="email"/>
        <span>Password</span>
        <input type="password" onChange={(e)=>setRegPw(e.target.value)} value={regPw} autoComplete="new-password"/> 
        <button>Register now</button>
       </div>
      </form>
      
    

    </MainContainer>
  )
}
 
export default Auth