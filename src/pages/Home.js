// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import HeroHome from "../components/HeroHome";
// import FeaturesHome from "../components/Features";
// import FeaturesBlocks from "../components/FeaturesBlocks";
// import Testimonials from "../components/Testimonials";
// import Footer from "../components/Footer";

// const Home = () => {
//   const [hasMounted, setHasMounted] = useState(false);
//   const [userInput, setUserInput] = useState("");

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) return null;

//   const submitHandler = async () => {
//     console.log("The entered data is ");
//   };

//   return (
//     <div className="flex flex-col min-h-screen overflow-hidden">
//       {/*  Site header */}
//       {/* <Header /> */}
//       <p>Home Page</p>
//       {/*  Page content */}
//       <main className="flex-grow">
//         {/*  Page sections */}
//         {/* <HeroHome /> */}
//         {/* <FeaturesHome /> */}
//         {/* <FeaturesBlocks /> */}
//         {/* <Testimonials /> */}
//       </main>

//       {/* <Banner /> */}

//       {/*  Site footer */}
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Home;

import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home