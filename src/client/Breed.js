import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Breed = () => {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        getCat();
    }, []);

    const getCat = async () => {
        const response = await axios.get("http://localhost:5000/cat");
        setCat(response.data);
    };

    return (

        <div className='container mt-5'>
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li class="is-active"><a href="/" aria-current="page">Breed</a></li>
                </ul>
            </nav>
            <div className="columns mt-5 is-multiline">
                {cat.map((cat) => (
                    <div className="column is-one-quarter" key={cat.id}>
                        <div className='card'>
                            <div className='card-image'>
                                <figure className='image is-4by3'>
                                    <img src={cat.url} alt='Image' />
                                </figure>
                            </div>
                            <div className='card-content'>
                                <div className='media'>
                                    <div className='media-content'>
                                        <Link to={`detail-breed/${cat.id}`}><p className='title is-4'>{cat.nama}</p></Link>
                                        <p class="subtitle is-6">{cat.rambut}</p>
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

export default Breed