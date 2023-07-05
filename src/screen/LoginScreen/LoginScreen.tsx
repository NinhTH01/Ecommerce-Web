import { Button, Input } from "antd";
import React from "react";

const LoginScreen = () => {
  const [isSignIn, setSignIn] = React.useState<boolean>(false);

  return (
    <div
      className=" bg-slate-500 w-full h-full justify-center"
      style={{ backgroundSize: "cover", height: 1100 }}
    >
      <div
        className={`bg-white ${!isSignIn ? "h-1/4" : "h-1/5"} p-4`}
        style={{
          width: 500,
          left: "40%",
          top: 350,
          position: "absolute",
          borderRadius: 10,
        }}
      >
        <div>
          <p>Username</p>
          <Input placeholder="Username" />
          <p className="mt-2">Password</p>
          <Input placeholder="Password" />
          {!isSignIn && (
            <>
              <p className="mt-2">New password</p>
              <Input placeholder="New password" />
            </>
          )}
        </div>
        <div className="flex justify-between py-4">
          <Button onClick={() => setSignIn(!isSignIn)}>
            {isSignIn ? "Sign in" : "Already have account"}
          </Button>
          {isSignIn && (
            <Button className="w-1/3 bg-blue-600 text-white font-semibold">
              Log in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
