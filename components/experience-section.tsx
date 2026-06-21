import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "2023 - Present",
      title: "Founder & CEO",
      company: "OmiChain",
      description:
        "Leading OmiChain, a community-powered water mapping and crowdfunding platform. Overseeing product development, technical architecture, and strategic direction of the platform.",
      icon: "/images/omichain-logo.png",
    },
    {
      period: "2023 - Present",
      title: "Full-Stack Developer",
      company: "TracheidsHLX",
      description:
        "Building and maintaining scalable web applications using MERN stack. Developing APIs, optimizing database queries, and implementing modern frontend solutions with React.",
      icon: "/images/tracheids-logo.png",
    },
    {
      period: "2022 - 2023",
      title: "Full-Stack Developer",
      company: "DLT Africa",
      description:
        "Developed blockchain-based solutions and web applications. Worked with smart contracts, decentralized systems, and Web3 technologies to build innovative products.",
      icon: "/images/dlt-logo.png",
    },
    {
      period: "2021 - 2022",
      title: "Full-Stack Developer",
      company: "Durar-Academy",
      description:
        "Built educational platform using Next.js, Tailwind CSS, and Node.js backend. Implemented course management, user authentication, and payment integration features.",
      icon: "/images/durar-logo.png",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">past experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              A journey through diverse roles and companies, building scalable applications and leading innovative projects. Each experience has shaped my expertise in full-stack development and technical leadership.
            </p>
            <Button asChild className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                See full resume
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div>
                    <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                      {exp.period}
                    </div>
                    {exp.company && (
                      <div className="text-sm md:text-[16px] text-gray-600 mt-1">
                        {exp.company}
                      </div>
                    )}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white flex items-center justify-center w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
