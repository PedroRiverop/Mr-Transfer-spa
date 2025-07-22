"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import HomePage from "@/components/home-page"
import ServicesPage from "@/components/services-page"
import AboutPage from "@/components/about-page"
import ContactPage from "@/components/contact-page"

export default function App() {
  const [currentView, setCurrentView] = useState("inicio")

  const renderCurrentView = () => {
    switch (currentView) {
      case "inicio":
        return <HomePage onNavigateToServices={() => setCurrentView("servicios")} />
      case "servicios":
        return <ServicesPage />
      case "nosotros":
        return <AboutPage />
      case "contactanos":
        return <ContactPage />
      default:
        return <HomePage onNavigateToServices={() => setCurrentView("servicios")} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      {renderCurrentView()}
    </div>
  )
}
