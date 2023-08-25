'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import FadeInSection from '@/components/FadeInSection';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

function About() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const [sound, setSound] = useState(false);

  const handleSound = () => {
    setSound(!sound);
  };
  console.log(sound);
  return (
    <div ref={scrollRef} className="max-w-7xl    space-y-20  lg:mx-auto">
      <FadeInSection>
        <div className="w-full h-full">
          <div className="w-full player-full relative  h-screen">
            <iframe
              src="https://embed.api.video/vod/vi1dom9EJMbRgthPBrxUqDNz?hidePoster=true&&&&chromeless=true&&loop=true&muted=false&autoplay=true&id=vi1dom9EJMbRgthPBrxUqDNz&live=false&ts=1692938807363#loop;hide-poster;chromeless;api;sdkOrigin:aHR0cHM6Ly9ub2JvdW5kLmNvbQ==;sdkPlayerId:1"
              width="100%"
              height="100%"
              style={{}}
            />
            <div
              onClick={handleSound}
              className="absolute cursor-pointer z-100 bottom-[8rem] right-3"
            >
              <Image src="/pulse.png" width={64} height={64} alt="icons" />
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="mx-5 pt-10">
          <h1 className="text-2xl font-bold">
            PUSHING BOUNDARIES IN TECHNOLOGY, STORYTELLING AND DESIGN
          </h1>

          <div className="w-full mt-5  relative h-full">
            <ReactPlayer
              url="/preview.mp4"
              playing={true}
              loop
              width="100%"
              height="100%"
            />
            <div className="absolute w-full bottom-4 left-0">
              <p className="text-lg animation-travel uppercase mb-5 mt-3">
                {' '}
                we create thing for amazing
              </p>
            </div>
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
        <div className="mx-5 pt-10">
          <img
            src="/profile-preview.jpeg"
            className="w-full h-[500px]"
            alt="profil"
          />
          <h3 className="text-2xl mt-3 font-bold">
            OUR CAPAPILITIES LOREM IPSUM DOLOR ANIM ID EST LABORUM.
          </h3>
          <p className="text-sm mb-5 mt-1">
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse Nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="mx-5 pt-10">
          <h3 className="text-2xl my-2 text-red-500 upper case font-bold">
            The future of publishing
          </h3>
          <div className="w-full player-full relative  h-[600px]">
            <ReactPlayer
              url="/preview.mp4"
              playing={true}
              loop
              width="100%"
              height="100%"
              style={{
                objectFit: 'cover',
              }}
              muted={sound}
            />
            <div
              onClick={handleSound}
              className="absolute cursor-pointer z-20 bottom-5 right-3"
            >
              <Image src="/pulse.png" width={64} height={64} alt="icons" />
            </div>
          </div>
          <h3 className="text-2xl text-red-500 mt-3 upper case font-bold">
            Learn more Swipe
          </h3>
        </div>
      </FadeInSection>

      <FadeInSection>
        <Contact />
        <Footer />
      </FadeInSection>
    </div>
  );
}

export default About;
