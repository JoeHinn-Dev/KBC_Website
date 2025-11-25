import { Section } from '../../../shared/components/ui/Section';
import { Button } from '../../../shared/components/ui/Button';

export function Newsletter() {
    return (
        <Section background="dark" className="text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
                <p className="text-gray-300 mb-8">
                    Subscribe to our newsletter to receive updates about admissions, events, and college news.
                </p>
                <form
                    action="https://formspree.io/f/your-form-id"
                    method="POST"
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-primary-500 text-gray-900"
                    />
                    <Button type="submit" variant="primary">Subscribe</Button>
                </form>
            </div>
        </Section>
    );
}
