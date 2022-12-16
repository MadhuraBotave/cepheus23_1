.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .App .events-bg{
    background-image: url("./Events-Images/events_page.png");
    background-size: cover;
    background-repeat: repeat-y;
    margin: 0px;
    height: 100vh;
    width: 100vw;
    overflow: hidden
  }
  
  .events-blur{
    position: absolute;
    width: 70%;
    
    margin-left: 15%;
    margin-top: 5px;
    border-radius: 15px;
    /* backdrop-filter: blur(20px); */
    /* background: linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)); */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
  .events-flexin{
    /* border: 2px solid red; */
    height: 350px;
    width: 350px;
    align-items: center;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
  }
  
  .events-flexin img{
    cursor: pointer;
    width: 250px;
    height: 250px;
    margin: 0px;
    /* border: 2px solid black; */
    transition-duration: 0.2s;
  }
  
  .events-flexin img:hover{
    width: 300px;
    height: 300px;
  }
  
  .events-rb{
    /* border: 2px solid red; */
    height: 100px;
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .events-bg h1{
    font-family: 'Space Boards DEMO';
    font-style: normal;
  }
  .events-rb img{
    cursor: pointer;
    height: 70px;
    width: 250px;
    transition-duration: 0.2s;
  }
  .events-rb img:hover{
    width: 270px;
    height: 80px;
  }
  .buttonimg{
    width: 300px;
    margin-left: 2%;
  }
  .buttondiv:hover{
    scale:1.1;
    transition: 0.2s;
  }





  #online:hover{
    scale: 1.1;
    transition: ease-in-out 0.2s;
}
#offline:hover{
    scale: 1.1;
    transition: ease-in-out 0.2s;
}
#talks:hover{
    scale: 1.1;
    transition: ease-in-out 0.2s;
}
#rulebook:hover{
    scale: 1.1;
    transition: ease-in-out 0.2s;
}













html {
  box-sizing: border-box;
  background: black;
  font-family:  sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}
*, *:before, *:after {
  box-sizing: inherit;
}
.nav-dots {
  position: fixed;
  top: 55%;
  right: 6%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
  cursor: pointer;
  
}
.nav-dot {
  width: 12px;
  height: 12px;
  border: 2px solid #52616a;
  border-radius: 50%;
  list-style: none;
  background: #c9d6de;
  transition: all 0.3s;
  border-color:white;
   border-width:1px;
   border-style:solid;
}
.nav-dot:not(:last-of-type) {
  margin-bottom: 20px;
}
.nav-dot:hover, .nav-dot.is-active {
  transform: scale(1.4);
  background: #FCC200;
}
.section {
  
  display: none;
  
  /* display: block; */
  justify-content: center;
  align-content: center;
  height: 100%;
  
  
  /* transition: 0.3s; */
  /* margin-left: 100px; */
  
  
  
}
.section.is-active{
    display: block;
    /* visibility: hidden; */
    justify-content: center;
    align-content: center;
    height: 100%;
    transition: 1s;
    animation: fadein 2s ease-in 1 forwards;
    /* transform: translateY(-3%); */
    
    /* transform */
    
}



/* .section:nth-of-type(1) {
  background-color: #a5d296;
}
.section:nth-of-type(2) {
  background-color: #47b8e0;
}
.section:nth-of-type(3) {
  background-color: #ffc952;
}
.section:nth-of-type(4) {
  background-color: #ff7473;
} */
/* .section__heading {
  margin: 0;
  color: white;
  font-size: 32px;
  text-transform: capitalize;
} */


#list>li:hover{
  scale: (1.2);
  transition:ease-in-out 0.2s;
}
#list1>li:hover{
  scale: (1.2);
  transition:ease-in-out 0.2s;
}
#list2>li:hover{
  scale: (1.2);
  transition: ease-in-out 0.2s;
}



.firston{
  display: block;
}
.firstoff{
  display: none;
}
.secondon{
  display: block;
}
.secondoff{
  display: none;
}


#close:hover{
  scale: 1.2;
  transition: 0.2s;
}
.event:hover{
  scale: 1.05;
  transition:0.2s;
}
