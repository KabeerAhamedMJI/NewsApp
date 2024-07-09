import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Technology() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get('http://localhost:3000/articles?category=technology');
                if (response.data.length > 1) {
                    setArticles(response.data.slice(1, 4));
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, []);

    return (
        <section>
            <div className="container">
                {articles.length > 0 && (
                    <div className="d-flex flex-column flex-xl-row align-items-xl-center pt-1 pb-4 pl-2 gap-2">
                        <h3 className="trending-box">{articles[0].category.toUpperCase()}</h3>
                        <span>{articles[0].title}</span>
                    </div>
                )}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {articles.map((article) => (
                        <div className="col" key={article._id}>
                            <div className="card h-100">
                                <img src={article.thumbnail} className="card-img-top" alt={article.title} />
                                <div className="card-body">
                                    <h5 className="card-title font-medium pb-2">
                                        {article.title}
                                    </h5>
                                    <p className="card-text multiline-ellipsis">
                                        {article.description[0]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technology;
