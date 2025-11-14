import React, { useState } from "react";

interface Student {
  name: string;
  age: number;
  grade: string;
  email: string;
}

interface AddStudentProps {
  onAddStudent: (student: Student) => void;
}

export const AddStudent: React.FC<AddStudentProps> = ({ onAddStudent }) => {
  const [student, setStudent] = useState<Student>({
    name: "",
    age: 0,
    grade: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!student.name || !student.age || !student.grade || !student.email) {
      alert("Please fill all fields");
      return;
    }
    onAddStudent(student);
    setStudent({ name: "", age: 0, grade: "", email: "" });
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Add New Student</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Full Name" className="border px-4 py-2 rounded-lg" />
        <input type="number" name="age" value={student.age} onChange={handleChange} placeholder="Age" className="border px-4 py-2 rounded-lg" />
        <input type="text" name="grade" value={student.grade} onChange={handleChange} placeholder="Grade/Class" className="border px-4 py-2 rounded-lg" />
        <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" className="border px-4 py-2 rounded-lg" />
        <button type="submit" className="bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">Add Student</button>
      </form>
    </div>
  );
};
