import "../firebase";
import {getDatabase, ref, onValue} from "@firebase/database";
import {getStorage, getDownloadURL, ref as storageRef} from "firebase/storage";
import { useEffect,useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import AppBar from "./AppBar";

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

    const dbRef = ref(getDatabase(),"/");
    const [image, setImage] = useState();

    onValue(dbRef,(snapshot) =>
    {
        console.log(snapshot.val());
    })


    useEffect(() =>
    {
        const fetchImage = async (location) =>
        {
            const imageUrl = await getDownloadURL(storageRef(getStorage(), location));
            setImage(imageUrl);
        }
        fetchImage("Female01.jpg");
    },[])

    return (
        <ThemeProvider theme={theme}>
            <AppBar/>
            <img src={image} alt="f"></img>
        </ThemeProvider>
    )
}

export default DisplayPage;