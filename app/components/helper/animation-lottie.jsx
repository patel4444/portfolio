"use client"; // हमेशा file के सबसे ऊपर

import dynamic from "next/dynamic";

// Lottie component को SSR से disable करके import किया
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%',
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
