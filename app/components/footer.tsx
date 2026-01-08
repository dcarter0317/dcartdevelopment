import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
      <>
        <footer className="flex flex-col items-center text-center justify-center w-full mt-6 md:mt-8 mb-4 px-4" id="contact">
           <Link href="mailto:dcarter0317@yahoo.com?subject=Inquiry%20from%20DCartDevelopment.com%20Website" className="mb-3 md:mb-4">
             <Image 
                src="/assets/icons/icon_contact.png" 
                alt="contact icon"
                width={84}
                height={84}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              />
           </Link>
           <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Get In Touch</p>
           <p className="text-sm sm:text-base md:text-lg max-w-2xl">Open to enterprise roles, freelance work, and collaborations.<br/>Dave Carter — DCart Development</p>
        </footer>
      </>
    )
} 