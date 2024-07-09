import React from 'react';


function Technology(props) {

    return (

        <section>
        <div className="container">
            <div className="d-flex flex-column flex-xl-row align-items-xl-center pt-1 pb-4 pl-2 gap-2">
                <h3 className="trending-box">TECHNOLOGY</h3>
                <span>Welcome To The Best Model Winner Contest...</span>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/image_2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title font-medium pb-2">
                                Welcome To The Best Model Winner Contest At Look of the year
                            </h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/image_2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title font-medium pb-2">
                                Welcome To The Best Model Winner Contest At Look of the year
                            </h5>
                            <p className="card-text">
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="/images/image_2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-medium pb-2">
                                Welcome To The Best Model Winner Contest At Look of the year
                            </h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This card has even longer content
                                than the first to show that equal height action.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Technology;