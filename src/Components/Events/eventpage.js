import './Events.css';
import React, {useState} from "react";


export default function Eventcard({data,exiting}) {
    return(
    //   <div class="contact-main-card">
    //     <img class="main-card-border" src="img/Main_card_border.png" alt="Border"></img>
    //     <div class="main-card-content">
    //       <img src="img/user_placeholder.png" alt="Avatar"></img>
    //       <div class="main-card-contact-detail">
    //           <p class="name-role">{data.role}</p>
    //           <p class="name-role">{data.name}</p>
    //           <p class="contact">{data.email}</p>
    //           <p class="contact">{data.phone}</p>
    //       </div>
    //     </div>
    //   </div>
        <div>
							<center>
							<div id='outer' >
								<div id='inner' >
								<div id='inner-left'>
									<div id='fake'></div>
								<img draggable='false' id='close2' src={data.exitsrc} onClick={()=>{exiting()}}   ></img>
									<center><img draggable='false' id='left-post' src="./poster.png"></img>
									<h3 id='sub-left-head'>Contact:Event Coheads</h3>
									<h4 id='sub-sub-left-head' >{data.left1}</h4>
									<h4 id='sub-sub-left-head'>{data.left2}</h4>
									</center>
								</div>
								<div id='inner-right'>
									<img draggable='false' id='close1' src={data.exitsrc}   onClick={()=>{exiting()}}    ></img>
									<center><h1 id='sub-head'>{data.name}</h1>
									
									</center>
									<div id='para'>{data.para}</div>
									<center><button id='button-right' >Register</button></center>
								</div>
								</div>
							</div>
							</center>
		</div>		
    )
  }