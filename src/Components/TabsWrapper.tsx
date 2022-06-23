import React, { useState } from "react";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
import { Form } from "./Form";
const TabsWrapper = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
      <ul className="nav-tabs">
        <Tabs title="Categories" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Tabs title="My Progress" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Tabs title="Submit a question" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <p>Tab 1 works!</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>Tab 2 works!</p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Form/>
        </TabContent>
      </div>
    </div>
  );
};
 
export default TabsWrapper;
