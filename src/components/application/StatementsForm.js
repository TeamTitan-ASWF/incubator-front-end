import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function StatementsForm({updateState,errorList,applicationInfo,onChangeValidate}) {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
               Background/Soldier-Statements
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="techBG"
                        error = {errorList.includes("techBG required")}
                        label="Please describe your technical background"
                        multiline
                        value = {applicationInfo.techBG}
                        rows={4}
                        fullWidth
                        onChange={(e) => {
                            updateState(e)
                            onChangeValidate(e);
                        }}
                        variant="outlined"
                        onBlur={onChangeValidate}
                        inputProps={{
                            maxLength: 3000
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField
                        id="motivation"
                        value = {applicationInfo.motivation}
                        error = {errorList.includes("motivation required")}
                        label="Why do you want to join the Army Software Factory?"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={(e) => {
                            updateState(e)
                            onChangeValidate(e);
                        }}
                        onBlur={onChangeValidate}
                        variant="outlined"
                        inputProps={{
                            maxLength: 3000
                        }}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}