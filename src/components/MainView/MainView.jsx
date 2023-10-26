import React from "react";
import ImageHero from "../../assets/images/image-hero.webp";
import LogoLight from "../../assets/images/logo-light.svg";
import DarkPurpleBg from "../../assets/images/bg-image-dark-purple.svg";
import BgPattern1 from "../../assets/images/bg-pattern-1.svg";
import BgPattern2 from "../../assets/images/bg-pattern-2.svg";
import Button from "../Button/Button";
import "./MainView.scss";

export default function MainView() {
    return (
        <div className="container">
            <header className="header">
                <nav className="nav">
                    <img src={LogoLight} alt="logo" />
                    <Button secondary text="Apply for Access" />
                </nav>
                <div className="title">
                    <h1 className="heading-l">
                        Data <span>tailored</span> to your needs
                    </h1>
                    <Button text="Learn more" />
                </div>
                <img src={DarkPurpleBg} alt="logo" className="curve" />
                <img src={BgPattern1} alt="logo" className="spiral-1" />
                <img src={BgPattern2} alt="logo" className="spiral-2" />
            </header>
            <section className="details">
                <div className="image-container">
                    <img src={ImageHero} alt="hero" />
                </div>
            </section>
        </div>
    );
}
