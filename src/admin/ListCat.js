import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const CatList = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    getCat();
  }, []);

  const getCat = async () => {
    const response = await axios.get("http://localhost:5000/cat");
    setCat(response.data);
  };

  const deleteCat = async (catId) => {
    try {
      await axios.delete(`http://localhost:5000/cat/${catId}`);
      getCat();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container mt-5'>

    <Link to="/adm-add-cat" className='button is-success'>Add New</Link>

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
                    <p className='title is-4'>{cat.nama}</p>
                    <p class="subtitle is-6">{cat.rambut}</p>
                  </div>
                </div>
              </div>

              <footer className='card-footer'>
                <Link to={`/adm-edit-cat/${cat.id}`} className='card-footer-item'>Edit</Link>
                <a onClick={()=> deleteCat(cat.id)} className='card-footer-item'>Delete</a>
              </footer>
            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default CatList;
