import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {useState} from "react";
import ReviewerItem from "../reviewer/ReviewerItem";
import Paper from "@mui/material/Paper";
import apiCall from "../api/api";

const ApplicationStatus = () => {
    const [refNumber, setRefNumber] = useState(0);
    const [applicationInfo, setApplicationInfo] = useState(null);

    const handleClick = async () =>{
        const res = await apiCall('application', 'read', refNumber, 'dod/');
        //console.log(res.apiData);
        setApplicationInfo(res.apiData);
    }
    return (
  <>
            {applicationInfo ? <ReviewerItem applicationInfo={applicationInfo}/> : null }
            <br/>
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }   ,alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle"}}>
            <Typography sx={{textAlign :'center'}}>Application Reference Number</Typography>
            <TextField onChange = {(e)=>{setRefNumber(e.target.value)}}  /><br />
            <Button variant={"outlined"} onClick={ handleClick}>Check Status</Button>
            <br/>
            </Paper>
            </Container>
  </>
    );
}

export default ApplicationStatus;