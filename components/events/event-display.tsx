'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EventCard from './event-card'

// Animation settings
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function EventDisplay() {
  return (
    <motion.div className="mt-2 mx-auto px-10 md:px-22 sm:px-15 flex flex-col" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }}>
      {/* Cards Grid */}
      <motion.section className="py-40" variants={fadeUp}>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center" variants={fadeUp}>
          <motion.div variants={fadeUp}>
            <EventCard
              imageSrc="/images/events/event-images/28-wits-5.webp"
              title="Women in Tech Symposium"
              description="Our annual, most-loved event brings in faculty and industry professionals from leading companies."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <EventCard
              imageSrc="/images/events/event-images/4-prereg-mingle-5.webp"
              title="Technical Workshops"
              description="We regularly host Leetcode sessions and career panels to help members grow their technical skills."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <EventCard
              imageSrc="/images/events/event-images/27-study-and-donuts.webp"
              title="Socials"
              description="From cozy study-ins to movie nights, we help you find your people and feel at home in tech."
            />
          </motion.div>
        </motion.div>
      </motion.section>


      {/* Past Events Section */}
      <motion.div className = "flex-col item-center text-center mt-12" variants={fadeUp}>
        <motion.h2 className="font-heading text-maroon text-xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>
          Curious about what we&apos;ve been doing?
        </motion.h2>

        <motion.h2 className="text-black/60 font-heading text-xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.0, duration: 0.5 }}>
          Check out our{' '}
          <Link href="/events/recent" className="underline hover:text-gray-dark">
            past events
          </Link>.
        </motion.h2>
      </motion.div>
    </motion.div>
  )
}
