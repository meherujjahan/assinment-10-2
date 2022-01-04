import React from 'react';
import "./Banner.css"


const Banner = () => {
    return (
        <div>
            <div className="row d-flex header align-items-center justify-content-center">
                <div className="col-md-7">
                    <h3 className="company-title ms-5 ps-5">
                        Welcome to <span className="company-name">Central Hospital</span>

                    </h3>
                    <h5 className="text-white  mt-3 ms-5 ps-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </h5>
                </div>

            </div>
        </div>
    );
};

export default Banner;