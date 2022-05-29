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

const settings = ['Profile', 'Application', 'Logout'];

const NavBar = ({setShowReviewer}) => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <EggIcon sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        INCUBATOR
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        <Button key={"Application Status"} onClick={() => {setShowReviewer('checkStatus')}} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Application Status
                        </Button>
                        <Button key={"New Application"} onClick={() => {setShowReviewer('newApp')}} sx={{ my: 2, color: 'white', display: 'block' }}>
                            New Application
                        </Button>
                        <Button key={"Review Application"} onClick={() => {setShowReviewer('reviewerList')}} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Review Application
                        </Button>
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
