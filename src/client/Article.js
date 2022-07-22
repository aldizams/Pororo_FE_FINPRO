import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Article = () => {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        getArticle();
    }, []);

    const getArticle = async () => {
        const response = await axios.get("http://localhost:5000/article");
        setArticle(response.data);
    };

    return (
        <div className='container mt-5'>
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li class="is-active"><a href="/article" aria-current="page">Article</a></li>
                </ul>
            </nav>
            <div className="columns mt-5 is-multiline">
                {article.map((article) => (
                    <div className="column is-one-quarter" key={article.id}>
                        <div className='card'>
                            <div className='card-image'>
                                <figure className='image is-4by3'>
                                    <img src={article.url} alt='Image' />
                                </figure>
                            </div>
                            <div className='card-content'>
                                <div className='media'>
                                    <div className='media-content'>
                                        <p className='title is-4'>{article.judul}</p>
                                        <p class="subtitle is-6">{article.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Article