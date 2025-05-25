// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import BigPanda from "../assets/bigpanda-io-logo-vector.png";
// import ServiceNow from "../assets/ServiceNow.png";
// import SharePoint from "../assets/sharepoint.png";
// import XM from "../assets/xmatters.webp";
// import AppD from "../assets/AppDynamics.png";
// import PowerBI from "../assets/Microsoft-Power-BI-Logo.jpg";
// import VDI from "../assets/VDI.png";
// import HWA from "../assets/HWA.png";
// import GreenPages from "../assets/GreenPages.png";
// import WM from "../assets/WM_Logo.png";
// const CardGallery = () => {
//   const navigate = useNavigate();

//   // Array of card items with image source and target link
//   const items = [
//     {
//       id: 1,
//       image: BigPanda,
//       link: "https://a.bigpanda.io/feed/5d65627b0734588d1d2ab951?folder=active",
//       name: "BigPanda",
//     },
//     {
//       id: 2,
//       image: ServiceNow,
//       link: "https://wm.service-now.com/now/nav/ui/classic/params/target/home.do",
//       name: "ServiceNow",
//     },
//     { id: 3, image: SharePoint, link: "", name: "SHO" },
//     {
//       id: 4,
//       image: XM,
//       link: "https://wm.xmatters.com/xmatters/ui/HomePagePlace:home",
//       name: "xMatters",
//     },
//     {
//       id: 5,
//       image: AppD,
//       link: "https://wm.saas.appdynamics.com/controller/#/location=APPS_ALL_DASHBOARD&timeRange=last_5_minutes.BEFORE_NOW.-1.-1.5",
//       name: "AppD",
//     },
//     {
//       id: 6,
//       image: PowerBI,
//       link: "https://app.powerbi.com/groups/me/reports/3f4df952-7a56-4d36-9310-d5dae929c2b1/ReportSection?ctid=d7bf8bae-4d7e-479c-bde4-1103d9e4136c&openReportSource=ReportInvitation&experience=power-bi",
//       name: "OCS Dashboard",
//     },
//     {
//       id: 7,
//       image: SharePoint,
//       link: "https://wmgmt.sharepoint.com/:x:/r/sites/ProductionAssurance/Shared%20Documents/General/NOC/NOC%20Shift%20Roster/2025/NOC-%20Roster%2725.xlsx?d=w0d5ac91880fa44e687fc6175861ff833&csf=1&web=1&e=21I51X",
//       name: "NOC Roaster",
//     },
//     {
//       id: 8,
//       image: VDI,
//       link: "https://virtualvdi.wm.com/portal/webclient/#/home",
//       name: "VDI",
//     },
//     {
//       id: 9,
//       image: AppD,
//       link: "https://wm.saas.appdynamics.com/controller/#/location=CDASHBOARD_DETAIL&timeRange=last_15_minutes.BEFORE_NOW.-1.-1.15&mode=MODE_DASHBOARD&dashboard=232",
//       name: "GCC Dashboard",
//     },
//     {
//       id: 10,
//       image: WM,
//       link: "https://alvpapp106.wm.com",
//       name: "Green Pages",
//     },
//     {
//       id: 11,
//       image: HWA,
//       link: "https://hwa-prd.wm.com:9443/console/login.jsp",
//       name: "HWA PRD",
//     },
//     {
//       id: 12,
//       image: HWA,
//       link: "https://hwa-dev.wm.com:9443/console/login.jsp",
//       name: "HWA DEV",
//     },
//     {
//       id: 11,
//       image: SharePoint,
//       link: "https://wmgmt.sharepoint.com/:x:/r/sites/ProductionAssurance/Shared%20Documents/General/NOC/Bridge%20Response%20Time%20and%20Recorded%20Links/Bridge%20Response%20and%20Recording%20links.xlsx?d=w6f42de03d92f47c8ad5321fba210df32&csf=1&web=1&e=TllmJW",
//       name: "Bridge Recording",
//     },
//     {
//       id: 12,
//       image: SharePoint,
//       link: "https://wmgmt.sharepoint.com/:f:/r/sites/ProductionAssurance/Shared%20Documents/General/NOC?csf=1&web=1&e=sIBe3n",
//       name: "Bridge Trackers",
//     },
//     {
//       id: 13,
//       image: SharePoint,
//       link: "https://wmgmt.sharepoint.com/:f:/r/sites/ProductionAssurance/Shared%20Documents/General/NOC/GCC-NOC%20Shift%20Handover%20Reports?csf=1&web=1&e=MAsTOA",
//       name: "SHO",
//     },
//   ];
//   const openInNewTab = (link) => {
//     window.open(link, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">GCC-NOC</h2>
//       <div className="row">
//         {items.map((item) => (
//           <div key={item.id} className="col-md-3 mb-4">
//             <div
//               className="card shadow m-2 p-2"
//               style={{ cursor: "pointer", borderRadius: "10px" }}
//               onClick={() => openInNewTab(item.link)}
//             >
//               <img
//                 src={item.image}
//                 alt={`Card ${item.id}`}
//                 className="card-img-top"
//                 style={{
//                   height: "150px",
//                   objectFit: "cover",
//                   borderRadius: "10px",
//                 }}
//               />
//             </div>
//             <p className="text-center mt-2 fw-bold">{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardGallery;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BigPanda from "../assets/bigpanda-io-logo-vector.png";
import ServiceNow from "../assets/ServiceNow.png";
import SharePoint from "../assets/sharepoint.png";
import XM from "../assets/xmatters.webp";
import AppD from "../assets/AppDynamics.png";
import PowerBI from "../assets/Microsoft-Power-BI-Logo.jpg";
import VDI from "../assets/VDI.png";
import HWA from "../assets/HWA.png";
import GreenPages from "../assets/GreenPages.png";
import WM from "../assets/WM_Logo.png";

const CardGallery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Array of all card items
  const allItems = [
    {
      id: 1,
      image: BigPanda,
      link: "https://a.bigpanda.io/feed/5d65627b0734588d1d2ab951?folder=active",
      name: "BigPanda",
      category: "monitoring",
    },
    {
      id: 2,
      image: ServiceNow,
      link: "https://wm.service-now.com/now/nav/ui/classic/params/target/home.do",
      name: "ServiceNow",
      category: "utility",
    },
    { id: 3, image: SharePoint, link: "", name: "SHO", category: "sharepoint" },
    {
      id: 4,
      image: XM,
      link: "https://wm.xmatters.com/xmatters/ui/HomePagePlace:home",
      name: "xMatters",
      category: "notification",
    },
    {
      id: 5,
      image: AppD,
      link: "https://wm.saas.appdynamics.com/controller/#/location=APPS_ALL_DASHBOARD&timeRange=last_5_minutes.BEFORE_NOW.-1.-1.5",
      name: "AppD",
      category: "monitoring",
    },
    {
      id: 6,
      image: PowerBI,
      link: "https://app.powerbi.com/groups/me/reports/3f4df952-7a56-4d36-9310-d5dae929c2b1/ReportSection?ctid=d7bf8bae-4d7e-479c-bde4-1103d9e4136c&openReportSource=ReportInvitation&experience=power-bi",
      name: "OCS Dashboard",
      category: "monitoring",
    },
    {
      id: 7,
      image: SharePoint,
      link: "https://wmgmt.sharepoint.com/:x:/r/sites/ProductionAssurance/Shared%20Documents/General/NOC/NOC%20Shift%20Roster/2025/NOC-%20Roster%2725.xlsx?d=w0d5ac91880fa44e687fc6175861ff833&csf=1&web=1&e=21I51X",
      name: "NOC Roaster",
      category: "sharepoint",
    },
    {
      id: 8,
      image: VDI,
      link: "https://virtualvdi.wm.com/portal/webclient/#/home",
      name: "VDI",
      category: "utility",
    },
    {
      id: 9,
      image: AppD,
      link: "https://wm.saas.appdynamics.com/controller/#/location=CDASHBOARD_DETAIL&timeRange=last_15_minutes.BEFORE_NOW.-1.-1.15&mode=MODE_DASHBOARD&dashboard=232",
      name: "GCC Dashboard",
      category: "monitoring",
    },
    {
      id: 10,
      image: WM,
      link: "https://alvpapp106.wm.com",
      name: "Green Pages",
      category: "utility",
    },
    {
      id: 11,
      image: HWA,
      link: "https://hwa-prd.wm.com:9443/console/login.jsp",
      name: "HWA PRD",
      category: "HWA",
    },
    {
      id: 12,
      image: HWA,
      link: "https://hwa-dev.wm.com:9443/console/login.jsp",
      name: "HWA DEV",
      category: "HWA",
    },
    {
      id: 13,
      image: SharePoint,
      link: "https://wmgmt.sharepoint.com/:x:/r/sites/ProductionAssurance/Shared%20Documents/General/NOC/Bridge%20Response%20Time%20and%20Recorded%20Links/Bridge%20Response%20and%20Recording%20links.xlsx?d=w6f42de03d92f47c8ad5321fba210df32&csf=1&web=1&e=TllmJW",
      name: "Bridge Recording",
      category: "sharepoint",
    },
    {
      id: 14,
      image: SharePoint,
      link: "https://wmgmt.sharepoint.com/:f:/r/sites/ProductionAssurance/Shared%20Documents/General/NOC?csf=1&web=1&e=sIBe3n",
      name: "Bridge Trackers",
      category: "sharepoint",
    },
    {
      id: 15,
      image: SharePoint,
      link: "https://wmgmt.sharepoint.com/:f:/r/sites/ProductionAssurance/Shared%20Documents/General/NOC/GCC-NOC%20Shift%20Handover%20Reports?csf=1&web=1&e=MAsTOA",
      name: "SHO",
      category: "sharepoint",
    },
  ];

  // Filter items based on the active category and search term
  const filteredItems = allItems.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch =
      activeCategory === "all" || item.category === activeCategory;
    return searchMatch && categoryMatch;
  });

  // Function to open the link in a new tab
  const openInNewTab = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Get unique categories for the filter buttons
  const categories = ["all", ...new Set(allItems.map((item) => item.category))];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">GCC-NOC</h2>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search Applications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category filter buttons */}
      <div className="d-flex justify-content-center mb-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-outline-primary me-2 ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredItems.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div
              className="card shadow m-2 p-2"
              style={{ cursor: "pointer", borderRadius: "10px" }}
              onClick={() => openInNewTab(item.link)}
            >
              <img
                src={item.image}
                alt={`Card ${item.id}`}
                className="card-img-top"
                style={{
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
            <p className="text-center mt-2 fw-bold">{item.name}</p>
          </div>
        ))}
        {filteredItems.length === 0 && (
          <div className="col-12 text-center">
            <p className="lead">No apps found in the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardGallery;
