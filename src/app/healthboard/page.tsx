"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const patientData = {
  name: "Jane Smith",
  age: 42,
  gender: "Female",
  bloodPressure: [
    { date: "2023-01", systolic: 120, diastolic: 80 },
    { date: "2023-02", systolic: 118, diastolic: 78 },
    { date: "2023-03", systolic: 122, diastolic: 82 },
    { date: "2023-04", systolic: 116, diastolic: 76 },
    { date: "2023-05", systolic: 120, diastolic: 80 },
    { date: "2023-06", systolic: 118, diastolic: 78 },
  ],
  bloodSugar: [
    { date: "2023-01", level: 95 },
    { date: "2023-02", level: 100 },
    { date: "2023-03", level: 92 },
    { date: "2023-04", level: 98 },
    { date: "2023-05", level: 103 },
    { date: "2023-06", level: 97 },
  ],
  weight: [
    { date: "2023-01", value: 68 },
    { date: "2023-02", value: 67.5 },
    { date: "2023-03", value: 67 },
    { date: "2023-04", value: 66.5 },
    { date: "2023-05", value: 66 },
    { date: "2023-06", value: 65.5 },
  ],
  medications: [
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily" },
  ],
  upcomingAppointments: [
    { date: "2023-07-15", doctor: "Dr. Johnson", type: "Check-up" },
    { date: "2023-08-02", doctor: "Dr. Lee", type: "Blood work" },
  ],
};

const page = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Name:</strong> {patientData.name}
            </p>
            <p>
              <strong>Age:</strong> {patientData.age}
            </p>
            <p>
              <strong>Gender:</strong> {patientData.gender}
            </p>
          </CardContent>
        </Card> */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Blood Pressure</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                systolic: {
                  label: "Systolic",
                  color: "hsl(var(--chart-1))",
                },
                diastolic: {
                  label: "Diastolic",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={patientData.bloodPressure}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="systolic"
                    stroke="var(--color-systolic)"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="diastolic"
                    stroke="var(--color-diastolic)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blood Sugar</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                level: {
                  label: "Blood Sugar",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={patientData.bloodSugar}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="level"
                    stroke="var(--color-level)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weight</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Weight",
                  color: "hsl(var(--chart-4))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={patientData.weight}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--color-value)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Current Medications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {patientData.medications.map((medication, index) => (
                <li key={index} className="border-b pb-2 last:border-b-0">
                  <p className="font-semibold">{medication.name}</p>
                  <p className="text-sm text-gray-600">
                    {medication.dosage} - {medication.frequency}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {patientData.upcomingAppointments.map((appointment, index) => (
                <li key={index} className="border-b pb-2 last:border-b-0">
                  <p className="font-semibold">
                    {new Date(appointment.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm">{appointment.doctor}</p>
                  <p className="text-sm text-gray-600">{appointment.type}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
