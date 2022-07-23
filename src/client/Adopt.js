import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Adopt = () => {
    const [adopt, setAdopt] = useState([]);

    useEffect(() => {
        getAdopt();
    }, []);

    const getAdopt = async () => {
        const response = await axios.get("http://localhost:5000/adopt");
        setAdopt(response.data);
    };

    return (
        <div className='container mt-5'>
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li class="is-active"><a href="/adopt" aria-current="page">Adopt</a></li>
                </ul>
            </nav>
            <p className='content has-text-centered mt-5'><a href="https://api.whatsapp.com/send?phone=6285952447122&text=Hi kak MeowStore, aku mau tanya/adopsi nih..." target="_blank">Pertanyaan/Pembelian</a></p>
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
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Adopt