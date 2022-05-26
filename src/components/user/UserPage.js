import StatusHeader from "../reviewer/StatusHeader";
import ReviewerItem from "../reviewer/ReviewerItem";
import {useState} from "react";
import apiCall from "../api/api";
import {Alert, Snackbar} from "@mui/material";
import ApplicationStatus from "./ApplicationStatus";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function UserPage() {
    const [refNumber, setRefNumber] = useState(0);
    const [applicationInfo, setApplicationInfo] = useState(null);
    const [open, setOpen] = useState(false);
    const [showStatus, setShowStatus] = useState(true);

    const handleClick = async () => {
        const res = await apiCall('application', 'read', refNumber, 'dod/');
        //console.log(res.apiData);
        setApplicationInfo(res.apiData);

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

    return (
        <>
            {showStatus ?
                <ApplicationStatus
                    setRefNumber={setRefNumber}
                    handleClick={handleClick}
                /> :
                <>
                    <StatusHeader
                        applicationInfo={applicationInfo}
                    />
                    <ReviewerItem
                        applicationInfo={applicationInfo}
                    />
                    <Box sx={{p: 2}}>
                        <Button
                            sx={{}}
                            variant="contained"
                            onClick={() => {setShowStatus(true)}}
                        >
                            Back
                        </Button>
                        <br /><br /><br /><br /><br /><br /><br />
                    </Box>
                </>
            }
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                sx={{width: "95%"}}
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