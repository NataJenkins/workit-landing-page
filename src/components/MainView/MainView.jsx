import React from "react";
import ImageHero from "../../assets/images/image-hero.webp";
import LogoLight from "../../assets/images/logo-light.svg";
import DarkPurpleBg from "../../assets/images/bg-image-dark-purple.svg";
import LightPurpleBg from "../../assets/images/bg-image-light.svg";
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
                        Data <span>tailored</span> to your needs.
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
                <div className="information-container">
                    <div className="information-container__element">
                        <div className="information-container__element-number">
                            1
                        </div>
                        <div className="content">
                            <div className="information-container__element-title heading-s">
                                Actionable insights
                            </div>
                            <div className="information-container__element-description">
                                Optimize your products, improve customer
                                satisfaction and stay ahead of the competition
                                with our product data analytics.
                            </div>
                        </div>
                    </div>
                    <div className="information-container__element">
                        <div className="information-container__element-number">
                            2
                        </div>
                        <div className="content">
                            <div className="information-container__element-title heading-s">
                                Data-driven decisions
                            </div>
                            <div className="information-container__element-description">
                                Make data-driven decisions with our product data
                                analytics. Our AI-generated reports help you
                                unlock insights hidden in your product data.
                            </div>
                        </div>
                    </div>
                    <div className="information-container__element">
                        <div className="information-container__element-number">
                            3
                        </div>
                        <div className="content">
                            <div className="information-container__element-title heading-s">
                                Always affordable
                            </div>
                            <div className="information-container__element-description">
                                Always affordable pricing that scales with your
                                business. Get top-quality product data analytics
                                services without hidden costs or unexpected
                                fees.
                            </div>
                        </div>
                    </div>
                </div>
                <img src={LightPurpleBg} alt="bg" className="curve-2" />
            </section>
        </div>
    );
}
