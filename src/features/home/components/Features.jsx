import { Section } from '../../../shared/components/ui/Section';
import { Users, Home, Globe, Book } from 'lucide-react';

const features = [
    {
        title: 'Experienced Faculty',
        description: 'Learn from dedicated professors with years of pastoral and academic experience.',
        icon: Users,
    },
    {
        title: 'Residential Campus',
        description: 'Experience community life in our well-equipped hostel facilities for men and women.',
        icon: Home,
    },
    {
        title: 'Global Outreach',
        description: 'Participate in mission trips and outreach programs to serve the wider community.',
        icon: Globe,
    },
    {
        title: 'Library & Resources',
        description: 'Access a vast collection of theological books and digital resources.',
        icon: Book,
    },
];

export function Features() {
    return (
        <Section>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose KBC?</h2>
                <p className="text-lg text-gray-600">
                    We provide a holistic environment for spiritual growth and academic excellence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="text-center">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <feature.icon className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
