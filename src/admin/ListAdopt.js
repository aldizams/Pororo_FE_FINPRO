import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdoptList = () => {
    const [adopt, setAdopt] = useState([]);

    useEffect(() => {
        getAdopt();
    }, []);

    const getAdopt = async () => {
        const response = await axios.get("http://localhost:5000/adopt");
        setAdopt(response.data);
    };

    const deleteAdopt = async (adoptId) => {
        try {
            await axios.delete(`http://localhost:5000/adopt/${adoptId}`);
            getAdopt();
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className='container mt-5'>

            <Link to="/adm-add-adopt" className='button is-success'>Add New</Link>

            <div className="columns mt-5 is-multiline">
                {adopt.map((adopt) => (
                    <div className="column is-one-quarter" key={adopt.id}>

                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={adopt.url} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="subtitle is-5">{adopt.status}</p>
                                        <p class="title is-5">{adopt.nama}</p>
                                        <p class="subtitle is-5">Rp.{adopt.harga}</p>
                                    </div>
                                </div>
                                <div class="content">
                                    {adopt.keterangan}
                                </div>
                            </div>
                            <footer className='card-footer'>
                                <Link to={`/adm-edit-adopt/${adopt.id}`} className='card-footer-item'>Edit</Link>
                                <a onClick={() => deleteAdopt(adopt.id)} className='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default AdoptList;
