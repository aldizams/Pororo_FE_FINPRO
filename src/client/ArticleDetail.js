import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");
  const [penulis, setPenulis] = useState("");
  const [date, setDate] = useState("");

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
    setDate(response.data.createdAt);

    setFile(response.data.image);
    setPreview(response.data.url);
  };

  return (
    <div className="columns is-centered mt-5">
      <nav class="breadcrumb md-5" aria-label="breadcrumbs">
        <ul>
          <li><a href="/article">Article</a></li>
          <li class="is-active"><a href="#" aria-current="page">Detail Article</a></li>
        </ul>
      </nav>
      <div className="column is-half mt-5">

        <p class="title is-5">{judul}</p>
        <p class="subtitle is-7 mt-3">{date}</p>
        {
          preview ? (
            <figure className='image is-128x128' >
              <img src={preview} alt="Preview Image" />
            </figure >
          ) : (
            ""
          )}

        <p class="content mt-1">{konten}</p>
        <p class="subtitle is-6 mt-3">Author: {penulis}</p>

      </div>
    </div>
  )
}

export default ArticleDetail