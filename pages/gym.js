import React from 'react'
import Banner from '../components/BannerForGym/Banner';
import Consult from '../components/Consult/Consult';
import Trainer from '../components/Trainer/Trainer';
import Offers from '../components/Offers/Offers';
import Gym from '../components/Gym/Gym';
import SubscriptionBanner from '../components/SubscriptionBanner/SusBanner';
import FindTrainer from '../components/FindTrainer/Trainer';
import Blogs from '../components/Blogs/Blogs';
import Footer from '../components/Footer/Footer';

function gym() {
    return (
        <div>
               
              <Banner />
              <Offers />
              <Gym />
              <SubscriptionBanner />
              <Blogs/>
              <Footer/>
        </div>
    )
}

export default gym
