import { data } from "../data/data";

const students = data
  const StudentCards = () => {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">Student Profiles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map(student => (
            <div
              key={student.id}
              className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{student.name}</h2>
              <p className="text-gray-600"><strong>Roll:</strong> {student.roll}</p>
              <p className="text-gray-600"><strong>Age:</strong> {student.age}</p>
              <p className="text-gray-600"><strong>Class:</strong> {student.className}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default StudentCards;