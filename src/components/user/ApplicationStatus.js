import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function ApplicationStatus({setRefNumber, handleClick}) {
    return (
        <Container component="main" maxWidth="sm" sx={{mb: 4}}>
            <Paper
                variant="outlined"
                sx={{
                    my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                    textAlign: "center",
                    boxShadow: 20
                }}>
                <Typography
                    variant="h6"
                    sx={{textAlign: 'center', mb: 1}}
                >
                    Application Reference Number
                </Typography>
                <TextField
                    variant="outlined"
                    label="Number"
                    onChange={(e) => {
                        setRefNumber(e.target.value)
                    }}
                /><br/>
                <Button
                    variant="contained"
                    sx={{mt: 1}}
                    onClick={handleClick}
                >
                    Check Status
                </Button><br/>
            </Paper>
        </Container>
    );
}