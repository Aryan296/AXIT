import { useState, useEffect } from "react";
import axios from "axios";
export default function Pricing(){
  const [pkgData, setpkgData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:8080/getpkgData').then(response => {
        setpkgData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
    return(
      <div className='section p-3'>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 s5head">
              <h1 className="section-name">Pricing Options</h1>
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row p-3">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 s5head"> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p></div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row">
            <div className="col-sm-4 mt-5">
              <div className="card">
                <div className="head">
                <h3 className="p-banner">{pkgData.length > 0 ? pkgData[0].pkgName : 'Net Problem'}</h3>
                  <h1 className="price"><sub>$</sub>{pkgData.length > 0 ? pkgData[0].price : 'Net Problem'}<br /><p className="price-desription">{pkgData.length > 0 ? pkgData[0].validity : 'Net Problem'}</p></h1> 
                </div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[0].space : 'Net Problem'} of space</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[0].bandwidth : 'Net Problem'} of bandwidth</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[0].websiteNum : 'Net Problem'} websites</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[0].Custom : 'Net Problem'} customization</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[0].WordInt : 'Net Problem'}</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[0].support : 'Net Problem'}</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="head">
                  <h3 className="p-banner">{pkgData.length > 0 ? pkgData[1].pkgName : 'Net Problem'}</h3>
                  <h1 className="price"><sub>$</sub>{pkgData.length > 0 ? pkgData[1].price : 'Net Problem'}<br /><p className="price-desription">{pkgData.length > 0 ? pkgData[1].validity : 'Net Problem'} Payment</p></h1> 
                </div>
                <div className="card-body p-module text-light"><b>our most popular</b> </div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[1].space : 'Net Problem'} of space</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[1].bandwidth : 'Net Problem'} of bandwidth</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[1].websiteNum : 'Net Problem'} websites</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[1].Custom : 'Net Problem'} customization</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[1].WordInt : 'Net Problem'}</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[1].support : 'Net Problem'}</div>
              </div>
            </div>
            <div className="col-sm-4 mt-5">
              <div className="card">
                <div className="head">
                  <h3 className="p-banner">{pkgData.length > 0 ? pkgData[2].pkgName : 'Net Problem'}</h3>
                  <h1 className="price"><sub>$</sub>{pkgData.length > 0 ? pkgData[2].price : 'Net Problem'}<br /><p className="price-desription">{pkgData.length > 0 ? pkgData[2].validity : 'Net Problem'} Payment</p></h1> 
                </div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[2].space : 'Net Problem'} space</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[2].bandwidth : 'Net Problem'} bandwidth</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[2].websiteNum : 'Net Problem'} websites</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[2].Custom : 'Net Problem'} customization</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[2].WordInt : 'Net Problem'}</div>
                <div className="card-body p-table">{pkgData.length > 0 ? pkgData[2].support : 'Net Problem'}</div>
              </div>
            </div>
          </div>
      </div>
    )
}