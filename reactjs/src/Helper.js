import React from 'react';

 const Helper = (props) => {
    return (
        <div>
             <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name"> Kamran Zeynalli </strong>
                  </h1>
                  <h2 className="my-3">
                      Entrepreneur.
                  </h2>
                 
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgSrc} alt="Photo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Helper;