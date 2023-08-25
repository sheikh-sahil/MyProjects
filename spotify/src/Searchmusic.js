import "./Searchmusic.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCameraAlt, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
function Searchingmusic(props)
{
      const navigateTo=useNavigate();



    const [searchvalue,setSearch]=useState("");
    useEffect(()=>{
        props.search(searchvalue);
    },[searchvalue]);
    return<div id="search">
        <button id='signout' onClick={()=>{
            navigateTo('/');
        }}>sign out</button>
        <input type="text" placeholder="Search query" onChange={(e)=>{
               setSearch(e.target.value);
        }}></input>
        <FontAwesomeIcon icon={faCameraAlt} />

        <button onClick={()=>{navigateTo("/Savelist")}}>My Songs</button>
        <span id='vcbobtn' onClick={()=>props.vcbo(v=>!v)}><FontAwesomeIcon  icon={faVolumeHigh} id="volume"/></span>

    
       
        

    </div>
}
export default Searchingmusic;