import "./Song.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCut, faDownload, faEllipsisVertical, faSave, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { useState,useRef,useEffect } from "react";
import {myfav,setCurrentSong,currentsong} from './Storage.js';


function Song(props)
{
   


    const audio=useRef(null);
    const [popup,open]=useState(false)
    const [isPlaying,play]=useState(false);
   
    useEffect(()=>{
         
        (isPlaying)?audio.current.play():audio.current.pause();    
    },[isPlaying]);
  
    useEffect(()=>{   
     audio.current.volume=props.volume/100;
     console.log(audio.current.volume);
    },[props.volume])
    
    return<div id="box" >
    <div id="song" >
        <div id="img"><img src={props.poster} width={"100%"} height={"100%"}/></div>
        <div id="songname" onClick={()=>{ play(!isPlaying);    }}   ><b>{props.songname}</b><p><span>LYRICS</span> {props.singer}</p></div>
       <div id='playinganim' style={{visibility:(isPlaying)?"visible":"hidden"}}><img src="https://cdn.dribbble.com/users/8397981/screenshots/15955512/media/63c5be8eed650789c9fe53e94dbf9a05.gif" width="100%" height="100%"/></div>  
        <div id="btn" onClick={()=>{open(!popup)}}><FontAwesomeIcon icon={faEllipsisVertical}/></div>
    </div>
        
      <div id="pop" style={{display:(popup)?"block":"none"}}>
      <ul type="none"  style={{paddingLeft:"5px",color:"black"}}>
        <li onClick={()=>{ 
            myfav.push({songname:props.songname,songposter:props.poster,songsrc:props.src,songsinger:props.singer});
          }}>
          <span >Save</span>
          <FontAwesomeIcon icon={faSave}/>
        </li> 
        <li> 
          <span>Download</span>
          <FontAwesomeIcon icon={faDownload}/>
        </li>
        <li onClick={()=>{
        let S=myfav.find((item)=>item.songname===props.songname);
        let index=myfav.indexOf(S);
        myfav.splice(index,1);
          props.refresh(c=>!c);
          
          
          }}>  
          <span >Remove</span>
          <FontAwesomeIcon icon={faTrashCan}/>
        </li>
      </ul>
      </div>
     <audio src={props.src} ref={audio}></audio>
    </div>
}
export default Song;