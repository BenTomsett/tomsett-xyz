import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  const variants = {
    b: {
      rest: { fillOpacity: 0 },
      hover: { fillOpacity: 1 },
    },
    e: {
      rest: { fillOpacity: 0, transition: { delay: 0.05 } },
      hover: { fillOpacity: 1, transition: { delay: 0.05 } },
    },
    n: {
      rest: { fillOpacity: 0, transition: { delay: 0.1 } },
      hover: { fillOpacity: 1, transition: { delay: 0.1 } },
    },
    j: {
      rest: { fillOpacity: 0, transition: { delay: 0.15 } },
      hover: { fillOpacity: 1, transition: { delay: 0.15 } },
    },
    i: {
      rest: { fillOpacity: 0, transition: { delay: 0.2 } },
      hover: { fillOpacity: 1, transition: { delay: 0.2 } },
    },
    colon: {
      rest: { opacity: 0, translateX: -5, transition: { delay: 0.3 } },
      hover: { opacity: 1, translateX: -0, transition: { delay: 0.3 } },
    },
    bracket: {
      rest: { opacity: 0, translateX: -5, transition: { delay: 0.3 } },
      hover: { opacity: 1, translateX: -0, transition: { delay: 0.3 } },
    },
    colonShadow: {
      rest: { fillOpacity: 0, transition: { delay: 0.3 } },
      hover: { fillOpacity: 1, transition: { delay: 0.3 } },
    },
    bracketShadow: {
      rest: { fillOpacity: 0, transition: { delay: 0.3 } },
      hover: { fillOpacity: 1, transition: { delay: 0.3 } },
    },
  };

  return (
    <motion.svg
      className="translate-x-[-12.5px] dark:fill-white"
      whileTap="hover"
      whileHover="hover"
      initial="rest"
      animate="rest"
      width="142px"
      height="61px"
      viewBox="0 0 142 61"
    >
      <defs>
        <path
          d="M98.56,11.88 C98.56,13.64 100.04,15.12 101.8,15.12 C103.56,15.12 105.04,13.64 105.04,11.88 C105.04,10.12 103.56,8.64 101.8,8.64 C100.04,8.64 98.56,10.12 98.56,11.88 Z M98.56,25.44 C98.56,27.2 100.04,28.68 101.8,28.68 C103.56,28.68 105.04,27.2 105.04,25.44 C105.04,23.68 103.56,22.2 101.8,22.2 C100.04,22.2 98.56,23.68 98.56,25.44 Z"
          id="path-1"
        />
        <filter
          x="-277.8%"
          y="-89.8%"
          width="655.6%"
          height="279.6%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feOffset
            dx="0"
            dy="0"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="6"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.910905302   0 0 0 0 0.701510429   0 0 0 0 0.025215026  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M111.48,18.52 C111.48,24.52 110.16,28.92 107.4,33.72 L110.6,36.2 C114.52,31.84 117,24.96 117,18.52 C117,12.08 114.52,5.24 110.6,0.84 L107.4,3.24 C110.16,8.12 111.48,12.52 111.48,18.52 Z"
          id="path-3"
        />
        <filter
          x="-187.5%"
          y="-50.9%"
          width="475.0%"
          height="201.8%"
          filterUnits="objectBoundingBox"
          id="filter-4"
        >
          <feOffset
            dx="0"
            dy="0"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="6"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.974949419   0 0 0 0 0.452202499   0 0 0 0 0.0838147923  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M0,28.24 L5.08,28.24 L5.08,25.8 C6.6,27.68 8.72,28.72 11.04,28.72 C15.92,28.72 19.6,25.04 19.6,18.6 C19.6,12.28 15.96,8.44 11.04,8.44 C8.76,8.44 6.6,9.44 5.08,11.4 L5.08,1.56 L0,1.56 L0,28.24 Z M5.08,22.04 L5.08,15.2 C5.92,13.92 7.8,12.96 9.44,12.96 C12.4,12.96 14.36,15.24 14.36,18.6 C14.36,21.96 12.4,24.2 9.44,24.2 C7.8,24.2 5.92,23.28 5.08,22.04 Z"
          id="path-5"
        />
        <filter
          x="-91.8%"
          y="-66.3%"
          width="283.7%"
          height="232.5%"
          filterUnits="objectBoundingBox"
          id="filter-6"
        >
          <feOffset
            dx="0"
            dy="0"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="6"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.93920356   0 0 0 0 0.260808378   0 0 0 0 0.263886869  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M22.2,18.56 C22.2,24.76 26.64,28.72 32.52,28.72 C35.52,28.72 38.52,27.84 40.48,26.04 L38.24,22.76 C37,23.96 34.88,24.68 33.08,24.68 C29.8,24.68 27.84,22.64 27.52,20.2 L41.88,20.2 L41.88,19.08 C41.88,12.76 37.96,8.44 32.2,8.44 C26.32,8.44 22.2,12.96 22.2,18.56 Z M32.2,12.48 C35.56,12.48 36.84,14.92 36.96,16.76 L27.44,16.76 C27.68,14.84 29.04,12.48 32.2,12.48 Z"
          id="path-7"
        />
        <filter
          x="-91.5%"
          y="-88.8%"
          width="282.9%"
          height="277.5%"
          filterUnits="objectBoundingBox"
          id="filter-8"
        >
          <feOffset
            dx="0"
            dy="0"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="6"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.92529887   0 0 0 0 0.283123791   0 0 0 0 0.600362062  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M58.6,28.24 L63.68,28.24 L63.68,14.6 C63.68,10.84 61.64,8.44 57.4,8.44 C54.24,8.44 51.88,9.96 50.64,11.44 L50.64,8.92 L45.56,8.92 L45.56,28.24 L50.64,28.24 L50.64,15.24 C51.48,14.08 53.04,12.96 55.04,12.96 C57.2,12.96 58.6,13.88 58.6,16.56 L58.6,28.24 Z"
          id="path-9"
        />
        <filter
          x="-99.3%"
          y="-90.9%"
          width="298.7%"
          height="281.8%"
          filterUnits="objectBoundingBox"
          id="filter-10"
        >
          <feOffset
            dx="0"
            dy="0"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="6"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.234098107   0 0 0 0 0.508246481   0 0 0 0 0.964215577  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M71.24,6.08 C72.92,6.08 74.28,4.72 74.28,3.04 C74.28,1.36 72.92,0 71.24,0 C69.6,0 68.2,1.36 68.2,3.04 C68.2,4.72 69.6,6.08 71.24,6.08 Z M73.8,8.92 L68.72,8.92 L68.72,28.76 C68.72,30.92 67.64,31.84 66.16,31.84 C65.84,31.84 65.36,31.8 65.04,31.72 L64.72,35.88 C65.32,36 66,36.08 66.92,36.08 C71.56,36.08 73.8,33.16 73.8,28.76 L73.8,8.92 Z"
          id="path-11"
        />
        <filter
          x="-188.3%"
          y="-49.9%"
          width="476.6%"
          height="199.8%"
          filterUnits="objectBoundingBox"
          id="filter-12"
        >
          <feOffset
            dx="0"
            dy="0"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="6"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.00856311526   0 0 0 0 0.716655552   0 0 0 0 0.82536763  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M81.36,6.08 C83.04,6.08 84.4,4.72 84.4,3.04 C84.4,1.36 83.04,0 81.36,0 C79.72,0 78.32,1.36 78.32,3.04 C78.32,4.72 79.72,6.08 81.36,6.08 Z M78.84,28.24 L83.92,28.24 L83.92,8.92 L78.84,8.92 L78.84,28.24 Z"
          id="path-13"
        />
        <filter
          x="-296.1%"
          y="-63.7%"
          width="692.1%"
          height="227.5%"
          filterUnits="objectBoundingBox"
          id="filter-14"
        >
          <feOffset
            dx="0"
            dy="0"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="6"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.132089972   0 0 0 0 0.772009671   0 0 0 0 0.366415977  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          transform="translate(-270.000000, -114.000000)"
          fillRule="nonzero"
        >
          <g id="benji-:)" transform="translate(282.520000, 126.760000)">
            <g id=":">
              <motion.use
                variants={variants.colonShadow}
                fill="black"
                filter="url(#filter-2)"
                xlinkHref="#path-1"
              />
              <motion.use
                variants={variants.colon}
                className="dark:fill-white"
                fill="#272727"
                xlinkHref="#path-1"
              />
            </g>
            <g id=")">
              <motion.use
                variants={variants.bracketShadow}
                fill="black"
                filter="url(#filter-4)"
                xlinkHref="#path-3"
              />
              <motion.use
                variants={variants.bracket}
                className="dark:fill-white"
                fill="#272727"
                xlinkHref="#path-3"
              />
            </g>
            <g id="b">
              <motion.use
                variants={variants.b}
                fill="black"
                filter="url(#filter-6)"
                xlinkHref="#path-5"
              />
              <use className="dark:fill-white" fill="#272727" xlinkHref="#path-5" />
            </g>
            <g id="e">
              <motion.use
                variants={variants.e}
                fill="black"
                filter="url(#filter-8)"
                xlinkHref="#path-7"
              />
              <use className="dark:fill-white" fill="#272727" xlinkHref="#path-7" />
            </g>
            <g id="n">
              <motion.use
                variants={variants.n}
                fill="black"
                filter="url(#filter-10)"
                xlinkHref="#path-9"
              />
              <use className="dark:fill-white" fill="#272727" xlinkHref="#path-9" />
            </g>
            <g id="j">
              <motion.use
                variants={variants.j}
                fill="black"
                filter="url(#filter-12)"
                xlinkHref="#path-11"
              />
              <use className="dark:fill-white" fill="#272727" xlinkHref="#path-11" />
            </g>
            <g id="i">
              <motion.use
                variants={variants.i}
                fill="black"
                filter="url(#filter-14)"
                xlinkHref="#path-13"
              />
              <use className="dark:fill-white" fill="#272727" xlinkHref="#path-13" />
            </g>
          </g>
        </g>
      </g>
    </motion.svg>
  );
};

export default Logo;
