import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Section({
    children,
    className,
    id,
    background = 'white'
}) {
    const backgrounds = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        primary: 'bg-primary-50',
        dark: 'bg-gray-900 text-white',
    };

    return (
        <section
            id={id}
            className={twMerge('py-16 md:py-24', backgrounds[background], className)}
        >
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}
