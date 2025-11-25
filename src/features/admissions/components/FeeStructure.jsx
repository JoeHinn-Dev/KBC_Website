import { Section } from '../../../shared/components/ui/Section';

export function FeeStructure() {
    return (
        <Section background="gray">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Fee Structure</h2>
                <p className="text-gray-600 mb-12">
                    We strive to keep our theological education affordable. Scholarships are available for deserving students.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-primary-600 text-white">
                            <tr>
                                <th className="py-4 px-6 text-left">Program</th>
                                <th className="py-4 px-6 text-left">Tuition Fee (Per Year)</th>
                                <th className="py-4 px-6 text-left">Hostel & Mess (Per Year)</th>
                                <th className="py-4 px-6 text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="py-4 px-6 text-left font-medium">Bachelor of Theology</td>
                                <td className="py-4 px-6 text-left">₹ 15,000</td>
                                <td className="py-4 px-6 text-left">₹ 25,000</td>
                                <td className="py-4 px-6 text-left font-bold">₹ 40,000</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-left font-medium">Diploma in Theology</td>
                                <td className="py-4 px-6 text-left">₹ 12,000</td>
                                <td className="py-4 px-6 text-left">₹ 25,000</td>
                                <td className="py-4 px-6 text-left font-bold">₹ 37,000</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-left font-medium">Certificate in Ministry</td>
                                <td className="py-4 px-6 text-left">₹ 8,000</td>
                                <td className="py-4 px-6 text-left">₹ 25,000</td>
                                <td className="py-4 px-6 text-left font-bold">₹ 33,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-left">
                    * Fees are subject to change. Additional charges for books and registration may apply.
                </p>
            </div>
        </Section>
    );
}
