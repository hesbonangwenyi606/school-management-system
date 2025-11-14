import React, { useState } from "react";
import { AddStudent } from "@/components/AddStudent";

interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
}

const AddStudentPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const handleAddStudent = (student: Omit<Student, "id">) => {
    const newStudent = { ...student, id: Date.now() };
    setStudents((prev) => [...prev, newStudent]);
    alert("Student added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <AddStudent onAddStudent={handleAddStudent} />
      <div className="mt-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Student List</h2>
        {students.length === 0 ? (
          <p className="text-gray-600">No students added yet.</p>
        ) : (
          <ul className="space-y-2">
            {students.map((s) => (
              <li key={s.id} className="bg-white p-4 rounded shadow flex justify-between">
                <span>{s.name} ({s.grade}, Age {s.age})</span>
                <span>{s.email}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddStudentPage;
