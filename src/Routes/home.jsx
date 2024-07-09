import React from 'react';
import TopNews from '../Components/topnews';
import SubNews from '../Components/subnews'
import LifesStyle from '../Components/lifestyle';
import Technology from '../Components/technology';

function Home(props) {
    return (
        <>
            <section>
                <div className="container">
                    <div className="d-flex flex-column flex-xl-row align-items-xl-center pt-1 pb-4 pl-2 gap-2">
                        <h3 className="trending-box">TRENDING NOW</h3>
                        <span>Welcome To The Best Model Winner Contest...</span>
                    </div>
                    <div className="d-flex flex-column flex-xl-row gap-4">
                        <div id="ArtBox1" className="d-flex flex-column">
                            <TopNews />
                            <SubNews />
                        </div>
                        <LifesStyle />
                    </div>
                </div>
            </section>
            <Technology />
        </>
    );
}

export default Home;
