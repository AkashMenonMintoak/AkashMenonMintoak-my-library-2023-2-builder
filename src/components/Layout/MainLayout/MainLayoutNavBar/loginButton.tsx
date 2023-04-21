import React from "react";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";

// import { logOut } from "../../../../slice/authSlice";

export default function LoginButton({ isLogin, mobileNumber, loginAction }: any) {
  const router = useRouter();
  // const dispatch = useDispatch();

  return (
    <button className="mintoak-library-login-button">
      {isLogin ? (
        <p
          className="mintoak-library-login-button-p"
          onClick={() => router.push("/")}
        >
          <span className="mintoak-library-login-button-span">
            <span>Hi!</span>
            <span>{mobileNumber}</span>
          </span>
          Logout
        </p>
      ) : (
        <span onClick={loginAction}>Login</span>
      )}
    </button>
  );
}
