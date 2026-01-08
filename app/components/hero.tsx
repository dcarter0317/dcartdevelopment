import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <>
          <section className="flex flex-col md:flex-row mt-4 mb-8 md:mt-2 md:mb-6 justify-between items-center md:items-start gap-6 md:gap-4">
              <div className="hero_text w-full md:max-w-2xl text-center md:text-left">
                <p className="text-sm md:text-base">&lt;David Carter&nbsp;/&gt;</p>
                <h1 className="heading-text text-3xl sm:text-4xl md:text-5xl font-thin mt-4 mb-4 md:mb-6">
                     I am a Web Developer, I like to make ideas come to life
                </h1>  
              <div className="flex text-base sm:text-lg md:text-xl gap-3 sm:gap-4 ml-0 md:ml-2 hero-nav justify-center md:justify-start flex-wrap">
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
                <Link href="/assets/David_Carter_Resume_2025.zip">Resume</Link>
              </div>
              </div>
              <div className="hero_image shrink-0">
                <Image
                  src="/assets/hero_avatar.png"
                  alt="Hero Image"
                  width={200}
                  height={200}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
                  priority
                />
              </div>
           </section>
        </>
    );
}