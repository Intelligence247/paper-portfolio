import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function ServicesSection() {
  const services = [
    {
      title: "Backend Development",
      description: "Building robust, scalable APIs and server-side applications using Node.js, Express.js, and MongoDB. Expertise in database design, optimization, and deployment.",
      image: "/images/web-design.svg",
    },
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React, Next.js, and Tailwind CSS. Focus on performance, accessibility, and modern UX patterns.",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "Full-Stack Applications",
      description: "End-to-end application development from database to user interface. Building complete MERN stack solutions with integrated authentication, payments, and real-time features.",
      image: "/images/product-design.svg",
    },
    {
      title: "Web3 & Blockchain",
      description: "Developing blockchain-based solutions and Web3 applications. Smart contract integration, DApp development, and decentralized systems architecture.",
      image: "/images/user-research.svg",
    },
    {
      title: "Database Design",
      description: "Designing optimized database schemas for scalability and performance. Experience with relational and NoSQL databases, data modeling, and query optimization.",
      image: "/images/motion-graphics.svg",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">core services</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Full-stack web development expertise combining frontend elegance with robust backend architecture. Specializing in scalable applications, Web3 integration, and modern development practices.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group">
                  <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={382}
                      height={328}
                      className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="px-8 pb-8 flex-1 flex flex-col">
                    <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                    <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={services.length * 80}>
              <div className="bg-[#6366F1] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-8">
                  <Image
                    src="/images/get-in-touch.svg"
                    alt="Get in touch"
                    width={92}
                    height={92}
                    className="w-[92px] h-[92px]"
                  />
                </div>
                <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-white">Let's build something great</h3>
                <p className="text-[18px] leading-[30px] font-medium text-white mb-8">
                  Have a project in mind? I&apos;m open to discussing new ideas, opportunities, and collaborations.
                </p>
                <Button asChild className="bg-white text-[#6366F1] hover:bg-gray-100 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]">
                  <a href="mailto:uthmanabdullahi2020@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get in touch
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
