import { ImageGallery } from '../components/ImageGallery';
import { Section } from '../../../shared/components/ui/Section';

export function GalleryPage() {
    return (
        <div className="flex flex-col">
            <Section background="primary" className="py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">Gallery</h1>
                <p className="text-xl text-center text-gray-700 mt-4 max-w-2xl mx-auto">
                    A glimpse into campus life, events, and our vibrant community.
                </p>
            </Section>
            <ImageGallery />
        </div>
    );
}
