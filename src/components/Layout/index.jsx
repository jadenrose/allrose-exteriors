import React from 'react'
import { Roboto_Condensed } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import CardsSection from '@/components/CardsSection'
import WhatWeDo from '@/components/WhatWeDo'
import Article from '@/components/Article'
import BrandingSection from '@/components/BrandingSection'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import ContactSection from '@/components/ContactSection'

import styles from './index.module.scss'

const roboto_condensed = Roboto_Condensed({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

const Layout = ({
  header,
  hero,
  introSection,
  cardsSection,
  whatWeDo,
  article,
  brandingSection,
  gallery,
  contactSection,
  footer,
  heroStyle,
}) => {
  return (
    <div className={styles.layout}>
      <style jsx global>{`
        html {
          font-family: ${roboto_condensed.style.fontFamily};
        }
      `}</style>
      {header && <Header {...header} />}
      <main className={styles.main}>
        {hero && <Hero {...hero} heroStyle={heroStyle} />}
        {introSection && <IntroSection {...introSection} />}
        {cardsSection && <CardsSection {...cardsSection} />}
        {whatWeDo && <WhatWeDo {...whatWeDo} />}
        {article && <Article {...article} />}
        {brandingSection && <BrandingSection {...brandingSection} />}
        {gallery && <Gallery {...gallery} />}
        {contactSection && <ContactSection {...contactSection} />}
      </main>
      {footer && <Footer {...footer} />}
    </div>
  )
}

export default Layout
