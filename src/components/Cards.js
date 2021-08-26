import React from "react";

function Cards({ title, imageUrl, body }) {
  return (
      <div className="card-group">
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <h3>{body}</h3>
        </div>
        <div className="card-bullet">
          <h3>
            <li> Agency suppressor</li>
            <li>Mil Spec Barrel</li>
            <li>3X Optic</li>
            <li>Feild Agent Grip</li>
            <li>60 Rnd Mag</li>
          </h3>
        </div>
      </div>
    </div>
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <h3>{body}</h3>
        </div>
        <div className="card-bullet">
          <h3>
            <li> Agency suppressor</li>
            <li>Mil Spec Barrel</li>
            <li>3X Optic</li>
            <li>Feild Agent Grip</li>
            <li>60 Rnd Mag</li>
          </h3>
        </div>
      </div>
    </div>
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <h3>{body}</h3>
        </div>
        <div className="card-bullet">
          <h3>
            <li> Agency suppressor</li>
            <li>Mil Spec Barrel</li>
            <li>3X Optic</li>
            <li>Feild Agent Grip</li>
            <li>60 Rnd Mag</li>
          </h3>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
