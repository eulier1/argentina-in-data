'use client'

import AreaChart from './AreaChart';

import cabaInternet from '@/utils/cabaInternet.json';
import countryInternet from '@/utils/countryInternet.json';

const SectionData = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="row mb-12 md:mb-16 lg:mb-20">
          <div className="col w-[32rem] max-w-full">
            <p className="font-medium tracking-widest uppercase opacity-80">
              Internet bandwidth (2014-2024)
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          <div className="px-8 py-12 bg-neutral lg:p-12 flex flex-col gap-8">
            <div className="flex w-full h-full">
              <AreaChart
               //@ts-ignore
                stock={cabaInternet}
                width={200}
                height={200}
              ></AreaChart>
            </div>
            <div className="flex gap-4 sm:items-center flex-col sm:flex-row">
              <div>
                <p className="mt-8 text-xl">CABA (Buenos Aires)</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-12 bg-neutral lg:p-12 flex flex-col gap-8">
            <div className="w-full h-full">
              <AreaChart
              //@ts-ignore
                stock={countryInternet}
                width={200}
                height={200}
              ></AreaChart>
            </div>
            <div className="flex gap-4 sm:items-center flex-col sm:flex-row">
              <div>
                <p className="mt-8 text-xl">Rest of the Country</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-12 bg-neutral lg:p-12 flex flex-col gap-8 justify-center items-center">
            <div className="h-6 text-primary">
              <svg
                height="100%"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.92 11.44H0.36L5.16 0.399998H7.8L4.92 11.44ZM14.52 11.44H9.96L14.76 0.399998H17.4L14.52 11.44Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionData;
