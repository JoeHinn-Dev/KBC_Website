import { History } from '../components/History';
import { MissionVision } from '../components/MissionVision';
import { PrincipalMessage } from '../components/PrincipalMessage';
import { Faculty } from '../components/Faculty';
import { Section } from '../../../shared/components/ui/Section';

export function AboutPage() {
    return (
        <div className="flex flex-col">
            <Section background="primary" className="py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">About Us</h1>
                <p className="text-xl text-center text-gray-700 mt-4 max-w-2xl mx-auto">
                    Discover the story, vision, and people behind Kirubasanam Bible College.
                </p>
            </Section>
            <History />
            <MissionVision />
            <PrincipalMessage />
            <Faculty />
        </div>
    );
}
