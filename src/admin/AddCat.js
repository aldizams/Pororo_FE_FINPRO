import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCat = () => {
    const [rambut, setRambut] = useState("Lapisan rambut pendek");
    const [nama, setNama] = useState("");
    const [kilasan, setKilasan] = useState("");
    const [tentang, setTentang] = useState("");
    const [negara, setNegara] = useState("");
    const [ukuran, setUkuran] = useState("");
    const [lifetime, setLifetime] = useState("");
    const [sifat, setSifat] = useState("");
    const [fakta1, setFakta1] = useState("");
    const [fakta2, setFakta2] = useState("");
    const [fakta3, setFakta3] = useState("");

    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveCat = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("rambut", rambut);
        formData.append("nama", nama);
        formData.append("kilasan", kilasan);
        formData.append("tentang", tentang);
        formData.append("negara", negara);
        formData.append("ukuran", ukuran);
        formData.append("lifetime", lifetime);
        formData.append("sifat", sifat);
        formData.append("fakta1", fakta1);
        formData.append("fakta2", fakta2);
        formData.append("fakta3", fakta3);
        try {
            await axios.post("http://localhost:5000/cat", formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            navigate("/adm-cat");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="columns is-centered mt-5">
            <div className="column is-half">
                <form onSubmit={saveCat}>
                    <div className="field">
                        <label className='label'>Jenis Rambut</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={rambut} onChange={(e) => setRambut(e.target.value)}>
                                    <option value="Lapisan rambut pendek">Lapisan rambut pendek</option>
                                    <option value="Bulu sedang">Bulu sedang</option>
                                    <option value="Bulu panjang">Bulu panjang</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className='field'>
                        <label className='label'>Cat Name</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder='Nama Kucing'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Kilasan Kucing</label>
                        <div className="control">
                            <textarea rows="2" cols="50" type="text"
                                className="input"
                                value={kilasan}
                                onChange={(e) => setKilasan(e.target.value)}
                                placeholder='Kilasan Kucing'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Tentang Kucing</label>
                        <div className="control">
                            <textarea rows="2" cols="50" type="text"
                                className="input"
                                value={tentang}
                                onChange={(e) => setTentang(e.target.value)}
                                placeholder='Tentang Kucing'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Asal Negara</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={negara}
                                onChange={(e) => setNegara(e.target.value)}
                                placeholder='Asal Negara'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Ukuran Kucing</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={ukuran}
                                onChange={(e) => setUkuran(e.target.value)}
                                placeholder='Ukuran Kucing'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Masa Hidup Kucing</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={lifetime}
                                onChange={(e) => setLifetime(e.target.value)}
                                placeholder='Masa Hidup Kucing'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Sifat Kucing</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={sifat}
                                onChange={(e) => setSifat(e.target.value)}
                                placeholder='Sifat Kucing'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Fakta 1</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={fakta1}
                                onChange={(e) => setFakta1(e.target.value)}
                                placeholder='Fakta 1'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Fakta 2</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={fakta2}
                                onChange={(e) => setFakta2(e.target.value)}
                                placeholder='Fakta 2'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Fakta 3</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={fakta3}
                                onChange={(e) => setFakta3(e.target.value)}
                                placeholder='Cat Name'
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
                            <button type='submit' className="button is-success">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCat;
