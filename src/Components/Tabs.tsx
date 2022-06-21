import React, {useState} from "react";

const Tabs = () => {

  const [activeTab, setActiveTab] = useState("tab1")


  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav-tabs">
        <li className="nav-tabs-item active"><a href="#"></a>My Progress</li>
        <li className="nav-tabs-item"><a href="#"></a>Categories</li>
        <li className="nav-tabs-item"><a href="#"></a>Submit a coding question</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  );
};
export default Tabs;