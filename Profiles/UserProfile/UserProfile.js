import React from 'react'
import Styles from './UserProfile.module.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EditIcon from '@material-ui/icons/Edit';
import {Avatar, Button} from '@material-ui/core';
function UserProfile() {
    return (
        <div className={Styles.main}>
            <div className={Styles.left}>
                   <Avatar src={`/tree.jpg`} alt="" className={Styles.avatar}/>
                   <h2>Name of User</h2>
                   <p>emailofuser@gmail.com</p>
                   <p>+91 9413******</p>

                   <Button className={Styles.button}>Check Your Subscription</Button>
                   <Button className={Styles.button}>Edit Details <EditIcon /></Button>
            </div>
            <div className={Styles.right}>
                  <div>
                  <h1>About</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus elit, cursus quis elit in, faucibus malesuada turpis. Etiam tortor neque, luctus quis massa</p>
                  </div>

                  <div>
                  <h1>Blood Group</h1>
                  <p>O+</p>
                  </div>

                  <div>
                  <h1>Weight (in Kg)</h1>
                  <p>50 KG</p>
                  </div>

                  <div>
                  <h1>Height (in Feet)</h1>
                  <p>5'11</p>
                  </div>

                  <div>
                  <h1>Date of Birth</h1>
                  <p>**/**/****</p>
                  </div>

                  <div>
                  <h1>Location</h1>
                  <p><LocationOnIcon/> Chandni chawk, new Delhi</p>
                  </div>
            </div>
       </div>
    )
}

export default UserProfile
