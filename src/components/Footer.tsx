import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Contact */}
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-lg sm:text-xl mb-4 font-light">Contact</h3>
            <div className="space-y-2">
              <a 
                href="tel:0241886699" 
                className="flex items-center justify-center sm:justify-start space-x-2 hover:text-secondary transition-colors group"
              >
                <svg className="w-5 h-5 text-secondary/70 group-hover:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>02 41 88 66 99</span>
              </a>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <svg className="w-5 h-5 text-secondary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base">Lun-Ven : 8h30-19h30</span>
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-lg sm:text-xl mb-4 font-light">Le Cabinet</h3>
            <div className="space-y-1">
              <p className="text-white/90">Résidence Château Roi René</p>
              <p className="text-white/90">2B Place de l'Académie</p>
              <p className="text-white/90">49100 Angers</p>
            </div>
            <div className="pt-4">
              <Link 
                href="https://maps.google.com/?q=2+Place+de+l'Académie,+49100+Angers"
                target="_blank"
                className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors text-sm"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Voir sur Google Maps
              </Link>
            </div>
          </div>

          {/* Doctolib */}
          <div className="text-center lg:text-right">
            <h3 className="text-lg sm:text-xl mb-4 font-light">Rendez-vous</h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="https://www.doctolib.fr/osteopathe/angers/stephane-gerbouin/booking/new-patient?specialityId=10&profile_skipped=true&utm_source=stephane-gerbouin-website-button&utm_medium=referral&utm_campaign=website-button&utm_content=option-5&bookingFunnelSource=external_referral"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md text-sm sm:text-base"
              >
                Prendre rendez-vous sur Doctolib
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm sm:text-base text-white/80">
            &copy; {new Date().getFullYear()} Cabinet d'Ostéopathie Stéphane Gerbouin. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
