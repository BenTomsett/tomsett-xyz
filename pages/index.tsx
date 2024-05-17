import React from 'react';
import type { NextPage } from 'next';
import {
  GitHub, Linkedin, Twitter,
} from 'react-feather';
import { ColorContext } from './_app';
import Header from '../components/Header';
import Button from '../components/Button';

const Home: NextPage = () => (
  <ColorContext.Consumer>
    {({ color }) => (
      <div className="dark:text-gray-200 transition-colors duration-200">
        <Header />
        <div
          className="flex flex-col justify-center px-8 mx-auto w-full max-w-5xl md:my-20 my-2"
        >
          <div className="text-7xl mb-5">👋</div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-gray-300">
            Hey! I&apos;m Ben!
            {' '}
            <div
              className="text-lg text-slate-400 dark:text-gray-600"
            >
              (a.k.a.
              Benji)
            </div>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-slate-500 dark:text-gray-500">
            I’m a
            computer science student based in England, with full-stack
            experience designing web and mobile apps. I work with React &
            React Native, Express, Typescript and more.
          </h2>
          <div className="flex gap-3 flex-wrap mb-10">
            <Button
              onClick={() => {
                window.open('https://github.com/BenTomsett');
              }}
              endIcon={<GitHub size="20" />}
              text="GitHub"
            />
            <Button
              onClick={() => {
                window.open('https://linkedin.com/in/bentomsett');
              }}
              endIcon={<Linkedin size="20" />}
              text="LinkedIn"
            />
          </div>
        </div>
        <div
          className={`bg-${color}-100 dark:bg-${color}-600 dark:bg-opacity-20`}
        >
          <div className="max-w-5xl mx-auto px-8 py-12 mb-10">
            <h3 className={`text-2xl font-semibold text-${color}-900 dark:text-${color}-600`}>
              More about me
            </h3>
            <p className="text-lg leading-6 dark:text-gray-200">
              I’m currently studying computer science at the University of
              East Anglia, and also working as a technical
              support analyst at catalyst2. Previously I’ve worked as a
              freelancer for both local businesses and charities as well
              as nationwide organisations; designing brands, building websites
              and maximising social media presence.
            </p>
            <p className="text-lg leading-6 dark:text-gray-200">
              I have experience building full stack applications in React
              and React Native, leveraging modern technologies to build
              performative and reliable apps for a number of use cases.
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-5xl mx-auto px-8 py-12">
            <h3 className={`text-2xl font-semibold text-${color}-900 dark:text-${color}-600`}>Work</h3>
            <p className="text-lg leading-6">
              I&apos;m updating this section - check back soon!
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-5xl mx-auto px-8 pt-20 pb-10">
            <p className="text-md leading-6">
              © Ben Tomsett 2024
            </p>
          </div>
        </div>
      </div>
    )}
  </ColorContext.Consumer>
);

export default Home;
