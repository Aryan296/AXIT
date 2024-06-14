import axios from "axios";
import { useState } from "react";
export default function Contact(){
  const [empdata, setEmpData] = useState({name:"",email:"",sub:"",msg:""});
    function sendData(){
        axios.post("http://localhost:8080/contactus",empdata).then(response=>{
            if(response.status===200){
                let d = response.data;
                alert(d.msg);
            }
        })
        .catch((error) => {
          if (error && error.response && error.response.status === 400) {
              // Handle status code 400 (Bad Request)
              alert("One issue already in queue, pllease wait for it to be resolved to put another request.");
          }
          else{
              console.error('Credentials error:', error);
              alert('Request failed, Credentials error');
          }
        });
    }
    return(
        <div className="section mt-5 p-5 s9" style={{background:"#ffffff"}}>
            <div className="row">
              <div className="col-sm-5"></div>
              <div className="col-sm-2 s5head">
                <h1 className="section-name s6">CONTACT</h1>
              </div>
              <div className="col-sm-5"></div>
            </div>
            <div className="row p-3">
              <div className="col-sm-3"></div>
              <div className="col-sm-6 s5head"> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p></div>
              <div className="col-sm-3"></div>
            </div>
            <form onSubmit={sendData}>
              <div className="row">
                <div className="col-sm-6 contact-details">
                  <input placeholder="Name" onChange={e=>setEmpData({...empdata,name:e.target.value})}/>
                  <input placeholder="Email" onChange={e=>setEmpData({...empdata,email:e.target.value})}/>
                  <input placeholder="Subject" onChange={e=>setEmpData({...empdata,sub:e.target.value})}/>
                </div>
                <div className="col-sm-6 contact-message">
                  <textarea placeholder="Message" onChange={e=>setEmpData({...empdata,msg:e.target.value})}/>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-sm-5"></div>
                <div className="col-sm-2"><button type="submit" className="button">Submit</button></div>
                <div className="col-sm-5"></div>
              </div>
            </form>
          </div>
    )
}