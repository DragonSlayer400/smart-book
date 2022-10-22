import React, { useState } from "react";
import './TabBar.css'

const TabBar = (
    {
        content
    }
) => {

    const [tabItem, setTabItem] = useState(content[0].id)

    const onClickChange = (index) => {
        setTabItem(index)
    }

    return (

        <div className="tab-container">
            <div className="tab-content">
                {
                    content.map(
                        t => {
                            let classesName = ["tab-content-item"]
                            if(tabItem === t.id){
                                classesName.push("tab-content-active")
                            }
                            return (
                                <div className={classesName.join(" ")} key={t.id}>
                                    <h3>Шаг { t.id }. { t.title }</h3>
                                    <p>{ t.body }</p>
                                    <p>{ t.result }</p>
                                </div>
                            )
                        }
                    )
                }
            </div>


            <div className="tab-nav">
                {
                    content.map(
                        t => {
                            let classesName = ["tab-nav-item"]
                            if(tabItem === t.id){
                                classesName.push("tab-nav-active")
                            }
                            return (
                                <button 
                                    className={classesName.join(" ")} 
                                    onClick = { () => onClickChange(t.id) } 
                                    key={t.id}   
                                >
                                    { t.label }
                                </button>
                            )
                        }
                    )
                }
            </div>

        </div>

    )

}

export default TabBar;