import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const faqs = [
  {
    question: "What is Healthdesk?",
    answer: "Healthdesk is an AI-powered health assistant that helps you understand and manage your health better.",
  },
  {
    question: "How can I get started with Healthdesk and manage my health?",
    answer: "Simply sign up for a free account and start chatting with our AI health assistant.",
  },
  {
    question: "What kind of health issues can Healthdesk help with?",
    answer: "Healthdesk can help with general health questions, symptom analysis, and preventive care recommendations.",
  },
  {
    question: "How reliable are the health insights provided by Healthdesk?",
    answer: "Our AI is trained on verified medical data and regularly updated with the latest research.",
  },
]

const FAQ = () => {
  return (
    <section className="container py-20 border-t mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">
        Have questions? Let&apos;s find answers
      </h2>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Have more questions?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ