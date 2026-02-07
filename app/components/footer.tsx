import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
      <>
        <footer className="flex flex-col items-center text-center justify-center w-full mt-6 md:mt-8 mb-4 px-4" id="contact">
            <Link href="mailto:dcarter0317@yahoo.com?subject=Inquiry%20from%20DCartDevelopment.com%20Website" className="mb-3 md:mb-4 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur transition hover:bg-white/20">
             <Image 
                src="/assets/icons/icon_contact.png" 
                alt="contact icon"
                width={84}
                height={84}
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              />
              <span className="text-sm sm:text-base md:text-lg font-medium">Contact Me</span>
           </Link>
           <p className="text-sm sm:text-base md:text-lg max-w-2xl">Open to enterprise roles, freelance work, and collaborations.<br/>Dave Carter — DCart Development</p>
        </footer>
      </>
    )
} 