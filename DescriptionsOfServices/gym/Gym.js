import React from 'react'
import Styles from './Gym.module.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Avatar, Button} from '@material-ui/core';
import Review from '../../components/ReviewSection/Review';
import ServicesProvidedLayout from '../../DetailsSection/ServiceProvider/Services/ServicesLayout';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1450 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1450, min: 950 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 950, min: 0 },
        items: 1
    }
};

function Gym() {
    return (
        <div className={Styles.main}>

            <div className={Styles.container}>

                {/*Left portion for image*/}
                <div className={Styles.left}>
                    <img src={`/GYM.png`} alt="Gym image"/>
                </div>

                {/*Right portion for content*/}
                <div className={Styles.right}>
                    <h1>Gym Name</h1>
                    <h3 className={Styles.experience}>1.5 years of experience</h3>
                    <div> <LocationOnIcon /><h3>&nbsp; chandni chawk, new delhi</h3> </div>
                    <div> <Avatar className={Styles.experience} /> <h3>&nbsp; 150 trainers</h3></div>
                </div>

            </div>

            {/*content for the gym overview*/}
            {/*about*/}
            <div className={Styles.about}>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus elit, cursus quis elit in, faucibus malesuada turpis. Etiam tortor neque, luctus quis massa nec, elementum ornare enim. Donec nec dictum libero. Cras at felis nunc. Aliquam rutrum purus id urna malesuada, eget rutrum nisi eleifend. Donec nec tellus arcu. Nullam efficitur, libero vel fermentum posuere, dui dolor laoreet tortor, nec aliquet lorem sem vitae odio. </p>
            </div>

            {/*Carousel for the gym images*/}
            <div className={Styles.OuterCarousel}>
                <Carousel responsive={responsive}>
                    <div className={Styles.carousel}>
                        <img src="./karate.jpg" alt="care" className={Styles.image} />
                    </div>

                    <div className={Styles.carousel}>
                        <img src="./karate.jpg" alt="offer" className={Styles.image} />
                    </div>

                    <div className={Styles.carousel}>
                        <img src="./karate.jpg" alt="offer" className={Styles.image} />
                    </div>

                    <div className={Styles.carousel}>
                        <img src="./karate.jpg" alt="offer" className={Styles.image} />
                    </div>

                    <div className={Styles.carousel}>
                        <img src="./karate.jpg" alt="offer" className={Styles.image} />
                    </div>
                </Carousel>
            </div>

            {/*Book Appointment section*/}
            <div className={Styles.Appointment}>
                <Button className={Styles.appointButton}>Book Your Subscription</Button>
                <div className={Styles.appointRight}>
                    <p>at just</p>
                    <h2>RS. 999</h2>
                </div>
            </div>

            {/*add a google map*/}

            {/*additional details on gym*/}
            <div className={Styles.about}>
                <h2>Additional information</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus elit, cursus quis elit in, faucibus malesuada turpis. Etiam tortor neque, luctus quis massa nec, elementum ornare enim. Donec nec dictum libero. Cras at felis nunc. Aliquam rutrum purus id urna malesuada, eget rutrum nisi eleifend. Donec nec tellus arcu. Nullam efficitur, libero vel fermentum posuere, dui dolor laoreet tortor, nec aliquet lorem sem vitae odio. </p>
            </div>

            {/*description about services*/}
            <div className={Styles.about}>
                <h2>Description about services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus elit, cursus quis elit in, faucibus malesuada turpis. Etiam tortor neque, luctus quis massa nec, elementum ornare enim. Donec nec dictum libero. Cras at felis nunc. Aliquam rutrum purus id urna malesuada, eget rutrum nisi eleifend. Donec nec tellus arcu. Nullam efficitur, libero vel fermentum posuere, dui dolor laoreet tortor, nec aliquet lorem sem vitae odio. </p>
            </div>

            {/*services they provide*/}
            <div className={Styles.service}>
            <h2>Services they Provide</h2>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
                 <ServicesProvidedLayout ServiceName={`services they provide`}/>
            </div>

           {/*location map*/}
           <Button className={Styles.map}>Go to Location <LocationOnIcon/></Button>

            <h2 className={Styles.heading}>Read Reviews</h2>
           <Review name={`Name of User`} imgsrc={`tree.jpg`} message={`I really liked this app. This provides really good services and also this is really good gym`}/>
           <Review name={`Name of User`} imgsrc={`tree.jpg`} message={`I really liked this app. This provides really good services and also this is really good gym`}/>
           <Review name={`Name of User`} imgsrc={`tree.jpg`} message={`I really liked this app. This provides really good services and also this is really good gym`}/>
           <Review name={`Name of User`} imgsrc={`tree.jpg`} message={`I really liked this app. This provides really good services and also this is really good gym`}/>
           <Review name={`Name of User`} imgsrc={`tree.jpg`} message={`I really liked this app. This provides really good services and also this is really good gym`}/>
        </div>
    )
}

export default Gym
