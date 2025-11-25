import { ContactInfo } from '../components/ContactInfo';
import { MapSection } from '../components/MapSection';
import { ContactForm } from '../components/ContactForm';
import { Section } from '../../../shared/components/ui/Section';

export function ContactPage() {
    return (
        <div className="flex flex-col">
            <Section background="primary" className="py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">Contact Us</h1>
                <p className="text-xl text-center text-gray-700 mt-4 max-w-2xl mx-auto">
                    Get in touch with us. We're here to answer your questions.
                </p>
            </Section>
            <ContactInfo />
            <MapSection />
            <ContactForm />
        </div>
    );
}
