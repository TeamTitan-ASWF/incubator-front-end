import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rank from "./Rank";

export default function ReferralsForm({updateState,applicationInfo}) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
             Referrals
            </Typography>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        id="referenceName"
                        name="referenceName"
                        label="Reference Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={updateState}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
               <Rank propsID ="referenceRank" updateState={updateState} value={applicationInfo.referenceRank}/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        id="referenceEmail"
                        name="referenceEmail"
                        label="Reference Email"
                        fullWidth
                        variant="standard"
                        onChange={updateState}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        id="referencePhone"
                        name="referencePhone"
                        label="Reference Phone"
                        fullWidth
                        variant="standard"
                        onChange={updateState}
                    />
                </Grid>






            </Grid>
        </React.Fragment>
    );
}