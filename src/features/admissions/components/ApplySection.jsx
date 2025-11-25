import { Section } from '../../../shared/components/ui/Section';
import { Button } from '../../../shared/components/ui/Button';
import { FileText } from 'lucide-react';

export function ApplySection() {
    return (
        <Section background="primary" className="text-center">
            <div className="max-w-2xl mx-auto">
                <FileText className="h-16 w-16 text-white mx-auto mb-6 opacity-80" />
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply?</h2>
                <p className="text-xl text-primary-100 mb-8">
                    Start your journey with us today. Fill out the application form online or download it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto">
                            Apply Online
                        </Button>
                    </a>
                    <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                        Download Application Form
                    </Button>
                </div>
            </div>
        </Section>
    );
}
