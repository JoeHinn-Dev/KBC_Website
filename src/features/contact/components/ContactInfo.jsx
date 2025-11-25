import { Section } from '../../../shared/components/ui/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
    return (
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">
                        123 College Road<br />
                        City Name, State<br />
                        Zip Code - 123456
                    </p>
                </div>

                <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                        +91 98765 43210<br />
                        +91 98765 43211
                    </p>
                </div>

                <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                        info@kbc.edu<br />
                        admissions@kbc.edu
                    </p>
                </div>

                <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-600">
                        Mon - Fri: 9:00 AM - 5:00 PM<br />
                        Sat: 9:00 AM - 1:00 PM
                    </p>
                </div>
            </div>
        </Section>
    );
}
