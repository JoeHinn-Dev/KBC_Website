import { Section } from '../../../shared/components/ui/Section';
import { Calendar } from 'lucide-react';

const events = [
    {
        title: 'Annual Convocation 2025',
        date: 'May 15, 2025',
        time: '10:00 AM',
        location: 'Main Chapel',
    },
    {
        title: 'Theology Symposium',
        date: 'June 10, 2025',
        time: '9:00 AM',
        location: 'Conference Hall',
    },
    {
        title: 'Alumni Meet',
        date: 'July 20, 2025',
        time: '4:00 PM',
        location: 'College Grounds',
    },
];

export function Events() {
    return (
        <Section>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                    <p className="text-lg text-gray-600">Join us for our upcoming gatherings and celebrations.</p>
                </div>
                <a href="#" className="text-primary-600 font-medium hover:text-primary-700">View All Events &rarr;</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event) => (
                    <div key={event.title} className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                        <div className="flex items-center gap-2 text-primary-600 mb-4">
                            <Calendar className="h-5 w-5" />
                            <span className="font-medium">{event.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <div className="text-gray-500 text-sm space-y-1">
                            <p>{event.time}</p>
                            <p>{event.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
