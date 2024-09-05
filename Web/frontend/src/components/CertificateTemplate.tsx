import React from 'react';

interface CertificateTemplateProps {
  studentName: string;
  courseName: string;
  completionDate: string;
  instructorName: string;
  certificateId: string;
}

const CertificateTemplate: React.FC<CertificateTemplateProps> = ({
  studentName,
  courseName,
  completionDate,
  instructorName,
  certificateId,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto border-4 border-dashed border-gray-400 p-8 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-700">Certificate of Completion</h1>
        <p className="text-lg text-gray-500 mt-2">This certifies that</p>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-purple-600">{studentName}</h2>
        <p className="text-lg text-gray-500 mt-2">has successfully completed the course</p>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-700">{courseName}</h3>
        <p className="text-lg text-gray-500 mt-2">on</p>
        <p className="text-lg text-gray-500">{completionDate}</p>
      </div>

      <div className="flex justify-between mt-10">
        <div className="text-left">
          <p className="text-lg text-gray-700">Instructor</p>
          <p className="text-xl font-semibold text-gray-700">{instructorName}</p>
        </div>
        <div className="text-right">
          <p className="text-lg text-gray-700">Certificate ID</p>
          <p className="text-lg text-gray-500">{certificateId}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;
