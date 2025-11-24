import React from "react";
import Dash from "../components/Dash.jsx";

/**
 * Home route for /dashboard/*
 * For now we always render the main Dash UI and
 * ignore dashID so we don't hit any "Invalid dashboard" logic.
 */
const Home = () => {
  return <Dash />;
};

export default Home;
