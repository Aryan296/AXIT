import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Home from './Components/Home';
import Features from './Components/Features';
import About from './Components/about';
import Pricing from './Components/pricing';
import Review from './Components/Review';
import Contact from './Components/Contact';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function App() {
  const [btnstatus, setBtnStatus] = useState(true);
  const [empdata, setEmpData] = useState({ fname:'',lname:'',uname: '', email: '', pass: '' });
  const [logdata, setLogData] = useState({uname:'',pass:''});
  const [serverMsg, setServerMsg] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
  
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogin = () => {
    axios.post('http://localhost:8080/checklogin', logdata).then((response) => {
        console.log('Login successful');
        setBtnStatus(!btnstatus);
        setIsLoggedIn(true);
        setServerMsg(response.data.msg);
        localStorage.setItem('userToken', response.data.token); // assuming a token is returned
      })
      .catch((error) => {
        console.error('Login error:', error);
        setServerMsg('Login failed. Please check your credentials.');
      });
  };
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };
  
    

  const handleSignup = () => {
    axios.post('http://localhost:8080/adduser', empdata).then((response) => {
        if (response.status === 200) {
          let d = response.data;
          setServerMsg(d.msg);
          console.log('successfull');
        }
        else {
          setServerMsg('Page not found');
        }
      })
      .catch((error) => {
        if (error && error.response && error.response.status === 400) {
            alert("User already exist, please login to continue");
        }
        else{
            console.error('Signup error:', error);
            setServerMsg('Signup failed. Please try again.');
        }
      });
  };  
  useEffect(() => {
    if (serverMsg) {
      alert(serverMsg);
    }
  }, [serverMsg]);
  const handleLoginClick = () => {
    handleLogin();
  };

  const handleSignupClick = () => {
    handleSignup();
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className="body">
          <div className="mainpage">
            <input type="checkbox" className="input" id="chk" aria-hidden="true" />

            <div className="signup">
              <form onSubmit={handleSignupClick}>
                <label className="label" htmlFor="chk" aria-hidden="true">
                  Sign up
                </label>
                <input
                  id="input"
                  type="text"
                  name="fname"
                  placeholder="First name"
                  required=""
                  onChange={(e) => setEmpData({ ...empdata, fname: e.target.value })}
                />
                <input
                  id="input"
                  type="text"
                  name="lname"
                  placeholder="Last name"
                  required=""
                  onChange={(e) => setEmpData({ ...empdata, lname: e.target.value })}
                />
                <input
                  id="input"
                  type="text"
                  name="uname"
                  placeholder="User name"
                  required=""
                  onChange={(e) => setEmpData({ ...empdata, uname: e.target.value })}
                />
                <input
                  id="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  onChange={(e) => setEmpData({ ...empdata, email: e.target.value })}
                />
                <input
                  id="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                  onChange={(e) => setEmpData({ ...empdata, pass: e.target.value })}
                />
                <button id="btnlog" type="submit" >
                  Sign up
                </button>
              </form>
            </div>

            <div className="login">
              <form>
                <label className="label" htmlFor="chk" aria-hidden="true">
                  Login
                </label>
                <input
                  id="input" type="text" name="uname" placeholder="Username" required=""
                  onChange={(e) => setLogData({ ...logdata, uname: e.target.value })}
                />
                <input
                  id="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                  onChange={(e) => setLogData({ ...logdata, pass: e.target.value })}
                />
                <button id="btnlog" type="button" onClick={handleLoginClick}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
      <Router>
      <div className="container-fluid g-0">
        <div>
          <div className="row">
          <nav className="nav navbar navbar-dark navbar-expand-lg bg-body-dark">
                  <div className="container-fluid">
                    <div className="navbar-brand logo col-sm-2"><Link style={{textDecoration: 'none',marginLeft:"30px"}} to={"/Home"}><span className="ax">AX</span><span className="it">IT</span></Link></div>
                    <div className="col-sm-5"></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span id="navbar-toggle_icon" className="navbar-toggler-icon my-toggler" />
                    </button>
                    <div className="collapse navbar-collapse col-sm-5" id="navbarNav">
                      <ul className="navbar-nav menu col-sm-10">
                        <li className="nav-item">
                          <Link className="nav-link" to={"/Feature"}>Features</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/About"}>About</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/Pricing"}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/Review"}>Review</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/Contact"}>Contact</Link>
                        </li>
                        <li className="nav-item">
                        <button className="nav-link" onClick={handleLogout}>Logout</button>
                        </li>
                      </ul>
                    </div>
                  </div>
              </nav>
          </div>
        </div>
      <section className='row'>
          <Routes >
            <Route exact path='/Home' element={<Home />} />
            <Route exact path='/Feature' element={<Features />} />
            <Route exact path='/About' element={<About />}/>
            <Route exact path='/Pricing' element={<Pricing />}/>
            <Route exact path='/Review' element={<Review />}/>
            <Route exact path='/Contact' element={<Contact />}/>
          </Routes>
        </section>
      </div>
    </Router>
      )}
    </>
  );
}

