'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function PricingFAQ() {
  return (
    <div className="container py-12 m-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Have questions? Let's find answers</h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is the AI Health Assistant really free?</AccordionTrigger>
          <AccordionContent>
            Yes, the basic features of our AI Health Assistant are completely free to use.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How much does a second opinion from a top doctor cost?</AccordionTrigger>
          <AccordionContent>
            The cost varies depending on your subscription plan and the type of consultation needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use the AI Health Assistant before getting a second opinion?</AccordionTrigger>
          <AccordionContent>
            Yes, you can use the AI Health Assistant to prepare for your second opinion consultation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

