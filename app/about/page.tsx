'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import FadeInSection from '@/components/FadeInSection';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

function About() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  return (
    <div ref={scrollRef} className="max-w-7xl   space-y-20   lg:mx-auto">
      <FadeInSection>
        <div className="pt-10 mx-5">
          <h1 className="text-2xl font-bold">
            VISION, STRATEGY EXECUTION STANDS BEHIND BEYOND NATIONS
          </h1>

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
          <img
            src="/profile-preview.jpeg"
            className="w-full h-[500px]"
            alt="profil"
          />
          <h3 className="text-2xl mt-3 font-bold">HOLGER HANSEN</h3>
          <p className="text-sm mb-5 mt-1">
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse Nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="pt-10 mx-5">
          <img
            src="/profile-preview.jpeg"
            className="w-full h-[500px]"
            alt="profil"
          />
          <h3 className="text-2xl mt-3 font-bold">ADRIAN SCHMID</h3>
          <p className="text-sm mb-5 mt-1">
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse Nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="pt-10 mx-5">
          <img
            src="/profile-preview.jpeg"
            className="w-full h-[500px]"
            alt="profil"
          />
          <h3 className="text-2xl mt-3 font-bold">MELANIE APPOLLONI</h3>
          <p className="text-sm mb-5 mt-1">
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse Nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="pt-10 mx-5">
          <img
            src="/profile-preview.jpeg"
            className="w-full h-[500px]"
            alt="profil"
          />
          <h3 className="text-2xl mt-3 font-bold">TECH DEVLOPEMNENT</h3>
          <p className="text-sm mb-5 mt-1">
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse Nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="pt-10 mx-5">
          <img
            src="/profile-preview.jpeg"
            className="w-full h-[500px]"
            alt="profil"
          />
          <h3 className="text-2xl mt-3 font-bold uppercase">knox & jasper</h3>
          <p className="text-sm mb-5 mt-1">
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse Nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="pt-10 mx-5">
          <img
            src="/profile-preview.jpeg"
            className="w-full h-[500px]"
            alt="profil"
          />
          <h3 className="text-2xl mt-3 font-bold uppercase">AI susie</h3>
          <p className="text-sm mb-5 mt-1">
            Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse Nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse
          </p>
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
