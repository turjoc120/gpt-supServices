import { useContext } from "react";
import { AuthContext } from "views/auth/context/AuthContext";



const useAuthContext = () => {
    return useContext(AuthContext)
};

export default useAuthContext;