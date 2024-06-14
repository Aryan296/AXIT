export default function Features(){
    return(
      <div>
        <div className='section'>
        <div className="socialmedia">
            <div className="row content p-3">
              <div className="col-sm-4">
                <div className="socialmedia-text">
                  <h2>Social media</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="social-btn"><i className="fa  fa-facebook"></i></div>
                <div className="social-btn"><i className="fa  fa-twitter"></i></div>
                <div className="social-btn"><i className="fa  fa-google-plus"></i></div>
                <div className="social-btn"><i className="fa  fa-pinterest"></i></div>
                <div className="social-btn"><i className="fa  fa-instagram"></i></div>
                <div className="social-btn"><i className="fa  fa-stumbleupon"></i></div>
                <div className="social-btn"><i className="fa  fa-rss"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className='section p-5'>
          <div className="row">
            <div className="col-sm-3">
              <nav className="navbar bg-light">
                <div className="container-fluid">
                  <div className="cell"><b>TAB 1</b></div>
                </div>
              </nav>
              
              <nav className="navbar bg-light">
                <div className="container-fluid">
                  <div className="cell1"><b>TAB 2</b></div>
                </div>
              </nav>
              <nav className="navbar bg-light">
                <div className="container-fluid">
                  <div className="cell1"><b>TAB 3</b></div>
                </div>
              </nav>
            </div>
            <div className="col-sm-5">
              <h2>Tabs with soft transitioning effect.</h2>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De 
                Finibus<br/> Bonorum et Malorum
              </p>
              <button type="button" className="button">Download</button>
            </div>
            <div className="col-sm-4">
              <img className="img-fluid" src={require("../images/image_right_u255.png")} alt="..."/>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className="data row p-3 m-5">
            <div className="pic-data col-sm-5 mt-4"></div>
            <div className="col-sm-2"></div>
            <div className="sub-list col-sm-5">
              <h2 className="section-name"> Sub list selection</h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>

              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>

              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className="data row p-5 m-5">
              <div className="sub-list col-sm-4 mt-5">
                <h2 className="section-name"> Standard Picture selection</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
              </div>
              <div className="col-sm-3"></div>
              <div className="pic-data2 col-sm-5"></div>
          </div>
        </div>
      </div>

    )
}