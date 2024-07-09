import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopNews(props) {
    const [article, setArticle] = useState();

    useEffect(() => {
        async function fetchArticle() {
            try {
                const response = await axios.get('http://localhost:3000/articles?category=topNews');
                if (response.data.length > 0) {
                    setArticle(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticle();
    }, []);

    return (
        <div className='main'>
            {article && (
                <div className="article-item">
                    <div className='second'>
                        <h4 className="PosIcon">TOP NEWS</h4>
                        <h3 className="Mainh3">{article.title}</h3>
                    </div>
                    <img className="img-fluid" src={article.thumbnail} alt={article.title} />
                </div>
            )}
        </div>
    );
}

export default TopNews;
