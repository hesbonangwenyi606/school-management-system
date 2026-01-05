import React, { useState, useMemo } from 'react';
import { Student } from '../types';
import { StudentCard } from './StudentCard';
import { StudentModal } from './StudentModal';

interface StudentsViewProps {
  students: Student[];
}

export const StudentsView: React.FC<StudentsViewProps> = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGrade = gradeFilter === 'all' || student.grade === gradeFilter;
      const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
      return matchesSearch && matchesGrade && matchesStatus;
    });
  }, [students, searchTerm, gradeFilter, statusFilter]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Student Directory</h2>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
          Add New Student
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            value={gradeFilter}
            onChange={(e) => setGradeFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Grades</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
            <option value="late">Late</option>
          </select>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        Showing {filteredStudents.length} of {students.length} students
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStudents.map(student => (
          <StudentCard 
            key={student.id} 
            student={student}
            onViewDetails={setSelectedStudent}
          />
        ))}
      </div>

      <StudentModal 
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />
    </div>
  );
};
