import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const firebaseinit = () => {
    initializeApp(firebaseConfig);
}
export default firebaseinit;