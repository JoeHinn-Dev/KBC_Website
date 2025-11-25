import { Section } from '../../../shared/components/ui/Section';
import { BookOpen, Clock, Award } from 'lucide-react';

const programs = [
    {
        title: 'Bachelor of Theology',
        description: 'A comprehensive 3-year program designed for those called to full-time ministry and pastoral leadership.',
        duration: '3 Years',
        icon: BookOpen,
    },
    {
        title: 'Diploma in Theology',
        description: 'A 2-year course focusing on biblical foundations and practical ministry skills.',
        duration: '2 Years',
        icon: Clock,
    },
    {
        title: "Women's Bible College",
        description: 'Specialized training programs empowering women for leadership and service in the church and society.',
        duration: '1-2 Years',
        icon: Award,
    },
];

export function Programs() {
    return (
        <Section background="gray">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
                <p className="text-lg text-gray-600">
                    Choose from a variety of programs tailored to your calling and educational background.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((program) => (
                    <div key={program.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                            <program.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        <div className="text-sm font-medium text-primary-600">
                            Duration: {program.duration}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
