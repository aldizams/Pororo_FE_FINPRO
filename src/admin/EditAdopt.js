import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditAdopt = () => {
    const [nama, setNama] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [harga, setHarga] = useState("");
    const [status, setStatus] = useState("Available");

    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAdoptById();
    }, []);

    const getAdoptById = async () => {
        const response = await axios.get(`http://localhost:5000/adopt/${id}`);
        setNama(response.data.nama);
        setKeterangan(response.data.keterangan);
        setHarga(response.data.harga);
        setStatus(response.data.status);

        setFile(response.data.image);
        setPreview(response.data.url);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const updateAdopt = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("nama", nama);
        formData.append("keterangan", keterangan);
        formData.append("harga", harga);
        formData.append("status", status);

        try {
            await axios.patch(`http://localhost:5000/adopt/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            navigate("/adm-adopt");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="columns is-centered mt-5">
            <div className="column is-half">
                <form onSubmit={updateAdopt}>
                    <div className='field'>
                        <label className='label'>Nama</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder='Nama'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>keterangan</label>
                        <div className="control">
                            <textarea rows="3" cols="5" type="text"
                                className="input"
                                value={keterangan}
                                onChange={(e) => setKeterangan(e.target.value)}
                                placeholder='Keterangan'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Harga</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                                placeholder='Harga'
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Status</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="Available">Available</option>
                                    <option value="Adopted">Adopted</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>Image</label>
                        <div className="control">
                            <div className="file">
                                <label className="file-label">
                                    <input type="file" className='file-input' onChange={loadImage} />
                                    <span className='file-cta'>
                                        <span className='file-label'>Choose a file...</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {preview ? (
                        <figure className='image is-128x128'>
                            <img src={preview} alt="Preview Image" />
                        </figure>
                    ) : (
                        ""
                    )}

                    <div className="field">
                        <div className="control">
                            <button type='submit' className="button is-success">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditAdopt;
