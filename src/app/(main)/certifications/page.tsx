import { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Chứng Nhận Chất Lượng | FDA, ISO 22000, HACCP',
  description: 'Toàn bộ giấy chứng nhận chất lượng của nhà máy Việt Nam Cường Thịnh. Đáp ứng tiêu chuẩn xuất khẩu thực phẩm khắt khe nhất.',
}

export default function CertificationsPage() {
  const certifications = [
    {
      id: 'fda',
      title: 'FDA Registration',
      authority: 'U.S. Food and Drug Administration',
      desc: 'Required for all facilities that manufacture, process, pack, or hold food for consumption in the United States. Our facility is fully registered and compliant with the Food Safety Modernization Act (FSMA).',
      points: ['Biannual renewal maintained', 'FSVP documentation ready', 'Compliant with US labeling laws']
    },
    {
      id: 'iso',
      title: 'ISO 22000:2018',
      authority: 'International Organization for Standardization',
      desc: 'An internationally recognized standard that specifies requirements for a food safety management system. It ensures we have the ability to control food safety hazards.',
      points: ['Annual independent audits', 'Integrated HACCP principles', 'End-to-end traceability']
    },
    {
      id: 'haccp',
      title: 'HACCP',
      authority: 'Hazard Analysis and Critical Control Points',
      desc: 'A systematic preventive approach to food safety from biological, chemical, and physical hazards. Every production batch is monitored at critical control points.',
      points: ['Scientific hazard analysis', 'Continuous CCP monitoring', 'Rigorous corrective actions']
    }
  ]

  return (
    <>
      <section className="bg-brand-950 text-white pt-24 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Quality & Safety Standards</h1>
        <p className="max-w-2xl mx-auto text-brand-100 text-lg">
          Our commitment to international food safety is non-negotiable.
        </p>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {certifications.map(cert => (
              <div key={cert.id} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col">
                <div className="mb-6 flex-shrink-0">
                  <div className="text-brand-800 font-bold uppercase tracking-wider text-sm mb-2">{cert.authority}</div>
                  <h2 className="text-3xl font-bold text-gray-900 font-display">{cert.title}</h2>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{cert.desc}</p>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Key Compliance</h4>
                  <ul className="space-y-3">
                    {cert.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle2 size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto bg-brand-50 rounded-3xl p-8 md:p-12 border border-brand-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Require Proof of Certification?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              For B2B buyers and OEM partners, we provide full copies of our current certificates, most recent audit reports, and Certificates of Analysis (COA) during the onboarding process.
            </p>
            <Button href="/contact" size="lg">Request Documentation Package</Button>
          </div>
        </div>
      </section>
    </>
  )
}
