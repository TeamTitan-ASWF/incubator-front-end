import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material";
import Paper from "@mui/material/Paper";


export default function StatusHeader({applicationInfo}) {

    const StatusButtonPending = styled(Button)`
          background-color: white;
          color: orange;
          padding: 6px 12px;
          border: 2px solid orange;
          margin-left: 5px;
          font-weight: bold;
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
          border: 2px solid green;
          margin-left: 5px;
          font-weight: bold;
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
          border: 2px solid red;
          margin-left: 5px;
          font-weight: bold;
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

    const StatusButtonRescinded = styled(Button)`
          background-color: white;
          color: black;
          padding: 6px 12px;
          border: 2px solid black;
          margin-left: 5px;
          font-weight: bold;
          &:focus {
            background-color: white;
            color: black;
          }
          &:hover {
            background-color: white;
            color: black;
            cursor : 'default',
          }
          &:active {
            background-color: white;
            color: black;
          }
        `;

    const StatusButtonInProgress = styled(Button)`
          background-color: white;
          color: gray;
          padding: 6px 12px;
          border: 2px solid gray;
          margin-left: 5px;
          font-weight: bold;
          &:focus {
            background-color: white;
            color: gray;
          }
          &:hover {
            background-color: white;
            color: gray;
            cursor : 'default',
          }
          &:active {
            background-color: white;
            color: gray;
          }
        `;

    return (
        <Paper
        variant="outlined"
        sx={{mt: 3, p: 3, boxShadow: 20, backgroundColor: "#474a47", color: 'white'}}
        >
        <Grid container sx={{my: 2}}>

            <Grid item xs={6}>
                <Typography variant="h6">
                    {`Application - ${applicationInfo.fName}  ${applicationInfo.lName}`}
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "right"}}>
                <Typography variant="h6">
                    Application Status:
                    {(applicationInfo.status === "pending" ? <StatusButtonPending sx={{cursor: 'default',}}>{applicationInfo.status}</StatusButtonPending> : <></>)}
                    {(applicationInfo.status === "denied" ? <StatusButtonDenied sx={{cursor: 'default',}}>{applicationInfo.status}</StatusButtonDenied> : <></>)}
                    {(applicationInfo.status === "approved" ? <StatusButtonApproved sx={{cursor: 'default',}}>{applicationInfo.status}</StatusButtonApproved> : <></>)}
                    {(applicationInfo.status === "rescinded" ? <StatusButtonRescinded sx={{cursor: 'default',}}>{applicationInfo.status}</StatusButtonRescinded> : <></>)}
                    {(applicationInfo.status === "in progress" ? <StatusButtonInProgress sx={{cursor: 'default',}}>{applicationInfo.status}</StatusButtonInProgress> : <></>)}
                </Typography>
            </Grid>
        </Grid>
        </Paper>
    );



}
