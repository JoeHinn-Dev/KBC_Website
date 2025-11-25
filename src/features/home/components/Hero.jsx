import { motion } from 'framer-motion';
import { Button } from '../../../shared/components/ui/Button';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <div className="relative bg-gray-900 h-[600px] flex items-center">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="College Campus"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Kirubasanam Bible College
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-200 mb-8"
                    >
                        Equipping servant leaders for the global church through theological education and spiritual formation.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link to="/admissions">
                            <Button size="lg">Apply Now</Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
