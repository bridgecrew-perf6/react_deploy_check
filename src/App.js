import React from 'react'

import {Article, Brand, CTA, Feature, Navbar } from "./components";
import {Artpoint, Blog, Features, Footer, Header, Possibility} from "./container";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
                <Brand />
                <Artpoint />
                <Features />
                <Possibility />
                < CTA />
                <Blog />
                <Footer />
        </div>

        )
}

export default App