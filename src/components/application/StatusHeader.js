import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material";


export default function StatusHeader({applicationInfo}) {

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

    const StatusButtonRescinded = styled(Button)`
          background-color: white;
          color: gray;
          padding: 6px 12px;
          border: 1px solid gray;
          margin-left: 5px;
          &:focus {
            background-color: white;
            color: orange;
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
        <Grid container sx={{my: 2}}>
            <Grid item xs={6}>
                <Typography variant="h6">
                    {`Application - ${applicationInfo.fName}  ${applicationInfo.lName}`}
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{textAlign: "right"}}>
                <Typography variant="h6">
                    Application Status:
                    {((applicationInfo.status === "pending" || applicationInfo.status === "in progress") ? <StatusButtonPending sx={{cursor: 'default',}}>{applicationInfo.status}</StatusButtonPending> : <></>)}
                    {(applicationInfo.status === "denied" ? <StatusButtonDenied sx={{cursor: 'default',}}>{applicationInfo.status}</StatusButtonDenied> : <></>)}
                    {(applicationInfo.status === "approved" ? <StatusButtonApproved sx={{cursor: 'default',}}>{applicationInfo.status}</StatusButtonApproved> : <></>)}
                    {(applicationInfo.status === "rescinded" ? <StatusButtonRescinded sx={{cursor: 'default',}}>{applicationInfo.status}</StatusButtonRescinded> : <></>)}
                </Typography>
            </Grid>
        </Grid>
    );



}
