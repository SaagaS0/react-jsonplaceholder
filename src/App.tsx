import { useEffect, useState } from 'react';
import { api } from './api';
import { PostAlbum } from './components/PostAlbum';
import css from './styles.module.css'
import { Album } from './types/type'
import {Home} from './pages/Home'
import { RouteList } from './RouteList';



function App() {


  return (



    <div className={css.square}>
      <RouteList />

    </div>
  );
}

export default App;
