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
      city: "Santa Cruz",
      address: "Av. San Martín #123, Equipetrol",
      phone: "+591 3 123 4567",
      email: "santacruz@mrtransfer.com",
      hours: "Lun - Vie: 8:00 - 18:00, Sáb: 8:00 - 12:00",
      mapUrl: "https://maps.google.com/?q=Santa+Cruz+Bolivia+Equipetrol",
    },
    {
      city: "La Paz",
      address: "Av. 16 de Julio #456, Prado",
      phone: "+591 2 234 5678",
      email: "lapaz@mrtransfer.com",
      hours: "Lun - Vie: 8:00 - 18:00, Sáb: 8:00 - 12:00",
      mapUrl: "https://maps.google.com/?q=La+Paz+Bolivia+Prado",
    },
    {
      city: "Cochabamba",
      address: "Av. Heroínas #789, Centro",
      phone: "+591 4 345 6789",
      email: "cochabamba@mrtransfer.com",
      hours: "Lun - Vie: 8:00 - 18:00, Sáb: 8:00 - 12:00",
      mapUrl: "https://maps.google.com/?q=Cochabamba+Bolivia+Centro",
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
    window.open(`https://wa.me/59123456789?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Dark Background */}
      <section
        className="relative py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg?height=600&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedText direction="down" className="text-5xl font-bold mb-6 gradient-text">
            Contáctanos
          </AnimatedText>
          <AnimatedText direction="up" delay={300} className="text-xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades de transferencias internacionales. Contáctanos por el
            medio que prefieras.
          </AnimatedText>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full floating"></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-green-500/20 rounded-full floating"
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
                  <p className="text-lg font-semibold text-blue-600">+591 123 456 789</p>
                  <p className="text-sm text-gray-600 mt-2">Lun - Vie: 8:00 - 18:00</p>
                </CardContent>
              </Card>
            </AnimatedText>

            <AnimatedText direction="up" delay={200}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Escríbenos</CardTitle>
                  <CardDescription>Respuesta en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-green-600">info@mrtransfer.com</p>
                  <p className="text-sm text-gray-600 mt-2">Respuesta garantizada</p>
                </CardContent>
              </Card>
            </AnimatedText>

            <AnimatedText direction="up" delay={300}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Chat directo y rápido</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 text-white w-full">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Envíanos un Mensaje</h2>
            <p className="text-xl text-gray-600">Completa el formulario y nos pondremos en contacto contigo</p>
          </div>

          <AnimatedText direction="up">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Formulario de Contacto</CardTitle>
                <CardDescription className="text-blue-100 text-center">
                  Todos los campos son obligatorios
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Teléfono *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+591 123 456 789"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                        Servicio de Interés *
                      </Label>
                      <Input
                        id="service"
                        name="service"
                        type="text"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Ej: Pagos a proveedores"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={5}
                      placeholder="Cuéntanos más detalles sobre tu consulta..."
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </AnimatedText>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Encuéntranos</h2>
            <p className="text-xl text-gray-600">Estamos ubicados estratégicamente en las principales ciudades</p>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Mapa Interactivo</p>
              <p className="text-gray-500">Integración con Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas Ayuda Urgente?</h2>
          <p className="text-xl mb-8">Para consultas urgentes fuera del horario de oficina, contáctanos por WhatsApp</p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
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
