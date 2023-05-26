import React, { useEffect } from "react";
import "./About.scss";
import WavingPic from "../../img/waving-memoji.png";
import { images } from "../../constants/index";
import { useAnimation, motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

const mySkills = [
    images.html,
    images.css,
    images.javascript,
    images.react,
    images.redux,
    images.mongodbicon2,
    images.postgresql,
    images.prisma,
    images.nodejsicon,
    images.sass,
    images.tailwindicon,
    images.git,
];

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="about" id="about">
            <div className="about-left">
                <div className="a-card">
                    <img
                        src={WavingPic}
                        alt="waving-memoji"
                        className="waving-memoji"
                    />
                </div>
                <a href="#project-list" class="button scroll">
                    <span class="scroll-down-arrow"></span>
                </a>
            </div>
            <div className="about-right">
                <div className="about-me">
                    <h1 className="about-title">A little about me</h1>
                    <p className="description">
                        My name is Brandon Newsome and I am a Software Developer
                        from Baltimore, MD. From the moment I downloaded my
                        first IDE I fell in love and I told myself that I{" "}
                        <span className="big-letters">
                            <b>had</b>
                        </span>{" "}
                        to break into this field. When I'm not working on
                        personal projects you can usually find me watching anime
                        or playing Smash Bros. with my son.
                    </p>
                </div>
                <div className="skills">
                    <h1 className="skills-title">Skills</h1>

                    <motion.ul
                        className="skill-icon-container container"
                        variants={container}
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                    >
                        {mySkills.map((circle, index) => (
                            <motion.li
                                className="circle item"
                                key={`circle-${index}`}
                                variants={item}
                            >
                                <img
                                    src={circle}
                                    alt="circle"
                                    className="skill-image"
                                />
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
                <a href="#project-list" class="button scroll hidden">
                    <span class="scroll-down-arrow"></span>
                </a>
            </div>
        </div>
    );
};

export default About;
