import React, { useState, useMemo } from 'react';

// ----------------- Types -----------------
type Assessment = { name: string; date: string; type: string; score: string };
type GradeInfo = { grade: string; count: number; percentage: number };
type PerformanceInfo = { avgGPA: number; highestScore: number; passRate: number };
type Student = {
  id: number;
  name: string;
  grade: string;
  status: 'present' | 'absent' | 'late';
};

// ----------------- Main Component -----------------
export const StudentsView: React.FC = () => {
  const subjects = [
    'Mathematics', 'English', 'Kiswahili', 'Physics', 'Chemistry',
    'Biology', 'History', 'CRE', 'Geography', 'Computer Studies',
    'Business', 'Agriculture', 'French'
  ];

  const grades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E'];

  // ----------------- State -----------------
  const initialStudents: Student[] = [
    { id: 1, name: 'Alice Johnson', grade: 'Grade 9', status: 'present' },
    { id: 2, name: 'Bob Smith', grade: 'Grade 10', status: 'late' },
    { id: 3, name: 'Charlie Brown', grade: 'Grade 11', status: 'absent' },
    { id: 4, name: 'Diana Prince', grade: 'Grade 12', status: 'present' }
  ];

  const [students] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const [assessmentsData, setAssessmentsData] = useState<Record<number, Assessment[]>>(() => {
    const data: Record<number, Assessment[]> = {};
    initialStudents.forEach(s => {
      data[s.id] = [
        { name: 'Midterm Exam', date: 'Nov 10, 2025', type: 'Exam', score: '85%' },
        { name: 'Chapter Quiz', date: 'Nov 5, 2025', type: 'Quiz', score: '78%' },
        { name: 'Lab Report', date: 'Oct 28, 2025', type: 'Assignment', score: '92%' }
      ];
    });
    return data;
  });

  // ----------------- Helper Functions -----------------
  const generateDistribution = (): GradeInfo[] => {
    const counts = Array.from({ length: grades.length }, () => Math.floor(Math.random() * 15 + 5));
    const total = counts.reduce((a, b) => a + b, 0);
    return grades.map((grade, i) => ({
      grade,
      count: counts[i],
      percentage: Math.round((counts[i] / total) * 100)
    }));
  };

  const generatePerformance = (): PerformanceInfo => ({
    avgGPA: +(2 + Math.random() * 2).toFixed(2), // 2.0–4.0
    highestScore: Math.floor(80 + Math.random() * 20),
    passRate: Math.floor(75 + Math.random() * 25)
  });

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGrade = gradeFilter === 'all' || student.grade === gradeFilter;
      const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
      return matchesSearch && matchesGrade && matchesStatus;
    });
  }, [students, searchTerm, gradeFilter, statusFilter]);

  // ----------------- Assessment Handlers -----------------
  const handleAddAssessment = (studentId: number) => {
    const name = prompt('Enter assessment name', 'New Assignment');
    if (!name) return;
    const type = prompt('Enter type', 'Assignment') || 'Assignment';
    const score = prompt('Enter score', `${Math.floor(60 + Math.random() * 40)}%`) || '0%';
    const date = new Date().toLocaleDateString();
    const newAssessment: Assessment = { name, type, score, date };
    setAssessmentsData(prev => ({ ...prev, [studentId]: [...prev[studentId], newAssessment] }));
  };

  const handleEditAssessment = (studentId: number, index: number) => {
    const current = assessmentsData[studentId][index];
    const name = prompt('Edit name', current.name) || current.name;
    const type = prompt('Edit type', current.type) || current.type;
    const score = prompt('Edit score', current.score) || current.score;
    const date = prompt('Edit date', current.date) || current.date;
    const edited: Assessment = { name, type, score, date };
    setAssessmentsData(prev => {
      const updated = [...prev[studentId]];
      updated[index] = edited;
      return { ...prev, [studentId]: updated };
    });
  };

  const handleDeleteAssessment = (studentId: number, index: number) => {
    setAssessmentsData(prev => {
      const updated = [...prev[studentId]];
      updated.splice(index, 1);
      return { ...prev, [studentId]: updated };
    });
  };

  // ----------------- Render -----------------
  return (
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-bold text-gray-900">Student Directory</h2>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={gradeFilter}
          onChange={e => setGradeFilter(e.target.value)}
          className="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Grades</option>
          <option value="Grade 9">Grade 9</option>
          <option value="Grade 10">Grade 10</option>
          <option value="Grade 11">Grade 11</option>
          <option value="Grade 12">Grade 12</option>
        </select>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="late">Late</option>
        </select>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStudents.map(student => (
          <div key={student.id} className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold">{student.name}</h3>
              <p className="text-gray-600">{student.grade}</p>
              <p className="text-gray-600 capitalize">{student.status}</p>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setSelectedStudent(student)}
            >
              View Report Card
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-auto pt-10">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-4/5 lg:w-3/5 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedStudent.name} - Report Card</h2>
              <button
                onClick={() => setSelectedStudent(null)}
                className="text-red-500 font-bold hover:text-red-700"
              >
                X
              </button>
            </div>

            {/* Subject Selector */}
            <div className="mb-4 flex items-center gap-4">
              <label>Select Subject:</label>
              <select
                value={selectedSubject}
                onChange={e => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
              >
                {subjects.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            {/* Grade Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2">Grade Distribution</h3>
                {generateDistribution().map(item => (
                  <div key={item.grade} className="mb-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span>{item.grade}</span>
                      <span>{item.count} students ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${
                          item.grade.startsWith('A') ? 'bg-green-500' :
                          item.grade.startsWith('B') ? 'bg-blue-500' :
                          item.grade.startsWith('C') ? 'bg-yellow-500' :
                          item.grade.startsWith('D') ? 'bg-orange-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${item.percentage * 2}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Class Performance */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2">Class Performance</h3>
                {(() => {
                  const perf = generatePerformance();
                  return (
                    <div className="space-y-2">
                      <div className="p-2 bg-green-50 rounded">
                        <div className="text-sm text-gray-600">Average GPA</div>
                        <div className="text-xl font-bold text-green-700">{perf.avgGPA.toFixed(2)}</div>
                      </div>
                      <div className="p-2 bg-blue-50 rounded">
                        <div className="text-sm text-gray-600">Highest Score</div>
                        <div className="text-xl font-bold text-blue-700">{perf.highestScore}%</div>
                      </div>
                      <div className="p-2 bg-orange-50 rounded">
                        <div className="text-sm text-gray-600">Pass Rate</div>
                        <div className="text-xl font-bold text-orange-700">{perf.passRate}%</div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Assessments */}
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Assessments</h3>
              <button
                onClick={() => handleAddAssessment(selectedStudent.id)}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Add Assessment
              </button>
            </div>

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Assessment</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Type</th>
                  <th className="border px-4 py-2">Score</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assessmentsData[selectedStudent.id].map((a, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{a.name}</td>
                    <td className="border px-4 py-2">{a.date}</td>
                    <td className="border px-4 py-2">{a.type}</td>
                    <td className="border px-4 py-2">{a.score}</td>
                    <td className="border px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleEditAssessment(selectedStudent.id, i)}
                        className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteAssessment(selectedStudent.id, i)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedStudent(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
