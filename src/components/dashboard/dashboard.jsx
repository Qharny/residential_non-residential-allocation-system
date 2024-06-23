// creating dashboard

import React from "react";
// import { useNavigate } from "react-router-dom";
import Footer from "../common/footer";
import Sidebar from "../common/sidebar";
import "./dashboard.css";
// import { Button, Sidebar } from "semantic-ui-react";
// import { useTranslation } from "react-i18next";
import profileImage from '../../assets/images/profile.png'


const Dashboard = ()=> {
  return(
    <div className="mainPage">

        <header>
          <div className="profile">
            <img src={profileImage} alt="profile-image" />
            <h2>John Doe</h2>
          </div>
        </header>
      <div className="aside">
        <Sidebar/>
      </div>

      <main>
      </main>
      <Footer />
    </div>
  )
}

export default Dashboard;