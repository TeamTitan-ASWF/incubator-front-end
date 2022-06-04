import ApplicationView from "../application/ApplicationView";
import StatusHeader from "../application/StatusHeader";
import {useEffect, useState} from "react";
import apiCall from "../api/api";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ApplicationForm from "../application/ApplicationForm";

export default function UserViewAddEditParent({id, setShowList}) {
    const [application, setApplication] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        getApplication(id)
            .then(r => r)
    }, [application.status, id])

    const getApplication = async (id) => {
        const res = await apiCall("application", "read", id)
        setApplication(res.apiData);
    }

    if (isEditing === false) {
        return (
            <>
                <Paper
                    variant="outlined"
                    sx={{my: 3, p: 3, boxShadow: 20}}
                >
                    <StatusHeader
                        applicationInfo={application}
                    />
                    <ApplicationView
                        applicationInfo={application}
                    />

                    <Grid container sx={{m: 1}}>
                        <Grid item xs={6}>
                            <Button
                                sx={{}}
                                variant="contained"
                                onClick={() => {
                                    setShowList(true)
                                }}
                            >
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign:"right"}}>
                            <Button
                                sx={{}}
                                disabled = {(application.status !== "pending")}
                                variant="contained"
                                onClick={() => {
                                    setIsEditing(true)
                                }}
                            >
                                Edit
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
                <br/><br/><br/><br/>
            </>
        );
    } else if (isEditing === true) {
        return (
            <ApplicationForm currentApplicationInfo={application} isEditing={isEditing} setIsEditing={setIsEditing}
                             currentApplicationId={id}/>
        )
    }
}