import { useState } from "react";
import LoginPage from "./LoginPage";
import CreateForm from "./CreateForm";

import { Create } from "@mui/icons-material";
export default function LoginParent () {
const [currentPage,setCurrentPage] = useState("login");
const [userCreated,setUserCreated] = useState(false)




return(


(currentPage === 'login') ? <LoginPage setCurrentPage={setCurrentPage} userCreated={userCreated}/> : <CreateForm setCurrentPage={setCurrentPage} setUserCreated={setUserCreated}/>

)


}