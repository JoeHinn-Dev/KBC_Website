import { Section } from '../../../shared/components/ui/Section';

export function History() {
    return (
        <Section>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our History</h2>
                <div className="prose prose-lg mx-auto text-gray-600">
                    <p className="mb-4">
                        Kirubasanam Bible College was established in [Year] with a vision to train men and women for the work of the Gospel.
                        What started as a small training center has now grown into a premier theological institution.
                    </p>
                    <p className="mb-4">
                        Over the decades, we have sent out hundreds of graduates who are serving as pastors, missionaries, and church leaders
                        across India and around the world. Our commitment to biblical truth and spiritual formation remains unchanged.
                    </p>
                    <p>
                        Today, KBC continues to stand as a beacon of light, equipping the next generation of servant leaders to impact
                        their communities for Christ.
                    </p>
                </div>
            </div>
        </Section>
    );
}
