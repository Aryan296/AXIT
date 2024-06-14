import { useState, useEffect } from "react";
import axios from "axios";
export default function Review(){
  const [Reviews, setReview] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8080/getReview').then(response => {
        setReview(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
    return(
      <div>
        <div className='section p-3'>
          <div className="row">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8 s5head">
                <h1 className="section-name s6">WHAT OUR CUSTOMER ARE SAYING</h1>
              </div>
              <div className="col-sm-2"></div>
            </div>
            <div className="row p-3">
              <div className="col-sm-2"></div>
              <div className="col-sm-8 s5head"> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p></div>
              <div className="col-sm-2"></div>
            </div>
            <div className="row">
            {Reviews.map(reviews => (
              <div className="col-sm-4">
                <div className="card">
                  <div className="description">
                    <p>{reviews.review}
                    </p>
                  </div>
                  <div className="card-body">
                    <h4><img src={require("../images/avatar_2_u231.png")} alt="..." className="img-fluid" />Jeremy H.</h4>
                  </div>
                </div>
              </div>
               ))}
              {/* <div className="col-sm-4">
                <div className="card">
                  <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.
                    </p>
                  </div>
                  <div className="card-body">
                    <h4><img src={require("../images/avatar_2_u231.png")} alt="..." className="img-fluid" />John S.</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.
                    </p>
                  </div>
                  <div className="card-body">
                    <h4><img src={require("../images/avatar_2_u231.png")} alt="..." className="img-fluid" />Susan W.</h4>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className='section'>
          <div className="row">
            <div className="s7 p-4">
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 s5head">
                  <h1 className="section-name s6">STYLISH ANEXURE DESIGN</h1>
                </div>
                <div className="col-sm-2"></div>
              </div>
              <div className="row p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 s5head"> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p></div>
                <div className="col-sm-2"></div>
              </div>
              <div className="row">
                <div className="col-sm-5"></div>
                <div className="col-sm-2"><div className="cta-btn">Download</div></div>
                <div className="col-sm-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    )
}