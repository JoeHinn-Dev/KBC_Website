import { Courses } from '../components/Courses';
import { FeeStructure } from '../components/FeeStructure';
import { ApplySection } from '../components/ApplySection';
import { Section } from '../../../shared/components/ui/Section';

export function AdmissionsPage() {
    return (
        <div className="flex flex-col">
            <Section background="primary" className="py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">Admissions</h1>
                <p className="text-xl text-center text-gray-700 mt-4 max-w-2xl mx-auto">
                    Join our community of learners and prepare for a life of ministry.
                </p>
            </Section>
            <Courses />
            <FeeStructure />
            <ApplySection />
        </div>
    );
}
