import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Users, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex w-full justify-between items-center">
            <a className="flex items-center space-x-2" href="/">
              <Image
                src="/logo.jpeg"
                alt="Merlin Fox Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="hidden font-bold sm:inline-block">Merlin Fox</span>
            </a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="#services">
                Services
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="#contact">
                Contact
              </a>
              <Link href="https://www.google.com">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Personalized Digital Marketing for Remarkable Growth
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Merlin Fox crafts bespoke digital strategies that drive stunning 4+ ROI for brands of all sizes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link target="_blank" href="https://www.google.com">
                    <Button size="lg" className="inline-flex items-center">
                      Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    View Our Work
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg"
                alt="Digital Marketing Strategy"
                width={550}
                height={550}
                className="mx-auto aspect-square rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expertise</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We deliver personalized solutions that drive real results for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 items-start pt-8">
              {[
                {
                  title: "Strategic Planning",
                  description: "Custom digital strategies aligned with your business goals",
                  icon: Lightbulb,
                },
                {
                  title: "Data Analytics",
                  description: "In-depth analysis and reporting for informed decisions",
                  icon: BarChart,
                },
                {
                  title: "Brand Growth",
                  description: "Comprehensive solutions for sustainable online presence",
                  icon: Users,
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group relative flex flex-col items-center space-y-4 rounded-lg border p-6 hover:border-primary transition-colors"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/placeholder.svg"
                alt="Our Team"
                width={550}
                height={550}
                className="mx-auto aspect-square rounded-xl object-cover order-2 lg:order-1"
              />
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Merlin Fox</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Founded in 2021 in Pune, we&apos;re a boutique agency that believes in personalized approaches, not
                    one-size-fits-all solutions. With a deep understanding of your brand, audience, and industry, we
                    deliver exceptional results.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Proven 4+ ROI track record</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Expert team of digital strategists</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Personalized approach for every client</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt={`Client ${i}`}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">Client Success {i}</h3>
                      <p className="text-sm text-gray-500">Industry Leader</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                  &quot;Merlin Fox helped us achieve a 400% ROI on our digital marketing campaigns through their
                    personalized approach and expert strategies.&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Grow?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Let&apos;s craft your personalized digital strategy today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <Button size="lg" className="w-full">
                  Schedule a Consultation
                </Button>
                <p className="text-gray-500 dark:text-gray-400">
                  Or call us directly:{" "}
                  <a href="tel:7327962032" className="font-semibold text-primary">
                    (732) 796-2032
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col gap-4 px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1683011128084-9tiwpl9SC2l6z9pmnaBv3THcf4guu8.jpeg"
              alt="Merlin Fox Logo"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="font-semibold">Merlin Fox</span>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 Merlin Fox. All rights reserved. | Pune, Maharashtra
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <a className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="#">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

