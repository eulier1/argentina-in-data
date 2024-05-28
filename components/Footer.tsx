export const Footer = () => {
    return (<footer className="pt-6 pb-6 bg-dark-900 md:pt-12 lg:pt-16" id="footer">
    <div className="container">
        <div className="row gap-y-16">
            <div className="col lg:w-6/12">
                <div className="max-w-[34rem]">
                    <div className="mb-1 text-xl">
                        <span className="opacity-60">Say Hello!</span> 👋
                    </div>
                    <a href="https://twitter.com/arthard101" className="filter text-xl text-white hover:text-primary hover:brightness-100 md:text-2xl">X (formerly Twitter)</a>
                    <p className="mt-2" ><a href="https://www.estadisticaciudad.gob.ar/eyc/?p=106167" className="filter text-white hover:text-primary hover:brightness-100 opacity-60">Source : Estadistica Gobierno de Buenos Aires</a></p>
                    <p className="mb-0 opacity-60">© 2024. Powered by Versoly, React, Next.js & Vercel</p>
                </div>
            </div>
            <div className="col lg:w-6/12">
                <div className="flex justify-left lg:justify-center">
                    <div>
                        <div className="flex gap-5 md:gap-6 lg:gap-8 mb-5 md:mb-6 lg:mb-8">
                            <div className="grow-0 shrink-0">
                                <img className="w-[4.5rem] h-[4.5rem] md:h-24 md:w-24 rounded-full object-cover" src="https://d1pnnwteuly8z3.cloudfront.net/images/7e41257d-e5c2-42fc-999e-f55c8c4ceb98/bfe477af-8ca3-4bc9-af05-49fe2792dcc5.jpeg" alt="Portrait of a man" />
                            </div>
                            <div>
                                <p className="text-2xl mb-2 md:text-[2rem] leading-tight">Eulier Gonzalez</p>
                                <p className="text-xl opacity-80">Software Engineer</p>
                                <a href="https://www.youtube.com/eulier1" className="mr-2 filter text-xl text-white hover:text-primary hover:brightness-100 md:text-2xl">Youtube</a>
                                <a href="https://www.linkedin.com/in/eulier-gonzalez-69079096/" className="filter text-xl text-white hover:text-primary hover:brightness-100 md:text-2xl">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>)
}

export default Footer