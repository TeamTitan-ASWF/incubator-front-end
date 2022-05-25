import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {useTheme} from "@mui/material";
import swLogo from "./sf_logo.svg";
import Grid from "@mui/material/Grid";
import EggIcon from "@mui/icons-material/Egg";

export default function Footer() {
    const theme = useTheme();

    return (
            <Box
                bgcolor={theme.palette.primary.main}
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto'
                }}
                //border="1px solid #000"
            >
                <Grid container spacing={0}>
                    <Grid item xs={4} pl={5}>
                        <img src={swLogo} width={113} />
                    </Grid>

                    <Grid item xs={8} sx={{display: "flex", alignItems: "center"}}>
                        <EggIcon sx={{color: "white"}} />
                        <Typography
                            component={"span"}
                            variant="h6"
                            noWrap
                            sx={{
                                ml: 1,
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            INCUBATOR
                        </Typography>

                        <Typography variant={"subtitle2"} component={"span"} sx={{color: "white"}}>
                            Incubator is a product of <Link sx={{color: "white", textDecoration: "underline"}} href={"https://armyfuturescommand.com/software-factory/"}>The Army Software Factory</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
    );
}