import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import apiCall from "../api/api";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {formatDate} from "../inputValidation/dateValidationFunctions";
import UserProfileFormFields from "./UserProfileFormFields";
import {useNavigate} from "react-router-dom";

export default function CreateUser() {
    const [errorMessage, setErrorMessage] = useState("");
    const [dob, setDob] = useState("1990-01-02");
    const [rank, setRank] = useState('E1');

    let navigate = useNavigate();

    const changePage = (path) => {
        navigate(path);
    }

    const submitForm = (e) => {
        setErrorMessage("");
        e.preventDefault();

        if (e.target.password.value !== e.target.confirmPassword.value) {
            setErrorMessage("Passwords do not match")
        } else if (!e.target.dodId.value.match(/^\d{10}$/)) {
            setErrorMessage("DODID has incorrect format.");
        } else if (!dob) {
            setErrorMessage("Date of Birth is required.");
        } else {
            apiCall("user", 'add', {
                userName: e.target.userName.value,
                password: e.target.password.value,
                fName: e.target.fName.value,
                lName: e.target.lName.value,
                mI: e.target.mI.value,
                dodId: e.target.dodId.value,
                rank: rank,
                dob: formatDate(dob),
            }).then(handleResults);
        }
    }

    const handleResults = (r) => {
        if (r.wasError) {
            if(r.apiErrorMsg.response.data.includes("already taken")) {
                setErrorMessage("Username is already taken. Please choose another username.");
            } else {
                setErrorMessage("Something went wrong. Please try again later.");
            }

            console.log(r.apiErrorMsg.response.data)
        } else {
            changePage('/login?newAccount=true');
        }
    }

    return (
        <Container component="main" maxWidth="md" sx={{mb: 4}}>
            <Paper
                variant="outlined"
                sx={{
                    my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                    textAlign: "center",
                    boxShadow: 20
                }}>
                <form onSubmit={submitForm}>
                    <Typography
                        variant="h6"
                        sx={{textAlign: 'center', mb: 1}}
                    >
                        Create your Incubator Account
                    </Typography><br/>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                variant="outlined"
                                label="User Name"
                                id="userName"
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="password"
                                error={errorMessage === "Passwords do not match"}
                                variant="outlined"
                                label="Password"
                                type={"password"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                variant="outlined"
                                error={errorMessage === "Passwords do not match"}
                                id="confirmPassword"
                                label="Confirm"
                                type={"password"}
                            />
                        </Grid>

                        <UserProfileFormFields dob={dob} setDob={setDob} rank={rank} setRank={setRank}/>
                    </Grid>
                    <br/>
                    <Typography color='error'>{errorMessage}</Typography>

                    <Button
                        variant="contained"
                        sx={{mr: '15%', mt: 2}}
                        onClick={() => changePage("/login")}
                    >
                        Back to Login
                    </Button>

                    <Button
                        variant="contained"
                        sx={{mt: 2}}
                        type={"submit"}
                    >
                        Create Account
                    </Button><br/>
                </form>
            </Paper>
        </Container>
    )
}
