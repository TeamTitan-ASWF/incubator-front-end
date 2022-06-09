import {Divider, FormControl, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import {useContext, useEffect, useState} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";
import {useNavigate} from "react-router-dom";
import AppSnackBar from "../ui/AppSnackBar";
import Grid from "@mui/material/Grid";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export default function LoginPage() {
    const appContext = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleCallBack = (r) => {
        //console.log("hey")
        //console.log(jwtDecode(r.credential))
        //let tempAccount =  jwtDecode(r.credential);
        //login(tempAccount)
        apiCall('login', 'add', {"googleData": r.credential}).then(setUser);
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);

        if (queryParams.get("newAccount") === "true") {
            setShowSnackBar(true);
        }
        /*global google*/
        google.accounts.id.initialize({
            client_id: "23314949546-c69jdm466a2h99bqb009abt550gns9cl.apps.googleusercontent.com",
            callback: handleCallBack,

        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: 'outline', size: "large"}
        )

    }, [])

    const [showSnackBar, setShowSnackBar] = useState(false);
    let navigate = useNavigate();

    const changePage = (path) => {
        navigate(path);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const login = (e) => {
        e.preventDefault();

        apiCall('login', 'add', {
            "userName": e.target.email.value,
            "password": e.target.password.value
        }).then(setUser);
    }

    const setUser = (r) => {
        if (r.wasError) {
            setErrorMessage("Something went wrong. Please double-check your email/password.");
        } else {
            if (r.apiStatus === 202) {
                // google account, not new account
                appContext.setIsValidated(true);
                appContext.setUser(r.apiData);
                localStorage.setItem("isValidated", 'true');
                localStorage.setItem("userData", JSON.stringify(r.apiData));

                changePage("/");
            } else if (r.apiStatus === 201) {
                // google acct, new account/created
                appContext.setIsValidated(true);
                appContext.setUser(r.apiData);
                localStorage.setItem("isValidated", 'true');
                localStorage.setItem("userData", JSON.stringify(r.apiData));

                changePage("/profile");
            } else if (r.apiStatus === 200) {
                // regular login, not google
                appContext.setIsValidated(true);
                appContext.setUser(r.apiData);
                localStorage.setItem("isValidated", 'true');
                localStorage.setItem("userData", JSON.stringify(r.apiData));

                changePage("/");
            } else {
                // got here with a different status, should not happen.
            }
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

            {/*<Typography>Login Page</Typography>*/}
            <Typography variant={"h4"}>Login</Typography>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <form onSubmit={login}>
                        <TextField sx={{ m: 1, width: '25ch' }}
                            required
                            error={!!errorMessage}
                            variant="standard"
                            label="E-mail Address"
                            id="email"
                        />
                        <br/><br/>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                required
                                error={!!errorMessage}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        {/*<TextField*/}
                        {/*    required*/}
                        {/*    error={!!errorMessage}*/}
                        {/*    id="password"*/}
                        {/*    variant="outlined"*/}
                        {/*    label="Password"*/}
                        {/*    type={"password"}*/}
                        {/*/>*/}
                        <br/><br/>
                        <Typography color='error'>{errorMessage}</Typography>
                        <br/>

                        <br/>
                        <Button variant={"contained"} sx={{mr: '3%'}} type="submit">Login</Button>
                        <Button variant={"contained"} onClick={() => changePage("/create_account")}>Create Account</Button>
                    </form>
                </Grid>
                <Grid item xs={2}>
                    <Divider orientation={"vertical"}><Typography component={"span"} variant={"h6"}>Or</Typography></Divider>
                </Grid>

                <Grid item xs={5}>
                    <Typography variant={"h6"}>Authenticate using your Google Account</Typography>
                    <br /><br/>
                    <div align={"center"} id="signInDiv"></div>
                </Grid>

            </Grid>



            {showSnackBar && <AppSnackBar isShown={showSnackBar}
                                          message={"Account successfully created. Please login with new username/password."}
                                          severity={"success"}/>}
        </Paper>
    )
}