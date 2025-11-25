import { Section } from '../../../shared/components/ui/Section';

export function PrincipalMessage() {
    return (
        <Section>
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
                <div className="w-full md:w-1/3">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            alt="Principal"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Principal's Message</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            "Welcome to Kirubasanam Bible College. It is our joy to partner with you in your journey of faith and ministry preparation.
                            At KBC, we believe that theological education is not just about acquiring knowledge, but about being transformed by the Word of God."
                        </p>
                        <p className="mb-4">
                            "Our faculty are committed to mentoring students and modeling Christ-like character. We strive to create an environment
                            where you can deepen your relationship with God and develop the skills needed to serve His church effectively."
                        </p>
                        <p className="mb-6">
                            "I invite you to explore our programs and consider joining our community. May God guide you as you seek His will for your life."
                        </p>
                        <div>
                            <p className="font-bold text-gray-900 text-xl">Rev. Dr. Name Surname</p>
                            <p className="text-primary-600">Principal, Kirubasanam Bible College</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
