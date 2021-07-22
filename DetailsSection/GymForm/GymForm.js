import React, {useState} from 'react'
import Styles from './GymForm.module.css';
import {Avatar, Button, IconButton} from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ServicesLayout from '../ServiceProvider/Services/ServicesLayout';
import AddImage from '../ServiceProvider/AddImage/AddImage';
function GymForm() {

    const [isPopup, setIsPopup] = useState(false);

    const DisplayPopup = () =>{
        setIsPopup(true);
    }

    const HidePopup = () =>{
        setIsPopup(false);
    }

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
                    <input className={Styles.input} type="text" placeholder="Gym Name"/>
                    <input className={Styles.input} type="number" placeholder="Years of Experience" />
                    <input className={Styles.input} type="number" placeholder="Contact Number" />
                    <input className={Styles.input} type="text" placeholder="Location" />
                    <input className={Styles.input} type="text" placeholder="about"/>
                    <select name="plan" className={Styles.selection}>
                         <option value="Female" selected className={Styles.options}>Select the gender you allow</option>
                         <option value="Male" className={Styles.options}>Male</option>
                         <option value="Female" className={Styles.options}>Female</option>
                         <option value="Both" className={Styles.options}>Both</option>
                     </select>
                     <h3 className={Styles.inputHeading}>Select the Opening Time</h3>
                     <input className={Styles.input} type="time" placeholder="Select the Opening Time"/>
                     <h3 className={Styles.inputHeading}>Select the Closing Time</h3>
                     <input className={Styles.input} type="time" placeholder="Select the Closing Time"/>
                    <input className={Styles.input} type="number" placeholder="Enter Subscription Price ( per head in Rs )"/>
                    <input className={Styles.input} type="text" placeholder="Description about services you are providing"/>
                    <input className={Styles.input} type="number" placeholder="Enter the information (especially about GYM)"/>

                    <h3 className={Styles.inputHeading}>Services You Provide</h3>
                    <div className={Styles.servicesProvide}>
                        <ServicesLayout ServiceName={`Cardio`} />
                        <ServicesLayout ServiceName={`Cardio`} />
                        <ServicesLayout ServiceName={`Cardio`} />
                        <ServicesLayout ServiceName={`Cardio`} />
                        <ServicesLayout ServiceName={`Cardio`} />
                        <ServicesLayout ServiceName={`Cardio`} />
                        <ServicesLayout ServiceName={`Cardio`} />
                        <IconButton onClick={() =>{DisplayPopup()}}>
                        <AddCircleRoundedIcon onClick={() =>{DisplayPopup()}} />
                        </IconButton>
                    </div>


                    <h3 className={Styles.inputHeading}>Add Your Gym Image</h3>
                    <div className={Styles.addimage}>
                        <AddImage srcImage={`/tree.jpg`} />
                        <AddImage srcImage={`/tree.jpg`} />
                        <AddImage srcImage={`/tree.jpg`} />
                        <AddImage srcImage={`/tree.jpg`} />
                        <AddImage srcImage={`/tree.jpg`} />
                        <IconButton>
                        <AddCircleRoundedIcon />
                        </IconButton>
                    </div>

                    
                    <div className={Styles.buttondiv}>
                    <Button className={Styles.button}>CONFIRM</Button>
                    </div>
                </form>

                {isPopup? (<div className={Styles.popupAddService}>
                       <div>
                       <input className={Styles.inputService} placeholder="Enter the Service" />
                       <Button className={Styles.AddServiceButton} onClick={() =>{HidePopup()}}>Add Service</Button>
                       <Button className={Styles.CancelServiceButton} onClick={() =>{HidePopup()}}>Cancel</Button>
                       </div>
                </div> ): (<> </>)}
           </div>

           <div className={Styles.right}>
                 {/*image section*/}
                 <h1 className={Styles.WhiteHeading}> Already have an<br/>account ? </h1>
                 <Button className={Styles.buttonWhite}>LOG IN</Button>
           </div> 
           
        </div>
    )
}

export default GymForm
