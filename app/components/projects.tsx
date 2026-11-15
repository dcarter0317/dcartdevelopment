import Link from "next/dist/client/link";
import Card from "./card";
import Image from "next/image";

export default function Projects() {
    return (
        <>
          <h2 className="text-2xl font-bold mb-8" id="projects">&#123;Recent Projects&#125;</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
                   <Card className="mb-4">
                        <Image 
                            src="/assets/card_image_bwtf.png" 
                            alt="Project Image" 
                            width={700} 
                            height={425}
                            className="w-full h-auto"
                        />
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col sm:flex-row sm:gap-4 mt-4 mb-4">
                                <h2 className="text-xl sm:text-2xl font-bold">Ben's World Of Transformers</h2>
                                <Link className="pt-1 text-[#0066CC] underline whitespace-nowrap" href="https://bwtf.com" target="_blank">Visit Site</Link>
                            </div>
                            <p className="mb-4 text-sm sm:text-base"><strong>Ben's World of Transformers</strong> is a toy review blog built on Drupal, where I served as the <strong>sole developer</strong> from initial build through ongoing maintenance. I designed and implemented <strong>custom Drupal themes</strong>, handled site building and content architecture, and continue to manage <strong>deployments, platform upgrades, and long-term maintenance</strong>, ensuring performance, scalability, and reliability.</p>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-4">
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />Drupal</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />Theme Development</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />Site Building</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />Site Maintenance</span>
                        </div>
                    </Card>
                    <Card className="mb-4">
                        <Image 
                            src="/assets/card_image_dreadarchie.png" 
                            alt="Project Image" 
                            width={700} 
                            height={425}
                            className="w-full h-auto"
                        />
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col sm:flex-row sm:gap-4 mt-4 mb-4">
                                <h2 className="text-xl sm:text-2xl font-bold">Dread Archie Jr</h2>
                                <Link className="pt-1 text-[#0066CC] underline whitespace-nowrap" href="https://www.dreadarchiejr.com/" target="_blank">Visit Site</Link>
                            </div>
                            <p className="mb-4 text-sm sm:text-base"><strong>DreadArchieJr.com</strong> is an artist website for a professional comedian, built using a combination of <strong>AI-assisted design and development</strong> and custom code. I served as the <strong>sole developer</strong>, responsible for site building, transforming the project into a custom <strong>WordPress theme</strong>, and deploying the site to Vercel. I continue to handle ongoing <strong>maintenance and updates</strong>, ensuring performance and stability.</p>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-4 mb-2">
                            <span className="badge"><Image src="/assets/icons/icon_wordpress.png" alt="WordPress Icon" width={16} height={16} />WordPress</span>
                            <span className="badge"><Image src="/assets/icons/icon_wordpress.png" alt="WordPress Icon" width={16} height={16} />Theme Development</span>
                            <span className="badge"><Image src="/assets/icons/icon_wordpress.png" alt="WordPress Icon" width={16} height={16} />Site Building</span>
                            <span className="badge"><Image src="/assets/icons/icon_wordpress.png" alt="WordPress Icon" width={16} height={16} />Site Maintenance</span>
                            <span className="badge"><Image src="/assets/icons/icon_php.png" alt="PHP Icon" width={16} height={16} />PHP</span>
                            <span className="badge"><Image src="/assets/icons/icon_javascript.png" alt="Javascript Icon" width={16} height={16} />Javascript</span>
                            <span className="badge"><Image src="/assets/icons/icon_css.png" alt="CSS Icon" width={16} height={16} />CSS</span>
                        </div>
                 </Card>
             <Card className="mb-4">
                <Image 
                    src="/assets/card_image_chestercounty.png" 
                    alt="Project Image" 
                    width={700} 
                    height={425}
                    className="w-full h-auto"
                />
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col sm:flex-row sm:gap-4 mt-4 mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">The Chester Country Handyman</h2>
                        <Link className="pt-1 text-[#0066CC] underline whitespace-nowrap" href="https://thechestercountyhandyman.com/" target="_blank">Visit Site</Link>
                    </div>
                    <p className="mb-4 text-sm sm:text-base"><strong>The Chester County Handyman.com</strong> is a professional website for a local handyman business, built using a combination of <strong>AI-assisted design and development</strong> and <strong>custom code</strong>. The project was ultimately transformed into a custom WordPress theme, allowing the client to easily manage and update content. I served as the <strong>sole developer</strong>, responsible for the design, development, deployment, and ongoing maintenance.</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-2">
                    <span className="badge"><Image src="/assets/icons/icon_wordpress.png" alt="WordPress Icon" width={16} height={16} />WordPress</span>
                    <span className="badge"><Image src="/assets/icons/icon_wordpress.png" alt="WordPress Icon" width={16} height={16} />Theme Development</span>
                    <span className="badge"><Image src="/assets/icons/icon_wordpress.png" alt="WordPress Icon" width={16} height={16} />Site Building</span>
                    <span className="badge"><Image src="/assets/icons/icon_wordpress.png" alt="WordPress Icon" width={16} height={16} />Site Maintenance</span>
                    <span className="badge"><Image src="/assets/icons/icon_php.png" alt="PHP Icon" width={16} height={16} />PHP</span>
                    <span className="badge"><Image src="/assets/icons/icon_javascript.png" alt="Javascript Icon" width={16} height={16} />Javascript</span>
                    <span className="badge"><Image src="/assets/icons/icon_css.png" alt="CSS Icon" width={16} height={16} />CSS</span>
    
                </div>
             </Card>
             <Card className="mb-4">
                <Image 
                    src="/assets/card_image_daveydex.png" 
                    alt="Project Image" 
                    width={700} 
                    height={425}
                    className="w-full h-auto"
                />
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col sm:flex-row sm:gap-4 mt-4 mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">Davey Dex</h2>
                        <Link className="pt-1 text-[#0066CC] underline whitespace-nowrap" href="https://www.daveydex.com" target="_blank">Visit Site</Link>
                    </div>
                    <p className="text-sm sm:text-base"><strong>DaveyDex.com</strong> is a performance-focused artist platform built with HTML,  CSS, and JavaScript, featuring a custom music player powered by a structured JSON data model. Rather than hardcoding assets or relying on third-party embeds.</p>
                    <p className="mb-4 text-sm sm:text-base">I served as the <strong>sole developer</strong>, responsible for <strong>data modeling, front-end architecture, UI/UX design, deployment, and ongoing maintenance</strong>, applying system-level thinking while keeping the implementation lightweight and performant.</p>
                 </div>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <span className="badge"><Image src="/assets/icons/icon_html.png" alt="HTML Icon" width={16} height={16} />HTML</span>
                    <span className="badge"><Image src="/assets/icons/icon_sass.png" alt="SASS Icon" width={16} height={16} />SASS</span>
                    <span className="badge"><Image src="/assets/icons/icon_javascript.png" alt="Javascript Icon" width={16} height={16} />Javascript</span>
                </div>
             </Card>
          </div>
        </>
    );
}
