import { Section } from '../../../shared/components/ui/Section';

const faculty = [
    {
        name: 'Rev. John Smith',
        role: 'Academic Dean',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        bio: 'PhD in Old Testament, 15 years of teaching experience.',
    },
    {
        name: 'Dr. Sarah Johnson',
        role: 'Professor of Theology',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        bio: 'Specializes in Systematic Theology and Ethics.',
    },
    {
        name: 'Rev. Michael Brown',
        role: 'Dean of Students',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        bio: 'Focuses on spiritual formation and pastoral counseling.',
    },
    {
        name: 'Mrs. Emily Davis',
        role: 'Lecturer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
        bio: 'Teaches Christian Education and Missions.',
    },
];

export function Faculty() {
    return (
        <Section background="gray">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Faculty</h2>
                <p className="text-lg text-gray-600">
                    Meet the dedicated men and women who will guide you in your studies.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {faculty.map((member) => (
                    <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                            <p className="text-gray-500 text-sm">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
