import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

const AppBar = () =>
{
    const appBar = 
    {
        position:"fixed",
        top:0,
        left:0,
        height: "75px",
        width:"100%",
        backgroundColor:"white",
        boxShadow:"rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
        display:"flex",
        alignItems:"center",
        gap:"10px",
    }

    const secquraise = 
    {
        fontSize:"1.3em",
        paddingLeft:"2%",
        fontWeight:"600"
    }

    const ai = 
    {
        color:"red",
        fontSize:"1.35em"
    }

    const [anchorEl,setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <nav style={appBar}>
            <p style={secquraise}>SECQUR<span style={ai}>AI</span>SE</p>
            <TextField
                placeholder='Search...'
                sx={{
                    width:"30%",
                    marginLeft:'auto',
                    display:"intial",
                    "@media screen and (max-width:450px)":
                    {
                        display:"none"
                    }
                }}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                ),
                }}
                variant="outlined"
            />
            <Button variant="contained" color='green'
            sx={{
                "@media screen and (max-width:450px)":
                {
                    marginLeft:"auto"
                }
            }}>25</Button>
            <Button variant="contained" color='red'>25</Button>
            <IconButton onClick={(e) =>setAnchorEl(e.currentTarget)}
            sx={{
                display:"none",
                "@media screen and (max-width:450px)":
                {
                    display:"block"
                }
            }}>
                <MenuIcon/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}>
                <MenuItem>
                    <TextField
                        placeholder='Search...'
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                    />
                </MenuItem>
                <MenuItem>
                    <Button variant="text" startIcon={<HomeIcon />} fullWidth>
                    Home
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" startIcon={<LogoutIcon />} fullWidth>
                    Logout
                    </Button>
                </MenuItem>
            </Menu>
        </nav>
    )
}

export default AppBar;