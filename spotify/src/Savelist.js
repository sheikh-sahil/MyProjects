import "./Savelist.css"
import {myfav} from "./Storage.js"
import Song from "./Song"
import { useNavigate } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft, faDeleteLeft, faTrashCan} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"



function Savelist()
{
   const navigateTo=useNavigate();
   const[remove,setRemove]=useState(false);



    return<div id="songs">
        <FontAwesomeIcon icon={faArrowLeft} id="A" onClick={()=>{navigateTo("/Songs")}}/>
        <h2>My Favourite Songs</h2>
    
     {
      myfav.map((item,index)=><Song refresh={setRemove} songname={item.songname} poster={item.songposter} singer={item.songsinger} src={item.songsrc} volume={0} />)
     } 

    </div>
}
export default Savelist