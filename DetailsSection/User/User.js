import React, {useState} from 'react'
import Styles from './User.module.css';
import {Avatar} from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import {Button} from '@material-ui/core';
//this page for taking user input

function User() {

    const [imageSrc, setImageSrc] = useState('');

    return (
        <div className={Styles.formSection}>
            <div className={Styles.left}>
                 {/*form section*/} 
                 <h1 className={Styles.formHeading}>You have been Successfully Signed up.<br/>Please Enter some of your details</h1>
                 
                 {/*form*/}
                 <form className={Styles.form}>
                     <div className={Styles.uploadLogo}>
                      <Avatar className={Styles.logo}/>
                     <AddCircleRoundedIcon className={Styles.icon} />
                    </div>
                     <input className={Styles.input} type="email" placeholder="Email"/>
                     <input className={Styles.input} type="contact" placeholder="Contact"/>
                     <input className={Styles.input} type="text" placeholder="Name" />
                     <input className={Styles.input} type="text" placeholder="About / Bio" />
                     <h3 className={Styles.color}>Date of Birth</h3>
                     <input className={Styles.input} type="date" placeholder="Date" />
                     <input className={Styles.input} type="location" placeholder="Location" />
                     <input className={Styles.input} type="text" placeholder="Blood Group"/>
                     <input className={Styles.input} type="number" placeholder="weight in Kg"/>
                     <input className={Styles.input} type="text" placeholder="Height in Feet"/>
                     <select name="plan" className={Styles.selection}>
                         <option value="Male" selected className={Styles.options}>Male</option>
                         <option value="Female" className={Styles.options}>Female</option>
                         <option value="Other" className={Styles.options}>Other</option>
                     </select>
                     <div className={Styles.buttondiv}>
                     <Button className={Styles.button}>CONFIRM</Button>
                     </div>
                 </form>
            </div>

            <div className={Styles.right}>
                  {/*image section*/}
                  <h1 className={Styles.WhiteHeading}> Already have an<br/>account ? </h1>
                  <Button className={Styles.buttonWhite}>LOG IN</Button>
            </div>          
        </div>
    )
}

export default User
