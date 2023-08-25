'use client';
import { useAnimation, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Contact = () => {
  return (
    <div className="px-5 lg:px-8 py-4 pt-20 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">HERE IS OUR CONTACT HEADLINE</h1>
      {/* video */}
      <div className="w-full mt-5 h-full">
        <ReactPlayer
          url="/preview.mp4"
          playing={true}
          loop
          width="100%"
          height="100%"
        />
      </div>
      <p className="text-sm mb-5 mt-3">
        We are a Zurich Bangkok berlin based company but working worldwide for
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="uppercase text-md">
        Beyond nations ag <br /> st. annagasse 9 <br />
        8001 Zurich <br /> switzerland
      </p>
    </div>
  );
};

export default Contact;
