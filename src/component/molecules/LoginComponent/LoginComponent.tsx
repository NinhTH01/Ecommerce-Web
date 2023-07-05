import React from "react";
import { Product } from "../../../model/Product";
import { Button, Dropdown, Image, Input } from "antd";
import styles from "./styles.module.css";
import DropdownButton from "antd/es/dropdown/dropdown-button";
import { useSignIn } from "../../../service/use-sign-in";

const LoginComponent: React.FC<LoginComponentProps> = () => {
  const [isSignIn, setSignIn] = React.useState<boolean>(false);

  const [
    userName,
    password,
    checkPassword,
    handleChange,
    handleReset,
    handleSignIn,
    error,
    checkError,
    errorMsg,
    checkErrorMsg,
  ] = useSignIn();

  const handleSetSignIn = React.useCallback(() => {
    setSignIn(!isSignIn);
    handleReset();
  }, [handleReset, isSignIn]);

  return (
    <div className={`bg-white ${!isSignIn ? "h-1/4" : "h-1/5"} p-4`}>
      <div>
        <p>Username</p>
        <Input
          placeholder="Username"
          onChange={(text) => handleChange(text)("username")}
          value={userName}
        />
        <p className="mt-2">Password</p>
        <Input
          status={`${error ? "error" : ""}`}
          placeholder="Password"
          onChange={(text) => handleChange(text)("password")}
          value={password}
        />
        {error && (
          <p className=" text-red-500 " style={{ fontSize: 10 }}>
            {errorMsg}
          </p>
        )}

        {!isSignIn && (
          <>
            <p className="mt-2">Check password</p>
            <Input
              status={`${checkError ? "error" : ""}`}
              placeholder="Check password"
              onChange={(text) => handleChange(text)("checkPassword")}
              value={checkPassword}
            />
            {checkError && (
              <p className=" text-red-500 " style={{ fontSize: 10 }}>
                {checkErrorMsg}
              </p>
            )}
          </>
        )}
      </div>
      <div className="flex justify-between py-4">
        <Button onClick={handleSetSignIn}>
          {isSignIn ? "Sign in" : "Already have account"}
        </Button>
        {isSignIn ? (
          <Button className="w-1/3 bg-blue-600 text-white font-semibold">
            Log in
          </Button>
        ) : (
          <Button
            className="w-1/3 bg-blue-600 text-white font-semibold"
            onClick={handleSignIn}
          >
            Sign in
          </Button>
        )}
      </div>
    </div>
  );
};

export interface LoginComponentProps {}

export default LoginComponent;
