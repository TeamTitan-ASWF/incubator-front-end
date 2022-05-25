import {Snackbar, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {useState} from "react";
import Paper from "@mui/material/Paper";
import apiCall from "../api/api";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import UserPage from "./UserPage";

export default function ApplicationStatus() {
    const [refNumber, setRefNumber] = useState(0);
    const [applicationInfo, setApplicationInfo] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = async () => {
        const res = await apiCall('application', 'read', refNumber, 'dod/');
        console.log(res.apiData);
        setApplicationInfo(res.apiData);

        if (res.wasError) {
            setOpen(true);
        } else {
            setOpen(false);
        }

        //axios.get(`${process.env.REACT_APP_API}/dod/${refNumber}`).then((r) =>{setApplicationInfo(r.data);console.log(r.data) })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <>
            <IconButton
                size="large"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <>
            {applicationInfo ?
                <UserPage
                    applicationInfo={applicationInfo}
                /> :
                null}<br/>
            <Container component="main" maxWidth="sm" sx={{mb: 4}}>
                <Paper
                    variant="outlined"
                    sx={{
                        my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                        alignItems: "center",
                        textAlign: "center",
                        verticalAlign: "middle"
                    }}>
                    <Typography
                        sx={{textAlign: 'center'}}
                    >
                        Application Reference Number
                    </Typography>
                    <TextField
                        onChange={(e) => {
                            setRefNumber(e.target.value)
                        }}
                    /><br/>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                    >
                        Check Status
                    </Button><br/>
                    <Snackbar
                        open={open}
                        autoHideDuration={5000}
                        onClose={handleClose}
                        message="Application Not Found"
                        action={action}
                        severity="success"
                    />
                </Paper>
            </Container>
        </>
    );
}