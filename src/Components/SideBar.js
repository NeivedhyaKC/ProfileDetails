import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const SideBarParent = styled.div`
  padding: 10px 0px;
  height: 95%;
  @media (max-width: 980px) {
    display:none;
  }
`;

const SideBar = () =>
{
    const sideBar =
    {
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"column",
        backgroundColor :"#F55050",
        borderRadius:"10px",
        height:"100%",
        width:"50px"
    }
    return (
        <SideBarParent>
            <aside style={sideBar}>
            <IconButton>
                <HomeIcon color='white'/>
            </IconButton>
            <IconButton>
                <LogoutIcon color='white'/>
            </IconButton>
            </aside>
        </SideBarParent>
    )
}
export default SideBar;