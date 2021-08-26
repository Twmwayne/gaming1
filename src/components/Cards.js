import React from "react";
import Krig from "../components/images/krig-6.jpg";
import Bullfrog from "../components/images/bullfrog.jpg";
import Swiss from "../components/images/Swiss.png";
import Mac from "../components/images/mac-10.jpg";
import Stoner from "../components/images/stoner.jpg";
import Ots from "../components/images/ots-9.jpg";

function Cards({ title, imageUrl, body }) {
  return (
    <div>
      <div className="card-group">
        <div className="card-container">
          <div className="image-container">
            <img src={Krig} alt="" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <p>Krig-6</p>
            </div>
            <div className="card-body">
              <p>
                The Krig-6 is still a very good option to use in warzone right
                now. With low recoil and averaeg time to kill it is still used
                by many as there AR right now. The best build for it comes from
                pro warzone player Newbz.
              </p>
            </div>
            <div className="card-bullet">
              <br />
              <p>
                <li> Agency suppressor</li>
                <li>Mil Spec Barrel</li>
                <li>3X Optic</li>
                <li>Feild Agent Grip</li>
                <li>60 Rnd Mag</li>
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="image-container">
            <img src={Stoner} alt="" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <p>Stoner</p>
            </div>
            <div className="card-body">
              <p>
                With the Nerf to the Krig-6 the stoner has become more viable.
                It hits hard with a with little recoil. it does have a slower
                ads and movement speed but if you match with a sub it is a great
                gun to use.
              </p>
            </div>
            <div className="card-bullet">
              <br />
              <p>
                <li>Agency Suppressor</li>
                <li>21.8" Task Force Barrel</li>
                <li>Axial Arms 3X Optic</li>
                <li>Field Agent Grip</li>
                <li>120 Rnd Mag</li>
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="image-container">
            <img src={Swiss} alt="" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <p>Swiss</p>
            </div>
            <div className="card-body">
              <p>
                The Swiss is the most used Sniper rifle in the game right now.
                The low flinch with fast rate of fire and aim down sight speed
                makes this the best sniper to use.
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
      <div className="card-group">
        <div className="card-container">
          <div className="image-container">
            <img src={Mac} alt="" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <p>Mac-10</p>
            </div>
            <div className="card-body">
              <p>
                The Mac-10 has made its way back into the meta for a lot of the
                pro players. The fast fire rate and little recoil makes it one
                of the SMG's right now. The only flaw is that it doesnt do a lot
                of damage. This is Huskerrs build for it.
              </p>
            </div>
            <div className="card-bullet">
              <br />
              <p>
                <li> Agency suppressor</li>
                <li>5.9" Task Force Barrel</li>
                <li>Tiger Team Spotlight</li>
                <li>Raider Stock</li>
                <li>Stanag 53 Rnd Drum</li>
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="image-container">
            <img src={Bullfrog} alt="" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <p>Bullfrog</p>
            </div>
            <div className="card-body">
              <p>
                The Bullfrog is a solid Sub right now. It is better at range
                then most subs. So if you looking for a gun to go with a sniper
                for a little range but mostly up close this is your gun. Pro
                players like almond love using this gun. This is his build.
              </p>
            </div>
            <div className="card-bullet">
              <br />
              <p>
                <li> GRU Suppressor</li>
                <li>Task Force Barrel</li>
                <li>Tiger Team Spotlight</li>
                <li>Bruiser Grip</li>
                <li>Spetsnaz PKM Stock</li>
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="image-container">
            <img src={Ots} alt="" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <p>OTs 9</p>
            </div>
            <div className="card-body">
              <p>
                The ots is one of the new SMG's and it is really good up close.
                Newbz was using it with a Krig in the 75k warzone tourny
                yesterday. The best build for it comes from pro warzone player
                Newbz.
                <br />
                <br />
                <li>Gru suppressor</li>
                <li>VDV Reinforced Barrel</li>
                <li>Tiger Team Spotlight</li>
                <li>KGB Skeletal Stock</li>
                <li>VDV 40 Rnd Fast Mag</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
