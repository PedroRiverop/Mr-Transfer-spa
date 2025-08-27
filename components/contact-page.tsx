"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import AnimatedText from "./animated-text"
import Footer from "./footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const locations = [
    {
      city: "Cochabamba",
      address: "Calle Los claveles S/N casi esquina Victor Ustariz (Frente a Aduana)",
      phone: "+591 714 53 040",
      email: "mstransferbolivia@gmail.com",
      hours: "Lun - Vie: 8:00 - 17:00, Sáb: 8:00 - 12:00",
      mapUrl: "https://maps.app.goo.gl/aLx28UGC4W6aoSEg8",
    },{
      city: "Santa Cruz",
      address: "Avenida Rosita Pochi #4430 casi esquina Hilanderia/Barrio Hilanderia entre 4to y 5to anillo",
      phone: "+591 714 53 040",
      email: "mstransferbolivia@gmail.com",
      hours: "Lun - Vie: 8:00 - 17:00, Sáb: 8:00 - 12:00",
      mapUrl: "https://maps.app.goo.gl/S4Qh6VHRkQfSHTQQ8",
    },

  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por contactarnos! Te responderemos pronto.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, me interesa conocer más sobre los servicios de MR Transfer")
    window.open(`https://wa.me/59171453040?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Dark Background */}
      <section
        className="relative py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/oficinaMr.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
         <AnimatedText direction="up" delay={150} className="text-2xl md:text-5xl font-semibold mb-8 ">
            CONTÁCTANOS
          </AnimatedText>
          <AnimatedText direction="up" delay={300} className="text-xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades de transferencias internacionales. Contáctanos por el
            medio que prefieras.
          </AnimatedText>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full floating"></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/20 rounded-full floating"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-12 h-12 bg-orange-500/20 rounded-full floating"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedText direction="up" delay={100}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Llámanos</CardTitle>
                  <CardDescription>Atención inmediata por teléfono</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-blue-600">+591 714 53 040</p>
                  <p className="text-sm text-gray-600 mt-2">Lun - Vie: 8:00 - 17:00, Sáb: 8:00 - 12:00</p>
                </CardContent>
              </Card>
            </AnimatedText>

            <AnimatedText direction="up" delay={200}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Escríbenos</CardTitle>
                  <CardDescription>Respuesta en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-blue-600">mstransferbolivia@gmail.com</p>
                  <p className="text-sm text-gray-600 mt-2">Respuesta garantizada</p>
                </CardContent>
              </Card>
            </AnimatedText>

            <AnimatedText direction="up" delay={300}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Chat directo y rápido</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={handleWhatsApp} className="bg-blue-500 hover:bg-green-600 text-white w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chatear Ahora
                  </Button>
                </CardContent>
              </Card>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Sucursales</h2>
            <p className="text-xl text-gray-600">Visítanos en cualquiera de nuestras ubicaciones</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <AnimatedText key={index} direction="down" delay={index * 100}>
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <MapPin className="h-6 w-6 text-red-600" />
                      {location.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Dirección:</p>
                      <p className="text-gray-600">{location.address}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Teléfono:</p>
                      <p className="text-blue-600">{location.phone}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Email:</p>
                      <p className="text-green-600">{location.email}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Horarios:
                      </p>
                      <p className="text-gray-600 text-sm">{location.hours}</p>
                    </div>

                    <Button onClick={() => window.open(location.mapUrl, "_blank")} variant="outline" className="w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      Ver en Google Maps
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedText>
            ))}
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
             
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-center">Cochabamba</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-63.1821!3d-17.7834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e375042a8c1f4d%3A0x19a4d16509a431f0!2sMS%20TRANSFER!5e0!3m2!1ses!2sar!4v1756313761317!5m2!1ses!2sar"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-center">Santa Cruz</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3798.7398822309283!2d-63.220664000000006!3d-17.803918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ4JzE0LjEiUyA2M8KwMTMnMTQuNCJX!5e0!3m2!1ses!2sar!4v1756314598652!5m2!1ses!2sar"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      
      {/* Emergency Contact */}
      <section className="py-20 text-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas Ayuda Urgente?</h2>
          <p className="text-xl mb-8">Para consultas urgentes fuera del horario de oficina, contáctanos por WhatsApp</p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg"
          >
            <MessageCircle className="h-6 w-6 mr-2" />
            WhatsApp 24/7
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
