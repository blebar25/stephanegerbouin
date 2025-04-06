import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DoctolibButton() {
  return (
    <motion.a
      href="https://www.doctolib.fr/osteopathe/angers/stephane-gerbouin/booking/new-patient?specialityId=10&profile_skipped=true&utm_source=stephane-gerbouin-website-button&utm_medium=referral&utm_campaign=website-button&utm_content=option-5&bookingFunnelSource=external_referral"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="bg-white text-[#0596DE] px-4 rounded-md shadow-lg flex items-center space-x-2 hover:shadow-xl transition-all duration-300">
        <span className="text-sm font-light whitespace-nowrap">
          Prendre rendez-vous
        </span>
        <div className="h-4 w-px bg-[#0596DE]/30" />
        <Image
          src="/images/Logo-doctolib.svg"
          alt="Doctolib"
          width={60}
          height={18}
          className="relative top-px"
        />
      </div>
    </motion.a>
  )
}
