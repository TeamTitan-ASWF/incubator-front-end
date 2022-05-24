import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {useEffect, useState} from "react";
import {Divider} from "@mui/material";


const ReviewerItem = ({id, applicationInfo}) => {
    const [application, setApplication] = useState(applicationInfo ?? {});

    const getApplication = (appId) => {
        axios.get(`${process.env.REACT_APP_API}/${appId}`)
            .then(response => {
                // console debugging
                //console.log(response.data);
                setApplication(response.data);
            })
    }

useEffect(() => {
    if(!applicationInfo && id) {
        getApplication(id);
    }
}, [id, applicationInfo]);


    return (
        <Grid container spacing={2}>
           <Grid item xs={4} sx={{}}>
               <Typography component={"span"} variant={"h6"}>Last Name<br /></Typography>
               <Typography variant={"subtitle1"} align={"left"}>{application.lName}</Typography>
           </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>First Name</Typography>
                <Typography variant={"subtitle1"}>{application.fName}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>MI</Typography>
                <Typography variant={"subtitle1"}>{application.mI}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>DOD ID #</Typography>
                <Typography variant={"subtitle1"}>{application.dodId}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>Rank</Typography>
                <Typography variant={"subtitle1"}>{application.rank}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>Date of Birth</Typography>
                <Typography variant={"subtitle1"}>{application.dob}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>Last ACFT Date</Typography>
                <Typography variant={"subtitle1"}>{application.lastACFT}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>Fitness (ACFT) Score</Typography>
                <Typography variant={"subtitle1"}>{application.acftScore}</Typography>
            </Grid>

            <Grid item xs={4}>
                &nbsp;
            </Grid>

            <Grid item xs={12}>
                <Divider textAlign="left">STATEMENTS</Divider>
            </Grid>




            <Grid item xs={12}>
                <Typography variant={"h5"}>Please describe your technical background</Typography>
                <Typography variant={"subtitle1"}>{application.techBG}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant={"h5"}>Why would you like to join the Army Software Factory?</Typography>
                <Typography variant={"subtitle1"}>{application.motivation}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Divider textAlign="left">REFERRAL</Divider>
            </Grid>


            <Grid item xs={4}>
                <Typography variant={"h5"}>Name</Typography>
                <Typography variant={"subtitle1"}>{application.referenceName}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>Rank</Typography>
                <Typography variant={"subtitle1"}>{application.referenceRank}</Typography>
            </Grid>

            <Grid item xs={4}>
                &nbsp;
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>Phone Number</Typography>
                <Typography variant={"subtitle1"}>{application.referencePhone}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant={"h5"}>Email</Typography>
                <Typography variant={"subtitle1"}>{application.referenceEmail}</Typography>
            </Grid>

            <Grid item xs={4}>
                &nbsp;
            </Grid>


        </Grid>
    );
};

export default ReviewerItem;