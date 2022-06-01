import {useState} from "react";
import LoginPage from "./LoginPage";
import CreateForm from "./CreateForm";
import {Create} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

export default function LoginParent() {
    const [currentPage, setCurrentPage] = useState("login");
    const [userCreated, setUserCreated] = useState(false);

    let navigate = useNavigate();

    const changePage = (path) => {
        navigate(path);
    }


    return (
        (currentPage === 'login') ?
            <LoginPage setCurrentPage={setCurrentPage} userCreated={userCreated} changePage={changePage}/> :
            <CreateForm setCurrentPage={setCurrentPage} setUserCreated={setUserCreated} changePage={changePage}/>

    )
}