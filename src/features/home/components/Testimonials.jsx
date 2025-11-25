import { Section } from '../../../shared/components/ui/Section';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        content: "My time at KBC transformed my understanding of the Bible and prepared me for pastoral ministry. The faculty's mentorship was invaluable.",
        author: "Rev. John Doe",
        role: "Alumni, Class of 2018",
    },
    {
        content: "The community life at KBC taught me the importance of servant leadership. I am grateful for the spiritual formation I received here.",
        author: "Sarah Smith",
        role: "Missionary",
    },
];

export function Testimonials() {
    return (
        <Section background="primary">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Voices</h2>
                <p className="text-lg text-gray-600">
                    Hear from our alumni about their experience at Kirubasanam Bible College.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm relative">
                        <Quote className="h-8 w-8 text-primary-200 absolute top-6 left-6" />
                        <p className="text-gray-600 mb-6 relative z-10 pt-6 italic">"{testimonial.content}"</p>
                        <div>
                            <div className="font-bold text-gray-900">{testimonial.author}</div>
                            <div className="text-sm text-primary-600">{testimonial.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
