import React from "react";
import ScrollableAnchor from "react-scrollable-anchor"
import { FaTelegram, FaEnvelope } from 'react-icons/fa';

import Alan from './Alan.jpg';
import style from './index.css';

const AboutMe = () => {

    return (
        <section className={style.aboutMe}>
            <ScrollableAnchor id={'aboutMe'}>
                <h1 className={style.header}>Front-end &nbsp; <span className={style.headerAnimation}> Developer</span></h1>
            </ScrollableAnchor>

            <h4 className={style.headerChild}>I design and code beautifully simple things, and I love what I do.</h4>
            <div className={style.aboutMeContent}>
                <img src={Alan} alt="portrait" />
                <article className={style.menu}>
                    Hi, I’m Alan. Nice to meet you. <br />
                    I'm a frontend developer, creating responsive web applications and using popular libraries like Vue and React in my work.
                    I've been coding HTML, CSS, and JavaScript for over 6 years.
                    I create digital products that are pleasant to use.
                    I love finding elegant solutions and work well in a team.
                    Do you have an interesting project?
                    Get in touch with me

                    <ul className={style.unstyledList}>
                        <li><FaTelegram /> telegram: @native_alan</li>
                        <li><FaEnvelope /> alanb.develop@gmail.com</li>
                    </ul>
                </article>
            </div>
        </section>
    )
};

export default AboutMe;