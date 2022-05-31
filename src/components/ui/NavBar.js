import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import EggIcon from '@mui/icons-material/Egg';
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import PreviewIcon from '@mui/icons-material/Preview';
import {keyframes, styled} from "@mui/material";

const settings = ['Profile', 'Application', 'Logout'];

const NavBar = ({setShowReviewer}) => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const glow = keyframes`
          from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #4ceb34, 0 0 40px #4ceb34, 0 0 50px #4ceb34, 0 0 60px #4ceb34, 0 0 70px #4ceb34;
      }
      
      to {
        text-shadow: 0 0 20px #fff, 0 0 30px #99eb34, 0 0 40px #99eb34, 0 0 50px #99eb34, 0 0 60px #99eb34, 0 0 70px #99eb34, 0 0 80px #99eb34;
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
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <EggIcon sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} />
                    <Button key={"LandingPage"} onClick={() => {setShowReviewer('landingPage')}} sx={{ my: 2, color: 'white', display: 'block' }}>
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
                        <StyledButton key={"Application Status"} onClick={() => {setShowReviewer('checkStatus')}} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Application Status
                        </StyledButton>
                        <StyledButton key={"New Application"} onClick={() => {setShowReviewer('newApp')}} sx={{ my: 2, color: 'white', display: 'block' }}>
                            New Application
                        </StyledButton>
                        <StyledButton key={"Review Application"} onClick={() => {setShowReviewer('reviewerList')}} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Review Application
                        </StyledButton>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton key={"Application Status"} onClick={() => {setShowReviewer('checkStatus')}} sx={{ my: 2, color: 'white', display: 'block' }}>
                            <PreviewIcon />
                        </IconButton>

                        <IconButton key={"New Application"} onClick={() => {setShowReviewer('newApp')}} sx={{ my: 2, color: 'white', display: 'block' }}>
                            <AddIcon />
                        </IconButton>

                        <IconButton key={"Review Application"} onClick={() => {setShowReviewer('reviewerList')}} sx={{ my: 2, color: 'white', display: 'block' }}>
                            <ListIcon />
                        </IconButton>
                    </Box>

                    {/*<Box sx={{ flexGrow: 0 }}>*/}
                    {/*    <Tooltip title="Open settings">*/}
                    {/*        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
                    {/*            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
                    {/*        </IconButton>*/}
                    {/*    </Tooltip>*/}
                    {/*    <Menu*/}
                    {/*        sx={{ mt: '45px' }}*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorElUser}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        open={Boolean(anchorElUser)}*/}
                    {/*        onClose={handleCloseUserMenu}*/}
                    {/*    >*/}
                    {/*        {settings.map((setting) => (*/}
                    {/*            <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                    {/*                <Typography textAlign="center">{setting}</Typography>*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
