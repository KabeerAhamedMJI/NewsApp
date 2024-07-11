import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Articles() {
    const [Tparticles, TpsetArticles] = useState([]);
    const [Tarticles, TechsetArticles] = useState([]);
    const [Larticles, lifeArticles] = useState([]);
    const [Sarticles, SportArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get('http://localhost:3000/articles?category=topNews');
                if (response.data.length > 0) {
                    TpsetArticles(response.data.slice(0, 6));
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, []);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get('http://localhost:3000/articles?category=technology');
                if (response.data.length > 0) {
                    TechsetArticles(response.data.slice(0, 6));
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, []);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get('http://localhost:3000/articles?category=lifestyle');
                if (response.data.length > 1) {
                    lifeArticles(response.data.slice(1, 5));
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, []);
    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get('http://localhost:3000/articles?category=sports');
                if (response.data.length > 0) {
                    SportArticles(response.data.slice(0, 6));
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }

        fetchArticles();
    }, []);

    return (
        <section>
            <div className="container p-4">
                    {Tparticles.length > 0 && (
                        <>
                            <h2 className="heading text-sm md:text-base lg:text-lg mb-4">{Tparticles[0].category.toUpperCase()}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {Tparticles.map((article, index) => (
                                    <article key={index} className="article-item">
                                        <img className="img-fluid w-full object-cover pb-3" src={article.thumbnail} alt={article.title} />
                                        <h3 className="TitleText2 text-sm md:text-sm lg:text-sm">{article.title}</h3>
                                    </article>
                                ))}
                            </div>
                        </>
                    )}
            </div>
            <div className="container p-4">
                    {Tarticles.length > 0 && (
                        <>
                            <h2 className="heading text-sm md:text-base lg:text-lg mb-4">{Tarticles[0].category.toUpperCase()}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {Tarticles.map((article, index) => (
                                    <article key={index} className="article-item">
                                        <img className="img-fluid w-full object-cover pb-3" src={article.thumbnail} alt={article.title} />
                                        <h3 className="TitleText2 text-sm md:text-sm lg:text-sm">{article.title}</h3>
                                    </article>
                                ))}
                            </div>
                        </>
                    )}
            </div>
            <div className="container p-4">
                {Larticles.length > 0 && (
                    <>
                        <h2 className="heading text-sm md:text-base lg:text-lg mb-4">{Larticles[0].category.toUpperCase()}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {Larticles.map((article, index) => (
                                <article key={index} className="article-item">
                                    <img className="img-fluid w-full object-cover pb-3" src={article.thumbnail} alt={article.title} />
                                    <h3 className="TitleText2 text-sm md:text-sm lg:text-sm">{article.title}</h3>
                                </article>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="container p-4">
                {Sarticles.length > 0 && (
                    <>
                        <h2 className="heading text-sm md:text-base lg:text-lg mb-4">{Sarticles[0].category.toUpperCase()}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {Sarticles.map((article, index) => (
                                <article key={index} className="article-item">
                                    <img className="img-fluid w-full object-cover pb-3" src={article.thumbnail} alt={article.title} />
                                    <h3 className="TitleText2 text-sm md:text-sm lg:text-sm">{article.title}</h3>
                                </article>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Articles;
