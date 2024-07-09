import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LifesStyle(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get('http://localhost:3000/articles?category=lifestyle');
                if (response.data.length >1) {
                    setArticles(response.data.slice(1, 6));
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, []);

    return (
        <div id="ArtBox2" className="d-grid grid-cols-md-2 grid-cols-xl-1 gap-3">
            {articles.map((article, index) => (
                <article key={index} className="d-flex flex-row gap-2">
                    <img id="ArtImage" className="img-fluid" src={article.thumbnail} alt="" />
                    <div className='box2'>
                        <h4 className="Category">{article.category.toUpperCase()}</h4>
                        <h3 className="TitleText">{article.title}</h3>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default LifesStyle;
