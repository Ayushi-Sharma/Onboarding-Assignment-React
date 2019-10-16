import React from 'react';
import './Sidebar.scss';
import { Tabs } from '../../statics/Statics';

function Sidebar ({activeTab, changeTab}) {
    console.log(activeTab)
    return (
        <div className="Sidebar__Container">
            <ul className="Sidebar__List">
                {
                Tabs.map((tab, index) => (
                    <li key={index} onClick={() => changeTab(tab.label)} className={tab.label === activeTab ? 'Sidebar__Tab-Active' : ''}>
                        {tab.name}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Sidebar;