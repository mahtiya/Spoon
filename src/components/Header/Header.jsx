import React from 'react'
import HeaderImg from '../../assets/images/spoon.svg.png'

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header_main">
                    <div className="header_logo">
                        <img src={HeaderImg} alt="" />
                    </div>
                    <div className="header_right">
                        <nav>
                            <ul>
                                <li>Features</li>
                                <li>Premium</li>
                                <li>Pricing</li>
                                <li>About</li>
                            </ul>
                        </nav>
                        <div className='header_wrap'>
                            <div className='header_block'></div>
                            <p className='header_suptitle'>Sign in</p>
                            <div>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='start'>
                <div className="container">
                    <div className='start_main'>
                        <h3>Propel your business.</h3>
                        <p className='start_suptitle'>Propel comes with everything you need to get your business rolling.</p>
                        <button className='start_btn'>Get Started</button>
                    </div>
                </div>
            </section>
        </header>
    )
}
