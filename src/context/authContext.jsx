import { createContext,useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verityTokenRequest } from "../api/auth";
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
    const [loading,setLoading] = useState(true)
    

    const singnUp = async (user) =>{
        try{
            const res = await registerRequest(user)
            console.log(res.data)
            setAuthenticated(true)  
            setUser(res.data)
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

    const logout = () =>{
        Cookies.remove("token");
        setAuthenticated(false)
        setUser(null)
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
        async function checkLogin () {
            const cookies = Cookies.get();

            if(!cookies.token){
                setAuthenticated(false)
                setLoading(false)
                return setUser(null)
            }

            
                console.log(cookies.token)
                try {
                    const res = await verityTokenRequest(cookies.token)
                    //console.log(res)
                    if(!res.data){
                        setAuthenticated(false)
                        setLoading(false)         
                        return;   
                    }
                    
                    setAuthenticated(true)
                    setUser(res.data)
                    setLoading(false)
                } catch (error) {
                    setAuthenticated(false)
                    setUser(null)
                    setLoading(false)
                }
            
        };
        checkLogin();
    },[])

    return (
        <AuthContext.Provider value={{
            singnUp,
            singnIn,
            logout,
            loading,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

