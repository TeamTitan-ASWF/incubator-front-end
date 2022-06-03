import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function UserCreate() {

    return (
        <Container component="main" maxWidth="md" sx={{mb: 4}}>
            <Paper
                variant="outlined"
                sx={{
                    my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                    textAlign: "center",
                    boxShadow: 20
                }}>
                <Typography>New Account Succesfully Created</Typography>
                <Button>Button</Button>
            </Paper>
        </Container>
    )
}