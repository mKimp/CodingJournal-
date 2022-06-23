import React, {useState} from "react";

interface propsTabs {
  id:string;
  title:string;
  activeTab:string;
  setActiveTab: (id:string) => void;
}


export const Tabs = ({id, title, activeTab, setActiveTab}:propsTabs) => {

  const handleOnClick = () => {
    setActiveTab(id);
  }

  return (
    <li className={activeTab === id ? "active" : ""} onClick={handleOnClick}>{title}</li>
  );
};
export default Tabs;