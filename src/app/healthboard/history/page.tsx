import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const history = {
  name: "John Doe",
  age: 45,
  gender: "Male",
  medicalHistory: [
    { condition: "Hypertension", diagnosedYear: 2018 },
    { condition: "Type 2 Diabetes", diagnosedYear: 2020 },
  ],
  recentVisits: [
    { date: "2023-05-15", reason: "Annual check-up", doctor: "Dr. Smith" },
    { date: "2023-03-02", reason: "Flu symptoms", doctor: "Dr. Johnson" },
    { date: "2022-11-20", reason: "Diabetes follow-up", doctor: "Dr. Davis" },
  ],
  medications: [
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    { name: "Aspirin", dosage: "81mg", frequency: "Once daily" },
  ],
};

const History = () => {
  return (
    <div>
      History
      {/* <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">History</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Name:</strong> {history.name}
              </p>
              <p>
                <strong>Age:</strong> {history.age}
              </p>
              <p>
                <strong>Gender:</strong> {history.gender}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical History</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {history.medicalHistory.map((item, index) => (
                  <li key={index}>
                    {item.condition} (Diagnosed: {item.diagnosedYear})
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {history.recentVisits.map((visit, index) => (
                  <li key={index} className="border-b pb-2 last:border-b-0">
                    <p>
                      <strong>Date:</strong> {visit.date}
                    </p>
                    <p>
                      <strong>Reason:</strong> {visit.reason}
                    </p>
                    <p>
                      <strong>Doctor:</strong> {visit.doctor}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Medications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {history.medications.map((medication, index) => (
                  <li key={index} className="border-b pb-2 last:border-b-0">
                    <p>
                      <strong>{medication.name}</strong>
                    </p>
                    <p>Dosage: {medication.dosage}</p>
                    <p>Frequency: {medication.frequency}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </div>
  );
};

export default History;
