
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material";
import Button from "@mui/material/Button";
import HandshakeIcon from '@mui/icons-material/Handshake';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import swLogo from "../ui/sf_logo.svg";
import Box from "@mui/material/Box";

export default function LandingPage({setShowReviewer}) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "black",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "white",
        border: "5px solid gray"
        //color: theme.palette.text.secondary,

    }));

    const StyledButton = styled(Button)`
      background-color: black;
      color: #fff;
      padding: 6px 12px;
      &:hover {
        background-color: #3c3c3d;
      }
      &:focus {
        background-color: green;
      }
    `;

    const StyledButton2 = styled(Button)`
      background-color: green;
      color: #fff;
      padding: 6px 12px;
      &:hover {
        background-color: #3c3c3d;
      }
      &:focus {
        background-color: green;
      }
    `;

    return (
        <Container component="main" maxWidth="lg" sx={{mb: 4}}>
            <Paper
                variant="outlined"

                sx={{
                    my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                    textAlign: "center",
                    boxShadow: 20,
                    background: "black",
                }}>
                <img src={swLogo}/>
                <br/><br/>
                <Typography
                    variant="h4"
                    sx={{textAlign: 'center', mb: 1, color: "green", fontFamily: "sans-serif", fontWeight: "bold",}}
                >
                    &lt; THE ARMY'S FIRST SOLDIER-LED
                    SOFTWARE FACTORY &gt;
                </Typography>
                <br/>
                <Typography
                    variant="h5"
                    sx={{textAlign: 'center', mb: 1, color: "white"}}
                >
                    SOFTWARE SOLUTIONS.
                    <br/>
                    BY SOLDIERS. FOR SOLDIERS.
                </Typography>
                <br/>
                <Typography
                    variant="h5"
                    sx={{textAlign: 'center', mb: 1, color: "green"}}
                >
                    BE ON THE FOREFRONT OF DIGITAL TRANSFORMATION IN THE ARMY
                </Typography>
                <br/>
                <Typography
                    variant="h6"
                    sx={{textAlign: 'center', mb: 1, color: "white"}}
                >
                    SOFTWARE DEVELOPERS • UI/UX DESIGNERS •

                    PRODUCT MANAGERS • PLATFORM ENGINEERS
                </Typography>

            </Paper>
            <br/>

            <Typography
                variant="h4"
                sx={{textAlign: 'center', mb: 1, color: "black", fontWeight: "bold",}}
            >
                 &lt; WHAT WE ARE LOOKING FOR &gt;
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <PeopleOutlineTwoToneIcon sx={{fontSize: "50px"}}/>
                        <Typography sx={{textAlign: 'left', mb: 1, color: "white"}}>
                            SOLDIERS AND CIVILIANS
                        </Typography>
                        <Typography sx={{textAlign: 'left', mb: 1, color: "gray"}}>
                            Apply for the next cohort -- cohort 6 applications June 1 - July 1
                        </Typography>
                        <Button variant="contained" color="success" href="/" key={"New Application"} onClick={(event) => {event.preventDefault(); setShowReviewer('newApp')}} sx={{  m: 2, color: 'white', display: 'block'}}>
                            Apply now!
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <HandshakeIcon sx={{fontSize: "50px"}}/>
                        <Typography sx={{textAlign: 'left', mb: 1, color: "white"}}>
                            INDUSTRY PARTNERS
                        </Typography>
                        <Typography sx={{textAlign: 'left', mb: 1, color: "gray"}}>
                            Partner with us for internships, showcases, mentorship
                        </Typography>
                        <Box sx={{textAlign: 'center'}}>
                        <Button variant="contained" color="success" href="https://docs.google.com/forms/d/e/1FAIpQLSeBpnnJ4L0pitFVCo6cicnvNH1smgz6G4CmlmVk8QjXBixUBA/viewform" sx={{ m: 2, color: 'white', display: 'block' }}>
                            Find out more!
                        </Button>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <MailOutlineIcon sx={{fontSize: "50px"}}/>
                        <Typography sx={{textAlign: 'left', mb: 1, color: "white"}}>
                            SOLDIER PROBLEM SUBMISSION
                        </Typography>
                        <Typography sx={{textAlign: 'left', mb: 1, color: "gray"}}>
                            Nominate an Army problem needing a software solution
                        </Typography>
                        <Button variant="contained" color="success" href="https://docs.google.com/forms/d/e/1FAIpQLScBDro0ZqR7BCAeXOdhT4g-y3N1OLoaTqg2zPPK-z7FRPh7ZQ/viewform" sx={{ m: 2, color: 'white', display: 'block' }}>
                            Tell us!
                        </Button>
                    </Item>
                </Grid>
            </Grid>

            <Paper
                variant="outlined"

                sx={{
                    my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                    textAlign: "center",
                    boxShadow: 20,
                    background: "black",
                }}>
                <StyledButton variant="contained" href="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/ASWF_2021_Annual_Report_20220330_2192927038.pdf" >
                    Click here for the ASWF 2021 Annual Report
                </StyledButton>
            </Paper>
            <br/>

        </Container>
    );
}