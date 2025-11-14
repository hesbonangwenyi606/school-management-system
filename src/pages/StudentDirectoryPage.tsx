import React from "react";
import { Student } from "@/components/AddStudent";

interface Props {
  students: Student[];
}

const StudentDirectoryPage: React.FC<Props> = ({ students }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Student Directory</h2>
      {students.length === 0 ? (
        <p className="text-gray-600">No students added yet.</p>
      ) : (
        <ul className="space-y-2">
          {students.map(s => (
            <li key={s.id} className="bg-white p-4 rounded shadow flex justify-between">
              <span>{s.name} ({s.grade}, Age {s.age})</span>
              <span>{s.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDirectoryPage;
