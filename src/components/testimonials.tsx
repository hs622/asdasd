import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'

const testimonials = [
  {
    content: "As an athlete, maintaining optimal health is crucial. Docus has been a game-changer for me. Its AI Doctor feature helps me monitor my training recovery effectively.",
    author: "Eric S.",
    image: "/placeholder.svg",
  },
  {
    content: "Dealing with health anxiety every other moment used to send me down a rabbit hole of worry and confusion. Since discovering Docus, I've been transformed by my overall experience.",
    author: "Ann T.",
    image: "/placeholder.svg",
  },
  {
    content: "Docus enabled me to consistently obtain a second opinion from a top AI doctor, saving both time and money. The personalized wellness plan matches my lifestyle.",
    author: "Casey R.",
    image: "/placeholder.svg",
  },
]

const Testimonials = () => {
  return (
    <section className="container py-20 border-t mx-auto" >
      <h2 className="text-3xl font-bold text-center mb-16">
        Our Users Love Us
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Discover how Docus has transformed the way people understand and manage their health
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 space-y-4">
            <p className="text-muted-foreground">{testimonial.content}</p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-medium">{testimonial.author}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Testimonials