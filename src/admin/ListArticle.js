import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArticleList = () => {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        getArticle();
    }, []);

    const getArticle = async () => {
        const response = await axios.get("http://localhost:5000/article");
        setArticle(response.data);
    };

    const deleteArticle = async (articleId) => {
        try {
            await axios.delete(`http://localhost:5000/article/${articleId}`);
            getArticle();
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className='container mt-5'>

            <Link to="/adm-add-article" className='button is-success'>Add New</Link>

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

                            <footer className='card-footer'>
                                <Link to={`/adm-edit-article/${article.id}`} className='card-footer-item'>Edit</Link>
                                <a onClick={() => deleteArticle(article.id)} className='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default ArticleList;
