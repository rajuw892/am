import React from 'react'
import Styles from './OfflineProfile.module.css';
import {Avatar, IconButton, Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ServicesProvidedLayout from '../../DetailsSection/ServiceProvider/Services/ServicesLayout';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddImage from '../../DetailsSection/ServiceProvider/AddImage/AddImage';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
function OfflineProfile() {
    return (
        <div className={Styles.main}>
            <div className={Styles.side}>
                <div className={Styles.left}>
                     <Avatar src={`/tree.jpg`} className={Styles.avatar}/>
                </div>
                <div className={Styles.right}>
                     <h2>GYM Name</h2>
                     <h2 className={Styles.location}><div><LocationOnIcon/> Chandni chawk Delhi</div></h2>
                     <h2>5 years of Establishment</h2>
                </div>
            </div>

            
        {/* contact and email must be hidden */}
        <div className={Styles.split}>
            <h2 className={Styles.leftheading}>+91 9413990274</h2>
            <h2 className={Styles.rightHeading}>ayushofficials2609@gmail.com</h2>
        </div>

        <div className={Styles.innerDiv}>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus elit, cursus quis elit in, faucibus malesuada turpis. Etiam tortor neque, luctus quis massa</p>
        </div>
        
        <div className={Styles.innerDiv}>
        <h2>Description about services/equipments</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus elit, cursus quis elit in, faucibus malesuada turpis. Etiam tortor neque, luctus quis massa</p>
        </div>

        <div className={Styles.innerDiv}>
        <h2>Extra information</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus elit, cursus quis elit in, faucibus malesuada turpis. Etiam tortor neque, luctus quis massa</p>
        </div>

        <div className={Styles.innerDiv}>
        <h2>Gender allowed</h2>
        <p>Both allowed</p>
        </div>

        <div className={Styles.split}>
            <h2 className={Styles.leftheading}>Opening Time : 09:00 am</h2>
            <h2 className={Styles.rightHeading}>Closing Time : 09:00 pm</h2>
        </div>

        <div className={Styles.addimage}>
                        <AddImage srcImage={`/tree.jpg`} />
                        <AddImage srcImage={`/tree.jpg`} />
                        <AddImage srcImage={`/tree.jpg`} />
                        <AddImage srcImage={`/tree.jpg`} />
                        <AddImage srcImage={`/tree.jpg`} />
                        <IconButton>
                        <AddCircleRoundedIcon className={Styles.icon}/>
                        </IconButton>
        </div>

        <div className={Styles.service}>
            <h2>Services they Provide<br/><br/></h2>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
        </div>

        <div className={Styles.innerDiv}>
           <h2>Subscription Price ( per head in RS. )</h2>
           <p>RS. <span>999</span></p>
        </div>

        {/*additionl buttons*/}
        <div className={Styles.buttonsSection}>
            <Button className={Styles.button}>Check active subscribers</Button>
            <Button className={Styles.button}>Edit Detail <EditIcon/></Button>
        </div>
        </div>


    )
}

export default OfflineProfile
