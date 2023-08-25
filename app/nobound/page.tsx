'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import FadeInSection from '@/components/FadeInSection';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

function Page() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  return (
    <div ref={scrollRef} className="max-w-7xl   space-y-20   lg:mx-auto">
      <FadeInSection>
        <div className="pt-10 mx-5">
          <h1 className="text-2xl font-bold uppercase">
            PUSHING BOUNDARIES IN DIGITAL PUBLISHING COMMUNICATION AND SALES
          </h1>

          <div className="w-full relative mt-5 h-full">
            <ReactPlayer
              url="/preview.mp4"
              playing={true}
              loop
              width="100%"
              height="100%"
            />
          </div>
          <p className="text-sm mb-5 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consecteur adipisicing elit,
            sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="pt-10 mx-5">
          <div className="h-600  player-wrapper">
            <ReactPlayer
              url="/preview.mp4"
              playing={true}
              loop
              width="100%"
              height="550px"
              volume={0}
            />
            <h3 className="text-2xl mt-3 font-bold uppercase">FOR PUBLISHER</h3>
            <p className="text-sm mb-5 mt-1">
              Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse Nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="pt-10 mx-5">
          <div className="h-600  player-wrapper">
            <ReactPlayer
              url="/preview.mp4"
              playing={true}
              loop
              width="100%"
              height="550px"
              volume={0}
            />
            <h3 className="text-2xl mt-3 font-bold uppercase">FOR Brands</h3>
            <p className="text-sm mb-5 mt-1">
              Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse Nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse
            </p>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="pt-10 mx-5">
          <div className="player-wrapper">
            <ReactPlayer
              url="/preview.mp4"
              playing={true}
              loop
              width="100%"
              height="550px"
            />
            <h3 className="text-2xl mt-3 font-bold uppercase">FOR ARTISTS</h3>
            <p className="text-sm mb-5 mt-1">
              Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse Nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse
            </p>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <Contact />
        <Footer />
      </FadeInSection>
    </div>
  );
}

export default Page;
