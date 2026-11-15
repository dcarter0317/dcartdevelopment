import Link from "next/dist/client/link";
import Card from "./card";
import Image from "next/image";

export default function selectedProjects() {
    return (
        <>
          <h2 className="text-2xl font-bold mb-8" id="projects">&#123;Selected Projects&#125;</h2>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6 mb-8">
                   <Card className="mb-4 flex-col gap-4">
                        <Image 
                            src="/assets/card_image_taskcurrent.png" 
                            alt="Project Image" 
                            width={700} 
                            height={425}
                            className="w-full h-auto"
                        />
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col sm:flex-row sm:gap-4 mt-4 mb-4">
                                <h2 className="text-xl sm:text-2xl font-bold">TaskCurrent - SaaS marketing demonstration project</h2>
                                <Link className="pt-1 text-[#0066CC] underline whitespace-nowrap" href="https://taskcurrent.vercel.app/" target="_blank">Visit Site</Link>
                            </div>
                            <p className="mb-4 text-sm sm:text-base"><strong>Taskcurrent</strong> is a custom-built SaaS marketing experience and marketing automation portfolio project that combines modern front-end development, responsive email design, workflow automation, and marketing analytics.</p>

                            <p className="mb-4 text-sm sm:text-base">I designed and developed a responsive SaaS website, created six branded MJML email templates for customer acquisition and engagement, and implemented automated development and integration workflows using GitHub Actions and n8n.</p>

                            <p className="mb-4 text-sm sm:text-base">The project combines UI/UX design and prototyping in Figma, front-end engineering, responsive email development, marketing analytics, and DevOps automation into a connected marketing technology solution. I designed and implemented the website and email experiences, translating Figma designs into responsive, production-ready interfaces using modern development technologies. Particular emphasis was placed on reusable components, consistent branding across web and email, intuitive user experiences, structured event tracking, secure integrations, and maintainable deployment processes.</p>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-4">
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />React/NextJS</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />Resend</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />Typescript</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />Tailwind CSS</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />MJML</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />GTM/GA4</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />N8N</span>
                            <span className="badge"><Image src="/assets/icons/icon_drupal.png" alt="Drupal Icon" width={16} height={16} />Figma</span>
                        </div>
                    </Card>
          </div>
        </>
    );
}
