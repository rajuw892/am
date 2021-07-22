import React from 'react'
import Gym from '../DescriptionsOfServices/gym/Gym';
import Footer from '../components/Footer/Footer';
import Rating from '../components/Rating/RatingGive';
import RemainingDays from '../components/RemainingDays/RD';
function subscriptionclicked() {
    return (
        <div>
            
            <Gym />
            <Rating />
            <RemainingDays />
            <Footer />
        </div>
    )
}

export default subscriptionclicked
