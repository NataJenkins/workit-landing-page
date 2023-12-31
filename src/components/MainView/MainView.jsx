import React from "react";
import ImageHero from "../../assets/images/image-hero.webp";
import LogoLight from "../../assets/images/logo-light.svg";
import LogoDark from "../../assets/images/logo-dark.svg";
import DarkPurpleBg from "../../assets/images/bg-image-dark-purple.svg";
import LightPurpleBg from "../../assets/images/bg-image-light.svg";
import BgPattern1 from "../../assets/images/bg-pattern-1.svg";
import BgPattern2 from "../../assets/images/bg-pattern-2.svg";
import BgPattern3 from "../../assets/images/bg-pattern-3.svg";
import Founder from "../../assets/images/image-founder.webp";
import Button from "../Button/Button";
import FbIcon from "../../assets/images/icon-facebook";
import TwitterIcon from "../../assets/images/icon-twitter";
import InstagramIcon from "../../assets/images/icon-instagram";
import "./MainView.scss";

export default function MainView() {
    return (
        <div className="container">
            <header className="header">
                <nav className="nav">
                    <a href="/">
                        <img src={LogoLight} alt="" />
                    </a>
                    <Button
                        secondary
                        text="Apply for Access"
                        href="#apply-for-access"
                    />
                </nav>
                <div className="title">
                    <h1 className="heading-l">
                        Data <span>tailored</span> to your needs.
                    </h1>
                    <Button text="Learn more" href="#details" />
                </div>
                <img src={DarkPurpleBg} alt="" className="curve" />
                <img src={BgPattern1} alt="" className="spiral-1" />
                <img src={BgPattern2} alt="" className="spiral-2" />
            </header>
            <main>
                <section className="details" id="details">
                    <div className="image-container">
                        <img src={ImageHero} alt="hero" />
                    </div>
                    <div className="information-container">
                        <div className="information-container__element">
                            <div className="information-container__element-number">
                                1
                            </div>
                            <div className="content">
                                <h2 className="information-container__element-title heading-s">
                                    Actionable insights
                                </h2>
                                <p className="information-container__element-description">
                                    Optimize your products, improve customer
                                    satisfaction and stay ahead of the
                                    competition with our product data analytics.
                                </p>
                            </div>
                        </div>
                        <div className="information-container__element">
                            <div className="information-container__element-number">
                                2
                            </div>
                            <div className="content">
                                <h2 className="information-container__element-title heading-s">
                                    Data-driven decisions
                                </h2>
                                <div className="information-container__element-description">
                                    Make data-driven decisions with our product
                                    data analytics. Our AI-generated reports
                                    help you unlock insights hidden in your
                                    product data.
                                </div>
                            </div>
                        </div>
                        <div className="information-container__element">
                            <div className="information-container__element-number">
                                3
                            </div>
                            <div className="content">
                                <h2 className="information-container__element-title heading-s">
                                    Always affordable
                                </h2>
                                <div className="information-container__element-description">
                                    Always affordable pricing that scales with
                                    your business. Get top-quality product data
                                    analytics services without hidden costs or
                                    unexpected fees.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={LightPurpleBg} alt="" className="curve-2" />
                </section>
                <section className="founder-section" id="apply-for-access">
                    <div className="container">
                        <div className="apply">
                            <img src={Founder} alt="" className="img" />
                            <div className="card">
                                <h2 className="title heading-m ">
                                    Be the first to test
                                </h2>
                                <div className="description">
                                    Hi, I'm Louis Graham, the founder of the
                                    company. Book a demo call with me to become
                                    a beta tester for our app and kickstart your
                                    company. Apply for access below and I’ll be
                                    in touch to schedule a call.
                                </div>
                                <div className="button-container">
                                    <Button
                                        text="Apply for Access"
                                        href="#apply-for-access"
                                    />
                                </div>
                                <img
                                    src={BgPattern3}
                                    alt=""
                                    className="spiral-3"
                                />
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="content">
                            <img src={LogoDark} alt="" />
                            <div className="icons">
                                <a
                                    className="icon"
                                    href="/"
                                    aria-label="facebook"
                                >
                                    <FbIcon />
                                </a>
                                <a
                                    className="icon"
                                    href="/"
                                    aria-label="twitter"
                                >
                                    <TwitterIcon />
                                </a>
                                <a
                                    className="icon"
                                    href="/"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon />
                                </a>
                            </div>
                        </div>
                    </footer>
                </section>
            </main>
        </div>
    );
}
