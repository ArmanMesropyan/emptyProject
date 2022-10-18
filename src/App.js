import React, {useEffect} from "react";
import './assets/style/index.scss'
import Article from "./pages/article";
import Header from "./pages/header";
import {gsap} from "gsap-trial";
import {ScrollTrigger} from "gsap-trial/dist/ScrollTrigger";
import {ScrollSmoother} from "gsap-trial/dist//ScrollSmoother";

function App() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 0.5,
            effects: true,
            normalizeScroll: false, //disabling this makes ScrollSmoother not bug out on Iphone
            ignoreMobileResize: true,
        })
    }, [])


    return (
        <div className="wrapper">
            <div className="content" style={{willChange: 'transform'}}>
                <Header/>
                <Article/>
            </div>
        </div>
    );
}

export default App;
