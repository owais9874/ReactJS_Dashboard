import React from "react";
import "./UserProfile.css";
import profileImg from "../../assist/images/300-1.jpg";

const UserProfile = () => {
  return (
    <main class="page-content app-main">
      <div className="user-profile">
        <div className="profile-img">
          <img src={profileImg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
