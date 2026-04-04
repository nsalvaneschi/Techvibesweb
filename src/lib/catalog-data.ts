export interface Product {
  name: string;
  description: string;
  category: string;
  brandUrl: string;
}

export interface BrandCatalog {
  id: string;
  name: string;
  description: string;
  website: string;
  products: Product[];
}

export const brandCatalogs: BrandCatalog[] = [
  {
    id: 'control4',
    name: 'Control4',
    description: 'Sistemas de automatización del hogar premium. Controladores, teclados y dispositivos inteligentes.',
    website: 'https://www.control4.com/',
    products: [
      { name: 'Sistema Integral del Hogar', description: 'Sistema completo de automatización que conecta todos los dispositivos en una sola plataforma inteligente.', category: 'Controladores', brandUrl: 'https://www.control4.com/solutions/whole-home' },
      { name: 'Video & Home Theater', description: 'Sistemas de video y entretenimiento con control integrado para una experiencia de cine en casa.', category: 'Home Theater', brandUrl: 'https://www.control4.com/solutions/video-and-home-theater' },
      { name: 'Audio Multiroom', description: 'Distribución de audio en todo el hogar con control independiente por zona.', category: 'Audio', brandUrl: 'https://www.control4.com/solutions/audio' },
      { name: 'Iluminación Inteligente', description: 'Control de iluminación con escenas personalizadas y automatización.', category: 'Iluminación', brandUrl: 'https://www.control4.com/solutions/smart-lighting' },
      { name: 'Seguridad y Protección', description: 'Sistemas de seguridad integrados con cámaras, sensores y alarmas.', category: 'Seguridad', brandUrl: 'https://www.control4.com/solutions/safety-security' },
      { name: 'Confort y Climatización', description: 'Control de clima, persianas y confort ambiental automatizado.', category: 'Climatización', brandUrl: 'https://www.control4.com/solutions/climate-and-comfort' },
    ],
  },
  {
    id: 'sonos',
    name: 'Sonos',
    description: 'Sistema de audio multiroom WiFi. Parlantes inteligentes, barras de sonido y subwoofers.',
    website: 'https://www.sonos.com/es-ar/home',
    products: [
      { name: 'Era 100', description: 'Parlante inteligente compacto con sonido rico y graves profundos.', category: 'Parlantes', brandUrl: 'https://www.sonos.com/es-ar/shop/wireless-speakers' },
      { name: 'Era 300', description: 'Parlante premium con audio espacial Dolby Atmos.', category: 'Parlantes', brandUrl: 'https://www.sonos.com/es-ar/shop/wireless-speakers' },
      { name: 'Arc Ultra', description: 'Barra de sonido premium para home theater con sonido envolvente.', category: 'Home Theater', brandUrl: 'https://www.sonos.com/es-ar/shop/home-theater' },
      { name: 'Sub 4', description: 'Subwoofer inalámbrico con respuesta de graves profunda y sin distorsión.', category: 'Subwoofers', brandUrl: 'https://www.sonos.com/es-ar/shop/home-theater' },
      { name: 'Five', description: 'Parlante de alta fidelidad para música en estéreo.', category: 'Parlantes', brandUrl: 'https://www.sonos.com/es-ar/shop/wireless-speakers' },
      { name: 'Amp', description: 'Amplificador streaming para conectar parlantes pasivos a tu sistema Sonos.', category: 'Amplificadores', brandUrl: 'https://www.sonos.com/es-ar/shop/accessories' },
    ],
  },
  {
    id: 'yale',
    name: 'Yale',
    description: 'Cerraduras digitales, cerrojos inteligentes y cajas fuertes para el hogar.',
    website: 'https://yalehome.com.ar/',
    products: [
      { name: 'YSD100 Digital', description: 'Cerradura digital con huella, código, tarjeta, celular y llave.', category: 'Cerraduras', brandUrl: 'https://yalehome.com.ar/collections/cerraduras-digitales' },
      { name: 'YMF40A', description: 'Cerradura digital con manija, huella y apertura por celular.', category: 'Cerraduras', brandUrl: 'https://yalehome.com.ar/collections/cerraduras-digitales' },
      { name: 'YDR41 Cerrojo', description: 'Cerrojo digital con huella y código para máxima seguridad.', category: 'Cerrojos', brandUrl: 'https://yalehome.com.ar/collections/cerrojos-digitales' },
      { name: 'LIA Embutir', description: 'Cerradura de embutir digital con múltiples métodos de acceso.', category: 'Cerraduras', brandUrl: 'https://yalehome.com.ar/collections/cerraduras-de-embutir' },
      { name: 'Yale Connect Hub', description: 'Módulo WiFi para controlar cerraduras Yale desde el celular.', category: 'Accesorios', brandUrl: 'https://yalehome.com.ar/collections/yale-connect-hub' },
      { name: 'Caja Fuerte Mediana', description: 'Caja fuerte biométrica táctil para proteger objetos de valor.', category: 'Cajas Fuertes', brandUrl: 'https://yalehome.com.ar/collections/cajas-fuertes-subcategoria' },
    ],
  },
  {
    id: 'bond',
    name: 'Bond Home',
    description: 'Control inteligente de ventiladores de techo, chimeneas y persianas.',
    website: 'https://bondhome.io/',
    products: [
      { name: 'Bond Bridge Pro', description: 'Puente WiFi/Ethernet para controlar hasta 30 dispositivos RF.', category: 'Controladores', brandUrl: 'https://bondhome.io/product/bond-bridge-pro/' },
      { name: 'Bond Bridge', description: 'Convierte ventiladores, chimeneas y persianas en dispositivos inteligentes.', category: 'Controladores', brandUrl: 'https://bondhome.io/product/bond-bridge/' },
      { name: 'Sidekick Gen 4', description: 'Control de pared universal para persianas motorizadas.', category: 'Persianas', brandUrl: 'https://bondhome.io/product/sidekick-for-shades-gen-4/' },
      { name: 'Breeze Pro Gen 2', description: 'Sensor inteligente de viento, lluvia y sol para persianas exteriores.', category: 'Sensores', brandUrl: 'https://bondhome.io/product/breeze-pro-gen-2/' },
      { name: 'Mate Pro', description: 'Control remoto inteligente resistente al agua para persianas y toldos.', category: 'Controladores', brandUrl: 'https://bondhome.io/product/mate/' },
      { name: 'Firefly One', description: 'Controlador inteligente para chimeneas a gas.', category: 'Chimeneas', brandUrl: 'https://bondhome.io/product/firefly-one/' },
    ],
  },
  {
    id: 'denon',
    name: 'Denon',
    description: 'Receptores AV, amplificadores y sistemas de audio de alta fidelidad.',
    website: 'https://www.denon.com/',
    products: [
      { name: 'Receptores AV', description: 'Receptores de audio y video con Dolby Atmos, DTS:X y HEOS Built-in.', category: 'Receptores', brandUrl: 'https://www.denon.com/en-us/category/av-receivers/' },
      { name: 'Barras de Sonido', description: 'Barras de sonido HEOS HomeCinema con subwoofer integrado.', category: 'Barras de Sonido', brandUrl: 'https://www.denon.com/en-us/category/sound-bars/' },
      { name: 'Amplificadores Integrados', description: 'Amplificadores estéreo con streaming HEOS y DAC de alta resolución.', category: 'Amplificadores', brandUrl: 'https://www.denon.com/en-us/category/integrated-amplifiers/' },
      { name: 'Reproductores de Red', description: 'Reproductores de audio en red con DAC premium para alta resolución.', category: 'Streaming', brandUrl: 'https://www.denon.com/en-us/category/network-audio-players/' },
      { name: 'Reproductores de CD', description: 'Reproductores de CD/SACD de referencia con DAC de 32 bits.', category: 'Reproductores', brandUrl: 'https://www.denon.com/en-us/category/cd-players/' },
      { name: 'Auriculares', description: 'Auriculares premium con cancelación de ruido activa.', category: 'Auriculares', brandUrl: 'https://www.denon.com/en-us/category/headphones/' },
    ],
  },
  {
    id: 'yamaha',
    name: 'Yamaha',
    description: 'Receptores AV, barras de sonido y sistemas de audio para el hogar.',
    website: 'https://usa.yamaha.com/products/audio_visual/',
    products: [
      { name: 'Receptores AV', description: 'Receptores AV con CINEMA DSP, MusicCast y HDMI 2.1.', category: 'Receptores', brandUrl: 'https://usa.yamaha.com/products/audio_visual/av_receivers_amps/' },
      { name: 'Barras de Sonido', description: 'Barras de sonido con Digital Sound Projector y audio 3D.', category: 'Barras de Sonido', brandUrl: 'https://usa.yamaha.com/products/audio_visual/sound_bars/' },
      { name: 'MusicCast', description: 'Sistema de audio multiroom con control por app y voz.', category: 'Parlantes', brandUrl: 'https://usa.yamaha.com/products/audio_visual/musiccast/' },
      { name: 'Parlantes', description: 'Parlantes pasivos y activos de alta fidelidad.', category: 'Parlantes', brandUrl: 'https://usa.yamaha.com/products/audio_visual/speakers/' },
      { name: 'Subwoofers', description: 'Subwoofers con tecnología Twisted Flare Port.', category: 'Subwoofers', brandUrl: 'https://usa.yamaha.com/products/audio_visual/speakers/' },
      { name: 'Amplificadores Integrados', description: 'Amplificadores estéreo de alta fidelidad.', category: 'Amplificadores', brandUrl: 'https://usa.yamaha.com/products/audio_visual/integrated_amplifiers/' },
    ],
  },
  {
    id: 'tplink',
    name: 'TP-Link',
    description: 'Access points, routers y switches para redes empresariales y del hogar.',
    website: 'https://www.tp-link.com/ar/',
    products: [
      { name: 'Access Points Omada', description: 'Access points WiFi 6 de alta densidad para empresas y hogares.', category: 'Access Points', brandUrl: 'https://www.tp-link.com/us/business-networking/omada-sdn-access-point/' },
      { name: 'Routers WiFi', description: 'Routers WiFi 6E y WiFi 7 de alto rendimiento.', category: 'Routers', brandUrl: 'https://www.tp-link.com/us/home-networking/wifi-router/' },
      { name: 'Switches Omada', description: 'Switches gestionables PoE+ para redes empresariales.', category: 'Switches', brandUrl: 'https://www.tp-link.com/us/business-networking/omada-network-switches/' },
      { name: 'Controladores Omada', description: 'Controladores de hardware y software para gestión centralizada.', category: 'Controladores', brandUrl: 'https://www.tp-link.com/us/business-networking/omada-sdn-controller/' },
      { name: 'Gateways VPN', description: 'Routers VPN de seguridad empresarial Omada.', category: 'Routers', brandUrl: 'https://www.tp-link.com/us/business-networking/omada-network-router/' },
      { name: 'Redes Mesh Deco', description: 'Sistemas WiFi Mesh para cobertura total en el hogar.', category: 'Routers', brandUrl: 'https://www.tp-link.com/us/home-networking/mesh-wifi-deco/' },
    ],
  },
  {
    id: 'truaudio',
    name: 'TruAudio',
    description: 'Parlantes de pared, techo y exteriores para audio distribuido.',
    website: 'https://www.truaudio.com/',
    products: [
      { name: 'Soluciones Residenciales', description: 'Sistemas de audio completos para hogares con parlantes de techo, pared y exteriores.', category: 'Residencial', brandUrl: 'https://www.truaudio.com/application/%20residential' },
      { name: 'Serie Ghost', description: 'Parlantes invisibles que se integran perfectamente en paredes y techos.', category: 'Ghost Series', brandUrl: 'https://www.truaudio.com/series/ghost' },
      { name: 'Home Theater', description: 'Sistemas de cine en casa con parlantes surround y subwoofers.', category: 'Home Theater', brandUrl: 'https://www.truaudio.com/application/home-theater' },
      { name: 'Audio Exterior', description: 'Parlantes resistentes a la intemperie para jardines, piscinas y terrazas.', category: 'Exteriores', brandUrl: 'https://www.truaudio.com/application/outdoor' },
      { name: 'Soundbar SB-Adapt', description: 'Barra de sonido adaptable con conectividad WiFi y Bluetooth.', category: 'Soundbar', brandUrl: 'https://www.truaudio.com/series/sb-adapt' },
      { name: 'Amplificadores', description: 'Amplificadores multi-canal para audio distribuido en todo el hogar.', category: 'Amplificadores', brandUrl: 'https://www.truaudio.com/' },
    ],
  },
  {
    id: 'vssl',
    name: 'VSSL',
    description: 'Amplificadores multiroom y soluciones de audio distribuido.',
    website: 'https://www.vssl.com/',
    products: [
      { name: 'A.6x', description: 'Amplificador multiroom de 6 zonas con streaming integrado.', category: 'Amplificadores', brandUrl: 'https://www.vssl.com/collections/x-series' },
      { name: 'A.3x', description: 'Amplificador multiroom de 3 zonas para hogares medianos.', category: 'Amplificadores', brandUrl: 'https://www.vssl.com/collections/x-series' },
      { name: 'MS.1', description: 'Streaming amplifier de la nueva serie MX con WiFi y Bluetooth.', category: 'Amplificadores', brandUrl: 'https://www.vssl.com/collections/mx-series' },
      { name: 'MA.1', description: 'Amplificador de la serie MX con control por app y voz.', category: 'Amplificadores', brandUrl: 'https://www.vssl.com/collections/mx-series' },
      { name: 'SX Soundbar', description: 'Barra de sonido premium de la serie SX con Dolby Atmos.', category: 'Barras de Sonido', brandUrl: 'https://www.vssl.com/collections/sx-series' },
      { name: 'SX Subwoofer', description: 'Subwoofer inalámbrico de la serie SX para graves profundos.', category: 'Subwoofers', brandUrl: 'https://www.vssl.com/collections/sx-series' },
    ],
  },
  {
    id: 'shelly',
    name: 'Shelly',
    description: 'Dispositivos inteligentes WiFi para automatización del hogar accesible.',
    website: 'https://shelly.cloud/',
    products: [
      { name: 'Relés Inteligentes', description: 'Relés WiFi para control de luces, persianas y dispositivos.', category: 'Relés', brandUrl: 'https://shelly.cloud/products/' },
      { name: 'Shelly Plus 2PM', description: 'Relé doble con medición de potencia para persianas y luces.', category: 'Relés', brandUrl: 'https://shelly.cloud/products/' },
      { name: 'Shelly Dimmer 2', description: 'Dimmer WiFi para control de intensidad de luces.', category: 'Iluminación', brandUrl: 'https://shelly.cloud/products/' },
      { name: 'Shelly i4', description: 'Módulo de 4 entradas para interruptores inteligentes.', category: 'Sensores', brandUrl: 'https://shelly.cloud/products/' },
      { name: 'Shelly Plug S', description: 'Enchufe inteligente con medición de consumo energético.', category: 'Enchufes', brandUrl: 'https://shelly.cloud/products/' },
      { name: 'Shelly BLU', description: 'Sensores Bluetooth de puerta, ventana, temperatura y humedad.', category: 'Sensores', brandUrl: 'https://shelly.cloud/products/' },
    ],
  },
];

export function getBrandById(id: string): BrandCatalog | undefined {
  return brandCatalogs.find((b) => b.id === id);
}
