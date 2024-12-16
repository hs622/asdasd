import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChevronRight, Lock } from 'lucide-react'

const Security = () => {
  return (
    <section className="container py-20 mx-auto">
      <Card className="bg-gray-900 text-white p-8">
        <div className="flex items-start gap-6">
          <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Your health data
              <Badge variant="secondary" className="ml-3">
                Is safe
              </Badge>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                Protected by industry-standard security protocols
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                Any data shared while using our services is safeguarded
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                Fully compliant with HIPAA and GDPR
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Security;
