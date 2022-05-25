import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function StatusHeader({status}) {
    let pendingStatus;

    if (status === "approved") {
        pendingStatus = "green";
    } else if (status === "denied") {
        pendingStatus = "red";
    } else {
        pendingStatus = "orange";
    }

    return (
        <Box maxWidth="100%" sx={{textAlign: "right", my: 2}}>
            <Typography variant="h6">
                Application Status:
                <Button
                    variant="outlined"
                    sx={{
                    ml: 1,
                    color: pendingStatus,
                    borderColor: pendingStatus
                }}>
                    {status}
                </Button>
            </Typography>
        </Box>
    );
}