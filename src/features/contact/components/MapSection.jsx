import { Section } from '../../../shared/components/ui/Section';

export function MapSection() {
    return (
        <Section background="gray" className="py-0">
            <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6168448765!2d78.48677931487693!3d17.385044588065687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kirubasanam Bible College Location"
                ></iframe>
            </div>
        </Section>
    );
}
