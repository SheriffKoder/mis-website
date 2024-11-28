"use client"

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import React, { useRef } from 'react'
import {ScrollTrigger} from "gsap/all";
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const SmoothScrollbar = ({ children }) => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=> {

        //////////////////////////////////////////////////////////////////////////////
        // scroll bar - only need this to setup smooth scroll and scroll bar
        Scrollbar.use(OverscrollPlugin);

        let bodyScrollBar = Scrollbar.init(document.body, {
          damping: 0.1,
          delegateTo: document,
          plugins: {
            overscroll: {
                effect: 'glow', // or 'bounce'
            glowColor: "#d21515"
            }
          }
        });

    },[]);


  return (
    <div className="MainContainer2509 h-[100vh]">
        {children}
    </div>
  );
};

export default SmoothScrollbar;
