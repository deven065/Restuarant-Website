import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";

// Load font (only for this component)
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"], // pick weights you need
});

export default function OurStory() {
    return (
        <section className="bg-[#fffdfa] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            
            {/* Left: Text */}
            <div>
            <h2
                className={`${bodoni.className} text-4xl md:text-5xl text-gray-900 mb-6`}
            >
                Our Story
            </h2>
            <p className="text-gray-500 mb-4 leading-relaxed text-lg">
                At Maison Verdure, we believe unforgettable meals begin with extraordinary ingredients. 
                Our chefs partner with local farms, fishermen, and artisans to bring the freshest seasonal flavors to your table.
            </p>
            <p className="text-gray-500 leading-relaxed text-lg">
                The ambiance blends natural textures with warm lighting—inviting, intimate, and perfect 
                for every occasion from casual lunches to celebrations.
            </p>
            </div>

            {/* Right: Rectangular Image */}
            <div className="w-full">
            <Image
                src="/OurStory.avif"
                alt="Delicious food"
                width={900}
                height={600}
                className="w-full h-auto rounded-xl shadow-xl"
                priority
            />
            </div>
        </div>
        </section>
    );
}
