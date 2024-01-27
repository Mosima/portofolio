import React, { useEffect, useState } from 'react';
import '../assets/css/tabs.css';
import { tabs } from '../content/Work';

function Tabs() {

    const [activeTab, setTab] = useState();

    const changeWork = (e, ind) => {
        setTab(tabs[ind])
    }

    useEffect(() => {
        setTab(tabs[0])
    }, [])

    return (
        <div>
            <div className="tab">
                {
                    tabs.map((tab, ind) => <button className="tablinks" onClick={(event) => changeWork(event, ind)}>{tab.title}</button>)
                }
            </div>

            <div id="tabs" className="tabcontents">
                <p>{
                    activeTab ? activeTab.list.map((tab, ind) => (
                        <div key={ind}>
                            {tab}
                        </div>
                    )) : "LOADING"
                }
                </p>
            </div>

        </div>
    );
}

export default Tabs;