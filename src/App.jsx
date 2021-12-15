import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ImagesList from './components/ImagesList/ImagesList'
import ImageDetails from './components/ImageDetails/ImageDetails';
import './App.scss'
import { useDispatch } from 'react-redux';
import { loadImages } from './redux/store';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages())
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImagesList />}/>
        <Route path="/image/:imageId" element={<ImageDetails />}/>
        <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
