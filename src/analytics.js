// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-7HJNZX6790"); // your ID
};

export const trackPage = (page) => {
    ReactGA.send({ hitType: "pageview", page });
};
