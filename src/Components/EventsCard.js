import { Button, IconButton } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { DateTime } from "luxon";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius:"12px",
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:"column"
};

const EventsCard = (props) =>
{
    const eventsCard =
    {
        flexGrow:"2",
        flexShrink:"1",
        height:"600px",
        minHeight:"600px",
        width:"100%",
        boxSizing:"border-box",
        backgroundColor:"#F55050",
        margin:"10px 10px",
        borderRadius:"12px",
        overflowY:"auto",
        '*::WebkitScrollbarTrack':
        {
            '-webkit-box-shadow': 'inset 0 0 6px transparent',
            'border-radius': '10px',
        },
        '*::WebkitScrollbar':
        {
            width: '10px',
        },
        '*::WebkitScrollbarThumb':
        {
            'border-radius': '10px',
            '-webkit-box-shadow': 'inset 0 0 6px transparent',
            'background-color': '#C4C4C4',
        }
    }
    const eventsHeadingWrapper =
    {
        display:"flex",
        justifyContent:"space-between",
        padding:"10px",
        height:"40px",
        alignItems:'center'
    }
    const eventsHeading = 
    {
        fontSize:"1.3em",
        fontWeight:"600"
    }
    const card =
    {
        backgroundColor:"white",
        boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        height:"90px",
        margin:"10px",
        borderRadius:"12px",
        width:"95%",
        display:"block",
        color:"black"
    }
    const listItem =
    {
        display:"flex",
        justifyContent:"space-between"
    }
    const listItemHeading = 
    {
        margin:"5px",
        fontSize:"1.3em"
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [gender,setGender] = useState("None");
    const [location,setLocation] = useState("None");
    const [date,setDate] = useState("dd/mm/yyyy");

    const [localProfileList,setLocalProfileList] = useState([]);
    
    useEffect(()=>
    {
        setLocalProfileList(props.profileList);
    },[props.profileList])
    const onFilterClick = () =>
    {
        if(gender !=="None")
        {
            setLocalProfileList(props.profileList.filter((profile) => { return profile.Gender === gender }));
        }
        if(location !=="None")
        {
            setLocalProfileList(props.profileList.filter((profile) => { return profile.Location === location }));
        }
        if(date !== "dd/mm/yyyy")
        {
            console.log(date);
            let dateString = DateTime.fromISO(date).toFormat('dd yy LLL');
            let day = dateString.substring(0,2);
            let month = dateString.substring(6,dateString.length);
            let year = dateString.substring(3,5);
            if(day.charAt(0) === "0")
            {
                day = day.charAt(1);
            }
            let finalDate = day+"-"+month+"-"+year; 
            setLocalProfileList(props.profileList.filter((profile) => { return profile.Date === finalDate }));
        }
        setGender("None");
        setLocation("None");
        handleClose();
    }
    return (
        <div style={eventsCard}>
            <div style={eventsHeadingWrapper}>
                <p style={eventsHeading}>Events</p>
                <IconButton onClick={() => {handleOpen()}}>
                    <ListIcon/>
                </IconButton>
            </div>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={style}>
                    <Select
                        value={location}
                        label="Location"
                        placeholder="Location"
                        onChange={(e) => {setLocation(e.target.value)}}
                        sx={{
                            margin:1
                        }}
                        >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                        <MenuItem value={"Chennai"}>Chennai</MenuItem>
                        <MenuItem value={"Hyderabad"}>Chennai</MenuItem>
                    </Select>
                    <Select
                        value={gender}
                        label="Gender"
                        placeholder="Gender"
                        onChange={(e) => {setGender(e.target.value)}}
                        sx={{
                            margin:1
                        }}
                        >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                    <TextField
                        label="Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={date}
                        onChange = {(e) =>setDate(e.target.value)}
                    />

                    <Button variant="contained" onClick={() => {onFilterClick()}}
                    sx={{
                        margin:1
                    }}>
                        Filter
                    </Button>
                </Box>
            </Modal>

            {
                localProfileList.map((profile) =>
                {
                    return <Button key={profile.ID} style={card} onClick={() => {props.setSelectedProfile(profile)}} sx={{
                        textTransform:"none"
                    }}>
                        <div style={listItem}>
                            <div>
                                <p style={listItemHeading}> {profile.ID}:{profile.Location}</p>
                                <p style={listItemHeading}> Person detected</p>
                            </div>
                            <p> {profile.Date} {profile.Time}</p>
                        </div>
                    </Button>
                })
            }
        </div>
    )
}
export default EventsCard;