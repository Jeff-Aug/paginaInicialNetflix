import React from 'react'
import './Header.css'


export default function Header({black}){
    return(
        <header className={ black ? "black" : '' }>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://www.pngall.com/wp-content/uploads/4/Netflix-Logo-Sticker.png" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href='/'>
                    <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57" alt="User"></img>
                </a>
            </div>
        
        
        </header>
    )
}