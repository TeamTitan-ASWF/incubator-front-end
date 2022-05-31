import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function StatusHeader({applicationInfo}) {
    let pendingStatus;

    if (applicationInfo.status === "approved") {
        pendingStatus = "green";
    } else if (applicationInfo.status === "denied") {
        pendingStatus = "red";
    } else {
        pendingStatus = "orange";
    }

    return (
        <Grid container sx={{my: 2}}>
            <Grid item xs={6}>
                <Typography variant="h6">
                    Application - {applicationInfo.fName + " " + applicationInfo.lName}
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "right"}}>
                <Typography variant="h6">
                    Application Status:
                    <Button
                        variant="outlined"
                        sx={{
                            cursor : 'default',
                            ml: 1,
                            color: pendingStatus,
                            borderColor: pendingStatus
                        }}>
                        {applicationInfo.status}
                    </Button>
                </Typography>
            </Grid>
        </Grid>
    );
}