 import StatusHeader from "../reviewer/StatusHeader";
import ReviewerItem from "../reviewer/ReviewerItem";
import {useState} from "react";
import apiCall from "../api/api";
import {Alert, Snackbar} from "@mui/material";
import ApplicationStatus from "./ApplicationStatus";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Submit from "./Submit";
import Grid from "@mui/material/Grid";

export default function UserPage() {
    const [refNumber, setRefNumber] = useState(0);
    const [applicationInfo, setApplicationInfo] = useState(null);
    const [open, setOpen] = useState(false);
    const [showStatus, setShowStatus] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentApplicationId, setCurrentApplicationId] = useState(null);

    const handleClick = async (id) => {
        const res = await apiCall('application', 'read', refNumber, 'dod/');
        //console.log(res.apiData);
        setApplicationInfo(res.apiData);
        setCurrentApplicationId(res.apiData.id);

        if (res.wasError) {
            setOpen(true);
        } else {
            setOpen(false);
            setShowStatus(false);
        }

        //axios.get(`${process.env.REACT_APP_API}/dod/${refNumber}`).then((r) =>{setApplicationInfo(r.data);console.log(r.data) })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    if(isEditing === false) {
    return (
        <>
            {showStatus ?
                <ApplicationStatus
                    setRefNumber={setRefNumber}
                    handleClick={handleClick}
                /> :

                <>
                    <Paper
                        variant="outlined"
                        sx={{my: 3, p: 3, boxShadow: 20}}>
                        <StatusHeader
                            applicationInfo={applicationInfo}
                        />
                        <ReviewerItem
                            applicationInfo={applicationInfo}
                        />
                        <Grid container sx={{m: 1}}>
                            <Grid item xs={6}>
                            <Button
                                sx={{}}
                                variant="contained"
                                onClick={() => {
                                    setShowStatus(true)
                                }}
                            >
                                Back
                            </Button>
                            </Grid>
                            <Grid item xs={6} sx={{textAlign:"right"}}>
                            <Button
                                sx={{}}
                                disabled = {applicationInfo.status === "pending" ? false : true}
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
            }
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                sx={{width: "25%"}}
            >
                <Alert
                    onClose={handleClose}
                    variant="filled"
                    severity="error"
                    sx={{width: "100%"}}
                >
                    Application Not Found!
                </Alert>
            </Snackbar>
        </>
    );

}
    else if (isEditing === true) {
        return (
            <Submit currentApplicationInfo={applicationInfo} isEditing={isEditing} setIsEditing={setIsEditing} currentApplicationId = {currentApplicationId} />
        )
    }
}