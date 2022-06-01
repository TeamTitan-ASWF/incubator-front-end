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
                    color="success"
                    disabled={status === "approved" ? true : false}
                    variant="contained"
                    sx={{ml: 2}}
                    onClick={() => approveApplication("approved")}
                >
                    Approve
                </Button>
                <Button
                    color="warning"
                    disabled={status === "pending" ? true : false}
                    variant="contained"
                    sx={{ml: 2}}
                    onClick={() => approveApplication("pending")}
                >
                    Pending
                </Button>
                <Button
                    color="error"
                    disabled={status === "denied" ? true : false}
                    variant="contained"
                    sx={{ml: 2}}
                    onClick={() => approveApplication("denied")}
                >
                    Deny
                </Button>
            </Grid>
        </Grid>
    );
}