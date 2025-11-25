import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-8 w-8 text-primary-400" />
                            <span className="font-bold text-xl">Kirubasanam Bible College</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Equipping servant leaders for the global church through theological education and spiritual formation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Youtube className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link></li>
                            <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Programs</h3>
                        <ul className="space-y-2">
                            <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Bachelor of Theology</Link></li>
                            <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Diploma in Theology</Link></li>
                            <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Certificate Courses</Link></li>
                            <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Women's Bible College</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <span>123 College Road, City Name,<br />State, Zip Code</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="h-5 w-5 flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="h-5 w-5 flex-shrink-0" />
                                <span>info@kbc.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kirubasanam Bible College. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
