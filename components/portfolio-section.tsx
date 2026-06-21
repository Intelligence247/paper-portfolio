import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function PortfolioSection() {
  const projects = [
    {
      title: "OmiChain",
      description:
        "Community-powered water mapping and crowdfunding platform. Built with modern web technologies to enable users to map water resources and fund water-related projects. The platform combines mapping visualization, user authentication, and payment processing.",
      tag: "Full-Stack",
      logo: "/images/omichain-logo.png",
      bgColor: "bg-[#6366F1]",
      illustration: "/images/studio-workspace.svg",
      link: "http://omichain.org/",
    },
    {
      title: "TracheidsHLX",
      description:
        "Scalable web application built with modern full-stack architecture. Implements complex features including real-time data processing, user management, and optimized database queries for high-performance operations.",
      tag: "Full-Stack",
      logo: "/images/tracheids-logo.png",
      bgColor: "bg-[#FF6B7A]",
      illustration: "/images/studio-workspace.svg",
    },
    {
      title: "Durar-Academy",
      description:
        "Educational platform built with Next.js and Tailwind CSS. Features course management, student enrollment, progress tracking, and secure authentication. Integrates payment processing for course access.",
      tag: "Full-Stack",
      logo: "/images/durar-logo.png",
      bgColor: "bg-[#FFC224]",
      illustration: "/images/venture-workspace.svg",
    },
    {
      title: "Sheltersetters",
      description:
        "Premium aluminium and roofing solutions platform. B2B/B2C application for product catalog, quotation management, and customer relationship handling. Serves residential, commercial, and industrial sectors.",
      tag: "Full-Stack",
      logo: "/images/shelter-logo.png",
      bgColor: "bg-[#FF9500]",
      illustration: "/images/studio-workspace.svg",
      link: "http://sheltersetters.com/",
    },
    {
      title: "DLT Africa",
      description:
        "Blockchain-based solutions and Web3 platform. Developed smart contracts and decentralized applications, integrating blockchain technology with traditional web applications for transparency and security.",
      tag: "Blockchain",
      logo: "/images/dlt-logo.png",
      bgColor: "bg-[#4F46E5]",
      illustration: "/images/venture-workspace.svg",
    },
    {
      title: "Abikeadecourt Hostel Platform",
      description:
        "Student hostel discovery and booking platform with integrated payment processing using Paystack. Features include hostel listings, user profiles, booking management, and secure payment integration.",
      tag: "Full-Stack",
      logo: "/images/abikeade-logo.png",
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/venture-workspace.svg",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">design portfolio</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 80} className="h-full">
              <div className="group bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full">
                <div className={`${project.bgColor} relative overflow-hidden h-[250px] md:h-[280px]`}>
                  <Image
                    src={project.illustration || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.title} logo`}
                        width={120}
                        height={32}
                        className="h-5 md:h-6 w-auto"
                      />
                    </div>

                    <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit">
                      {project.tag}
                    </span>

                    <h3 className="text-lg md:text-[24px] font-bold mb-3 leading-tight md:leading-[32px] text-[#0B0B0B]">
                      {project.title}
                    </h3>

                    <p className="text-sm md:text-[16px] text-[#393939] leading-relaxed md:leading-[26px] font-medium">
                      {project.description}
                    </p>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base mt-6"
                    >
                      View project
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 font-semibold text-gray-400 text-sm md:text-base mt-6">
                      <span>Coming soon</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/intelligence247"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Browse all portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
