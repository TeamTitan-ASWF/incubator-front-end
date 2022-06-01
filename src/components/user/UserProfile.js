import Typography from "@mui/material/Typography";
import {useContext} from "react";
import AppContext from "../contexts/AppContext";
import Paper from "@mui/material/Paper";

export default function UserProfile() {
    const appContext = useContext(AppContext);

    return(
        <Paper
            variant="outlined"
            sx={{
                my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                textAlign: "center",
                boxShadow: 20
            }}>
            {Object.keys(appContext.user).map( (key) => (
                <Typography>
                    {`${key}: ${appContext.user[key]}`}
                </Typography>
            ))}
        </Paper>
    );
}