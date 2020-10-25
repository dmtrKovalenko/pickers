import * as React from 'react';
import WhyNewProjectText from './WhyNewProject.mdx';
import KawaiiIcon from '_shared/svgIcons/KawaiiIcon';
import Link from 'next/link';

interface WhyNewProjectProps {}

export const WhyNewProject: React.FC<WhyNewProjectProps> = ({}) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <KawaiiIcon icon="bubble" />

        <h1 className="text-xl2 text-center mt-16 mb-4">
          The Long Story of this project and <br /> Material-UI
        </h1>

        <p className="g:w-2/6 md:w-3/6 w-5/6 text-center leading-relaxed">
          <WhyNewProjectText />
        </p>
        <div className="flex justify-center">
          <Link href="/guides/upgrading-from-v3">
            <button className="inline-flex shadow-md text-white bg-primary border-0 py-2 px-6 focus:outline-none transition-colors duration-200 ease-in-out hover:bg-primary-lighter rounded text-lg">
              How to upgrade?
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
