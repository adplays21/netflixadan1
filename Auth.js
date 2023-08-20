import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
// import Cookies from "universal-cookie";
// import "../styles/auth.css";
// import NavBar from "./NavBar.jsx";
// const cookies = new Cookies();
export const Auth = (props) => {
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result)
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  
};