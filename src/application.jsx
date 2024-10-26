import React from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const mountPoint = document.querySelector(".application");
const root = createRoot(mountPoint);
const userDeck = [
    {
        hp: 10,
        atk: 1,
        def: 1,
        description: "Basic card"
    }
];
const Card = ({ hp, atk, def, description }) => {
    return (
        <div className="card">
            <div className="card-stats">
                <b>HP: {hp}</b>
                <b>ATK: {atk}</b>
                <b>DEF: {def}</b>
            </div>
            <div className="card-image"></div>
            <p className="card-description">
                {description}
            </p>
        </div>
    );
};
const Home = () => {
    return (<>
            <h1>Home</h1>
            {userDeck.map((item) => {
                return <Card {...item} />
            })}
        </>
    );
};
const Island = () => {
    return (<h1>Island</h1>);
};
const Village = () => {
    return (<h1>Village</h1>);
};
const UnknownTerritory = () => {
    return (<h1>Unknown territory</h1>);
};

const ApplicationHeader = () => {
    return (<header className="app-header">
        <nav className="app-nav">
            <a href="/">Home</a>
            <a href="/island">Island</a>
            <a href="/village">Village</a>
            <a href="/unknown-territory">Unknown territory</a>
        </nav>
    </header>);
};

const ApplicationBody = () => {
    return (<div className="app-body">
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/island" element={<Island/>}/>
                <Route path="/village" element={<Village/>}/>
                <Route path="/unknown-territory" element={<UnknownTerritory/>}/>
            </Routes>
        </BrowserRouter>
    </div>);
};

export const Application = () => {
    return (
        <>
            <ApplicationHeader/>
            <ApplicationBody/>
        </>
    );
};

root.render(<Application/>);
