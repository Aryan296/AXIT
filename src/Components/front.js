import axios from "axios";
import { useState } from "react";
export default function Front(){
    const [empdata, setEmpData] = useState({name:"",email:"",pass:""});
    function sendData(){
        axios.post("http://localhost:8080/checktrial",empdata).then(response=>{
            if(response.status===200){
                let d = response.data;
                alert(d.msg);
            }
            else{
                alert('Error occurred while buying the trial, please try again');
            }
        })
        .catch((error) => {
            console.error('Error occurred');
            alert("Please check your credentials");
          });
    }
    return(
        <div className='row'>
            <div className="banner p-5">
                <div className="left_ban col-sm-6">
                    <div className="ban_txt_container">
                        <div className="axit"><span className="ax">ax</span><span className="it">it</span></div>
                        <h1 className="section-name">Modern Axure template for beautiful prototypes</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                        <div className="cta-btn">Download</div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
                <div className="right_ban col-sm-3 p-3">
                    <form className="cta-box" onSubmit={sendData}>
                        <div className="cta-box-head">
                            <h4> Try Your <span>free</span> Trial Today </h4>
                        </div>
                        <div className="cta-box-content">
                            <input placeholder="Name" onChange={e=>setEmpData({...empdata,name:e.target.value})}/>
                            <input placeholder="Email" onChange={e=>setEmpData({...empdata,email:e.target.value})}/>
                            <input placeholder="Password" type="password" onChange={e=>setEmpData({...empdata,pass:e.target.value})}/>
                        </div>
                        <div className="cta-box-btn pt-3">
                            <input className="button" type="submit" value="Get Started" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}