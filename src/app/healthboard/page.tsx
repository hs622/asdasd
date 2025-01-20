// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";
// import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import GeneralInformationForm from "@/components/forms/general-information";
import { prisma } from "@/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { Card } from "@/components/healthboard/cards";
import { BarChart2, ClipboardList, FileText, MessageSquare, UserRound } from "lucide-react";
import { HealthProfile } from "@/components/healthboard/health-profile";

export default async function page() {
  const session = await getServerSession(authOptions);
  const genInfo = await prisma.generalInformation.findUnique({
    where: { userId: session?.user.id },
  });

  return (
    <div>{!genInfo ? <GeneralInformationForm /> : (
      <div className="w-[50rem] mx-auto p-6">
      <HealthProfile name={session?.user.firstName as string} progress={12} />

      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Chat with AI Doctor" icon={MessageSquare} />
        <Card title="Lab Tests & Screenings" icon={FileText} />
        <Card title="Checkup Plan" icon={ClipboardList} comingSoon />
        <Card title="Health Reports" icon={BarChart2} comingSoon />
      </div>

      {/* <div className="mt-4">
        <Card
          title="Consult Top Doctors"
          icon={UserRound}
          description="Online Consultation with top Doctors from the US and Europe."
        
        />
      </div> */}
    </div>
    )}</div>
    // <div className="container mx-auto p-4">

    //   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    //     {/* <Card className="md:col-span-2">
    //       <CardHeader>
    //         <CardTitle>Blood Pressure</CardTitle>
    //         <CardDescription>Last 6 months</CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <ChartContainer
    //           config={{
    //             systolic: {
    //               label: "Systolic",
    //               color: "hsl(var(--chart-1))",
    //             },
    //             diastolic: {
    //               label: "Diastolic",
    //               color: "hsl(var(--chart-2))",
    //             },
    //           }}
    //           className="h-[300px]"
    //         >
    //           <ResponsiveContainer width="100%" height="100%">
    //             <LineChart data={patientData.bloodPressure}>
    //               <XAxis dataKey="date" />
    //               <YAxis />
    //               <ChartTooltip content={<ChartTooltipContent />} />
    //               <Line
    //                 type="monotone"
    //                 dataKey="systolic"
    //                 stroke="var(--color-systolic)"
    //                 strokeWidth={2}
    //               />
    //               <Line
    //                 type="monotone"
    //                 dataKey="diastolic"
    //                 stroke="var(--color-diastolic)"
    //                 strokeWidth={2}
    //               />
    //             </LineChart>
    //           </ResponsiveContainer>
    //         </ChartContainer>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Blood Sugar</CardTitle>
    //         <CardDescription>Last 6 months</CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <ChartContainer
    //           config={{
    //             level: {
    //               label: "Blood Sugar",
    //               color: "hsl(var(--chart-3))",
    //             },
    //           }}
    //           className="h-[200px]"
    //         >
    //           <ResponsiveContainer width="100%" height="100%">
    //             <LineChart data={patientData.bloodSugar}>
    //               <XAxis dataKey="date" />
    //               <YAxis />
    //               <ChartTooltip content={<ChartTooltipContent />} />
    //               <Line
    //                 type="monotone"
    //                 dataKey="level"
    //                 stroke="var(--color-level)"
    //                 strokeWidth={2}
    //               />
    //             </LineChart>
    //           </ResponsiveContainer>
    //         </ChartContainer>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Weight</CardTitle>
    //         <CardDescription>Last 6 months</CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <ChartContainer
    //           config={{
    //             value: {
    //               label: "Weight",
    //               color: "hsl(var(--chart-4))",
    //             },
    //           }}
    //           className="h-[200px]"
    //         >
    //           <ResponsiveContainer width="100%" height="100%">
    //             <LineChart data={patientData.weight}>
    //               <XAxis dataKey="date" />
    //               <YAxis />
    //               <ChartTooltip content={<ChartTooltipContent />} />
    //               <Line
    //                 type="monotone"
    //                 dataKey="value"
    //                 stroke="var(--color-value)"
    //                 strokeWidth={2}
    //               />
    //             </LineChart>
    //           </ResponsiveContainer>
    //         </ChartContainer>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Current Medications</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <ul className="space-y-2">
    //           {patientData.medications.map((medication, index) => (
    //             <li key={index} className="border-b pb-2 last:border-b-0">
    //               <p className="font-semibold">{medication.name}</p>
    //               <p className="text-sm text-gray-600">
    //                 {medication.dosage} - {medication.frequency}
    //               </p>
    //             </li>
    //           ))}
    //         </ul>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Upcoming Appointments</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <ul className="space-y-2">
    //           {patientData.upcomingAppointments.map((appointment, index) => (
    //             <li key={index} className="border-b pb-2 last:border-b-0">
    //               <p className="font-semibold">
    //                 {new Date(appointment.date).toLocaleDateString()}
    //               </p>
    //               <p className="text-sm">{appointment.doctor}</p>
    //               <p className="text-sm text-gray-600">{appointment.type}</p>
    //             </li>
    //           ))}
    //         </ul>
    //       </CardContent>
    //     </Card> */}
    //   </div>
    // </div>
  );
}
