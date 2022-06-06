import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import {useContext, useState,useEffect} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";


export default function LoginPage({userCreated}) {
    const appContext = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState("");
    const handleCallBack = (r) => {
        console.log("hey")
        console.log(jwtDecode(r.credential))
    }

    useEffect(()=> {
        /*global google*/
        google.accounts.id.initialize({
            client_id: "23314949546-c69jdm466a2h99bqb009abt550gns9cl.apps.googleusercontent.com",
            callback: handleCallBack,
            
        })     
        google.accounts.id.renderButton(
            
            document.getElementById("signInDiv"),
            {theme : 'outline',size: "large"}
        )

        console.log(document.cookie)
      
    }, [])

    let navigate = useNavigate();

    const changePage = (path) => {
        navigate(path);
    }

    const login = (e) => {
        e.preventDefault();

        apiCall('login', 'add', {userName: e.target.userName.value, password: e.target.password.value}).then(setUser);

    }

    const setUser = (r) => {
        if (r.wasError) {
            setErrorMessage("Wrong Username or Password")
        } else {
            console.log(r.apiData);
            appContext.setIsValidated(true)
            appContext.setUser(r.apiData)
            localStorage.setItem("isValidated", 'true');
            localStorage.setItem("userData", JSON.stringify(r.apiData));

            changePage("/");
        }
    }

    return (
        <Paper
            variant="outlined"
            sx={{
                my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                textAlign: "center",
                boxShadow: 20
            }}>
            {userCreated ? <> <Typography>Account Created Successfully!</Typography> <br/> </> : ""}

            <Typography>Login Page</Typography>
                <div id="signInDiv">

                </div>




            <br/>
            <form onSubmit={login}>
                <TextField
                    required
                    error={errorMessage ? true : false}
                    variant="outlined"
                    label="User Name"
                    id="userName"

                /><br/><br/>
                <TextField
                    required
                    error={errorMessage ? true : false}
                    id="password"
                    variant="outlined"
                    label="Password"
                    type={"password"}

                /><br/><br/>
                <Typography color='error'>{errorMessage}</Typography>
                <Button variant={"contained"} sx={{mr: '3%'}} type="submit">Login</Button>
                <Button variant={"contained"} onClick={() => changePage("/create_account")}>Create User</Button>
            </form>
        </Paper>
    )
}