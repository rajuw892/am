import React from 'react'
import Styles from './ServicesLayout.module.css';
function ServicesLayout({ServiceName}) {
    return (
        <div className={Styles.services}>
            <h4 className={Styles.heading}>{ServiceName}</h4>
        </div>
    )
}

export default ServicesLayout
