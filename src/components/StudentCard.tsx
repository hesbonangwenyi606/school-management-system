import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Clock } from 'lucide-react';
import { Student } from '../types';

interface StudentCardProps {
  student: Student;
  onViewDetails: (student: Student) => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, onViewDetails }) => {
  const statusColors = {
    present: 'bg-green-100 text-green-800',
    absent: 'bg-red-100 text-red-800',
    late: 'bg-yellow-100 text-yellow-800'
  };

  const statusIcons = {
    present: <Check size={14} />,
    absent: <X size={14} />,
    late: <Clock size={14} />
  };

  const gpaColor =
    student.gpa >= 3.5
      ? 'text-green-700'
      : student.gpa >= 2.5
      ? 'text-yellow-700'
      : 'text-red-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onViewDetails(student)}
    >
      <div className="flex flex-col items-center">
        <img
          src={student.photo || '/fallback-avatar.png'}
          onError={(e) => ((e.target as HTMLImageElement).src = '/fallback-avatar.png')}
          alt={student.name}
          className="w-24 h-24 rounded-full object-cover mb-3"
        />

        <h3 className="font-semibold text-gray-900 text-center">{student.name}</h3>
        <p className="text-sm text-gray-600">{student.grade}</p>

        <div className="flex items-center gap-2 mt-2">
          <span
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusColors[student.status]}`}
          >
            {statusIcons[student.status]}
            {student.status}
          </span>
        </div>

        <div className="mt-3 w-full">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Attendance</span>
            <span>{student.attendance}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${student.attendance}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        <p className={`text-sm font-semibold mt-2 ${gpaColor}`}>
          GPA: {student.gpa.toFixed(2)}
        </p>

        <button
          className="mt-4 w-full bg-blue-600 text-white py-1.5 text-sm rounded-lg hover:bg-blue-700 transition"
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click firing
            onViewDetails(student);
          }}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};
