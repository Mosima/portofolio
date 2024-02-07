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
                    tabs.map((tab, ind) => <button className="tablinks" onClick={(event) => changeWork(event, ind)}>
                        {tab.title}
                    </button>)
                }
            </div>

            <div id="tabs" className="tabcontents">
                {
                    activeTab ? <div id="tabs" className="tabcontents">
                        <div className='tab-container'>
                            <div className='tab-intro'>
                                <p>
                                    {activeTab.intro}
                                </p>
                            </div>
                            <div className='tab-stack'>
                                    {activeTab.stack.map((stack, ind)=>(
                                        <div key={ind} className='stack'>
                                            {stack}
                                        </div>
                                    ))}
                            </div>
                            <div className='tab-list'>
                                <p>
                                    {
                                        activeTab.list.map((tab, ind) => (
                                            <div key={ind}>
                                                {tab}
                                            </div>
                                        ))
                                    }
                                </p>
                            </div>
                        </div>
                    </div> : "LOADING..."
                }
            </div>

        </div>
    );
}

export default Tabs;