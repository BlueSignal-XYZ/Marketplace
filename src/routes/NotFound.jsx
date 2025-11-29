import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import { getDefaultDashboardRoute } from "../utils/roleRouting";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 4em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
`;

const Button = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.2em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const NotFound = () => {
  const { STATES } = useAppContext();
  const { user, isLoading } = STATES || {};

  // Detect mode based on hostname
  const host = window.location.hostname;
  const mode =
    host === "cloud.bluesignal.xyz" ||
    host.endsWith(".cloud.bluesignal.xyz") ||
    host === "cloud-bluesignal.web.app"
      ? "cloud"
      : "marketplace";

  // Determine home route based on user and mode
  const getHomeRoute = () => {
    if (user?.uid) {
      return getDefaultDashboardRoute(user, mode);
    }
    return "/"; // Login page for both modes
  };

  const homeRoute = getHomeRoute();

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {isLoading ? (
        <>
          <Description>Loading...</Description>
        </>
      ) : user?.uid ? (
        <>
          <Title>404 - Not Found</Title>
          <Description>The page you're looking for doesn't exist.</Description>
          <Button to={homeRoute}>Go Home</Button>
        </>
      ) : (
        <>
          <Title>404 - Not Found</Title>
          <Description>
            The page you're looking for doesn't exist or you do not have access.
          </Description>
          <Button to={homeRoute}>Go Home</Button>
        </>
      )}
    </Container>
  );
};

export default NotFound;
