import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {useContext} from "react";
import AppContext from "../contexts/AppContext";

export default function ReviewerButtons({status, approveApplication, setShowList}) {
    const appContext = useContext (AppContext);

    return (
        appContext.user.isReviewer ?
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
                color="success"
                disabled={status === "approved"}
                variant="contained"
                sx={{ml: 2}}
                onClick={() => approveApplication("approved")}
            >
                Approve
            </Button>
            <Button
                color="warning"
                disabled={status === "pending"}
                variant="contained"
                sx={{ml: 2}}
                onClick={() => approveApplication("pending")}
            >
                Pending
            </Button>
            <Button
                color="error"
                disabled={status === "denied"}
                variant="contained"
                sx={{ml: 2}}
                onClick={() => approveApplication("denied")}
            >
                Deny
            </Button>
        </Grid>
    </Grid>
                :
    <Button
        sx={{}}
        variant="contained"
        onClick={() => {
            setShowList(true)
        }}
    >
        Back
    </Button>

    );
}