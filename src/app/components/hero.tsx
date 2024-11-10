import Image from "next/image"

function HeroPage(){
    return(
        <div className="bg-gray-900">
        <main className="mx-3 mt-2 file md:mx-20 ">
            <section className="flex flex-col md:flex-row justify-center items-center gap-3 ">
                {/* left side */}
                <div className="flex-1 text-teal-50">
                    <h1 className="font-bold font-sans text-2xl mb-5 md:text-4xl " data-aos="zoom-in-right">Hello <br /> I am Front-End-Deveplor <br /> & UI/UX Designer</h1>
                    <p className="font-sans font-light mt-7">I am a web Deveplor, proficient in coding and maitaining websites to ensure functionality <br /> & responsiveness</p>
                    <button className="bg-white rounded-2xl px-5 py-1 mt-6 hover:bg-teal-700 text-black font-semibold " data-aos="zoom-in-right">Lets talk</button>
                    <br />
                    <span className="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start ">
      <a className="text-white hover:text-teal-600 mt-7">
        <svg data-aos="zoom-in-right"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a className="ml-3 text-white mt-7  hover:text-teal-600">
        <svg data-aos="zoom-in-right"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <a className="ml-3 text-white mt-7  hover:text-teal-600">
        <svg data-aos="zoom-in-right"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
                </div>
                {/* right side */}
                <div className="mb-20 " data-aos="fade-up-left" >
                    <Image width={400} height={600} src="/Salif.png" alt="student" />
                </div>
                
            </section>
        </main>
        </div>
    )
}

export default HeroPage