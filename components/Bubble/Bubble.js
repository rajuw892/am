import React from 'react'
import Styles from './Bubble.module.css';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
function Bubble() {
    return (
        <div className={Styles.Bubble}>
              <ChatBubbleRoundedIcon className={Styles.icon}/>
        </div>
    )
}

export default Bubble