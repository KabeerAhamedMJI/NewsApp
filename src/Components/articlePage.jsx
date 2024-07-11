import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ArticlePage() {
    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);
    const { ArticleId } = useParams();

    useEffect(() => {
        async function fetchArticle() {
            try {
                const response = await axios.get(`http://localhost:3000/articles/${ArticleId}`);
                if (response.data) {
                    setArticle(response.data);
                }
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        }

        fetchArticle();
    }, [ArticleId]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get('http://localhost:3000/articles?category=lifestyle');
                if (response.data.length > 1) {
                    setArticles(response.data.slice(1, 9));
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, []);

    return (
        <div className='container mx-auto p-4 flex flex-col lg:flex-row'>
            <div className='lg:w-2/3 pr-6'>
                {article ? (
                    <article className='bg-white p-2 rounded-lg shadow-md'>
                        <img className='w-full h-auto rounded' src={article.thumbnail} alt={article.title} />
                        <h2 className='text-xl sm:text-2xl md:text-2xl font-bold mt-4 pl-5 pr-5'>{article.title}</h2>
                        <p className='text-gray-700 mt-2 pl-5 pr-5 pb-4'>{article.description}</p>
                    </article>
                ) : (
                    <p>Loading...</p>
                )}
                <div className='p-3 mt-2 bg-white rounded-lg shadow-md'>
                    <p className='text-xs text-slate-500'>The comments posted here are not those of News Today. Comments are solely the responsibility of the author. According to the IT policy of the Central Government, making insults and obscene language against individual, community, religion and country is a punishable offence. Legal action will be taken against such comments.</p>
                </div>
            </div>
            <div className='lg:w-1/3'>
                <h3 className='text-xl font-semibold mb-4 mt-3'>Related News</h3>
                <div className='grid gap-4'>
                    {articles.map((article, index) => (
                        <Link to={`/articles/${article._id}`} key={index} className='flex flex-row gap-4 bg-white p-2 rounded-lg shadow-md'>

                            <div className='d-flex flex-row'>
                                <img className='w-1/2 h-auto rounded' src={article.thumbnail} alt={article.title} />
                                <div className='box2 d-flex flex-col ml-2'>
                                    <h4 className="Category">{article.category.toUpperCase()}</h4>
                                    <h3 className='TitleText3 text-md p-2'>{article.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;
