import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stéphane Gerbouin - Ostéopathe à Angers</title>
        <meta name="description" content="Cabinet d'ostéopathie de Stéphane Gerbouin à Angers. Prenez rendez-vous pour une consultation d'ostéopathie." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section id="accueil" className="relative min-h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/stephanegerbouin/images/hero_gerbouin.avif"
              alt="Cabinet d'ostéopathie"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/70 to-[#2C3E50]/80" />
          </div>

          {/* Content */}
          <motion.div 
            className="relative container-custom text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h1 className="text-5xl md:text-7xl font-light mb-4 text-white">
                  Stéphane Gerbouin
                </h1>
                <h2 className="text-2xl md:text-4xl font-light text-white">
                  Ostéopathe D.O.
                </h2>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="mb-12 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xl text-white/90">Résidence Château Roi René</p>
                <p className="text-xl text-white/90">2B Place de l'Académie, Angers</p>
              </motion.div>

              {/* Bouton RDV */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link 
                  href="/rendez-vous"
                  className="inline-block bg-white text-[#2C3E50] font-medium text-lg px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Prendre rendez-vous
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="w-1 h-2 bg-white/30 rounded-full mx-auto" />
            </motion.div>
          </motion.div>
        </section>

        {/* Section Qui suis-je */}
        <section id="qui-suis-je" className="py-16 bg-primary">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto w-full max-w-[420px]"
              >
                <div className="absolute inset-0 bg-secondary/20 rounded-xl transform rotate-3"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm transform -rotate-3 transition-transform duration-500 hover:rotate-0">
                  <Image
                    src="/stephanegerbouin/images/stephane_gerbouin.avif"
                    alt="Stéphane Gerbouin - Ostéopathe à Angers"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Contenu */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <h2 className="text-3xl md:text-4xl font-light text-white mb-8 relative inline-block">
                  Mon Parcours
                  <div className="absolute -bottom-3 left-0 w-16 h-1 bg-secondary/30"></div>
                </h2>
                
                <div className="space-y-4">
                  <motion.div 
                    className="bg-white/95 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg text-primary font-medium mb-1">Formation Principale</h3>
                    <p className="text-gray-700">
                      Diplôme de l'école d'Ostéopathie de la MTM
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white/95 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg text-primary font-medium mb-1">Formation Complémentaire</h3>
                    <p className="text-gray-700">
                      Diplôme d'Etat de Kinésithérapie
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white/95 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg text-primary font-medium mb-1">Formation Continue</h3>
                    <p className="text-gray-700">
                      Formation complémentaire au C.O.P.B. (collège Ostéopathique de Biarritz) - en cours
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white/95 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg text-primary font-medium mb-1">Spécialisation</h3>
                    <p className="text-gray-700">
                      Formation en phytothérapie et nutrition
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Ostéopathie */}
        <section id="osteopathie" className="py-16 bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-8 relative inline-block">
                Pourquoi l'Ostéopathie ?
                <div className="absolute -bottom-3 left-1/2 w-16 h-1 bg-primary/30 transform -translate-x-1/2"></div>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Douleurs Musculo-articulaires */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl text-primary font-medium mb-4">Douleurs Musculo-articulaires</h3>
                <ul className="space-y-4 text-gray-700">
                  <li>Blocages et douleurs du rachis (dos, cervicales, bassin) et des articulations (épaules, genoux, pieds, etc.)</li>
                  <li>Névralgies d'Arnold, névralgies cervico-brachiales, sciatiques, cruralgies, etc.</li>
                  <li>Tendinites, capsulites, entorses et leurs séquelles.</li>
                </ul>
              </motion.div>

              {/* Troubles digestifs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl text-primary font-medium mb-4">Troubles digestifs</h3>
                <p className="text-gray-700">
                  Du reflux gastrique au transit intestinal en passant par les ballonnements ou le syndrome du colon irritable, 
                  l'ostéopathie en libérant les sphincters situés tout au long du système digestif, en favorisant la libération des 
                  sécrétions et les micro mouvements des intestins, permet un confort digestif et contribue très souvent à la 
                  diminution des douleurs lombaires et cervico-dorsales
                </p>
              </motion.div>

              {/* Correction de la Posture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl text-primary font-medium mb-4">Correction de la Posture Ostéopathique</h3>
                <p className="text-gray-700">
                  Une amélioration de votre posture entraîne immanquablement un soulagement des troubles 
                  musculosquelettiques et une amélioration du tonus abdominal et respiratoire agissant par ce biais sur les troubles 
                  digestifs, de la respiration et les douleurs du rachis.
                </p>
              </motion.div>

              {/* Troubles gynécologiques */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl text-primary font-medium mb-4">Troubles gynécologiques et urinaires</h3>
                <p className="text-gray-700">
                  Menstruations douloureuses, douleurs pelviennes, contractures du périnée, etc.
                </p>
              </motion.div>

              {/* Ostéopathie crânienne */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl text-primary font-medium mb-4">Ostéopathie crânienne</h3>
                <p className="text-gray-700">
                  Troubles du sommeil, stress, migraines et rééquilibrage du système nerveux autonome.
                </p>
              </motion.div>

              {/* Ostéopathie chez l'enfant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl text-primary font-medium mb-4">Ostéopathie chez l'enfant</h3>
                <p className="text-gray-700">
                  Torticolis congénital, plagiocéphalie (tête plate), coliques, régurgitations, nervosité, troubles ORL et du sommeil, 
                  et équilibre postural de l'enfant.
                </p>
              </motion.div>
            </div>

            {/* En résumé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 text-center max-w-3xl mx-auto"
            >
              <p className="text-gray-700 italic">
                En résumé, que vous consultiez pour des douleurs aigües, chroniques ou des gênes occasionnelles, notre 
                approche sera globale pour une amélioration durable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section Images Ostéopathie */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="container-custom px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Image 1 - Ostéopathie nourrisson */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] group"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative h-full rounded-xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-sm">
                  <Image
                    src="/stephanegerbouin/images/pediatrique.jpg"
                    alt="Ostéopathie pour nourrisson"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-medium px-4 text-center">Ostéopathie pédiatrique</p>
                  </div>
                </div>
              </motion.div>

              {/* Image 2 - Ostéopathie cervicale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative aspect-[4/3] group"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative h-full rounded-xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-sm">
                  <Image
                    src="/stephanegerbouin/images/cervical.webp"
                    alt="Ostéopathie cervicale"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-medium px-4 text-center">Traitement cervical</p>
                  </div>
                </div>
              </motion.div>

              {/* Image 3 - Ostéopathie générale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-[4/3] group"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative h-full rounded-xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-sm">
                  <Image
                    src="/stephanegerbouin/images/ostéopathique.jpg"
                    alt="Ostéopathie générale"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-medium px-4 text-center">Traitement ostéopathique</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Une séance */}
        <section id="seance" className="py-16 bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-8 relative inline-block">
                Une séance d'ostéopathie
                <div className="absolute -bottom-3 left-1/2 w-16 h-1 bg-primary/30 transform -translate-x-1/2"></div>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Carte Google Maps */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-sm bg-white"
              >
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
              </motion.div>

              {/* Informations de séance */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-sm space-y-6"
              >
                {/* Durée */}
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg text-primary font-medium">Durée</h3>
                    <p className="text-gray-700">30 - 35 minutes</p>
                  </div>
                </div>

                {/* Prix */}
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg text-primary font-medium">Tarif</h3>
                    <p className="text-gray-700">48€</p>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg text-primary font-medium">Adresse</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Résidence Château Roi René</p>
                      <p>2B Place de l'Académie</p>
                      <p>Angers</p>
                    </div>
                  </div>
                </div>

                {/* Bouton de rendez-vous */}
                <Link
                  href="/rendez-vous"
                  className="mt-6 inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 group w-full justify-center"
                >
                  <span>Prendre rendez-vous</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl text-white font-medium mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:0241886699" className="text-white/90 hover:text-secondary transition-colors">02 41 88 66 99</a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <address className="text-white/90 not-italic">
                    2B Place de l'Académie<br />
                    49100 Angers
                  </address>
                </div>
              </div>
            </motion.div>

            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl text-white font-medium mb-4">Horaires</h3>
              <div className="space-y-2 text-white/90">
                <p>Lundi : 8h30 - 19h30</p>
                <p>Mercredi : 8h30 - 19h30</p>
                <p>Jeudi : 8h00 - 17h00</p>
                <p>Vendredi : 8h00 - 18h30</p>
              </div>
            </motion.div>

            {/* Navigation rapide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl text-white font-medium mb-4">Navigation</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/#qui-suis-je" className="text-white/90 hover:text-secondary transition-colors">Qui suis-je ?</Link>
                <Link href="/#osteopathie" className="text-white/90 hover:text-secondary transition-colors">L'Ostéopathie</Link>
                <Link href="/#seance" className="text-white/90 hover:text-secondary transition-colors">Une séance</Link>
                <Link href="/rendez-vous" className="text-white/90 hover:text-secondary transition-colors">Rendez-vous</Link>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <p className="text-white/80 text-sm">
                {new Date().getFullYear()} Stéphane Gerbouin - Ostéopathe D.O. Tous droits réservés.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
