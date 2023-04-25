import React from 'react';

function ProfileCard(props) {
  const handleClick = () => {
    alert(props.name);
  };

  return (
    <div className="profile-card">
      <div className="image-wrapper">
        <img src={props.imageSrc} alt={props.name} />
      </div>
      <div className="details">
        <p className="designation">{props.designation}</p>
        <h2>{props.name}</h2>
        <p className="job-description">{props.jobDescription}</p>
        <button onClick={handleClick}>See More</button>
      </div>
    </div>
  );
}

export default ProfileCard;
