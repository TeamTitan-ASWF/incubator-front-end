import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import EggIcon from '@mui/icons-material/Egg';
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import PreviewIcon from '@mui/icons-material/Preview';
import {useNavigate} from "react-router-dom"
import { useContext } from 'react';
import AppContext from "../contexts/AppContext";

import {keyframes, styled} from "@mui/material";
import {AccountCircle, NoAccounts} from "@mui/icons-material";

const NavBar = ({setShowList, showList}) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const appContext = useContext(AppContext);

    const settings = appContext.isValidated ?
        [{name: "Profile", path: "/profile"}, {name: "Logout", path: "/logout"}] :
        [{name: "Login", path: "/login"}];

    let navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const changePage = (path) => {
        if (path === "/logout") {
            appContext.setIsValidated(false);
            appContext.setUser({});
            localStorage.clear();

            navigate("/");
        } else {
            navigate(path);
            setShowList(true);
        }
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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

    return (
        <AppBar position="static">
            <Container maxWidth={"100%"} sx={{m: 0}}>
                <Toolbar disableGutters>
                    <EggIcon onClick={() => window.open('https://prod.d2pwoau11voqpy.amplifyapp.com')} sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} />

                    <Button key={"LandingPage"} onClick={() => changePage("/") } sx={{ my: 2, color: 'white', display: 'block' }}>
                        <Typography
                            variant="h6"
                            //noWrap
                            //href="/"
                            // onClick={() => {setShowReviewer('landingPage')}}
                            // component="span"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                animation: `${glow} 2s infinite ease`,
                            }}
                        >
                            INCUBATOR
                        </Typography>
                    </Button>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        <StyledButton key={"Application Status"} onClick={() => changePage("/status")} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Application Status
                        </StyledButton>
                        <StyledButton key={"New Application"} onClick={() => changePage("/newApp")} sx={{ my: 2, color: 'white', display: 'block' }}>
                            New Application
                        </StyledButton>
                        {appContext.user?.isReviewer &&
                            <StyledButton key={"Review Application"} onClick={() => changePage("/reviewer")}
                                          sx={{my: 2, color: 'white', display: 'block'}}>
                                Review Application
                            </StyledButton>}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton key={"Application Status"} onClick={() => changePage("/status")} sx={{ my: 2, color: 'white', display: 'block' }}>
                            <PreviewIcon />
                        </IconButton>

                        <IconButton key={"New Application"} onClick={() => changePage("/newApp")} sx={{ my: 2, color: 'white', display: 'block' }}>
                            <AddIcon />
                        </IconButton>

                        {appContext.user?.isReviewer &&
                        <IconButton key={"Review Application"} onClick={() => changePage("/reviewer")} sx={{ my: 2, color: 'white', display: 'block' }}>
                            <ListIcon />
                        </IconButton>}
                    </Box>

                    <Box sx={{ flexGrow: 0, mr: '2%' }}>
                        {appContext.isValidated && <Typography component={"span"} variant={"subtitle2"}>Logged in as: {appContext.user?.userName ?? ''}</Typography>}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {appContext.isValidated ?
                                <AccountCircle sx={{color: "white"}}/> :
                                    <NoAccounts sx={{color: "white"}}/>}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                                    <Typography onClick={() => changePage(setting.path)} textAlign="center">{setting.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
