import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {keyframes, useTheme} from "@mui/material";
import swLogo from "./sf_logo.svg";
import Grid from "@mui/material/Grid";
import EggIcon from "@mui/icons-material/Egg";

export default function Footer() {
    const theme = useTheme();

    const glow = keyframes`

      0% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #4ceb34, 0 0 40px #4ceb34, 0 0 50px #4ceb34, 0 0 60px #4ceb34, 0 0 70px #4ceb34;
  }
  
  50% {
    text-shadow: 0 0 20px #fff, 0 0 30px #99eb34, 0 0 40px #99eb34, 0 0 50px #99eb34, 0 0 60px #99eb34, 0 0 70px #99eb34, 0 0 80px #99eb34;
  }
  
  100% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #4ceb34, 0 0 40px #4ceb34, 0 0 50px #4ceb34, 0 0 60px #4ceb34, 0 0 70px #4ceb34;
  }
  }
    `;

    return (
        <Box
            bgcolor={theme.palette.primary.main}
            component="footer"
            sx={{
                p: 1,
                mt: 'auto',
                position: 'fixed',
                bottom: '0',
                width: '100%',
            }}
        >
            <Grid container spacing={0}>
                <Grid item xs={4} pl={5}>
                    <img src={swLogo} width={113}/>
                </Grid>

                <Grid item xs={8} sx={{display: "flex", alignItems: "center"}}>
                    <EggIcon sx={{color: "white"}}/>
                    <Typography
                        component={"span"}
                        variant="h6"
                        //noWrap

                        href="/"

                        sx={{
                            ml: 1,
                            mr: 4,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                            animation: `${glow} 2s infinite ease`,
                        }}
                    >
                        INCUBATOR
                    </Typography>

                    <Typography variant={"subtitle2"} component={"span"} sx={{color: "white"}}>
                        Incubator is a product of <Link sx={{color: "white", textDecoration: "underline"}}
                                                        href={"https://armyfuturescommand.com/software-factory/"}>The
                        Army Software Factory</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}