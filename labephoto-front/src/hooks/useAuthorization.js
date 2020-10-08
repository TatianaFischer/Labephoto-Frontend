import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function useAuthorization() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      alert("Faça Login");
      history.push("/users/login");
    }
  }, []);
}

export default useAuthorization;
