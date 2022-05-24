import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Rank from "./Rank";
import DOB from "./DOB";
import LastACFT from "./LastACFT";

export default function PersonalInfoForm({applicationInfo, setApplicationInfo,updateState}) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        id="fName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={updateState}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        id="lName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={updateState}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        required
                        id="mI"
                        name="mI"
                        label="MI"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={updateState}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        required
                        id="dodId"
                        name="dodId"
                        label="Dod ID"
                        fullWidth
                        // autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={updateState}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                 <Rank updateState={updateState} applicationInfo={applicationInfo} propsID={"rank"} value={applicationInfo.rank}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <DOB updateState={updateState} applicationInfo={applicationInfo} setApplicationInfo={setApplicationInfo} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LastACFT updateState={updateState} applicationInfo={applicationInfo} setApplicationInfo={setApplicationInfo} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="number"
                        id="acftScore"
                        name="acftScore"
                        label="ACFT Score"
                        fullWidth
                        // autoComplete="shipping postal-code"
                        variant="standard"
                        onChange={updateState}
                    />

                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        type="number"
                        id="height"
                        name="height"
                        label="Height in inches"
                        fullWidth
                        // autoComplete="shipping postal-code"
                        variant="standard"
                        onChange={updateState}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="weight"
                        type="number"
                        name="weight"
                        label="Weight lbs"
                        fullWidth
                        variant="standard"
                        onChange={updateState}
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}