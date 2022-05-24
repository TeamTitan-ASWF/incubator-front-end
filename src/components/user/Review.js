import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Divider} from "@mui/material";


export default function Review({applicationInfo}) {
    const yearAFCT=applicationInfo.lastACFT.getFullYear();
    const monthAFCT=applicationInfo.lastACFT.getMonth();
    const dayAFCT=applicationInfo.lastACFT.getDate();

    const dateAFCT=`${yearAFCT}-${monthAFCT}-${dayAFCT}`;



    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Review
            </Typography>

            <Grid item xs={12}>
                <Divider textAlign="left">Personal Information</Divider>
            </Grid>

        <Grid container spacing={2}>
            <Grid item xs={4} sx={{}}>
                <Typography component={"span"} variant={"h7"} style={{fontWeight: "bold"}}>Last Name<br /></Typography>
                <Typography variant={"subtitle1"} align={"left"}>{applicationInfo.lName}</Typography>
            </Grid>


            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>First Name</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.fName}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>MI</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.mI}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>DOD ID #</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.dodId}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Rank</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.rank}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Date of Birth</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.dob.substring(0,10)}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Last ACFT Date</Typography>
                <Typography variant={"subtitle1"}>{dateAFCT}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>ACFT Score</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.acftScore}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Height</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.height}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Weight</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.weight}</Typography>
            </Grid>

            <Grid item xs={4}>
                &nbsp;
            </Grid>

            <Grid item xs={12}>
                <Divider textAlign="left">Statements</Divider>
            </Grid>




            <Grid item xs={12}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Please describe your technical background</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.techBG}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Why would you like to join the Army Software Factory?</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.motivation}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Divider textAlign="left">Referral</Divider>
            </Grid>


            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Name</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.referenceName}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Rank</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.referenceRank}</Typography>
            </Grid>

            <Grid item xs={4}>
                &nbsp;
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"}style={{fontWeight: "bold"}} >Phone Number</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.referencePhone}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h7"} style={{fontWeight: "bold"}}>Email</Typography>
                <Typography variant={"subtitle1"}>{applicationInfo.referenceEmail}</Typography>
            </Grid>

            <Grid item xs={4}>
                &nbsp;
            </Grid>

        </Grid>
        </React.Fragment>
    )
};
