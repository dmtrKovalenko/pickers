import React from 'react';
import Link from 'next/link';
import { GITHUB_URL } from '_constants';
import PageMeta from 'components/PageMeta';
import GitHub from 'components/svgIcons/GithubIcon';
import Logo from 'components/svgIcons/Logo';
import { WhyNewProject } from '../components/WhyNewProject';

function Landing() {
  return (
    <div>
      <PageMeta
        title="Material-UI Pickers"
        description="Accessible, customizable, delightful date & time pickers for @material-ui/core"
      />
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Logo />

          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font mt-8 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              All-in-one set of Date/Time pickers
            </h1>
            <p className="mb-8 leading-relaxed">
              This project is a continuation of @pickers/material-ui project by the original author.
              Our goal is to provide the first-class experience for Date/Time picking for{' '}
              <a href="https://material-ui.com/">Material-UI</a>,{' '}
              <a href="https://tailwindcss.com/">Tailwind</a> and pure react users.
            </p>
            <div className="flex justify-center">
              <Link href="/getting-started/installation">
                <button
                  role="button"
                  className="inline-flex shadow-md text-white bg-primary border-0 py-2 px-6 focus:outline-none transition-colors duration-200 ease-in-out hover:bg-primary-lighter rounded text-lg"
                >
                  Get Started
                </button>
              </Link>

              <a
                href={GITHUB_URL}
                className="ml-4 unstyled-link container flex justify-between text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
              >
                Github
                <GitHub className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font">
        <div className="container px-5 py-18 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 mb-5 flex-shrink-0">
                <svg
                  className="w-10  fill-current"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />{' '}
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Developer Experience first
                </h2>
                <p className="leading-relaxed text-base">
                  Be ready to out-of-box localization, accessibility, timezone management, static
                  typing and useful API
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 mb-5 flex-shrink-0">
                <svg
                  className="w-10  fill-current"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Easy Date/Time management
                </h2>
                <p className="leading-relaxed text-base">
                  Designed to be zero-effort compatible with moment, date-fns, luxon and dayjs. And
                  to support any calendar system you need.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 mb-5 flex-shrink-0">
                <svg
                  className="w-10 fill-current"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Blazing fast & well animated
                </h2>
                <p className="leading-relaxed text-base">
                  Following world-best design system guides we provide awesome ui both for desktop
                  and mobile experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr id="why-material-ui" className="w-40 border-t-4 font-900 text-center mt-16 mx-auto" />

      <WhyNewProject />
    </div>
  );
}

export default Landing;
