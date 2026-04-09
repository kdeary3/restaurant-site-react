import React from 'react';

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                        <a href="/">
                            <img
                                src="/images/logo.png"
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
                                src='/images/img1.jpg'
                                className="img-border img-fluid"
                                alt="KBBQ Dinner"
                                style={{ maxWidth: '500px' }}
                            />
                        </div>

                        <div className="container">
                            <img
                                src='/images/img2.jpg'
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