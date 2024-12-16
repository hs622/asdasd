import { Card } from './ui/card'
import { Bot, ShieldCheck, Stethoscope } from 'lucide-react'

const benefits = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Proactive Preventive Care",
    description: "Utilize predictive analytics and expert advice to identify and prevent health issues before they become your long-term wellness.",
  },
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Tailored Health Solutions",
    description: "Get health support tailored to your needs with personalized plans and recommendations based on your symptoms & test results.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "In-Depth Health Insights",
    description: "Get a deeper understanding of your health with fast, automated insights, powered by advanced medical AI technology.",
  },
]

const Benefits = () => {
  return (
    <section className="container py-20 border-t mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">
        Benefits of Personal AI Health Assistant
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-6 space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Benefits