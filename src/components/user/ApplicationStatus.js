import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {useState} from "react";
import axios from "axios";
import ReviewerItem from "../reviewer/ReviewerItem";
import Paper from "@mui/material/Paper";

const ApplicationStatus = () => {
    const [refNumber, setRefNumber] = useState(0);
    const [applicationInfo, setApplicationInfo] = useState(null);

    const handleClick = () =>{

        axios.get(`${process.env.REACT_APP_API}/dod/${refNumber}`).then((r) =>{setApplicationInfo(r.data);console.log(r.data) }
        )
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