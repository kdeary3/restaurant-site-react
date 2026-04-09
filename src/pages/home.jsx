import React from 'react';
import logo from '../../public/images/logo.png';
import img1 from '../../public/images/img1.jpg';
import img2 from '../../public/images/img2.jpg';


const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                        <a href="/">
                            <img
                                src='/images/menu_item_images/placeholder.png'
                                className="img-fluid"
                                alt="Steaming Bulldog logo"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-sm-10 text-center">
                        <h1>The Steaming Bulldog KBBQ</h1>
                        <h2>"Engineered for Flavor"</h2>

                        <div className="container mb-3">
                            <img
                                src={img1}
                                className="img-border img-fluid"
                                alt="KBBQ Dinner"
                                style={{ maxWidth: '500px' }}
                            />
                        </div>

                        <div className="container">
                            <img
                                src={img2}
                                className="img-border img-fluid"
                                alt="KBBQ Dinner 2"
                                style={{ maxWidth: '500px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;