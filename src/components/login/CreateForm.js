import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import apiCall from "../api/api";
import Grid from "@mui/material/Grid";
import Rank from "../user/Rank";
import DOB from "../user/DOB";
import * as React from "react";

export default function CreateForm({setCurrentPage, setUserCreated}) {
    const [errorMessage, setErrorMessage] = useState("");

    const submitForm = (e) => {
        setErrorMessage("");
        e.preventDefault();

        console.log(e);
        return;

        if (e.target.password.value !== e.target.confirmPassword.value) {
            setErrorMessage("Passwords do not match")
            return;
        }

        apiCall("createUser", 'add', {
            userName: e.target.userName.value,
            password: e.target.password.value
        }).then(handleResults);
    }

    const handleResults = (r) => {

        if (r.wasError) {
            setErrorMessage(r.apiErrorMsg.response.data)
            return;
        }

        setUserCreated(true);
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
                    </Typography>
                    <br/>

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

                        <Grid item xs={12} sm={5}>
                            <TextField
                                id="fName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <TextField
                                id="lName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <TextField
                                id="mI"
                                name="mI"
                                label="MI"
                                fullWidth
                                autoComplete="middle-initial"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <TextField
                                id="dodId"
                                name="dodId"
                                label="Dod ID"
                                type="number"
                                fullWidth
                                autoComplete="dodId"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <Rank updateState={() => {}} propsID={"rank"} value={"E1"}/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <DOB applicationInfo={{dob: "Tue Jan 01 1995 18:00:00 GMT-0600 (Central Standard Time)"}}
                                 setApplicationInfo={() => {}}/>
                        </Grid>
                    </Grid>

                    <Typography color='error'>{errorMessage}</Typography>
                    <Button
                        variant="contained"
                        sx={{mt: 1}}
                        type={"submit"}
                    >
                        Create
                    </Button><br/>
                </form>
            </Paper>
        </Container>

    )
}