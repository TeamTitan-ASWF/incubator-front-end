import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material";


export default function StatusHeader({applicationInfo}) {
    let pendingStatus;

    if (applicationInfo.status === "approved") {
        // eslint-disable-next-line
        pendingStatus = "green";
    } else if (applicationInfo.status === "denied") {
        // eslint-disable-next-line
        pendingStatus = "red";
    } else {
        // eslint-disable-next-line
        pendingStatus = "orange";
    }

    const StatusButtonPending = styled(Button)`
          background-color: white;
          color: orange;
          padding: 6px 12px;
          border: 1px solid orange;
          margin-left: 5px;
          &:focus {
            background-color: white;
            color: orange;
          }
          &:hover {
            background-color: white;
            color: orange;
            cursor : 'default',
          }
          &:active {
            background-color: white;
            color: orange;
          }
        `;

    const StatusButtonApproved = styled(Button)`
          background-color: white;
          color: green;
          padding: 6px 12px;
          border: 1px solid green;
          margin-left: 5px;
          &:focus {
            background-color: white;
            color: green;
          }
          &:hover {
            background-color: white;
            color: green;
            cursor : 'default',
          }
          &:active {
            background-color: white;
            color: green;
          }
        `;

    const StatusButtonDenied = styled(Button)`
          background-color: white;
          color: red;
          padding: 6px 12px;
          border: 1px solid red;
          margin-left: 5px;
          &:focus {
            background-color: white;
            color: red;
          }
          &:hover {
            background-color: white;
            color: red;
            cursor : 'default',
          }
          &:active {
            background-color: white;
            color: red;
          }
        `;


    if (applicationInfo.status === "denied") {
        return (
            <Grid container sx={{my: 2}}>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        {`Application - ${applicationInfo.fName}  ${applicationInfo.lName}`}
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{textAlign: "right"}}>
                    <Typography variant="h6">
                        Application Status:
                        <StatusButtonDenied
                            sx={{
                                cursor : 'default',
                            }}
                        >{applicationInfo.status}</StatusButtonDenied>
                    </Typography>
                </Grid>
            </Grid>
        );
    } else if (applicationInfo.status === "approved") {
        return (
            <Grid container sx={{my: 2}}>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        {`Application - ${applicationInfo.fName}  ${applicationInfo.lName}`}
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{textAlign: "right"}}>
                    <Typography variant="h6">
                        Application Status:
                        <StatusButtonApproved
                            sx={{
                                cursor : 'default',
                            }}
                        >{applicationInfo.status}</StatusButtonApproved>
                    </Typography>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid container sx={{my: 2}}>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        {`Application - ${applicationInfo.fName}  ${applicationInfo.lName}`}
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{textAlign: "right"}}>
                    <Typography variant="h6">
                        Application Status:
                        <StatusButtonPending
                            sx={{
                                cursor : 'default',
                            }}
                        >{applicationInfo.status}</StatusButtonPending>
                    </Typography>
                </Grid>
            </Grid>
        );
    }


}
