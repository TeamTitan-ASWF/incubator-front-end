import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
<<<<<<< HEAD
import {useContext, useState,useEffect} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";

=======
import {useContext, useEffect, useState} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";
import {useNavigate} from "react-router-dom";
import AppSnackBar from "../ui/AppSnackBar";
>>>>>>> 7d89f28ce1cf972dbd2070ca1fea5c96c7af5ceb

export default function LoginPage({userCreated}) {
    const appContext = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState("");
<<<<<<< HEAD
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
=======
    const [showSnackBar, setShowSnackBar] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);

        if (queryParams.get("newAccount") === "true") {
            setShowSnackBar(true);
        }

    }, []);

>>>>>>> 7d89f28ce1cf972dbd2070ca1fea5c96c7af5ceb

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

<<<<<<< HEAD
            <Typography>Login Page</Typography>
                <div id="signInDiv">

                </div>



=======
            <Typography variant={"h4"}>Login</Typography>
>>>>>>> 7d89f28ce1cf972dbd2070ca1fea5c96c7af5ceb

            <br/>
            <form onSubmit={login}>
                <TextField
                    required
                    error={!!errorMessage}
                    variant="outlined"
                    label="User Name"
                    id="userName"
                />
                <br/><br/>
                <TextField
                    required
                    error={!!errorMessage}
                    id="password"
                    variant="outlined"
                    label="Password"
                    type={"password"}
                />
                <br/><br />
                <Typography color='error'>{errorMessage}</Typography>
                <br/>
                <Button variant={"contained"} sx={{mr: '3%'}} type="submit">Login</Button>
                <Button variant={"contained"} onClick={() => changePage("/create_account")}>Create User</Button>
            </form>
            {showSnackBar && <AppSnackBar isShown={showSnackBar}
                                          message={"Account successfuly created. Please login with new username/password."}
                                          severity={"success"}/>}
        </Paper>
    )
}