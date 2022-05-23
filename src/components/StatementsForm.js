import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function StatementsForm({updateState}) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
               Background/Soldier-Statements
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="techBG"
                        label="Please describe your technical background"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={updateState}
                        ariant="filled"
                    />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField
                        id="motivation"
                        label="Why do you want to join the Army Software Factory?"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={updateState}
                        variant="filled"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}