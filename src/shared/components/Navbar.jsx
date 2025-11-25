import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from './ui/Button';
import { clsx } from 'clsx';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <GraduationCap className="h-8 w-8 text-primary-600" />
                            <span className="font-bold text-xl text-gray-900">Kirubasanam Bible College</span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={clsx(
                                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                    isActive(item.href)
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button size="sm" className="ml-4">Apply Now</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={clsx(
                                    'block px-3 py-2 rounded-md text-base font-medium',
                                    isActive(item.href)
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 px-3">
                            <Button className="w-full">Apply Now</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
