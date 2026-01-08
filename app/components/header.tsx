import Image from "next/image";

export default function Header() {
    return (
        <div className="flex justify-center sm:justify-start">
          <Image 
            src="/assets/logo_dcart_development_2.png" 
            alt="dcartdevelopment logo" 
            width={125} 
            height={20} 
            priority 
            className="w-24 h-auto sm:w-28 md:w-32 lg:w-36"
          />
        </div>
    );
}