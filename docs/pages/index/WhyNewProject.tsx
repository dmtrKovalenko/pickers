import * as React from 'react';
import WhyNewProjectText from './WhyNewProject.mdx';
import KawaiiIcon from '_shared/svgIcons/KawaiiIcon';

interface WhyNewProjectProps {}

export const WhyNewProject: React.FC<WhyNewProjectProps> = ({}) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <KawaiiIcon icon="bubble" />

        <h1 className="text-xl2 text-center mt-16 mb-4">
          {' '}
          The Long Story of this project and <br /> Material-UI{' '}
        </h1>

        <p className="g:w-2/6 md:w-3/6 w-5/6 text-center leading-relaxed">
          <WhyNewProjectText />
        </p>
      </div>
    </section>
  );
};
