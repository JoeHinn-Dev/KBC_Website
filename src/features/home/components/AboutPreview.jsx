import { Section } from '../../../shared/components/ui/Section';
import { Button } from '../../../shared/components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function AboutPreview() {
    return (
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">A Legacy of Faith & Learning</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Since our founding, Kirubasanam Bible College has been dedicated to training men and women for effective ministry.
                        We combine academic excellence with practical ministry training to prepare students for the challenges of the modern world.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        Our campus provides a nurturing environment where students can grow spiritually, intellectually, and socially.
                    </p>
                    <Link to="/about">
                        <Button variant="outline" className="group">
                            Read Our History
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Students studying"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </Section>
    );
}
