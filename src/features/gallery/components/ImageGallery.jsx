import { useState } from 'react';
import { Section } from '../../../shared/components/ui/Section';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        alt: 'College campus building exterior',
        category: 'Campus',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        alt: 'Students studying in library',
        category: 'Student Life',
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        alt: 'Graduation ceremony',
        category: 'Events',
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        alt: 'Chapel worship service',
        category: 'Worship',
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        alt: 'Students in classroom discussion',
        category: 'Student Life',
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        alt: 'Campus library interior',
        category: 'Campus',
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        alt: 'Group study session',
        category: 'Student Life',
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        alt: 'Annual convocation event',
        category: 'Events',
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        alt: 'Students collaborating on project',
        category: 'Student Life',
    },
];

export function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
                    <p className="text-lg text-gray-600">
                        Explore life at Kirubasanam Bible College through our photo gallery.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                        <motion.div
                            key={image.id}
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {image.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
