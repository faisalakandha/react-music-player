import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

ReactDOM.render(    
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
{/*      <Route path="track/:id" element={MusicPlayer} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
 document.getElementById('root'));

registerServiceWorker();
