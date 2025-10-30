import React from 'react'

function AboutUs() {
    return (
        <section className=' bg-[url("https://pninfosys.org/aboutUsImage3.jpg")] bg-fixed relative w-full py-16 px-4 md:px-20 bg-white overflow-hidden '>
{/*             
            <div className="absolute inset-0 bg-fixed">
                <img
                    src="https://pninfosys.org/aboutUsImage3.jpg"
                    alt="Background"
                    className="w-full h-full object-cover "
                />
            </div> */}

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-blue-500/70  p-8 rounded-lg shadow-lg">

                {/* Left Side */}
                <div className="flex items-center justify-center md:justify-start">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl md:text-5xl text-white bg-[#050985] p-4 rounded-full shadow-lg">
                            <span role="img" aria-label="question">❓</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold italic text-black">
                            Who we are
                        </h2>
                    </div>
                </div>

                {/* Right Side */}
                <div >
                    <p className="text-white text-justify leading-relaxed font-medium">
                        We are a one-stop destination for all digital solution, be it website designing, web development, digital marketing, SEO, mobile apps and full maintenance and compliance services for Government and Commercial facilities both large and small. Our elegant group of Developers provide their innovation who transform your idea into an amazing website Design or Mobile App Development while keeping every custom project unique.
                        <br /><br />
                        We are part of this IT industry since 2018, we not only developed products and websites but also provide internship and training to students and make them capable to work in this IT software industry. Our internship and training program is totally based on hand to hand practical with live projects.
                        <br /><br />
                        Our team of IT professionals certified professionals services Dental Offices, Medical Offices, Restaurants, Bars and all types of businesses throughout the Lowcountry and the world. Our team of IT professionals certified professionals services Hospitals, Colleges, Research Institutes, Schools, Restaurants, Bars and all types of businesses throughout the Lowcountry and the world.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default AboutUs
