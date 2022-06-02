import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import {useContext, useState} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";


export default function LoginPage({setCurrentPage, userCreated, changePage}) {
    const appContext = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState("");

    const login = (e) => {
        e.preventDefault();

        apiCall('login', 'add', {userName: e.target.userName.value, password: e.target.password.value}).then(setUser);

    }


    const setUser = (r) => {
        if (r.wasError) {
            setErrorMessage("Wrong Username or Password")
        }
        appContext.setIsValidated(true)
        appContext.setUser(r.apiData)
        changePage("/");

    }


    return (
        <Paper
            variant="outlined"
            sx={{
                my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                textAlign: "center",
                boxShadow: 20
            }}>
            {userCreated ? <> <Typography>Account Created Succesfully!</Typography> <br/> </> : ""}

            <Typography>Login Page</Typography>

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
                <Button type="submit">Login</Button>
                <Button onClick={() => setCurrentPage("createForm")}>Create User</Button>
            </form>
        </Paper>


    )


}