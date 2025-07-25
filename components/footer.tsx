"use client"

import { Phone, Mail, Clock } from "lucide-react"
import AnimatedText from "./animated-text"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AnimatedText direction="up" delay={100}>
            <div>
              <img
                src="/images/logo-mr-transfer.webp"
                alt="MR Transfer"
                className="h-12 w-auto mb-4 filter brightness-0 invert hover:scale-110 transition-transform duration-300"
              />
              <p className="text-gray-300">Soluciones seguras y confiables para tus transferencias internacionales.</p>
            </div>
          </AnimatedText>

          <AnimatedText direction="up" delay={200}>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-orange-400 transition-colors cursor-pointer">Pagos a Proveedores</li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer">Remesas</li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer">Compras Online</li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer">Servicios Marítimos</li>
              </ul>
            </div>
          </AnimatedText>

          <AnimatedText direction="up" delay={300}>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+591 714 53 040</span>
                </div>
                <div className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>mstransferbolivia@gmail.com</span>
                </div>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText direction="up" delay={400}>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horarios</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Lun - Vie: 8:00 - 17:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Sáb: 8:00 - 12:00</span>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText direction="fade" delay={500}>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 MR Transfer. Todos los derechos reservados.</p>
            <p className="text-xs mt-2 opacity-70">
              Desarrollado por{" "}
              <a
                href="https://www.linkedin.com/in/jpedro-rivero-pe%C3%B1a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                PedroRiverop
              </a>
            </p>
          </div>
        </AnimatedText>
      </div>
    </footer>
  )
}
