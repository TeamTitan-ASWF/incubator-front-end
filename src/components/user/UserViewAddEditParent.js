import ApplicationView from "../application/ApplicationView";
import StatusHeader from "../application/StatusHeader";
import {useEffect, useState} from "react";
import apiCall from "../api/api";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ApplicationForm from "../application/ApplicationForm";

export default function UserViewAddEditParent({id, setShowList, getApplications}) {
    const [application, setApplication] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        getApplication(id)
            .then(r => r)
    }, [id])

    const getApplication = async (id) => {
        const res = await apiCall("application", "read", id)
        //console.log(res.apiData);
        setApplication(res.apiData);
    }

    const handleRescind = (id) => {
        apiCall('application', 'update', {
            id: id,
            status: (application.status === "rescinded") ? "in progress" : "rescinded"
        }).then(r => {
            getApplication(id);
            getApplications();
        });
    }

    if (isEditing === false) {
        return (
            <>
                    <StatusHeader
                        applicationInfo={application}
                    />

                <Paper
                    variant="outlined"
                    sx={{mb: 3, p: 3, boxShadow: 20}}
                >

                    <ApplicationView
                        applicationInfo={application}
                    />
                    <br />

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
                        <Grid item xs={6} sx={{textAlign: "right"}}>
                            <Button
                                sx={{mr: 2}}
                                disabled={(application.status === "approved" || application.status === "denied")}
                                variant="contained"
                                onClick={() => handleRescind(id)}
                            >
                                {application.status === "rescinded" ? "Resubmit": "Rescind"}
                            </Button>
                            <Button
                                sx={{}}
                                disabled={(application.status !== "pending" && application.status !== "in progress")}
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
            <ApplicationForm
                currentApplicationInfo={application}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                getApplications={getApplications}
                currentApplicationId={id}/>
        )
    }
}