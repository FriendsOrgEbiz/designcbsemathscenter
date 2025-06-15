import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Calculator, FlaskRound as Flask, Atom, FileText, Calendar, Clock, Filter } from 'lucide-react';

type Subject = 'math' | 'science' | 'physics' | 'chemistry' | 'all';
type Grade = '8' | '9' | '10' | '11' | '12' | 'all';

interface ScheduleItem {
  subject: 'math' | 'science' | 'physics' | 'chemistry';
  grade: '8' | '9' | '10' | '11' | '12';
  days: string[];
  time: string;
  icon: React.ReactNode;
  iconColor: string;
}

const TimetablePage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject>('all');
  const [selectedGrade, setSelectedGrade] = useState<Grade>('all');

  const scheduleItems: ScheduleItem[] = [
    {
      subject: 'math',
      grade: '8',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      time: '4:00 PM - 5:00 PM',
      icon: <Calculator size={20} />,
      iconColor: 'bg-primary-600'
    },
    {
      subject: 'math',
      grade: '9',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      time: '5:00 PM - 6:00 PM',
      icon: <Calculator size={20} />,
      iconColor: 'bg-primary-600'
    },
    {
      subject: 'math',
      grade: '10',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      time: '6:00 AM - 7:00 AM & 6:00 PM - 7:00 PM\nStudents can select the most suitable batch based on their convenience.',
      icon: <Calculator size={20} />,
      iconColor: 'bg-primary-600'
    },
    {
      subject: 'math',
      grade: '11',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      time: '7:00 PM - 8:00 PM',
      icon: <Calculator size={20} />,
      iconColor: 'bg-primary-600'
    },
    {
      subject: 'math',
      grade: '12',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      time: '8:00 PM - 9:00 PM',
      icon: <Calculator size={20} />,
      iconColor: 'bg-primary-600'
    },
    {
      subject: 'science',
      grade: '9',
      days: ['Weekly 3 days (variable)'],
      time: '6:00 PM - 7:00 PM',
      icon: <Flask size={20} />,
      iconColor: 'bg-secondary-600'
    },
    {
      subject: 'science',
      grade: '10',
      days: ['Weekly 3 days (variable)'],
      time: '7:00 PM - 8:00 PM',
      icon: <Flask size={20} />,
      iconColor: 'bg-secondary-600'
    },
    {
      subject: 'physics',
      grade: '11',
      days: ['Weekly 3 days (variable)'],
      time: '6:00 PM - 7:00 PM',
      icon: <Atom size={20} />,
      iconColor: 'bg-accent-600'
    },
    {
      subject: 'physics',
      grade: '12',
      days: ['Weekly 3 days (variable)'],
      time: '7:00 PM - 8:00 PM',
      icon: <Atom size={20} />,
      iconColor: 'bg-accent-600'
    },
    {
      subject: 'chemistry',
      grade: '11',
      days: ['Weekly 3 days (variable)'],
      time: '6:00 PM - 7:00 PM',
      icon: <FileText size={20} />,
      iconColor: 'bg-gray-700'
    },
    {
      subject: 'chemistry',
      grade: '12',
      days: ['Weekly 3 days (variable)'],
      time: '7:00 PM - 8:00 PM',
      icon: <FileText size={20} />,
      iconColor: 'bg-gray-700'
    }
  ];

  const filteredSchedule = scheduleItems.filter(item => {
    if (selectedSubject !== 'all' && item.subject !== selectedSubject) return false;
    if (selectedGrade !== 'all' && item.grade !== selectedGrade) return false;
    return true;
  });

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary-800 py-12 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">Class Timings</h1>
            <p className="text-primary-100 mt-2">View schedule for all subjects and classes</p>
          </motion.div>
        </div>
      </div>

      {/* Timetable Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Class Schedule"
          subtitle="Find the perfect time slot for your educational journey"
          center
        />

        {/* Filter Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Subject</label>
              <div className="relative">
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value as Subject)}
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Subjects</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Class</label>
              <div className="relative">
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value as Grade)}
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Classes</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex items-end">
              <Button
                onClick={() => {
                  setSelectedSubject('all');
                  setSelectedGrade('all');
                }}
                variant="outline"
                className="whitespace-nowrap"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredSchedule.map((item, index) => (
            <motion.div
              key={`${item.subject}-${item.grade}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg ${item.iconColor} flex items-center justify-center mr-3 text-white`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.subject === 'math' ? 'Mathematics' :
                            item.subject === 'science' ? 'Science' :
                              item.subject === 'physics' ? 'Physics' : 'Chemistry'}
                        </h3>
                        <p className="text-sm text-gray-500">Class {item.grade}</p>
                      </div>
                    </div>
                    <span className="bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Class {item.grade}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Calendar size={16} className="text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        {item.days.join(', ')}
                      </span>
                    </div>
                    {/* <div className="flex items-start">
                      <Clock size={16} className="text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item.time}</span>
                    </div> */}
                    {/* <div className="text-gray-700 space-y-1">
                      {item.time.split('\n').map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div> */}
                    <div className="space-y-1">
                      {item.time.split('\n').map((line, idx) => (
                        <div
                          key={idx}
                          className={
                            line.toLowerCase().includes('students can select the most suitable batch based on their convenience')
                              ? 'text-red-600 font-bold'
                              : 'text-gray-700'
                          }
                        >
                          {line}
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredSchedule.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-600">No schedules match your current filters.</p>
            <Button
              onClick={() => {
                setSelectedSubject('all');
                setSelectedGrade('all');
              }}
              variant="primary"
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Test Batches Section */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Test Batches"
            subtitle="Regular assessment sessions to evaluate progress"
            center
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Test Schedules by Class</h3>

                <div className="space-y-6">
                  <div className="flex items-start pb-6 border-b border-gray-100">
                    <div className="bg-primary-50 p-2 rounded-lg mr-4">
                      <span className="text-primary-700 font-semibold">10</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Class 10 Test Batches</h4>
                      <p className="text-gray-600 mb-2">Every Saturday, 4:00 PM - 7:00 PM (any one hour)</p>
                      <p className="text-sm text-gray-500">
                        Students can choose any one-hour slot within the given time frame. Tests will focus on recent topics covered in class.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start pb-6 border-b border-gray-100">
                    <div className="bg-primary-50 p-2 rounded-lg mr-4 w-14">
                      <span className="text-primary-700 font-semibold">8 - 9</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Class 8 & 9 Test Batches</h4>
                      <p className="text-gray-600 mb-2">Alternate Fridays, 5:00 PM - 6:00 PM</p>
                      <p className="text-sm text-gray-500">
                        Tests are conducted every alternate Friday to assess progress and reinforce learning. Please check the monthly calendar for specific dates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start pb-6 border-b border-gray-100">
                    <div className="bg-primary-50 p-2 rounded-lg mr-4 w-30 whitespace-nowrap">
                      <span className="text-primary-700 font-semibold">11 - 12</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Class 11 & 12 Test Batches</h4>
                      <p className="text-gray-600 mb-2">Every Saturday, 4:00 PM - 7:00 PM (any one hour)</p>
                      <p className="text-sm text-gray-500">
                        Higher secondary students can select a convenient one-hour slot for weekly assessment. Tests are designed to match board exam patterns.
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="bg-primary-50 p-2 rounded-lg mr-4 w-15">
                      <span className="text-primary-700 font-semibold">11-12</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Class 11 & 12 Test Batches</h4>
                      <p className="text-gray-600 mb-2">Every Saturday, 4:00 PM - 7:00 PM (any one hour)</p>
                      <p className="text-sm text-gray-500">
                        Higher secondary students can select a convenient one-hour slot for weekly assessment. Tests are designed to match board exam patterns.
                      </p>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">
                Want to experience our teaching methodology before enrolling? Book a trial class now.
              </p>
              <Button to="/contact" variant="primary" size="lg">
                Book a Trial Class
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;