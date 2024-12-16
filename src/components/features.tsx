import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bot, ChevronRight, MessageSquare } from 'lucide-react'

const Features = () => {
  return (
    <section className="container py-20 border-t mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">
        Make Informed Health Decisions
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <Card className="p-6 space-y-4">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Personal AI Doctor</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              Get tailored insights
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              Discover your health risks
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              Get personalized health plans
            </li>
          </ul>
          <Button variant="link" className="p-0">
            Chat with AI Doctor →
          </Button>
        </Card>
        <Card className="p-6 space-y-4">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Lab Test Interpretation</h3>
          <p className="text-muted-foreground">
            Upload your lab results to get an in-depth analysis and easy-to-understand detailed lab test reports.
          </p>
          <Button variant="link" className="p-0">
            Go to Lab Tests →
          </Button>
        </Card>
      </div>
    </section>
  )
}

export default Features