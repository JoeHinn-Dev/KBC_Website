import { Section } from '../../../shared/components/ui/Section';
import { CheckCircle } from 'lucide-react';

const courses = [
    {
        title: 'Bachelor of Theology (B.Th)',
        duration: '3 Years',
        eligibility: '12th Standard Pass or Equivalent',
        description: 'A comprehensive theological education preparing students for pastoral ministry, missions, and further academic studies.',
        subjects: ['Old Testament', 'New Testament', 'Systematic Theology', 'Church History', 'Greek & Hebrew', 'Homiletics'],
    },
    {
        title: 'Diploma in Theology (Dip.Th)',
        duration: '2 Years',
        eligibility: '10th Standard Pass',
        description: 'Foundational biblical training for lay leaders and those starting in ministry.',
        subjects: ['Bible Survey', 'Basic Theology', 'Evangelism', 'Christian Ethics', 'Pastoral Care'],
    },
    {
        title: 'Certificate in Ministry (C.Min)',
        duration: '1 Year',
        eligibility: 'Open to all believers',
        description: 'Practical ministry training for Sunday School teachers, youth leaders, and church volunteers.',
        subjects: ['Bible Study Methods', 'Spiritual Formation', 'Leadership Principles', 'Worship'],
    },
];

export function Courses() {
    return (
        <Section>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Courses</h2>
                <div className="space-y-12">
                    {courses.map((course) => (
                        <div key={course.title} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                                    <p className="text-primary-600 font-medium mt-1">Duration: {course.duration}</p>
                                </div>
                                <div className="mt-4 md:mt-0 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                                    Eligibility: {course.eligibility}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">{course.description}</p>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Key Subjects:</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {course.subjects.map((subject) => (
                                        <div key={subject} className="flex items-center gap-2 text-gray-600 text-sm">
                                            <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                                            <span>{subject}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
