import React, { useState } from 'react';
import './Content.scss';
import { Tabs } from '../../statics/Statics';
import Sidebar from '../Sidebar/Sidebar';
import DataSection from '../DataSection/DataSection'

function Content () {
    const [activeTab, setActiveTab] = useState(Tabs[0].label)
  
  return (
    <div className="Content__Container">
      <Sidebar activeTab={activeTab} changeTab={setActiveTab} />
      <DataSection activeTab={activeTab} />
    </div>
  )

}

export default Content;