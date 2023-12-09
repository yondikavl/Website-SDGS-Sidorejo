"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();

    // Assume isLoggedIn is a boolean indicating whether the user is logged in
    const { isLoggedIn } = props;

    useEffect(() => {
      if (isLoggedIn) {
        // If the user is already logged in, redirect to /cms
        router.push("/cms");
      }
    }, [isLoggedIn]);

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      return <FormLogin />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitialProps so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
