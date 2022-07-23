import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCat from './admin/AddCat';
import EditCat from './admin/EditCat';
import ArticleList from './admin/ListArticle';
import CatList from './admin/ListCat';
import AddArticle from './admin/AddArticle'
import EditArticle from './admin/EditArticle';
import AdoptList from './admin/ListAdopt';
import AddAdopt from './admin/AddAdopt';
import EditAdopt from './admin/EditAdopt';
import Breed from './client/Breed';
import Navbar from './components/Navbar';
import Article from './client/Article';
import Adopt from './client/Adopt';
import Footer from './components/Footer';
import CarouselBoostrap from './components/CarouselBoostrap';
import BreedDetail from './client/BreedDetail';
import ArticleDetail from './client/ArticleDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><CarouselBoostrap/><Breed /><Footer/></>}></Route>
        <Route path="/detail-breed/:id" element={<><Navbar/><BreedDetail/><Footer/></>}></Route>
        <Route path="/article" element={<><Navbar/><Article /><Footer/></>}></Route>
        <Route path="/detail-article/:id" element={<><Navbar/><ArticleDetail /><Footer/></>}></Route>
        <Route path="/adopt" element={<><Navbar/><Adopt /><Footer/></>}></Route>
        <Route path="/adm-cat" element={<CatList />}></Route>
        <Route path="/adm-add-cat" element={<AddCat />}></Route>
        <Route path="/adm-edit-cat/:id" element={<EditCat />}></Route>
        <Route path="/adm-article" element={<ArticleList />}></Route>
        <Route path="/adm-add-article" element={<AddArticle />}></Route>
        <Route path="/adm-edit-article/:id" element={<EditArticle />}></Route>
        <Route path="/adm-adopt" element={<AdoptList />}></Route>
        <Route path="/adm-add-adopt" element={<AddAdopt />}></Route>
        <Route path="/adm-edit-adopt/:id" element={<EditAdopt />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
