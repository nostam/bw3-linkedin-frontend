import React from "react";
import "./Sidebar.css";
import usersList from "./usersList";
import { usersFetch } from "./usersFetch";
const Sidebar = () => {
  return (
    <>
      <div>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt="Advertise on LinkedIn"
          border={0}
        />
      </div>
      <div>
        <usersList />
      </div>
      <div style={{ position: "sticky", top: "0" }}>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt="Advertise on LinkedIn"
          border={0}
        />
      </div>
    </>
  );
};

export default Sidebar;
