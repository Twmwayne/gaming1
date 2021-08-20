import React from "react";
import Krig from "../components/images/krig-6.jpg";
import Bullfrog from "../components/images/bullfrog.jpg";
import Swiss from "../components/images/Swiss.png";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img class="img-fluid rounded mb-4 mb-lg-0" src={Krig} alt="" />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Krig-6 </h1>
            <p>
              The Krig-6 is the most used assault rifle in the game right now.
              With low recoil and a fast time to kill it is the meta AR right
              now. The best build for it comes from pro warzone player Newbz.
              <br />
              <br />
              <li> Agency suppressor</li>
              <li>Mil Spec Barrel</li>
              <li>3X Optic</li>
              <li>Feild Agent Grip</li>
              <li>60 Rnd Mag</li>
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img class="img-fluid rounded mb-4 mb-lg-0" src={Swiss} alt="" />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Swiss </h1>
            <p>
              The Swiss is the most used Sniper rifle in the game right now. The
              low flinch with fast rate of fire and aim down sight speed makes
              this the best sniper to use. The best build for it comes from pro
              warzone player Newbz.
              <br />
              <br />
              <li> Agency suppressor</li>
              <li>Mil Spec Barrel</li>
              <li>3X Optic</li>
              <li>Feild Agent Grip</li>
              <li>60 Rnd Mag</li>
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img class="img-fluid rounded mb-4 mb-lg-0" src={Bullfrog} alt="" />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Krig-6 </h1>
            <p>
              The Bullfrog is one of many viable Subs you can use as a
              secondary. is the most used assault rifle in the game right now.
              With low recoil and a fast time to kill it is the meta AR right
              now. The best build for it comes from pro warzone player Newbz.
              <br />
              <br />
              <li> Agency suppressor</li>
              <li>Mil Spec Barrel</li>
              <li>3X Optic</li>
              <li>Feild Agent Grip</li>
              <li>60 Rnd Mag</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
