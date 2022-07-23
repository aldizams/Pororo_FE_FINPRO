import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BreedDetail = () => {
  const [rambut, setRambut] = useState("");
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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCatById();
  }, []);

  const getCatById = async () => {
    const response = await axios.get(`http://localhost:5000/cat/${id}`);
    setRambut(response.data.rambut);
    setNama(response.data.nama);
    setKilasan(response.data.kilasan);
    setTentang(response.data.tentang);
    setNegara(response.data.negara);
    setUkuran(response.data.ukuran);
    setLifetime(response.data.lifetime);
    setSifat(response.data.sifat);
    setFakta1(response.data.fakta1);
    setFakta2(response.data.fakta2);
    setFakta3(response.data.fakta3);

    setFile(response.data.image);
    setPreview(response.data.url);

  };

  return (
    <div className="columns is-centered mt-5">
      <nav class="breadcrumb md-5" aria-label="breadcrumbs">
        <ul>
          <li><a href="/">Breed</a></li>
          <li class="is-active"><a href="#" aria-current="page">{nama}</a></li>
        </ul>
      </nav>
      <div className="column is-half mt-5">
        {
          preview ? (
            <figure className='image is-128x128' >
              <img src={preview} alt="Preview Image" />
            </figure >
          ) : (
            ""
          )}
        <p class="title is-5">Jenis bulu</p>
        <p class="subtitle is-6">{rambut}</p>

        <p class="title is-5 mt-2">Nama kucing</p>
        <p class="subtitle is-6">{nama}</p>

        <p class="subtitle is-6">{kilasan}</p>

        <p class="title is-5 mt-2">Tentang {nama}</p>
        <p class="subtitle is-6">{tentang}</p>

        <p class="title is-5 mt-2">Asal negara</p>
        <p class="subtitle is-6">{negara}</p>

        <p class="title is-5 mt-2">Kategori ukuran</p>
        <p class="subtitle is-6">{ukuran}</p>

        <p class="title is-5 mt-2">Masa hidup</p>
        <p class="subtitle is-6">{lifetime}</p>

        <p class="title is-5 mt-2">Sifat</p>
        <p class="subtitle is-6">{sifat}</p>

        <p class="title is-5 mt-2">Jenis bulu</p>
        <p class="subtitle is-6">{fakta1}</p>
        <p class="subtitle is-6">{fakta2}</p>     
        <p class="subtitle is-6">{fakta3}</p>
        
      </div>
    </div>
  )
}

export default BreedDetail