import Grow from '@mui/material/Grow';
import {getStorage, getDownloadURL, ref as storageRef} from "firebase/storage";
import { useEffect,useState } from "react";
const ProfileCard = (props) =>
{
    const card =
    {
        backgroundColor:"white",
        height:"600px",
        boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        borderRadius:"12px",
        minWidth:"380px"
    }
    const profileImage =
    {
        objectFit:"contain",
        height:"85%",
        margin:"10px 20px",
        marginBottom:"5px"
    }
    const gender =
    {
        fontWeight:"600",
        fontSize:"1.1em",
        paddingTop:"20px",
        paddingBottom:"5px",
        margin:0
    }

    const [image, setImage] = useState();
    let [checked, setChecked] = useState(true);

    useEffect(() =>
    {
        console.log(props.profile);
        const fetchImage = async (location) =>
        {
            const imageUrl = await getDownloadURL(storageRef(getStorage(), location));
            setImage(imageUrl);
        }
        if(props.profile)
        {
            fetchImage(props.profile.Name+".jpg");
        }
        setChecked(false);
        setTimeout(() =>
        {
            setChecked(true)
        },600);
    },[props.profile])

    return (
        <div>
            <Grow in={checked} timeout={200}>
                <div style={card}>
                    <p style={gender}> {props.profile? props.profile.Gender:null}</p>
                    <img src={image} alt="profileImage" style={profileImage}/>
                </div>
            </Grow>
        </div>
    )
}
export default ProfileCard;