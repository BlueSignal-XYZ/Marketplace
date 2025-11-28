// /src/routes/components/welcome/LoginForm.jsx
import React, { useState } from "react";
import styled from "styled-components";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../apis/firebase";

import Notification from "../../../components/popups/NotificationPopup";
import { PROMPT_CARD, PROMPT_FORM } from "../../../components/lib/styled";
import { formVariant } from "./motion_variants";
import FormSection from "../../../components/shared/FormSection/FormSection";
import { Input } from "../../../components/shared/input/Input";
import {
  ButtonLink,
  ButtonPrimary,
  ButtonSecondary,
} from "../../../components/shared/button/Button";
import { useAppContext } from "../../../context/AppContext";

/* -------------------------------------------------------------------------- */
/*                               STYLED WRAPPERS                               */
/* -------------------------------------------------------------------------- */

const Card = styled(PROMPT_CARD)`
  max-width: 420px;
  margin: 0 auto;
`;

const Form = styled(PROMPT_FORM)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Header = styled.div`
  margin-bottom: 12px;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
  }

  p {
    margin: 4px 0 0;
    font-size: 13px;
    color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
  }
`;

const ActionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column;

    ${ButtonPrimary}, ${ButtonSecondary} {
      width: 100%;
    }
  }
`;

const FooterRow = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};

  a {
    color: ${({ theme }) => theme.colors?.primary700 || "#0369a1"};
    text-decoration: underline;
    cursor: pointer;
  }
`;

/* -------------------------------------------------------------------------- */
/*                               HELPER FUNCTIONS                              */
/* -------------------------------------------------------------------------- */

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(String(email).toLowerCase());
}

/* -------------------------------------------------------------------------- */
/*                                 LOGIN FORM                                  */
/* -------------------------------------------------------------------------- */

const LoginForm = () => {
  const { ACTIONS } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleError = (message) => {
    console.error("Login error:", message);
    setNotification({
      type: "error",
      message,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      handleError("Please enter both email and password.");
      return;
    }

    if (!isValidEmail(email)) {
      handleError("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      ACTIONS?.setUser?.(user);

      // Let MarketplaceLanding handle redirect, but push a hint
      setTimeout(() => {
        navigate("/marketplace", { replace: true });
      }, 600);
    } catch (err) {
      console.error(err);
      handleError(err?.message || "Unable to sign in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      handleError("Enter your email first to receive a reset link.");
      return;
    }

    if (!isValidEmail(email)) {
      handleError("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);
      await sendPasswordResetEmail(auth, email);
      setNotification({
        type: "success",
        message: "Password reset link sent. Check your inbox.",
      });
    } catch (err) {
      console.error(err);
      handleError(err?.message || "Unable to send reset link.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Card
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={formVariant}
      >
        <FormSection>
          <Header>
            <h2>Sign in to continue</h2>
            <p>Access your marketplace tools, dashboards, and projects.</p>
          </Header>

          <Form onSubmit={handleLogin}>
            <Input
              type="email"
              label="Email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              required
            />

            <Input
              type="password"
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={submitting}
              required
            />

            <ActionsRow>
              <ButtonPrimary type="submit" disabled={submitting}>
                {submitting ? "Signing in..." : "Sign in"}
              </ButtonPrimary>

              <ButtonSecondary
                type="button"
                onClick={handleResetPassword}
                disabled={submitting}
              >
                Reset password
              </ButtonSecondary>
            </ActionsRow>
          </Form>

          <FooterRow>
            Need an account?{" "}
            <ButtonLink
              type="button"
              onClick={() => navigate("/?mode=register")}
            >
              Create one here.
            </ButtonLink>
          </FooterRow>
        </FormSection>
      </Card>

      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};

export default LoginForm;
