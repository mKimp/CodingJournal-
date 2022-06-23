import React from "react";
 interface propsTabContent {
  id:string;
  activeTab:string;
  children: JSX.Element
 }
const TabContent = ({id, activeTab, children}:propsTabContent) => {
 return (
   activeTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
 
export default TabContent;