import {Select, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import apiCall from "../api/api";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {formatDate} from "../inputValidation/dateValidationFunctions";
import UserProfileFormFields from "../user/UserProfileFormFields";
import {useNavigate} from "react-router-dom";

export default function CreateForm({setCurrentPage, setUserCreated}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [dob, setDob] = useState(null);
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
            return;
        }

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

    const handleResults = (r) => {
        if (r.wasError) {
            setErrorMessage("Something went wrong.");
            console.log(r.apiErrorMsg.response.data)
            return;
        }

        // setUserCreated(true);
        setCurrentPage('login');
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

                        <UserProfileFormFields dob={dob} setDob={setDob} rank={rank} setRank={setRank} />
                    </Grid>

                    <Typography color='error'>{errorMessage}</Typography>

                    <Button
                        variant="contained"
                        sx={{mr: 2, mt: 2}}
                        onClick={() => changePage("/login")}
                    >
                        Login
                    </Button>

                    <Button
                        variant="contained"
                        sx={{mt: 2}}
                        type={"submit"}
                    >
                        Create
                    </Button><br/>
                </form>
            </Paper>
        </Container>
    )
}