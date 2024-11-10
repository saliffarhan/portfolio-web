
function About() {
    return (
        <div className="bg-gray-900" data-aos="zoom-out-down">
        <main className="mx-5   md:mx-20   ">
             <h1 className="text-center font-sans font-bold text-3xl mb-5 mt-11 text-white"><span className="text-teal-300">About</span> Us</h1>
            <section className="flex flex-col md:flex-row justify-center items-center gap-3 text-center cursor-pointer ">
                {/* about content */}
                <div className="flex-1 shadow-xl rounded-xl border px-6 py-5 border-gray-600  md:hover:border-teal-600 hover:ease-out ">
                    <p className="mb-5  mt-5 font-sans font-light text-white md:font-sans md:font-light">I am a front-end developer with 6 month of experience in building responsive and user-friendly web applications.</p>
                    <p className="font-sans font-light text-white md:font-sans md:font-light">Eager to apply my creativity and passion for web technologies in a front-end centric role, drawing upon self-taught skills in JavaScript, CSS, and HTML and a keen interest in creating user-centric web solutions that enhance engagement through intuitive design and functionality.</p> <br />
                    <p className=" mt-6font-sans font-light text-white md:font-sans md:font-light mb-6">In web development. I ve worked on a variety of projects for clients in the retail, travel, and healthcare industries. I am passionate about creating great user experiences and have a strong understanding of usability and accessibility standards.</p>
                </div>
            </section> 
        </main>
        </div>
    )
}

export default About