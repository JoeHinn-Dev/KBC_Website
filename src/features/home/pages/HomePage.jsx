import { Hero } from '../components/Hero';
import { AboutPreview } from '../components/AboutPreview';
import { Programs } from '../components/Programs';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { Events } from '../components/Events';
import { Newsletter } from '../components/Newsletter';

export function HomePage() {
    return (
        <div className="flex flex-col">
            <Hero />
            <AboutPreview />
            <Programs />
            <Features />
            <Testimonials />
            <Events />
            <Newsletter />
        </div>
    );
}
