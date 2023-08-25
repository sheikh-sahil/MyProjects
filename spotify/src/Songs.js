import "./Songs.css"
import Song from "./Song.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVolumeHigh,  faVolumeXmark} from "@fortawesome/free-solid-svg-icons";
import Searchingmusic from "./Searchmusic.js";
import { useState} from 'react';

function Songs()
{
    const[volume,setVolume]=useState(50);
    const [volumeControllerBox,openVolumeCtrlBox]=useState(false);


    let songs=[
        
{poster:"https://i1.wp.com/www.kukikol.com/wp-content/uploads/Ranbir-Barfi.jpg?w=1417&ssl=1", songname:"Kyon" , singer:"Pritam, Papon, Sunidhi Chauhan" ,src:"https://pagalsong.in/uploads/systemuploads/mp3/Barfi/Kyon%20-%20Barfi%20128%20Kbps.mp3"},
{poster:"https://www.islamiclyrics.net/wp-content/uploads/2016/01/lab-pe-aati-hai-dua.jpg", songname:"Lab Pe Ati Hain Dua" , singer:"Ahmad Hussain", src:"https://drive.google.com/uc?export=download&id=1dudembAqwfZsbYSXIdsGyccMrlA34rM0"},
{poster:"https://th.bing.com/th/id/R.b6596c76cd4af1a5e057160d05aa2b4e?rik=zpYE0ufw3omJOw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-mgpu0MHYpIw%2fUdOzAtYxV6I%2fAAAAAAAAADk%2fSCkMQY6cWwU%2fs1024%2fAashiqui-2-new-movie-hd-poster-free.jpg&ehk=nncD%2f0quDAjr6BrbZ3LwIBmLhph%2fL9fBmWZpGiQ3C6E%3d&risl=&pid=ImgRaw&r=0", songname:"Ashique 2 " , singer:"Arijit Singh",src:"https://pagalsong.in/uploads/systemuploads/mp3/Aashiqui%202/Tum%20Hi%20Ho.mp3"},
{poster:"https://www.filmibeat.com/fanimg/ms-dhoni-the-untold-story-photos-images-51116.jpg", songname:"ye lamha jo thehera hai" , singer:"Arijit Singh" ,src:"https://pagalsong.in/uploads/systemuploads/mp3/M.S.%20Dhoni%20-%20The%20Untold%20Story/Phir%20Kabhi%20Reprise%20(M.S.Dhoni%20The%20Untold%20Story)%20128%20Kbps.mp3"},
{poster:"https://lyricalsansar.com/wp-content/uploads/2022/09/Kahani-Suno-2.0-Lyrics.jpg?x15301", songname:"kahani suno" , singer:"Kaifi khalil" ,src:"https://pagalsong.in/uploads/systemuploads/mp3/Kahani%20Suno%202.0%20-%20Kaifi%20Khalil/Kahani%20Suno%202.0%20-%20Kaifi%20Khalil%20128%20Kbps.mp3"},
{poster:"https://i.zoomtventertainment.com/story/Untitled_design_-_2020-05-01T135137.466.jpg", songname:"All is Well" , singer:"Mp 3" ,src:"https://pwdown.info/113088/01.%20Aal%20Izz%20Well.mp3"},
{poster:"https://i1.wp.com/bestoftheyear.in/wp-content/uploads/2017/12/1920-london.jpg?fit=400%2C576&ssl=1", songname:"1920 london" , singer:"Sharib Sabri, Toshi Sabri" ,src:"https://pwdown.info/10181/Aaj%20Ro%20Len%20De%20-%201920%20London%20(Sharib-Toshi)%20320kbps.mp3"},
{poster:"https://4.bp.blogspot.com/-qIxjZHeO8Qs/ValUwbtDHQI/AAAAAAAALlI/581s_h1k4NI/s1600/Bajrangi%2BBhaijaan-Film%2BPoster.jpg", songname:"Kuch to bata Zhindagi" , singer:"Jubin Nautiyal" ,src:"https://pwdown.info/113603/Kuch%20To%20Bata%20Zindagi.mp3"},
{poster:"https://i1.wp.com/c-cl.cdn.smule.com/rs-s77/arr/02/3b/039b9c48-6309-444f-9a7d-f779a324f37a_1024.jpg", songname:"Hasi Ban Gaye..." , singer:"Arman Malik" ,src:"https://pwdown.info/111341/03.%20Hasi%20(Male%20-%20Ami%20Mishra.mp3"},
{poster:"https://www.filmymama.com/wp-content/uploads/2019/03/teri-mitti-video-song-from-kesar.jpg", songname:"Teri Mithi...(Kesari)" , singer:"B Praak" ,src:"https://pagalsong.in/uploads/systemuploads/mp3/Kesari/Teri%20Mitti%20-%20Kesari%20128%20Kbps.mp3"},
{poster:"https://www.pagalworld.link/GpE34Kg9Gq/113599/148173-maiyya-mainu-jersey-mp3-song-300.jpg", songname:" Maiyya Mainu - Jersey" , singer:"Sachet Tandon, Sachet Parampara" ,src:"https://pwdown.info/113599/Maiyya%20Mainu%20-%20Jersey.mp3"},
{poster:"https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1371161708.jpg", songname:"Kun Faaya Kun - Rockstar mp3 songs" , singer:"AR Raheman,Javed Ali" ,src:"https://pagalsong.in/uploads/systemuploads/mp3/Rockstar/Kun%20Faaya%20Kun%20-%20Rockstar%20128%20Kbps.mp3"},
{poster:"https://img.pagalworld.icu/Dil%20Meri%20Na%20Sune-540-hd.jpg", songname:"Dil Mere Na Sune" , singer:"Atif Aslam" ,src:"https://pagalworld.icu/song/540/#"},
{poster:"https://img.pagalworld.icu/Bhar%20Do%20Jholi%20Meri-7437-hd.jpg", songname:"Bhar Do Zholi" , singer:"Adnan Sami" ,src:"http://hindi.pagalworld.icu/2015/Bajrangi%20Bhaijaan/Bhar-Do-Jholi-Meri-(Reprise)-(pagalworldsongs.co.in).mp3"},
{poster:"https://www.pagalworld.link/GpE34Kg9Gq/112069/thumb-mera-naam-joker-300.jpg", songname:"Jina yaha marna yaha" , singer:"Mukesh" ,src:"https://pwdown.info/112069/02.%20Jeena%20Yahan%20Marna%20Yahan.mp3"},

]
       
const [Songs,setSongs]=useState(songs);
     const f1=(searchvalue)=>{
           setSongs(songs.filter((item,index)=>{
               return (item.songname.search(`${searchvalue}`))>-1;
           }))
     }



     

    return<div id="Box">
    <div id="songs">
         <Searchingmusic vcbo={openVolumeCtrlBox} search={f1}/>
         
       {

        Songs.map((item,index)=><Song songname={item.songname} poster={item.poster} singer={item.singer} src={item.src} volume={volume} />)
        
       } 

        
       
       
   </div>
        
   {
       volumeControllerBox&&<div id="volume" >
            <h1 id='level'>{volume}</h1>
           { (volume>0)?<FontAwesomeIcon icon={faVolumeHigh}/>:<FontAwesomeIcon icon={faVolumeXmark}/>  }
            <input type="range" onChange={(e)=>setVolume(e.target.value)}/>
        </div>
    }  
       </div> 
}
export default Songs;