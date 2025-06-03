// src/components/Authentication.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { MdOutlineModeEditOutline } from "react-icons/md";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import './index.css';


const MeteorSky = () => {
  const meteors = Array.from({ length: 50 }, (_, index) => {
    const left = Math.random() * 100;  // percentage across width
    const top = Math.random() * 30;    // top 30% of screen
    const size = Math.random() * 2 + 1; // size between 1-3px
    return (
      <div
        key={index}
        className="meteor"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    );
  });

  return (
    <div className="meteor-sky">
      {meteors}
    </div>
  );
};
const RainAnimation = () => {
  return (
    <div className="rain-container">
      {Array.from({ length: 50 }).map((_, i) => (
        <div className="raindrop" key={i} style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}></div>
      ))}
    </div>
  );
};
const DeadpoolTheme = () => {
  return (
    <div id="deadpool">
      <RainAnimation />
      <div className="deadpool">
        <img
          src="https://i.postimg.cc/kX3M4Rfq/deadpool-scooty.png"
          alt="Deadpool riding"
          style={{ height: '100%' }}
        />
      </div>
      <div className="avengers-logo">
        <img
          src="https://i.postimg.cc/tTjtdg2n/deadpool-logo.png"
          alt="logo"
          style={{ height: '100%', width: '400px', opacity: '0.7' }}
        />
      </div>

    </div>
  )
}

const Avengers = () => {
  return (
    <div>
      <MeteorSky />
      <img src="https://i.postimg.cc/6Q5R1gZM/ironman-flying.png" alt="ironman" className='ironman' />
      <img src="https://i.postimg.cc/SN9PGyw7/starc-tower.png" alt="starctower" className='starc-tower' />
      <img src="https://i.postimg.cc/7Z4SSfZ8/captain-A.png" alt="Cap" className='cap' />
      <img src="https://i.postimg.cc/R0sfrdQ4/thor-flying.png" alt="Thor" className='thor' />
      <img src="https://i.postimg.cc/tgBts4pt/blackwidow.png" alt="blackwidow" className='blackwidow' />
      <img src="https://i.postimg.cc/RFq1Kx0r/huwkeye.png" alt="hawkeye" className='hawkeye' />
      <img src="https://i.postimg.cc/wvPXk4t1/hulk.png" alt="hulk" className='hulk' />
      <div className="avengers-logo">
        <img
          src="https://i.postimg.cc/XJvnmjzp/avengers-logo.png"
          alt="logo"
        />
      </div>


    </div>
  )
}
const SpidermanTheme = () => {
  return (
    <div>
      <img src="https://i.postimg.cc/765zqzm7/spdey-on-wall.png" alt="Spidey1" className='spideyonWall' />
      <img src="https://i.postimg.cc/ZnN3Z1Z6/spiderman-hanged.png" alt="Spidey2" className='spideyhang' />
      <img src="https://i.postimg.cc/5NKFtqjy/web.png" alt="WEB" className='web' />
      <img src="https://i.postimg.cc/ht06xvWX/spidey-villan.png" alt="villan" className='villan' />
      <img src="https://i.postimg.cc/tgCfzbp2/miles-morales.png" alt="miles" className='miles' />
      <img src="https://i.postimg.cc/tgZdbv59/gwen.png" alt="gwen" className='gwen' />
      <img src="https://i.postimg.cc/QdBKK9Wb/web2.png" alt="web" className='web2' />
      <img src="https://i.postimg.cc/QdBKK9Wb/web2.png" alt="web" className='web3' />
      <img src="https://i.postimg.cc/jS1ZVZ2K/web4.png" alt="web" className='web4' />
    </div>
  )
}


const Authentication = () => {
  const [index, setIndex] = useState(1);
  const [register, setRegister] = useState("no")

  const Register = () => {
    if (register === "no") {
      setRegister("yes")
    }
    else {
      setRegister("no")
    }

  }

  const [email, setEmail] = useState('');
  const [Error, setError] = useState("False")
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const themes = ["avengers", "deadpool", "spiderman"];

  const randomTheme = themes[index];
  let background = "";
  let imageURL = "";
  let themeComponent;
  let button = "";
  let authContainer = "";
  let bg = ""

  switch (randomTheme) {
    case "avengers":
      imageURL = "https://i.postimg.cc/1X3ytsTh/logo-2.png"; // add your desired image path
      themeComponent = <Avengers />;
      button = "avengers-btn"
      authContainer = "auth-container-bg-avengers"
      bg = "bg-avengers-theme"
      break;

    case "deadpool":
      imageURL = "https://i.postimg.cc/wTKPNQKW/deadpool-love-2.png"; // add your desired image path
      themeComponent = <DeadpoolTheme />;
      button = "deadpool-btn"
      authContainer = "auth-container-bg-deadpool"
      bg = "bg-deadpool-theme"
      break;

    case "spiderman":
      imageURL = "https://i.postimg.cc/mgHhp0Bs/1748006484974-fotor-bg-remover-2025052318527.png"; // add your desired image path
      themeComponent = <SpidermanTheme />;
      button = "spidey-btn"
      authContainer = "auth-container-bg-sptheme"
      bg = "bg-spiderman-theme"
      break;


    default:
      background = "linear-gradient(135deg, #A30000, #3A3A3A)"; // add your desired image path
      imageURL = "https://i.postimg.cc/wTKPNQKW/deadpool-love-2.png"; // add your desired image path
      themeComponent = <DeadpoolTheme />;
      button = "#3A3A3A"
      break;
  }
  // Then you can use
  const signUp = async () => {
    if (name === '') {
      setError("True")
    }
    else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('User created!');
      } catch (err) {
        alert(err.message);
      }
    }

  };
  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/'); // 👈 Redirect to Home
    } catch (err) {
      alert(err.message);
    }
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Return corrected JSX here
  if (user) return null; // Prevent showing the login screen if already logged in

  const ChangeTheme = ({ changetheme }) => {
    return (
      <div className="theme-selector">
        <button className="change-theme-button" onClick={changetheme}>
          <span className="spanText">Change Theme</span>
          <MdOutlineModeEditOutline className="changeThemeIcon" />

        </button>
      </div>
    );
  };

  const ChangingTheme = () => {
    setIndex((prevIndex) => (prevIndex >= 2 ? 0 : prevIndex + 1));
    console.log('New index:', index);
    // Add logic here to actually change the theme based on index
  };

  return (
    <div className={`login-page ${bg}`} >
      {themeComponent}
      <ChangeTheme changetheme={ChangingTheme} />
      <div className={`auth-container ${authContainer} `}>

        <div className="auth-left-panel">
          <div className='text-center'>
            <h1 className='log-heading '>Hello, welcome!</h1>
            <p className=''>Step into a universe of heroes, villains, and epic tales — your Marvel journey begins now.</p>
          </div>
          <img src={imageURL} alt="" className='leftpanel-img' />
        </div>

        <div className="auth-right-panel">
          {register === "yes" ?
            <input
              type="text"
              placeholder="User Name"          
              onChange={(e) => setName(e.target.value)}
              className="auth-input"
            /> : null}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
          {Error === "True" ? <span className='text-red-600 text-sm '>**Please Fill all mandatory feilds</span> : null}
          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <div className="auth-button-group">
            {register == "no" ? <button onClick={logIn} className={`login-btns ${button}`} >Login</button> : <button onClick={signUp} className={`login-btns ${button}`} >Sign up</button>}
            {register == "no" ? <button onClick={Register} className={`login-btns ${button}`} >Register</button> : <button onClick={Register} className={`login-btns ${button}`} >Login</button>}
          </div>

          <div className="social-login flex flex-col items-center">
            <p>FOLLOW</p>
            <div className="flex flex-row gap-4 justify-centeritems-center">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" className='icons' />
              <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" className='icons' />
              <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" className='icons' />
            </div>
          </div>
        </div>

      </div>

    </div>

  );
};

export default Authentication;
