import React from "react";

export function useSignIn(): [
  string,
  string,
  string,
  (text: any) => (type: string) => void,
  () => void,
  () => void,
  boolean,
  boolean,
  string,
  string
] {
  const [userName, setUserName] = React.useState<string>("");

  const [password, setPassword] = React.useState<string>("");

  const [checkPassword, setCheckPassword] = React.useState<string>("");

  const [error, setError] = React.useState<boolean>(false);

  const [checkError, setCheckError] = React.useState<boolean>(false);

  const [errorMsg, setErrorMsg] = React.useState<string>("");

  const [errorCheckMsg, setErrorCheckMsg] = React.useState<string>("");

  const handleTextChange = React.useCallback(
    (text: any) => (type: string) => {
      if (type === "username") {
        setUserName(text.target.value);
      } else if (type === "password") {
        setPassword(text.target.value);
      } else if (type === "checkPassword") {
        setCheckPassword(text.target.value);
      }
    },
    []
  );

  const handleReset = React.useCallback(() => {
    setCheckPassword("");
    setUserName("");
    setPassword("");
  }, []);

  const handleSignIn = React.useCallback(() => {
    if (password !== checkPassword) {
      setCheckError(true);
      setErrorCheckMsg("Different from the password");
      return;
    } else {
      const passwordExp =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;
      console.log(passwordExp.test(password));
      if (!passwordExp.test(password)) {
        setError(true);
        console.log(1);
        setErrorMsg("1 digit, 1 lowercase, 1 uppercase, 1 number required");
        return;
      }
      setCheckError(false);
      setError(false);

      console.log("Success");
    }
  }, [checkPassword, password]);

  return [
    userName,
    password,
    checkPassword,
    handleTextChange,
    handleReset,
    handleSignIn,
    error,
    checkError,
    errorMsg,
    errorCheckMsg,
  ];
}
