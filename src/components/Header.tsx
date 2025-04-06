import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { 
      scaleX: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="text-primary text-lg sm:text-xl font-medium">
                Stéphane Gerbouin
              </Link>
            </motion.div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {[
              { href: "/#accueil", label: "Accueil" },
              { href: "/#qui-suis-je", label: "Qui suis-je ?" },
              { href: "/#osteopathie", label: "L'Ostéopathie" },
              { href: "/#seance", label: "Une séance" }
            ].map((item) => (
              <motion.div
                key={item.href}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                <motion.div variants={linkVariants}>
                  <Link href={item.href} className="text-primary hover:text-primary/90 transition-colors text-sm lg:text-base">
                    {item.label}
                  </Link>
                </motion.div>
                <motion.div
                  variants={underlineVariants}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                />
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/rendez-vous" 
                className="bg-primary text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md text-sm lg:text-base whitespace-nowrap"
              >
                Prendre rendez-vous
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-primary p-2 -mr-2"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100"
          >
            <div className="py-3 space-y-0.5">
              {[
                { href: "/#accueil", label: "Accueil" },
                { href: "/#qui-suis-je", label: "Qui suis-je ?" },
                { href: "/#osteopathie", label: "L'Ostéopathie" },
                { href: "/#seance", label: "Une séance" }
              ].map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2.5 text-primary hover:bg-secondary/50 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
                className="mt-3 px-4 pb-4"
              >
                <Link 
                  href="/rendez-vous"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-primary text-white py-3 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Prendre rendez-vous
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
