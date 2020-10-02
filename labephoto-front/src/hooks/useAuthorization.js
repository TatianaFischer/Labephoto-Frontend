import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function useAuthorization() {
  const history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      alert("Faça Login");
      history.replace("/users/login?error=nologin");
    }
  }, [history]);
}

export default useAuthorization;
