import Hero from "@/components/sections/Hero"
import Benefits from "@/components/sections/Benefits"
import CourseFeatures from "@/components/sections/CourseFeatures"
import Teachers from "@/components/sections/Teachers"
import FAQ from "@/components/sections/FAQ"
import Footer from "@/components/sections/Footer"
import Header from "@/components/sections/Header"
import BookingForm from "@/components/sections/BookingForm"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020817] overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="relative z-10">
          <Benefits />
          <CourseFeatures />
          <Teachers />
          <FAQ />
          <BookingForm />
        </div>
        <Footer />
      </main>
    </div>
  )
} 