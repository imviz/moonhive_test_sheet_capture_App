import { createContext,useContext,useState } from "react"
import axios from "../Axios/Axios";
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const AuthContext=createContext()

   
export default AuthContext;
export const AuthProvider=({children})=>{

   
    const navigate=useNavigate()
    let [authToken,setAuthToken]=useState(()=>localStorage.getItem('authToken')? JSON.parse(localStorage.getItem('authToken')):null)
    let [admin,setAdmin]=useState(()=>localStorage.getItem('authToken')? jwt_decode(localStorage.getItem('authToken')):null)
    let [user,setUser]=useState(()=>localStorage.getItem('userAuthToken')? jwt_decode(localStorage.getItem('userAuthToken')):null)
    let [userToken,setUserToken]=useState(()=>localStorage.getItem('userAuthToken')? JSON.parse(localStorage.getItem('userAuthToken')):null)

    // for error showing
    const [error,setError]=useState('')

    const [open, setOpen] =useState(false);

        const handleClick = () => {
        setOpen(true);
        };


    const Adminlogin=async(email,password)=>{
        await axios.post('adminside/login/',{email:email,password:password}).then((res)=>{ 
            console.log(res.data)
            if (res.status==200){     
                if (res.data.is_admin){     
                    localStorage.setItem('authToken',JSON.stringify(res.data))
                    localStorage.setItem('token',JSON.stringify(res.data.access))              
                    setAdmin(res.data.token)   
                    setAuthToken(res.data)
                    navigate('/adminHome')
                }else{               
                    localStorage.setItem('userAuthToken',JSON.stringify(res.data))
                    localStorage.setItem('usertoken',JSON.stringify(res.data.access))              
                    setUser(res.data.token)   
                    setUserToken(res.data)
                    navigate('/')
                }
            
                localStorage.setItem('userId',JSON.stringify(res.data.id))             
            }
        }).catch((err)=>{         
            console.log(err.response.data.detail)
            setError(err.response.data.detail)
            handleClick()
        })       
    }


 
 
    let logoutAdmin=()=>{         
        setAuthToken(null)
        setAdmin(null)
        setUser(null)
        localStorage.removeItem('authToken')
        localStorage.removeItem('token')
        localStorage.removeItem('userAuthToken')
        localStorage.removeItem('usertoken')
        localStorage.removeItem('userId')
        navigate('/login');
    }


    let contextData={
        Adminlogin:Adminlogin,
        authToken:authToken,
        user:user,
        error:error,
        setOpen:setOpen,
        open:open,
        logoutAdmin:logoutAdmin,
        admin:admin,
        userToken:userToken,
     
        
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}