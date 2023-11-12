import { createContext,useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth";
import Cookies from "js-cookie";
export const AuthContext  = createContext();

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must  be used within an AuthProvider")
    }
    return context;
}

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [isAuthenticated,setAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    

    const singnUp = async (user) =>{
        try{
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setAuthenticated(true)  
        }catch(error){
            setErrors(error.response.data)
        }
    }

    const singnIn = async (user) =>{
        try {
            const res = await loginRequest(user)
            console.log(res)
            setAuthenticated(true) 
            setUser(res.data)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    useEffect(()=>{
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            },5000)
            return () => clearTimeout(timer)
        }
    },[errors])

    useEffect(()=>{
        const cookies = Cookies.get();
        if(cookies.token){
            console.log(cookies.token)
        }
    },[])

    return (
        <AuthContext.Provider value={{
            singnUp,
            singnIn,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

