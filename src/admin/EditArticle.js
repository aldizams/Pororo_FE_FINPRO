import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditArticle = () => {
    const [judul, setJudul] = useState("");
    const [konten, setKonten] = useState("");
    const [penulis, setPenulis] = useState("");

    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getArticleById();
    }, []);

    const getArticleById = async () => {
        const response = await axios.get(`http://localhost:5000/article/${id}`);
        setJudul(response.data.judul);
        setKonten(response.data.konten);
        setPenulis(response.data.penulis);

        setFile(response.data.image);
        setPreview(response.data.url);
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const updateArticle = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("judul", judul);
        formData.append("konten", konten);
        formData.append("penulis", penulis);

        try {
            await axios.patch(`http://localhost:5000/article/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            navigate("/adm-article");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="columns is-centered mt-5">
            <div className="column is-half">
                <form onSubmit={updateArticle}>
                    <div className='field'>
                        <label className='label'>Judul</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={judul}
                                onChange={(e) => setJudul(e.target.value)}
                                placeholder='Judul'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Konten</label>
                        <div className="control">
                            <textarea rows="3" cols="5" type="text"
                                className="input"
                                value={konten}
                                onChange={(e) => setKonten(e.target.value)}
                                placeholder='Konten'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Penulis</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={penulis}
                                onChange={(e) => setPenulis(e.target.value)}
                                placeholder='Penulis'
                            />
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

export default EditArticle;
