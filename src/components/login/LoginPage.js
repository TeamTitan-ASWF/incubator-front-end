import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import jwtDecode from "jwt-decode";
import {useContext, useEffect, useState} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";
import {useNavigate} from "react-router-dom";
import AppSnackBar from "../ui/AppSnackBar";
export default function LoginPage({userCreated}) {
    const appContext = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState("");

    const handleCallBack = (r) => {
        console.log("hey")
        console.log(jwtDecode(r.credential))
        let tempAccount =  jwtDecode(r.credential);
        //login(tempAccount)
        apiCall('login', 'add', {user : r.credential}).then(setUser);
    }

    useEffect(()=> {
        const queryParams = new URLSearchParams(window.location.search);

        if (queryParams.get("newAccount") === "true") {
            setShowSnackBar(true);
        }
        /*global google*/
        google.accounts.id.initialize({
            client_id: "23314949546-c69jdm466a2h99bqb009abt550gns9cl.apps.googleusercontent.com",
            callback: handleCallBack,
            
        })
        /*global google*/
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme : 'outline',size: "large"}
        )


      
    }, [])

    const [showSnackBar, setShowSnackBar] = useState(false);



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
            setErrorMessage("Something went wrong")
        } else {
          if(r.apiStatus === 202){
              appContext.setIsValidated(true)
              appContext.setUser(r.apiData)
              localStorage.setItem("isValidated", 'true');
              localStorage.setItem("userData", JSON.stringify(r.apiData));
              changePage("/");
          }else if(r.apiStatus === 201){
              appContext.setIsValidated(true)
              appContext.setUser(r.apiData)
              localStorage.setItem("isValidated", 'true');
              localStorage.setItem("userData", JSON.stringify(r.apiData));
              changePage("/profile");
          }
            // appContext.setIsValidated(true)
            // appContext.setUser(r.apiData)
            // localStorage.setItem("isValidated", 'true');
            // localStorage.setItem("userData", JSON.stringify(r.apiData));
            //
            // changePage("/");
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

            <Typography>Login Page</Typography>
            <Typography variant={"h4"}>Login</Typography>
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
                <div id="signInDiv"></div>
                <br/>
                <Button variant={"contained"} sx={{mr: '3%'}} type="submit">Login</Button>
                <Button variant={"contained"} onClick={() => changePage("/create_account")}>Create User</Button>
            </form>
            {showSnackBar && <AppSnackBar isShown={showSnackBar}
                                          message={"Account successfully created. Please login with new username/password."}
                                          severity={"success"}/>}
        </Paper>
    )
}