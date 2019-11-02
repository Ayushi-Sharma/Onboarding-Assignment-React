import React, { useState } from 'react';
import './Content.scss';
import { Tabs } from '../../statics/Statics';
import Sidebar from '../Sidebar/Sidebar';
import DataSection from '../DataSection/DataSection'

function Content ({coords}) {
    const [activeTab, setActiveTab] = useState(Tabs[0].label)
  
  return (
    <div className="Content__Container">
      <Sidebar activeTab={activeTab} changeTab={setActiveTab} />
      <DataSection activeTab={activeTab} coords={coords}/>
    </div>
  )

}

export default Content;