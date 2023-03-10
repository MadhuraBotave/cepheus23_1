import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "./Contact.css";
import MainCard from "./MainCard";
import SideCard from "./SideCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const contactDetails = [
  {
    name: "Srajan Chourasia",
    role: "Overall Coordinator",
    email: "gstechnical@iitgoa.ac.in",
    phone: "6263498532",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263732/chepheus/Srajan_Chourasia-Overall_Coordinator-6263498532_kmulj1.webp"
  },
  {
    name: "Atharva Bhanage",
    role: "Coordinator1",
    email: "gstechnical@iitgoa.ac.in",
    phone: "8074292759",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263710/chepheus/Atharva-Coordinator-8074292759_di3mex.webp"
  },
  {
    name: "Yuvraj Nagar",
    role: "Coordinator2",
    email: "gstechnical@iitgoa.ac.in",
    phone: "9770594125",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673264740/chepheus/Yuvraj_ckifao.webp"
  },
  {
    name: "Aniket Chaudhri",
    role: "Overall Event Manager",
    email: "gstechnical@iitgoa.ac.in",
    phone: "7087363393",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263711/chepheus/AniketChaudhri-OverallEventManager-7087363393_wutmtw.webp"
  },
  {
    name: "Mulayam",
    role: "Online Event Manager",
    email: "gstechnical@iitgoa.ac.in",
    phone: "9817568174",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263746/chepheus/Mulayam-Online_Junior_Event_Manager-9817568174_wdseyh.webp"
  },
  {
    name: "Atharva Bhawasar",
    role: "Offline Event Manager",
    email: "gstechnical@iitgoa.ac.in",
    phone: "9643204258",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263715/chepheus/Atharva_Bhawsar-Offline_junior_eventmanager-9643204258_i9uav7.webp"
  },
  {
    name: "Kushagra Srivastava",
    role: "Development Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "7007432254",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263711/chepheus/KushagraSrivastava_DevelopmentHead_7007432254_zdgupy.webp"
  },
  {
    name: "Neetu",
    role: "Marketing Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "6280789636",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263714/chepheus/Neetu-Marketing-6280789636_osaymj.webp"
  },
  {
    name: "Prateek Singhal",
    role: "Sponsorship Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "8529530095",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263714/chepheus/PrateekSinghal_SponsorshipHead_8529530095_h3en9q.webp"
  },
  {
    name: "Ritik Tiwari",
    role: "Social Media Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890",
    photo: ""
  },
  {
    name: "Shreya yadav",
    role: "Desgin Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "9431011303",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673264431/chepheus/ShreyaYadav-DesignHead-9431011303_sllh5l.webp"
  },
  {
    name: "Shivam Sinoliya",
    role: "Finance Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "9098819578",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263731/chepheus/ShivamSinoliya_FinanceHead_9098819578_dvsh3l.webp"
  },
  {
    name: "Diya Bhagat",
    role: "Decoration Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "8102115698",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263710/chepheus/DiyaBhagat-DecorationHead-8102115698_fi0ybz.webp"
  }
];

export default function Contact() {

  const [displayData, setDisplayData] = useState({
    name: "Srajan Chourasia",
    role: "Overall Coordinator",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263732/chepheus/Srajan_Chourasia-Overall_Coordinator-6263498532_kmulj1.webp"
  });

  const handleClick = (i) => {
    console.log("isClicked");
    setDisplayData({
      name: contactDetails[i].name,
      role: contactDetails[i].role,
      email: contactDetails[i].email,
      phone: contactDetails[i].phone,
      photo : contactDetails[i].photo,
    })
  }
  return(
    <div class="contact-us" id="Contact">
      <h1 class="contact-heading">CONTACT US</h1>
      <div class="contact-content">
        <div class="contact-full-card">
          <MainCard data={displayData}/>
        </div>
        <div class="contact-carousal">
          {contactDetails.map((item, i) => {
            return (
              <SideCard key={i} id={i} role={item.role} handleClick={handleClick} photo ={item.photo}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

























// export default function Contact() {
//   return (
//     <div className="contact-us">
//       <h1>Contact</h1>
//       {/* <Card /> */}
//       <div className="contact-first-layer">
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <div className="contact-second-layer">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <div className="contact-carousal">
//         <Swiper
//           // install Swiper modules
//           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={5}
//           navigation={{ clickable: true }}
//           //   pagination={{ clickable: true }}
//           //   scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             // when window width is >= 480px
//             480: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//             // when window width is >= 640px
//             640: {
//               slidesPerView: 4,
//               spaceBetween: 40,
//             },
//             900: {
//               slidesPerView: 5,
//               spaceBetween: 40,
//             },
//           }}
//           //   loop = {true}
//         >
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>

//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }
