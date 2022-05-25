import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function ReviewerButtons({status, approveApplication, setShowList}) {
    return (
        <Grid container sx={{m: 1}}>
            <Grid item xs={6}>
                <Button
                    sx={{}}
                    variant="contained"
                    onClick={() => {setShowList(true)}}
                >
                    Back
                </Button>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "right"}}>
                <Button
                    color={status === "approved" ? "warning" : "success"}
                    variant="contained"
                    sx={{}}
                    onClick={() => approveApplication(status === "approved" ? "pending" : "approved")}
                >
                    {status === "approved" ? "Pending" : "Approve"}
                </Button>
                <Button
                    color={status === "denied" ? "warning" : "error"}
                    variant="contained"
                    sx={{ml: 2}}
                    onClick={() => approveApplication(status === "denied" ? "pending" : "denied")}
                >
                    {status === "denied" ? "Pending" : "Deny"}
                </Button>
            </Grid>
        </Grid>
    );
}