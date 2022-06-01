import {Select, TextField} from "@mui/material";
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
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import {formatDate} from "../inputValidation/dateValidationFunctions";

export default function CreateForm({setCurrentPage, setUserCreated}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [dob, setDob] = useState(null);

    const submitForm = (e) => {
        setErrorMessage("");
        e.preventDefault();

        //console.log(e);
        //return;

        if (e.target.password.value !== e.target.confirmPassword.value) {
            setErrorMessage("Passwords do not match")
            return;
        }

        apiCall("createUser", 'add', {
            userName: e.target.userName.value,
            password: e.target.password.value,
            fName: e.target.fName.value,
            lName: e.target.lName.value,
            mI: e.target.mI.value,
            dodId: e.target.dodId.value,
            rank: e.target[10].value,
            dob: formatDate(dob),
        }).then(handleResults);
    }

    const handleResults = (r) => {
        if (r.wasError) {
            setErrorMessage("Something went wrong.");
            console.log(r.apiErrorMsg.response.data)
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
                            <Select
                                labelId="demo-simple-select-label"
                                id="rank"
                                name="rank"
                                label="Rank"
                                defaultValue="E1"
                            >
                                <MenuItem value={"E1"}>E1</MenuItem>
                                <MenuItem value={"E2"}>E2</MenuItem>
                                <MenuItem value={"E3"}>E3</MenuItem>
                                <MenuItem value={"E4"}>E4</MenuItem>
                                <MenuItem value={"E5"}>E5</MenuItem>
                                <MenuItem value={"E6"}>E6</MenuItem>
                                <MenuItem value={"E7"}>E7</MenuItem>
                                <MenuItem value={"E8"}>E8</MenuItem>
                                <MenuItem value={"E9"}>E9</MenuItem>
                                <MenuItem value={"O1"}>O1</MenuItem>
                                <MenuItem value={"O2"}>O2</MenuItem>
                                <MenuItem value={"O3"}>O3</MenuItem>
                                <MenuItem value={"O4"}>O4</MenuItem>
                                <MenuItem value={"O5"}>O5</MenuItem>
                                <MenuItem value={"O6"}>O6</MenuItem>
                                <MenuItem value={"O7"}>O7</MenuItem>
                                <MenuItem value={"O8"}>O8</MenuItem>
                                <MenuItem value={"O9"}>O9</MenuItem>
                                <MenuItem value={"O10"}>O10</MenuItem>
                                <MenuItem value={"WO1"}>WO1</MenuItem>
                                <MenuItem value={"CW2"}>CW2</MenuItem>
                                <MenuItem value={"CW3"}>CW3</MenuItem>
                                <MenuItem value={"CW4"}>CW4</MenuItem>
                                <MenuItem value={"CW5"}>CW5</MenuItem>
                            </Select>
                            {/*<Rank updateState={() => {}} propsID={"rank"} value={"E1"}/>*/}
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Date of birth"
                                    mask={"____-__-__"}
                                    id="dob"
                                    name="dob"
                                    inputFormat="yyyy-MM-dd"
                                    views={["year", "month", "day"]}
                                    value={dob}
                                    onChange={(value) => setDob(value)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            {/*<DOB applicationInfo={{dob: "Tue Jan 01 1995 18:00:00 GMT-0600 (Central Standard Time)"}}*/}
                            {/*     setApplicationInfo={() => {}}/>*/}
                        </Grid>
                    </Grid>

                    <Typography color='error'>{errorMessage}</Typography>

                    <Button
                        variant="contained"
                        sx={{mr: 2, mt: 2}}
                        onClick={() => setCurrentPage("login")}
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