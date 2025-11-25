import { Section } from '../../../shared/components/ui/Section';
import { Target, Eye } from 'lucide-react';

export function MissionVision() {
    return (
        <Section background="gray">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Target className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 text-lg">
                        To glorify God by equipping men and women with biblical knowledge, spiritual maturity, and practical skills
                        for effective ministry in the church and society.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Eye className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600 text-lg">
                        To see a generation of Christ-centered leaders transforming communities and expanding God's kingdom
                        through the power of the Gospel.
                    </p>
                </div>
            </div>
        </Section>
    );
}
