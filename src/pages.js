import React from 'react' // = require("react");
import { Link, Outlet, useLocation } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1>
                [Company Website]
            </h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>
                [About]
            </h1>
            <Outlet />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h2>
                Our Services
            </h2>
        </div>
    );
}

export function CompanyHistory() {
    return (
        <div>
            <h2>
                Company History
            </h2>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <h2>
                Our Location
            </h2>
        </div>
    );
}


export function Events() {
    return (
        <div>
            <h1>
                [Events]
            </h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>
                [Contact]
            </h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/events">Events</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export function Oops404() {
    let location = useLocation();
    console.log(location);

    return (
        <div>
            <h1>{location.pathname} page not found! Oops!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}
