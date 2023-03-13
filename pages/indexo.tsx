// import { useState, useRef, useEffect } from 'react';
// import Page from '../components/page';
// import {
//   Container,
//   NavBox,
//   NavbarContainer,
//   LeftBox,
//   Aside,
//   Title,
//   Main,
//   Box1,
//   Box2,
//   Box3,
//   Card,
//   Wrapper,
//   Info,
// } from '../styles/homestyle';
// import Head from 'next/head';
// import { IoMdWifi } from 'react-icons/io';
// import { RiShieldCheckFill, RiMedalFill } from 'react-icons/ri';
// import Image from 'next/image';
// import { Contact } from '../components/Contact';
// import { TrustBy } from '../components/TrustBy';
// import { Footer } from '../components/Footer';

// import 'aos/dist/aos.css';
// import Logo from '../assets/vector.png';

// export default function Home() {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(1);
//   console.log(selected);

//   const handleOpenNav = () => {
//     setOpen(!open);
//   };

//   const toggle = (i) => {
//     if (selected === i + selected + 1) {
//       return setSelected(null);
//     }
//     setSelected(i + 1);
//   };

//   return (
//     <Page title="Home" description="teste">
//       <Footer />
//       <Contact />
//       <TrustBy />
//       <Footer />
//     </Page>
//   );
// }
