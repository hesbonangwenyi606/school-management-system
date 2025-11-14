import React from "react";
import { AddStudent, Student } from "@/components/AddStudent";

interface Props {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const AddStudentPage: React.FC<Props> = ({ students, setStudents }) => {
  const handleAddStudent = (student: Omit<Student, "id">) => {
    const newStudent = { ...student, id: Date.now() };
    setStudents(prev => [...prev, newStudent]);
    alert("Student added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <AddStudent onAddStudent={handleAddStudent} />
    </div>
  );
};

export default AddStudentPage;
