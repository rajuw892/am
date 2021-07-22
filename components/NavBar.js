import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Styles from './Navbar.module.css';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    const router = useRouter()

    const isActive = (r) => {
        if(r === router.pathname){
            return " active"
        }else{
            return ""
        }
    }

    return (
        <div className={Styles.Header_section}>
        <div className={Styles.Header_left}>
              <Link href="/">
              <img src="/Images/logo.png" alt="" />
              </Link>
        </div>
        <div className={Styles.Header_right}>
             <div className={Styles.dropdown}>
                   <h5 className={Styles.Header_right_heading_dropdown_mobile}>MORE <ArrowDropDownIcon /></h5>
                   <div className={Styles.Header_dropdown_more}>
                        {/* dropdown for more will be created */}
                        <a className={Styles.anchortag} href="#services">SERVICES</a>
                        <a className={Styles.anchortag} href="#event">EVENTS</a>
                        <a className={Styles.anchortag} href="#care">CARE</a>
                        <a className={Styles.anchortag} href="#consult">CONSULT</a>
                   </div>
             </div>


             <div className={Styles.dropdown}>
                   <p className={Styles.Header_right_heading_dropdown}>SERVICES <ArrowDropDownIcon /></p>
                   <div className={Styles.Header_dropdown_services}>
                        {/* dropdown for services will be created */}
                        <Link href="/gym">
                        <a className={Styles.anchortag + isActive('/gym')}>GYM</a>
                        </Link>
                        <a className={Styles.anchortag} href="./yoga">YOGA</a>
                        <a className={Styles.anchortag} href="./dance">DANCE</a>
                        <a className={Styles.anchortag} href="./karate">KARATE</a>
                        <a className={Styles.anchortag} href="./trekking">TREKKING</a>
                   </div>
             </div>
          
             <p className={Styles.Header_right_heading}><a className={Styles.anchortag} href="#event" className={Styles.anchortag}>EVENTS</a></p>
             <p className={Styles.Header_right_heading}><a className={Styles.anchortag} href="#care" className={Styles.anchortag}>CARE</a></p>
             <p className={Styles.Header_right_heading}><a className={Styles.anchortag} href="#consult" className={Styles.anchortag}>CONSULT</a></p>
              <Link href="/signin">  
             <Button>LOGIN</Button>
             </Link>   

             <Link href="/register">
             <Button className={Styles.button_design}>SIGNUP</Button>
             </Link>
             <SearchIcon className={Styles.searchButton}/>
        </div>
   </div>

    )
}

export default Navbar
