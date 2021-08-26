import React from "react";
import Cards from '../components/Cards.js';
import './Cards.css';
import Krig from '../components/images/krig-6.jpg'

function Home() {
  return (
    < Cards 
    title='Krig-6'
    imageUrl={Krig}
    body='The Krig-6 is still a very good option to use in warzone right
    now. With low recoil and averaeg time to kill it is still used by
    many as there AR right now. The best build for it comes from pro
    warzone player Newbz.'
    Bullet=''/>
  );
}

export default Home;
