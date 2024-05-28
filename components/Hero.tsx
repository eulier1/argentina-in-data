import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20" id="header">
      <div className="container">
        <div className="row items-center gap-y-12">
          <div className="col md:w-[65%]">
            <h1 className="tracking-widest opacity-80">Argentina in Data</h1>
            <p className="w-[32rem] max-w-full mb-6 text-xl leading-relaxed">
              A glance at historical data
            </p>
          </div>
          <div className="col md:w-[35%]">
            <Image
              className="filter card w-full h-96 object-cover shadow-lg shadow-slate-600"
              src="https://d1pnnwteuly8z3.cloudfront.net/images/7e41257d-e5c2-42fc-999e-f55c8c4ceb98/6caed556-33dd-44e2-92c6-4e2b4afe242d.jpeg"
              width="500"
              height="370"
              alt="Portrait of a man"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
