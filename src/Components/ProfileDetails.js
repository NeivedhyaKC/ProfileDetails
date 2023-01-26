import styled from "styled-components";

const ProfileDetailsDiv = styled.div`
    flex-grow:1;
    flex-shrink:1;
    padding-left:10px;
    text-align:left;
    width:100%;
    @media (max-width: 980px) {
        text-align:center;
      }
`;

const ProfileDetails = (props) =>
{
    const id = 
    {
        fontWeight:"bold",
        fontSize:"1.3em"
    }

    const personDetected = 
    {
        fontWeight:"600",
        fontSize:"1.1em"
    }
    return (
        <ProfileDetailsDiv>
        {
            props.profile !== undefined?
            <div >
            
                <p style={id}>{props.profile.ID}</p>
                <p style={personDetected}>Person Detected</p>
                <p>Name : {props.profile.Name}</p>
                <p>Location : {props.profile.Location}</p>
                <p>Date : {props.profile.Date}</p>
                <p>Time : {props.profile.Time}</p>

                <p>Description:</p>
                <p>{props.profile.Name} detected at  {props.profile.Location} on {props.profile.Date}</p>
            </div> : null
        }
        </ProfileDetailsDiv>
    )
}
export default ProfileDetails;