import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Create publish-worthy<br />Designs on day one
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
          Morph simplifies design creation for Windows users with ready-made templates that you can quickly customize even if you've never done it before.
        </p>
        <Button className="bg-[#ff7757] px-8 py-6 text-lg hover:bg-[#ff7757]/90">
          Buy Now!
        </Button>
        
        <div className="mt-16">
          <Image
            src="/hero.png"
            alt="Morph Interface"
            width={1000}
            height={600}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-16 text-3xl font-bold md:text-4xl">
          Morph enables creators<br />and designers to easily<br />design stunning animated<br />content and interfaces.
        </h2>

        {/* Testimonial */}
        <div className="mb-16 flex items-start gap-8">
          <Image
            src="/testimonial.png"
            alt="Testimonial"
            width={370}
            height={350}
            className="rounded-lg"
          />
          <div>
            <p className="mb-4 text-gray-400">
              "Morph removes the need to rely on our Design team to edit the content of our designs. <br></br>It allows us to move more independently and faster."
            </p>
            <p className="text-sm">Sandra Pascual</p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mb-20 flex flex-wrap items-center justify-center gap-12">
          {['/1.svg', '/2.svg', '/3.svg', '/4.svg', '/5.svg', '/6.svg'].map((logo) => (
            <Image
              key={logo}
              src={logo}
              alt="Partner logo"
              width={96}
              height={48}
              className="object-contain"
            />
          ))}
        </div>

        {/* Feature Grid */}
        <div className="mb-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Create more in less time.',
              text: 'Say goodbye to multiple tools. Our app combines motion design and graphic design in one platform, optimizing your workflow.'
            },
            {
              title: 'Everything you need, in one place.',
              text: 'From animated logos to interactive presentations, our app equips you for any project.'
            },
            {
              title: 'Professional designs, always.',
              text: 'Create high-quality animated designs without the need for advanced technical skills.'
            },
            {
              title: 'Be more creative.',
              text: 'Explore new design possibilities with intuitive tools and advanced features.'
            },
            {
              title: 'Easy to use, hard to put down.',
              text: 'Our user-friendly interface allows designers of all levels to create amazing designs.'
            },
            {
              title: 'The complete solution for your design.',
              text: 'Motion graphics, graphic design, and more. Everything you need to bring your ideas to life.'
            }
          ].map(({ title, text }, i) => (
            <div key={i} className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-4 text-lg font-semibold">{title}</h3>
              <p className="text-gray-400">{text}</p>
            </div>
          ))}
        </div>

        {/* Template Section */}
        <h2 className="mb-8 text-center text-2xl font-semibold">
          Select a template, upload<br />images and logos, edit and animate
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Image
            src="/templateone.png"
            alt="Template 1"
            width={350}
            height={542}
            className="aspect-[3/4]"
          />
          <Image
            src="/templatetwo.png"
            alt="Template 2"
            width={350}
            height={542}
            className="aspect-[3/4]"
          />
          <Image
            src="/templatethree.png"
            alt="Template 3"
            width={350}
            height={542}
            className="aspect-[3/4]"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-8 text-4xl font-bold">
          Start creating videos.<br />No experience needed.
        </h2>
        <Button className="bg-[#ff7757] px-8 py-6 text-lg hover:bg-[#ff7757]/90">
          Buy Now!
        </Button>
      </section>
    </main>
  )
}

