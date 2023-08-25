

import "./Login.css"
import SpotifyImage from "./spotifylogo.png";
import { useNavigate } from "react-router-dom";
function Login()
{
    const navigateTo=useNavigate();


    
    return <div id="loging">
     
        <img src="https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png" width="40%" height="30%"/>
        <input required type="email" placeholder="Username or email"/>
        <input required type="password" placeholder="Password"/>
        <button type='submit'  onClick={()=>{
               navigateTo('/Songs');
        }}  >LOG IN</button>
    
    </div>
}
export default Login;