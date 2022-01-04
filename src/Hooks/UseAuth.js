import { useContext } from "react"
import { AuthContext } from "../Context/AuthProbider";

const UseAuth = () => {
    return useContext(AuthContext);
}
export default UseAuth;