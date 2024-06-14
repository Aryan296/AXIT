export default function About(){
    return(
      <div className='section p-5'>
        <div className="row">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8 s5head">
                <h1 className="section-name">Why this is awesome </h1>
              </div>
              <div className="col-sm-2"></div>
            </div>
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8 s5head"> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p></div>
              <div className="col-sm-2"></div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-4 s5head">
                <div className="b-img p-3"><img src={require("../images/bulb.png")} className="img-fluid" alt="..." /></div>
                <h2>Thoughtful Design</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.</p>
              </div>
              <div className="col-sm-4 s5head">
                <div className="b-img p-3"><img src={require("../images/keyboard.png")} className="img-fluid" alt="..." /></div>
                <h2>Well Crafted</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.</p>
              </div>
              <div className="col-sm-4 s5head">
                <div className="b-img p-3"><img src={require("../images/bolt.png")}className="img-fluid" alt="..." /></div>
                <h2>Easy to Customize</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.</p>
              </div>
            </div>
        </div>
      </div>
    )
}