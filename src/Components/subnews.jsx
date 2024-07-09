import React from 'react';


function SubNews(props) {

    return (

        <div className="d-flex flex-column flex-md-row pt-4 pb-4 pl-2 gap-4">
        <article>
            <img className="img-fluid" src="/images/placeholder_main.png" alt="" />
            <h4 className="Category">LIFESTYLE</h4>
            <h3 className="TitleText">Welcome To The Best Model Winner Contest At Look of the year</h3>
        </article>
        <article>
            <img className="img-fluid" src="/images/placeholder_main.png" alt="" />
            <h4 className="Category">SPORTS</h4>
            <h3 className="TitleText">Welcome To The Best Model Winner Contest At Look of the year</h3>
        </article>
        <article>
            <img className="img-fluid" src="/images/placeholder_main.png" alt="" />
            <h4 className="Category">TRAVELS</h4>
            <h3 className="TitleText">Welcome To The Best Model Winner Contest At Look of the year</h3>
        </article>
    </div>
    );
}

export default SubNews;