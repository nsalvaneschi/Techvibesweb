'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PoliticasPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/quienes-somos"
          className="inline-flex items-center gap-2 text-sm text-[#A9C1A9] hover:text-[#CBD4BF] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Volver a Quiénes Somos
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Políticas de Privacidad
          </h1>
          <p className="text-sm text-neutral-500 mb-12">
            Fecha de última actualización: 07-05-2025
          </p>

          <div className="space-y-8 text-neutral-300 leading-relaxed">
            <p>
              En Techvibes, nos comprometemos a proteger la privacidad de nuestros clientes, proveedores y usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos los datos personales en el marco de nuestras actividades comerciales, incluyendo la instalación y mantenimiento de soluciones de domótica, redes, telecomunicaciones, audio y video.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                1. ¿Qué datos personales recopilamos?
              </h2>
              <p className="mb-3">Podemos recopilar los siguientes datos:</p>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Nombre, apellido y datos de contacto (email, teléfono, dirección).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Información comercial (nombre de empresa, cargo, sector).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Datos técnicos (IP, ubicación aproximada, datos de configuración de equipos).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Información sobre proyectos o instalaciones realizados.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Preferencias de comunicación o contacto.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                2. ¿Cómo recopilamos los datos?
              </h2>
              <p className="mb-3">Los datos se recopilan a través de:</p>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Formularios de contacto en nuestro sitio web o redes sociales.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Comunicaciones por correo electrónico o teléfono.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Presupuestos, contratos y visitas técnicas.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Cookies o herramientas de análisis en nuestra web (si aplica).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                3. ¿Para qué usamos los datos?
              </h2>
              <p className="mb-3">Usamos los datos para:</p>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Brindar soporte técnico y seguimiento de proyectos.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Gestionar presupuestos, ventas y contratos.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Ofrecer información sobre nuevos productos o servicios.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Mejorar la experiencia de nuestros usuarios y clientes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Cumplir obligaciones legales o fiscales.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                4. ¿Con quién compartimos los datos?
              </h2>
              <p className="mb-3">No compartimos datos personales con terceros, salvo:</p>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Proveedores necesarios para la prestación del servicio (por ejemplo, técnicos, logística).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Obligaciones legales ante autoridades competentes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Empresas asociadas, solo si es estrictamente necesario y con garantías de confidencialidad.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                5. Seguridad de los datos
              </h2>
              <p className="text-neutral-400">
                Implementamos medidas técnicas y organizativas adecuadas para proteger los datos personales frente a accesos no autorizados, pérdidas o alteraciones.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                6. Derechos del titular de los datos
              </h2>
              <p className="mb-3">Como titular de los datos, usted puede:</p>
              <ul className="space-y-2 text-neutral-400 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Acceder, rectificar o eliminar sus datos personales.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Solicitar la limitación u oposición al tratamiento.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9C1A9] mt-1.5">•</span>
                  Retirar su consentimiento en cualquier momento.
                </li>
              </ul>
              <p className="text-neutral-400">
                Puede ejercer estos derechos enviando un correo a:{' '}
                <a href="mailto:info@techvibes.com.ar" className="text-[#A9C1A9] hover:text-[#CBD4BF] transition-colors">
                  info@techvibes.com.ar
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                7. Cambios a esta política
              </h2>
              <p className="text-neutral-400">
                Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. La versión actualizada estará siempre disponible en nuestro sitio web.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#CBD4BF]/5 border border-[#CBD4BF]/10">
              <h2 className="text-xl font-semibold text-white mb-4">
                8. Contacto
              </h2>
              <p className="text-neutral-400 mb-4">
                Para consultas sobre nuestra política de privacidad, contáctenos a:
              </p>
              <div className="space-y-2 text-sm text-neutral-300">
                <p>Techvibes S.R.L.</p>
                <p>Mariano Castex 3869, B1801DHJ Canning, Provincia de Buenos Aires</p>
                <p>
                  <a href="tel:+5491138835951" className="text-[#A9C1A9] hover:text-[#CBD4BF] transition-colors">
                    +54911-3883-5951
                  </a>
                </p>
                <p>
                  <a href="mailto:info@techvibes.com.ar" className="text-[#A9C1A9] hover:text-[#CBD4BF] transition-colors">
                    info@techvibes.com.ar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
