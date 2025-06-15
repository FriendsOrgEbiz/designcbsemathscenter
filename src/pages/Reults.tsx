import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Calendar, Trophy, Filter } from 'lucide-react';
import resultsData from '../components/utils/all_results.json';

interface TopScorer {
  name: string;
  school: string;
  marks: number;
}

interface ResultEntry {
  year: string;
  class: number;
  subject: string;
  exam: string;
  top_scorers: TopScorer[];
  other_scorers?: Record<string, string>;
  summary?: string;
}

const getGradeInfo = (marks: number) => {
  if (marks >= 91) return { grade: 'A1', cgpa: '10' };
  if (marks >= 81) return { grade: 'A2', cgpa: '9' };
  if (marks >= 71) return { grade: 'B1', cgpa: '8' };
  if (marks >= 61) return { grade: 'B2', cgpa: '7' };
  if (marks >= 51) return { grade: 'C1', cgpa: '6' };
  if (marks >= 41) return { grade: 'C2', cgpa: '5' };
  if (marks >= 33) return { grade: 'D', cgpa: '4' };
  return { grade: 'E (Fail)', cgpa: 'Below 4' };
};

const unique = (arr: any[], key: string) => [...new Set(arr.map(i => i[key]))];

const ResultsPage: React.FC = () => {
  const [data, setData] = useState<ResultEntry[]>([]);
  const [year, setYear] = useState<string>('all');
  const [grade, setGrade] = useState<string>('all');
  const [subject, setSubject] = useState<string>('all');
  const [exam, setExam] = useState<string>('all');

  useEffect(() => {
    setData(resultsData);
  }, []);

  const filtered = data.filter(item => {
    if (year !== 'all' && item.year !== year) return false;
    if (grade !== 'all' && item.class.toString() !== grade) return false;
    if (subject !== 'all' && item.subject.toLowerCase() !== subject.toLowerCase()) return false;
    if (exam !== 'all' && item.exam.toLowerCase() !== exam.toLowerCase()) return false;
    return true;
  });

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-primary-800 py-12 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">Academic Results</h1>
            <p className="text-primary-100 mt-2">Track historical performance of our students</p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <SectionTitle
          title="Results Overview"
          subtitle="Filter by academic year, class, subject, or exam"
          center
        />

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap gap-4">
            {[{
              label: 'Year',
              value: year,
              setValue: setYear,
              options: ['all', ...unique(resultsData, 'year')]
            }, {
              label: 'Class',
              value: grade,
              setValue: setGrade,
              options: ['all', ...unique(resultsData, 'class').map(String)]
            }, {
              label: 'Subject',
              value: subject,
              setValue: setSubject,
              options: ['all', ...unique(resultsData, 'subject')]
            }, {
              label: 'Exam',
              value: exam,
              setValue: setExam,
              options: ['all', ...unique(resultsData, 'exam')]
            }].map(({ label, value, setValue, options }) => (
              <div className="flex-1 min-w-[180px]" key={label}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <div className="relative">
                  <select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-primary-500 focus:border-primary-500"
                  >
                    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Filter size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-end">
              <Button
                onClick={() => {
                  setYear('all');
                  setGrade('all');
                  setSubject('all');
                  setExam('all');
                }}
                variant="outline"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.class}-${item.subject}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-primary-800">{item.year} - Class {item.class}</h3>
                      <p className="text-sm text-gray-600">{item.subject} | {item.exam}</p>
                    </div>
                    <div className="bg-primary-50 p-2 rounded-full">
                      <Trophy className="text-primary-700" size={20} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Top Scorers:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {item.top_scorers?.map((s, i) => {
                        const g = getGradeInfo(s.marks);
                        return (
                          <li key={i}>
                            {s.name} ({s.school}) - {s.marks} marks (CGPA {g.cgpa}, Grade {g.grade})
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {item.other_scorers && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Other Scorers:</h4>
                      <ul className="text-sm text-gray-600">
                        {Object.entries(item.other_scorers).map(([range, count]) => (
                          <li key={range}>{range}: {count}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.summary && (
                    <div className="text-sm text-gray-600 italic">
                      {item.summary}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg mt-8">
            <p className="text-lg text-gray-600">No results match your current filters.</p>
            <Button onClick={() => {
              setYear('all');
              setGrade('all');
              setSubject('all');
              setExam('all');
            }} variant="primary" className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
