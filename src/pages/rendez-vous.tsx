import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RendezVous() {
  return (
    <>
      <Head>
        <title>Prendre rendez-vous - Stéphane Gerbouin Ostéopathe</title>
        <meta name="description" content="Prenez rendez-vous avec Stéphane Gerbouin, ostéopathe à Angers. Réservation en ligne sur Doctolib ou par téléphone." />
      </Head>

      <Header />

      <main className="min-h-screen bg-[#F5F1EA]">
        <section className="pt-32 pb-20">
          <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-light text-primary mb-4"
              >
                Prendre rendez-vous
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-lg"
              >
                Choisissez la méthode qui vous convient le mieux
              </motion.p>
            </div>

            {/* Options de rendez-vous */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {/* Doctolib */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-light text-primary">Sur Doctolib</h2>
                      <p className="text-gray-600 mt-1">Réservation en ligne 24h/24</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      href="https://www.doctolib.fr/osteopathe/angers/stephane-gerbouin/booking/new-patient?specialityId=10&profile_skipped=true&utm_source=stephane-gerbouin-website-button&utm_medium=referral&utm_campaign=website-button&utm_content=option-5&bookingFunnelSource=external_referral"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-primary to-primary/90 text-white text-center py-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] text-lg font-medium"
                    >
                      Réserver sur Doctolib
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Téléphone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-light text-primary">Par téléphone</h2>
                      <p className="text-gray-600 mt-1">Contact direct</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      href="tel:0241886699"
                      className="block w-full bg-white border-2 border-primary text-primary text-center py-4 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white text-lg font-medium"
                    >
                      02 41 88 66 99
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Informations pratiques */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-light text-primary">Informations</h2>
                      <p className="text-gray-600 mt-1">Détails pratiques</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Durée : 30-35 minutes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Tarif : 48€</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span>CB, chèque, espèces</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Adresse et carte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-primary mb-2">Le cabinet</h2>
                    <div className="text-gray-600 space-y-1">
                      <p>Résidence Château Roi René</p>
                      <p>2B Place de l'Académie</p>
                      <p>49100 Angers</p>
                    </div>
                  </div>
                </div>

                <div className="h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.9661510352424!2d-0.5539661233769271!3d47.47214597127285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48087444c2ca5b27%3A0x6897bdbb16b76285!2s2%20Place%20de%20l&#39;Acad%C3%A9mie%2C%2049100%20Angers!5e0!3m2!1sfr!2sfr!4v1690000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
