import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import {Divider} from "@mui/material";
import apiCall from "../api/api";
import * as React from "react";

const ReviewerItem = ({id, applicationInfo}) => {
    const [application, setApplication] = useState(applicationInfo ?? {});

    const getApplication = async (appId) => {
        const res = await apiCall('application', 'read', id);
        await console.log(res);
        setApplication(res.apiData);
    }

useEffect(() => {
    if(!applicationInfo && id) {
        getApplication(id);
    }
}, [id, applicationInfo]);


    const formattedACFT = (unformattedACFTDate) =>{

        if(unformattedACFTDate !== '') {
            const yearAFCT = unformattedACFTDate.getFullYear();
            const monthAFCT = unformattedACFTDate.getMonth();
            const dayAFCT = unformattedACFTDate.getDate();

            return `${yearAFCT}-${monthAFCT}-${dayAFCT}`;

        } else {
            return "";
        }
    }

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
                    <Typography variant={"subtitle1"} align={"left"}>{application?.lName || ''}</Typography>
                </Grid>


                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>First Name</Typography>
                    <Typography variant={"subtitle1"}>{application?.fName || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>MI</Typography>
                    <Typography variant={"subtitle1"}>{application?.mI || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>DOD ID #</Typography>
                    <Typography variant={"subtitle1"}>{application?.dodId || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Rank</Typography>
                    <Typography variant={"subtitle1"}>{application?.rank || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Date of Birth</Typography>
                    {/*<Typography variant={"subtitle1"}>{application?.dob.substring(0,10) || ''}</Typography>*/}
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Last ACFT Date</Typography>
                    {/*<Typography variant={"subtitle1"}>{formattedACFT(application?.lastACFT || '')}</Typography>*/}
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>ACFT Score</Typography>
                    <Typography variant={"subtitle1"}>{application?.acftScore || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Height</Typography>
                    <Typography variant={"subtitle1"}>{application?.height || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Weight</Typography>
                    <Typography variant={"subtitle1"}>{application?.weight || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    &nbsp;
                </Grid>

                <Grid item xs={12}>
                    <Divider textAlign="left">Statements</Divider>
                </Grid>




                <Grid item xs={12}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Please describe your technical background</Typography>
                    <Typography variant={"subtitle1"}>{application?.techBG || ''}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Why would you like to join the Army Software Factory?</Typography>
                    <Typography variant={"subtitle1"}>{application?.motivation || ''}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Divider textAlign="left">Referral</Divider>
                </Grid>


                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Name</Typography>
                    <Typography variant={"subtitle1"}>{application?.referenceName || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Rank</Typography>
                    <Typography variant={"subtitle1"}>{application?.referenceRank || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    &nbsp;
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"}style={{fontWeight: "bold"}} >Phone Number</Typography>
                    <Typography variant={"subtitle1"}>{application?.referencePhone || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant={"h7"} style={{fontWeight: "bold"}}>Email</Typography>
                    <Typography variant={"subtitle1"}>{application?.referenceEmail || ''}</Typography>
                </Grid>

                <Grid item xs={4}>
                    &nbsp;
                </Grid>

            </Grid>
        </React.Fragment>
    );
};

export default ReviewerItem;