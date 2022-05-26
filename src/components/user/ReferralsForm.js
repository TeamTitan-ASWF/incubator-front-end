import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Rank from "./Rank";

export default function ReferralsForm({ updateState,applicationInfo,errorList,onChangeValidate}) {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
             Referrals
            </Typography>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        error = {errorList.includes("referenceName")}
                        value={applicationInfo.referenceName}
                        id="referenceName"
                        name="referenceName"
                        label="Reference Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => {
                            updateState(e)
                            onChangeValidate(e);
                        }}
                        onBlur={onChangeValidate}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
               <Rank propsID ="referenceRank" updateState={updateState} value={applicationInfo.referenceRank}/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        error = {errorList.includes("referenceEmail")}
                        id="referenceEmail"
                        name="referenceEmail"
                        label="Reference Email"
                        value={applicationInfo.referenceEmail}
                        type="email"
                        fullWidth
                        variant="standard"
                        onBlur={updateState}
                        onChange={(e) => {
                            updateState(e)
                            onChangeValidate(e);
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        error = {errorList.includes("referencePhone")}
                        id="referencePhone"
                        name="referencePhone"
                        value={applicationInfo.referencePhone}
                        label="Reference Phone"
                        type="number"
                        fullWidth
                        variant="standard"
                        onBlur={onChangeValidate}
                        onChange={(e) => {
                            updateState(e)
                            onChangeValidate(e);
                        }}
                    />
                </Grid>






            </Grid>
        </React.Fragment>
    );
}