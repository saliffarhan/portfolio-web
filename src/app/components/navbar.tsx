import Image from "next/image"
import Link from "next/link"

function Navbar(){
    return(
        <main className="mx-1 mt-2 md:mx-9 sticky top-0 bg-blend-saturation  ">
            <section className="flex justify-between  ">
                {/* logo */}
                <div className="mr-4" data-aos="zoom-in-right">
                    <Link href="/"><Image width={150} height={200} src="/s-logo.png" alt="" /></Link>
                </div>
                {/* navbar */}
                <ul className="text-white flex space-x-6 py-10 mr-4  md:py-10 md:mr-11 md:space-x-11 " data-aos="zoom-in-left">
                    <li className="hover:text-teal-600  md:font-medium" >
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-teal-600 font-medium">
                        <Link href="#">About</Link>
                    </li>
                    <li className=" hover:bg-teal-600 md:py-1 md:px-4 md:bg-teal-50 md:rounded-xl md:font-semibold md:text-black">
                        <Link href="#"><button>Contact us</button></Link>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Navbar