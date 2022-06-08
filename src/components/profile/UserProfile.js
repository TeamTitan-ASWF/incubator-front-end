import Typography from "@mui/material/Typography";
import {useContext} from "react";
import AppContext from "../contexts/AppContext";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import apiCall from "../api/api";
import {fixTimeZone, formatDate} from "../inputValidation/dateValidationFunctions";
import Button from "@mui/material/Button";
import * as React from "react";
import UserProfileFormFields from "./UserProfileFormFields";
import Grid from "@mui/material/Grid";

export default function UserProfile() {
    const appContext = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [dob, setDob] = useState((appContext?.user?.dob) ? fixTimeZone(appContext.user.dob) : "1990-01-02");
    const [rank, setRank] = useState(appContext?.user?.rank ?? 'E1');

    const submitForm = (e) => {
        setErrorMessage("");
        e.preventDefault();

        if (!e.target.dodId.value.match(/^\d{10}$/)) {
            setErrorMessage("DODID has incorrect format.");
        } else if (!dob) {
            setErrorMessage("Date of Birth is required.");
        } else {
            const dataToUpdate = {
                id: appContext.user.id,
                fName: e.target.fName.value,
                lName: e.target.lName.value,
                mI: e.target.mI.value,
                dodId: e.target.dodId.value,
                rank: rank,
                dob: formatDate(dob)
            };

            //console.log(dataToUpdate);

            apiCall("user", 'update', dataToUpdate).then((r) => handleResults(r, dataToUpdate));
        }
    }

    const handleResults = (r, dataToUpdate) => {
        if (r.wasError) {
            setErrorMessage("Something went wrong. User Profile was not updated.");
            console.log(r.apiErrorMsg.response.data);
        } else {
            appContext.setUser({...appContext.user, ...dataToUpdate});
            localStorage.setItem('userData', JSON.stringify({...appContext.user, ...dataToUpdate}));

            setErrorMessage("User Profile Updated.");
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
            <form onSubmit={submitForm}>
                <Typography
                    variant="h6"
                    sx={{textAlign: 'center', mb: 1}}
                >
                    Update your Incubator Account
                </Typography><br/>

                <Grid container spacing={3}>
                    <UserProfileFormFields dob={dob} setDob={setDob} userData={appContext.user} rank={rank}
                                           setRank={setRank}/>
                </Grid>
                <br/>
                <Typography
                    color={(errorMessage === 'User Profile Updated.') ? 'green' : 'error'}>{errorMessage}</Typography>

                <Button
                    variant="contained"
                    sx={{mt: 2}}
                    type={"submit"}
                >
                    Update
                </Button><br/>
            </form>
        </Paper>
    );
}