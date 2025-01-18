import { User, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PurposeStepProps {
  purpose: string;
  onPurposeChange: (value: string) => void;
  onContinue: () => void;
}

export function RoleStep({
  purpose,
  onPurposeChange,
  onContinue,
}: PurposeStepProps) {
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center p-4">
    //   <div className="w-full max-w-2xl space-y-8">
    //     {/* <Logo /> */}
    //     <p className="text-2xl">HealthDesk</p>
    //     <div className="text-center space-y-6">
    //       <h1 className="text-2xl font-semibold">Hello! 👋</h1>
    //       <h2 className="text-xl">How do you plan to use HealthDesk?</h2>
    //     </div>
    //     <div className="flex flex-col gap-4">
    //       <div className="grid gap-4 md:grid-cols-2">
    //         <Card
    //           className={`cursor-pointer transition-all ${
    //             isSelected ? "ring-2 ring-primary" : ""
    //           }`}
    //           onClick={onClick}
    //         >
    //           <CardContent className="p-6 space-y-4">
    //             <div className="space-y-2">
    //               <h3 className="font-medium text-primary">{title}</h3>
    //               <p className="text-sm text-muted-foreground">{description}</p>
    //             </div>
    //             {icon}
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //     {/* <RoleForm /> */}
    //   </div>
    // </div>

    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Hello! 👋</h1>
        <h2 className="text-xl">How do you plan to use HealthDesk?</h2>
      </div>
      <RadioGroup
        value={purpose}
        onValueChange={onPurposeChange}
        className="grid gap-4 md:grid-cols-2 w-full max-w-6xl mx-auto"
      >
        <div>
          <RadioGroupItem
            value="personal"
            id="personal"
            className="peer sr-only"
          />
          <label
            htmlFor="personal"
            className="flex flex-col h-full rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-200 [&:has([data-state=checked])]:border-teal-200 cursor-pointer"
          >
            <div className="flex gap-6">
              <div className="shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium mb-2">For Personal Health</h3>
                <p className="text-sm text-muted-foreground">
                  To understand and manage my or my family member's health
                  conditions.
                </p>
              </div>
            </div>
          </label>
        </div>
        <div>
          <RadioGroupItem
            value="professional"
            id="professional"
            className="peer sr-only"
          />
          <label
            htmlFor="professional"
            className="flex flex-col h-full rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-200 [&:has([data-state=checked])]:border-teal-200 cursor-pointer"
          >
            <div className="flex gap-6">
              <div className="shrink-0">
                <UserCog className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium mb-2">
                  As a Healthcare Professional
                </h3>
                <p className="text-sm text-muted-foreground">
                  To streamline workflows, and save time, improving patient
                  interaction and outcomes.
                </p>
              </div>
            </div>
          </label>
        </div>
      </RadioGroup>

      <div className="max-w-sm mx-auto">
        <Button
          className="w-full bg-teal-700 hover:bg-[#8BBDB7] text-white"
          onClick={onContinue}
          disabled={!purpose}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
