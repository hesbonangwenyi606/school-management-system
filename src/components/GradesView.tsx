import React, { useState } from 'react';

type GradeInfo = { grade: string; count: number; percentage: number };
type PerformanceInfo = { avgGPA: number; highestScore: number; passRate: number };

export const GradesView: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState('Grade 9');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  const subjects = ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'History'];

  // Complete grade data for all grades and subjects
  const gradeData: Record<
    string,
    Record<
      string,
      {
        distribution: GradeInfo[];
        performance: PerformanceInfo;
      }
    >
  > = {
    'Grade 9': {
      Mathematics: {
        distribution: [
          { grade: 'A', count: 20, percentage: 25 },
          { grade: 'B', count: 30, percentage: 37.5 },
          { grade: 'C', count: 15, percentage: 18.75 },
          { grade: 'D', count: 10, percentage: 12.5 },
          { grade: 'F', count: 5, percentage: 6.25 },
        ],
        performance: { avgGPA: 3.2, highestScore: 95, passRate: 90 },
      },
      English: {
        distribution: [
          { grade: 'A', count: 25, percentage: 31 },
          { grade: 'B', count: 35, percentage: 44 },
          { grade: 'C', count: 10, percentage: 12 },
          { grade: 'D', count: 5, percentage: 6 },
          { grade: 'F', count: 5, percentage: 6 },
        ],
        performance: { avgGPA: 3.5, highestScore: 98, passRate: 95 },
      },
      Physics: {
        distribution: [
          { grade: 'A', count: 10, percentage: 20 },
          { grade: 'B', count: 20, percentage: 40 },
          { grade: 'C', count: 10, percentage: 20 },
          { grade: 'D', count: 5, percentage: 10 },
          { grade: 'F', count: 5, percentage: 10 },
        ],
        performance: { avgGPA: 2.9, highestScore: 88, passRate: 85 },
      },
      Chemistry: {
        distribution: [
          { grade: 'A', count: 12, percentage: 20 },
          { grade: 'B', count: 25, percentage: 41.6 },
          { grade: 'C', count: 10, percentage: 16.6 },
          { grade: 'D', count: 5, percentage: 8.3 },
          { grade: 'F', count: 5, percentage: 8.3 },
        ],
        performance: { avgGPA: 3.1, highestScore: 93, passRate: 88 },
      },
      Biology: {
        distribution: [
          { grade: 'A', count: 15, percentage: 25 },
          { grade: 'B', count: 20, percentage: 33.3 },
          { grade: 'C', count: 10, percentage: 16.6 },
          { grade: 'D', count: 5, percentage: 8.3 },
          { grade: 'F', count: 5, percentage: 16.6 },
        ],
        performance: { avgGPA: 3.2, highestScore: 96, passRate: 90 },
      },
      History: {
        distribution: [
          { grade: 'A', count: 18, percentage: 30 },
          { grade: 'B', count: 25, percentage: 41 },
          { grade: 'C', count: 10, percentage: 16 },
          { grade: 'D', count: 5, percentage: 8 },
          { grade: 'F', count: 2, percentage: 5 },
        ],
        performance: { avgGPA: 3.4, highestScore: 97, passRate: 92 },
      },
    },
    'Grade 10': {
      Mathematics: {
        distribution: [
          { grade: 'A', count: 15, percentage: 20 },
          { grade: 'B', count: 40, percentage: 53 },
          { grade: 'C', count: 10, percentage: 13 },
          { grade: 'D', count: 5, percentage: 7 },
          { grade: 'F', count: 1, percentage: 7 },
        ],
        performance: { avgGPA: 3.1, highestScore: 92, passRate: 88 },
      },
      English: {
        distribution: [
          { grade: 'A', count: 20, percentage: 25 },
          { grade: 'B', count: 35, percentage: 44 },
          { grade: 'C', count: 10, percentage: 13 },
          { grade: 'D', count: 5, percentage: 7 },
          { grade: 'F', count: 5, percentage: 11 },
        ],
        performance: { avgGPA: 3.4, highestScore: 96, passRate: 92 },
      },
      Physics: {
        distribution: [
          { grade: 'A', count: 12, percentage: 20 },
          { grade: 'B', count: 28, percentage: 46.6 },
          { grade: 'C', count: 8, percentage: 13.3 },
          { grade: 'D', count: 4, percentage: 6.6 },
          { grade: 'F', count: 3, percentage: 5.5 },
        ],
        performance: { avgGPA: 3.0, highestScore: 90, passRate: 87 },
      },
      Chemistry: {
        distribution: [
          { grade: 'A', count: 10, percentage: 16 },
          { grade: 'B', count: 25, percentage: 41.6 },
          { grade: 'C', count: 10, percentage: 16.6 },
          { grade: 'D', count: 5, percentage: 8.3 },
          { grade: 'F', count: 5, percentage: 18 },
        ],
        performance: { avgGPA: 3.1, highestScore: 92, passRate: 88 },
      },
      Biology: {
        distribution: [
          { grade: 'A', count: 15, percentage: 25 },
          { grade: 'B', count: 20, percentage: 33.3 },
          { grade: 'C', count: 10, percentage: 16.6 },
          { grade: 'D', count: 5, percentage: 8.3 },
          { grade: 'F', count: 5, percentage: 16.6 },
        ],
        performance: { avgGPA: 3.2, highestScore: 96, passRate: 90 },
      },
      History: {
        distribution: [
          { grade: 'A', count: 12, percentage: 20 },
          { grade: 'B', count: 30, percentage: 50 },
          { grade: 'C', count: 10, percentage: 16.6 },
          { grade: 'D', count: 3, percentage: 5 },
          { grade: 'F', count: 0, percentage: 8.3 },
        ],
        performance: { avgGPA: 3.3, highestScore: 94, passRate: 91 },
      },
    },
    'Grade 11': {
      Mathematics: {
        distribution: [
          { grade: 'A', count: 18, percentage: 28 },
          { grade: 'B', count: 25, percentage: 39 },
          { grade: 'C', count: 10, percentage: 15 },
          { grade: 'D', count: 5, percentage: 10 },
          { grade: 'F', count: 3, percentage: 8 },
        ],
        performance: { avgGPA: 3.3, highestScore: 94, passRate: 91 },
      },
      English: {
        distribution: [
          { grade: 'A', count: 20, percentage: 30 },
          { grade: 'B', count: 28, percentage: 42 },
          { grade: 'C', count: 8, percentage: 12 },
          { grade: 'D', count: 4, percentage: 6 },
          { grade: 'F', count: 5, percentage: 10 },
        ],
        performance: { avgGPA: 3.5, highestScore: 97, passRate: 94 },
      },
      Physics: {
        distribution: [
          { grade: 'A', count: 15, percentage: 25 },
          { grade: 'B', count: 25, percentage: 41.6 },
          { grade: 'C', count: 8, percentage: 13 },
          { grade: 'D', count: 5, percentage: 8 },
          { grade: 'F', count: 2, percentage: 4.4 },
        ],
        performance: { avgGPA: 3.2, highestScore: 93, passRate: 90 },
      },
      Chemistry: {
        distribution: [
          { grade: 'A', count: 12, percentage: 20 },
          { grade: 'B', count: 28, percentage: 46.6 },
          { grade: 'C', count: 8, percentage: 13 },
          { grade: 'D', count: 4, percentage: 6 },
          { grade: 'F', count: 3, percentage: 7 },
        ],
        performance: { avgGPA: 3.1, highestScore: 92, passRate: 88 },
      },
      Biology: {
        distribution: [
          { grade: 'A', count: 14, percentage: 23 },
          { grade: 'B', count: 25, percentage: 41 },
          { grade: 'C', count: 8, percentage: 13 },
          { grade: 'D', count: 5, percentage: 8 },
          { grade: 'F', count: 3, percentage: 7 },
        ],
        performance: { avgGPA: 3.2, highestScore: 94, passRate: 90 },
      },
      History: {
        distribution: [
          { grade: 'A', count: 18, percentage: 30 },
          { grade: 'B', count: 20, percentage: 33 },
          { grade: 'C', count: 10, percentage: 16 },
          { grade: 'D', count: 5, percentage: 8 },
          { grade: 'F', count: 5, percentage: 13 },
        ],
        performance: { avgGPA: 3.3, highestScore: 95, passRate: 92 },
      },
    },
    'Grade 12': {
      Mathematics: {
        distribution: [
          { grade: 'A', count: 25, percentage: 35 },
          { grade: 'B', count: 30, percentage: 40 },
          { grade: 'C', count: 10, percentage: 15 },
          { grade: 'D', count: 5, percentage: 7 },
          { grade: 'F', count: 2, percentage: 3 },
        ],
        performance: { avgGPA: 3.4, highestScore: 97, passRate: 93 },
      },
      English: {
        distribution: [
          { grade: 'A', count: 22, percentage: 34 },
          { grade: 'B', count: 28, percentage: 43 },
          { grade: 'C', count: 8, percentage: 12 },
          { grade: 'D', count: 4, percentage: 6 },
          { grade: 'F', count: 3, percentage: 5 },
        ],
        performance: { avgGPA: 3.5, highestScore: 98, passRate: 95 },
      },
      Physics: {
        distribution: [
          { grade: 'A', count: 18, percentage: 30 },
          { grade: 'B', count: 25, percentage: 42 },
          { grade: 'C', count: 10, percentage: 16 },
          { grade: 'D', count: 5, percentage: 8 },
          { grade: 'F', count: 2, percentage: 4 },
        ],
        performance: { avgGPA: 3.3, highestScore: 96, passRate: 92 },
      },
      Chemistry: {
        distribution: [
          { grade: 'A', count: 20, percentage: 33 },
          { grade: 'B', count: 25, percentage: 41 },
          { grade: 'C', count: 10, percentage: 16 },
          { grade: 'D', count: 4, percentage: 6 },
          { grade: 'F', count: 2, percentage: 4 },
        ],
        performance: { avgGPA: 3.3, highestScore: 95, passRate: 91 },
      },
      Biology: {
        distribution: [
          { grade: 'A', count: 18, percentage: 30 },
          { grade: 'B', count: 25, percentage: 41 },
          { grade: 'C', count: 8, percentage: 13 },
          { grade: 'D', count: 4, percentage: 6 },
          { grade: 'F', count: 2, percentage: 4 },
        ],
        performance: { avgGPA: 3.2, highestScore: 94, passRate: 90 },
      },
      History: {
        distribution: [
          { grade: 'A', count: 20, percentage: 33 },
          { grade: 'B', count: 25, percentage: 41 },
          { grade: 'C', count: 8, percentage: 13 },
          { grade: 'D', count: 3, percentage: 5 },
          { grade: 'F', count: 2, percentage: 4 },
        ],
        performance: { avgGPA: 3.4, highestScore: 96, passRate: 93 },
      },
    },
  };

  // Safe access
  const currentData = gradeData[selectedGrade]?.[selectedSubject];
  const gradeDistribution = currentData?.distribution || [];
  const performance = currentData?.performance || { avgGPA: 0, highestScore: 0, passRate: 0 };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Grade Management</h2>

      {/* Grade & Subject Selector */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Grade</label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {subjects.map((subject) => (
                <option key={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Grade Distribution</h3>
          <div className="space-y-4">
            {gradeDistribution.map((item) => (
              <div key={item.grade}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Grade {item.grade}</span>
                  <span className="text-gray-600">{item.count} students ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      item.grade === 'A'
                        ? 'bg-green-500'
                        : item.grade === 'B'
                        ? 'bg-blue-500'
                        : item.grade === 'C'
                        ? 'bg-yellow-500'
                        : item.grade === 'D'
                        ? 'bg-orange-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${item.percentage * 2}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Class Performance</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">Average GPA</div>
              <div className="text-3xl font-bold text-green-700">{performance.avgGPA.toFixed(2)}</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">Highest Score</div>
              <div className="text-3xl font-bold text-blue-700">{performance.highestScore}%</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">Pass Rate</div>
              <div className="text-3xl font-bold text-orange-700">{performance.passRate}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
