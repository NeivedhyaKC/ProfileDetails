import "../firebase";
import {getDatabase, ref, onValue} from "@firebase/database";
import { createTheme, ThemeProvider } from "@mui/material";
import AppBar from "./AppBar";
import SideBar from "./SideBar";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import EventsCard from "./EventsCard";
import styled from "styled-components";
import { useEffect, useState } from "react";


const Main = styled.main`
    display:flex;
    box-sizing:border-box;
    height:100vh;
    padding-top:75px;
    padding-left:20px;
    padding-right:20px;
    align-items:center;
    @media (max-width: 980px) {
        flex-direction:column;
      }
`;
const DisplayPage = () =>
{
    const theme = createTheme({
        palette:
        {
            red:
            {
                main:"#F73463",
                contrastText:"white"
            },
            green:
            {
                main:"#98D22F",
                contrastText:"white"
            },
            white:
            {
                main:"#FFFFFF"
            }
        },
        '@global': {
            '*::-webkit-scrollbar': {
              width: '0.4em'
            },
            '*::-webkit-scrollbar-track': {
              '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,.1)',
              outline: '1px solid slategrey'
            }
          }
    })

    const [profileList, setProfileList] = useState([]);
    const [selectedProfile,setSelectedProfile] = useState();
    
    useEffect(() =>
    {
        const dbRef = ref(getDatabase(),"/");
        onValue(dbRef,(snapshot) =>
        {
            let list = snapshot.val();
            setProfileList(list);
            setSelectedProfile(list[0]);
        });

    },[])

    return (
        <ThemeProvider theme={theme}>
            <AppBar profileList = {profileList}/>
            <Main>
                <SideBar/>
                <ProfileDetails profile={selectedProfile}/>
                <ProfileCard profile={selectedProfile}/>
                <EventsCard profileList = {profileList} setSelectedProfile={setSelectedProfile}/>
            </Main>
        </ThemeProvider>
    )
}

export default DisplayPage;