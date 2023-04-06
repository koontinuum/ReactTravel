import React from 'react'
import css from './Footer.module.scss'
import mail from '../../assets/mail.svg'
import location from '../../assets/location.svg'
import right from '../../assets/arrow.svg'
import face from '../../assets/facebook.svg'
import insta from '../../assets/insta.svg'
import IN from '../../assets/in.svg'
import twitter from '../../assets/twitter.svg'
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className={css.wrapper}>
        <div className={css.newSettler}>
            <div className={css.newSettlerInfo}>
            <h1>Newsettler</h1>
            <p>Sign up now to receive hot special offers <br />
            and information about the best tours! </p>
            <span className={css.newInp}>
            <input type="text" placeholder='Enter your email'/>
            <button>
                <img src={right} alt="" />
            </button>
            </span>
            </div>
        </div>
    {/* <div className={css.zone}>
        <img className={css.logo} src={logo} alt="" />
        <div className={css.contacts}>
            <p className={css.contactText}>The starting point for your next project 
                 based on easy-to-customize Material-UI 
                 © helps you build apps faster and better.</p>
            <div className={css.how2Find}>
                <div className={css.Email}>
                <img src={mail} alt="" />
                <p>info@example.com</p>
                </div>
                <div className={css.place}>
                <img src={location} alt="" />
                <p>655 Schaefer Dale</p>
                </div>
            </div>
            <div className={css.inputContact}>
                <input type="text" placeholder='Email adress'/>
                <button className={css.inputBtn}><img src={right} alt="" /></button>
            </div>
        </div>
        <div className={css.socials} >
            <img src={face} alt="" />
            <img src={insta} alt="" />
            <img src={IN} alt="" />
            <img src={twitter} alt="" />
        </div>
        <div className={css.service}>
            <p className={css.copyright}>© 2021. All rights reserved</p>
            <div className={css.feedBack}>
                <p className={css.copyright}>Help Center</p>
                <p className={css.copyright}>Terms of Service</p>
            </div>
        </div>
    </div> */}
    </div>
  )
}

export default Footer