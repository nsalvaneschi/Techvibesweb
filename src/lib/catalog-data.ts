export interface Product {
  name: string;
  description: string;
  category: string;
  image?: string;
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
      { name: 'Core 5 Controller', description: 'Controlador de alto rendimiento para proyectos residenciales y comerciales grandes.', category: 'Controladores', image: '/images/catalogo/control4/core-5-controller.jpg', brandUrl: 'https://www.snapav.com/shop/en/snapav/control4%C2%AE-core-5-controller-c4-core5-a' },
      { name: 'Video & Home Theater', description: 'Sistemas de video y entretenimiento con control integrado para una experiencia de cine en casa.', category: 'Home Theater', image: '/images/catalogo/control4/home-theater.jpg', brandUrl: 'https://www.control4.com/solutions/video-and-home-theater' },
      { name: 'Audio Multiroom', description: 'Distribución de audio en todo el hogar con control independiente por zona.', category: 'Audio', image: '/images/catalogo/control4/audio.jpg', brandUrl: 'https://www.control4.com/solutions/audio' },
      { name: 'Iluminación Inteligente', description: 'Control de iluminación con escenas personalizadas y automatización.', category: 'Iluminación', image: '/images/catalogo/control4/iluminacion.jpg', brandUrl: 'https://www.control4.com/solutions/smart-lighting' },
      { name: 'Seguridad y Protección', description: 'Sistemas de seguridad integrados con cámaras, sensores y alarmas.', category: 'Seguridad', image: '/images/catalogo/control4/seguridad.jpg', brandUrl: 'https://www.control4.com/solutions/safety-security' },
      { name: 'Confort y Climatización', description: 'Control de clima, persianas y confort ambiental automatizado.', category: 'Climatización', image: '/images/catalogo/control4/confort.png', brandUrl: 'https://www.control4.com/solutions/climate-and-comfort' },
    ],
  },
  {
    id: 'sonos',
    name: 'Sonos',
    description: 'Sistema de audio multiroom WiFi. Parlantes inteligentes, barras de sonido y subwoofers.',
    website: 'https://www.sonos.com/es-ar/home',
    products: [
      { name: 'Era 100', description: 'Parlante inteligente compacto con sonido rico y graves profundos.', category: 'Parlantes', image: '/images/catalogo/sonos/era-100.avif', brandUrl: 'https://www.sonos.com/es-ar/shop/era-100' },
      { name: 'Era 300', description: 'Parlante premium con audio espacial Dolby Atmos.', category: 'Parlantes', image: '/images/catalogo/sonos/era-300.avif', brandUrl: 'https://www.sonos.com/es-ar/shop/era-300-black' },
      { name: 'Arc Ultra', description: 'Barra de sonido premium para home theater con sonido envolvente.', category: 'Home Theater', image: '/images/catalogo/sonos/arc-ultra.avif', brandUrl: 'https://www.sonos.com/es-ar/shop/arc-ultra' },
      { name: 'Sub 4', description: 'Subwoofer inalámbrico con respuesta de graves profunda y sin distorsión.', category: 'Subwoofers', image: '/images/catalogo/sonos/sub-4.avif', brandUrl: 'https://www.sonos.com/es-ar/shop/sub-4' },
      { name: 'Five', description: 'Parlante de alta fidelidad para música en estéreo.', category: 'Parlantes', image: '/images/catalogo/sonos/five.avif', brandUrl: 'https://www.sonos.com/es-ar/shop/five-black' },
      { name: 'Amp', description: 'Amplificador streaming para conectar parlantes pasivos a tu sistema Sonos.', category: 'Amplificadores', image: '/images/catalogo/sonos/amp.avif', brandUrl: 'https://www.sonos.com/es-ar/shop/amp' },
    ],
  },
  {
    id: 'yale',
    name: 'Yale',
    description: 'Cerraduras digitales, cerrojos inteligentes y cajas fuertes para el hogar.',
    website: 'https://yalehome.com.ar/',
    products: [
      { name: 'YSD100 Digital', description: 'Cerradura digital con huella, código, tarjeta, celular y llave.', category: 'Cerraduras', image: '/images/catalogo/yale/ysd100.jpg', brandUrl: 'https://yalehome.com.ar/products/cerradura-digital-ysd100-para-puerta-abatible-kit-apertura-con-celular' },
      { name: 'YMF40A', description: 'Cerradura digital con manija, huella y apertura por celular.', category: 'Cerraduras', image: '/images/catalogo/yale/ymf40a.avif', brandUrl: 'https://yalehome.com.ar/products/cerradura-digital-ymf40a-kit-apertura-con-celular' },
      { name: 'YDR41 Cerrojo', description: 'Cerrojo digital con huella y código para máxima seguridad.', category: 'Cerrojos', image: '/images/catalogo/yale/ydr41.webp', brandUrl: 'https://yalehome.com.ar/collections/cerrojos-digitales' },
      { name: 'LIA Embutir', description: 'Cerradura de embutir digital con múltiples métodos de acceso.', category: 'Cerraduras', brandUrl: 'https://yalehome.com.ar/collections/cerraduras-de-embutir' },
      { name: 'Yale Connect Hub', description: 'Módulo WiFi para controlar cerraduras Yale desde el celular.', category: 'Accesorios', image: '/images/catalogo/yale/connect.webp', brandUrl: 'https://yalehome.com.ar/collections/yale-connect-hub' },
      { name: 'Caja Fuerte Mediana', description: 'Caja fuerte biométrica táctil para proteger objetos de valor.', category: 'Cajas Fuertes', image: '/images/catalogo/yale/caja-fuerte.webp', brandUrl: 'https://yalehome.com.ar/collections/cajas-fuertes-subcategoria' },
    ],
  },
  {
    id: 'bond',
    name: 'Bond Home',
    description: 'Control inteligente de ventiladores de techo, chimeneas y persianas.',
    website: 'https://bondhome.io/',
    products: [
      { name: 'Bond Bridge Pro', description: 'Puente WiFi/Ethernet para controlar hasta 30 dispositivos RF.', category: 'Controladores', image: '/images/catalogo/bond/bond-bridge-pro.png', brandUrl: 'https://bondhome.io/product/bond-bridge-pro/' },
      { name: 'Bond Bridge', description: 'Convierte ventiladores, chimeneas y persianas en dispositivos inteligentes.', category: 'Controladores', image: '/images/catalogo/bond/bond-bridge.png', brandUrl: 'https://bondhome.io/product/bond-bridge/' },
      { name: 'Sidekick Gen 4', description: 'Control de pared universal para persianas motorizadas.', category: 'Persianas', image: '/images/catalogo/bond/persianas.png', brandUrl: 'https://bondhome.io/product/sidekick-for-shades-gen-4/' },
      { name: 'Breeze Pro Gen 2', description: 'Sensor inteligente de viento, lluvia y sol para persianas exteriores.', category: 'Sensores', image: '/images/catalogo/bond/sensores.png', brandUrl: 'https://bondhome.io/product/breeze-pro-gen-2/' },
      { name: 'Mate Pro', description: 'Control remoto inteligente resistente al agua para persianas y toldos.', category: 'Controladores', image: '/images/catalogo/bond/mate-pro.png', brandUrl: 'https://bondhome.io/product/mate/' },
      { name: 'Firefly One', description: 'Controlador inteligente para chimeneas a gas.', category: 'Chimeneas', image: '/images/catalogo/bond/chimeneas.png', brandUrl: 'https://bondhome.io/product/firefly-one/' },
    ],
  },
  {
    id: 'denon',
    name: 'Denon',
    description: 'Receptores AV, amplificadores y sistemas de audio de alta fidelidad.',
    website: 'https://www.denon.com/',
    products: [
      { name: 'Receptores AV', description: 'Receptores de audio y video con Dolby Atmos, DTS:X y HEOS Built-in.', category: 'Receptores', image: '/images/catalogo/denon/receptores-av.jpg', brandUrl: 'https://www.denon.com/en-us/category/av-receivers/' },
      { name: 'Barras de Sonido', description: 'Barras de sonido HEOS HomeCinema con subwoofer integrado.', category: 'Barras de Sonido', image: '/images/catalogo/denon/barras-de-sonido.webp', brandUrl: 'https://www.denon.com/en-us/category/sound-bars/' },
      { name: 'Amplificadores Integrados', description: 'Amplificadores estéreo con streaming HEOS y DAC de alta resolución.', category: 'Amplificadores', image: '/images/catalogo/denon/amplificadores-integrados.webp', brandUrl: 'https://www.denon.com/en-us/category/integrated-amplifiers/' },
      { name: 'Reproductores de Red', description: 'Reproductores de audio en red con DAC premium para alta resolución.', category: 'Streaming', image: '/images/catalogo/denon/reproductores-de-red.webp', brandUrl: 'https://www.denon.com/en-us/category/network-audio-players/' },
      { name: 'Auriculares', description: 'Auriculares premium con cancelación de ruido activa.', category: 'Auriculares', image: '/images/catalogo/denon/auriculares.webp', brandUrl: 'https://www.denon.com/en-us/category/shop-all-headphones/' },
    ],
  },
  {
    id: 'yamaha',
    name: 'Yamaha',
    description: 'Receptores AV, barras de sonido y sistemas de audio para el hogar.',
    website: 'https://usa.yamaha.com/products/audio_visual/',
    products: [
      { name: 'Receptores AV', description: 'Receptores AV con CINEMA DSP, MusicCast y HDMI 2.1.', category: 'Receptores', image: '/images/catalogo/yamaha/receptores-av.jpg', brandUrl: 'https://usa.yamaha.com/products/audio_visual/av_receivers_amps/' },
      { name: 'Barras de Sonido', description: 'Barras de sonido con Digital Sound Projector y audio 3D.', category: 'Barras de Sonido', image: '/images/catalogo/yamaha/barras-de-sonido.jpg', brandUrl: 'https://usa.yamaha.com/products/audio_visual/sound_bars/' },
      { name: 'MusicCast', description: 'Sistema de audio multiroom con control por app y voz.', category: 'Parlantes', image: '/images/catalogo/yamaha/musiccast.jpg', brandUrl: 'https://usa.yamaha.com/products/audio_visual/musiccast/' },
      { name: 'Parlantes', description: 'Parlantes pasivos y activos de alta fidelidad.', category: 'Parlantes', image: '/images/catalogo/yamaha/parlantes.jpg', brandUrl: 'https://usa.yamaha.com/products/audio_visual/speakers/' },
      { name: 'Subwoofers', description: 'Subwoofers con tecnología Twisted Flare Port.', category: 'Subwoofers', image: '/images/catalogo/yamaha/subwoofers.jpg', brandUrl: 'https://usa.yamaha.com/products/audio_visual/speakers/' },
      { name: 'Amplificadores Integrados', description: 'Amplificadores estéreo de alta fidelidad.', category: 'Amplificadores', image: '/images/catalogo/yamaha/amplificadores-integrados.jpg', brandUrl: 'https://usa.yamaha.com/products/audio_visual/integrated_amplifiers/' },
    ],
  },
  {
    id: 'tplink',
    name: 'TP-Link',
    description: 'Access points, routers y switches para redes empresariales y del hogar.',
    website: 'https://www.tp-link.com/ar/',
    products: [
      { name: 'Access Points Omada', description: 'Access points WiFi 6 de alta densidad para empresas y hogares.', category: 'Access Points', image: '/images/catalogo/tplink/access-points-omada.jpg', brandUrl: 'https://www.tp-link.com/us/business-networking/omada-sdn-access-point/' },
      { name: 'Routers WiFi', description: 'Routers WiFi 6E y WiFi 7 de alto rendimiento.', category: 'Routers', image: '/images/catalogo/tplink/routers-wifi.jpg', brandUrl: 'https://www.tp-link.com/us/home-networking/wifi-router/' },
      { name: 'Switches Omada', description: 'Switches gestionables PoE+ para redes empresariales.', category: 'Switches', image: '/images/catalogo/tplink/switches.jpg', brandUrl: 'https://www.omadanetworks.com/us/business-networking/omada/switch/' },
      { name: 'Controladores Omada', description: 'Controladores de hardware y software para gestión centralizada.', category: 'Controladores', image: '/images/catalogo/tplink/controladores.jpg', brandUrl: 'https://www.tp-link.com/us/business-networking/omada-sdn-controller/' },
      { name: 'Gateways VPN', description: 'Routers VPN de seguridad empresarial Omada.', category: 'Routers', image: '/images/catalogo/tplink/gateways-vpn.jpg', brandUrl: 'https://www.omadanetworks.com/us/business-networking/omada/router/' },
      { name: 'Redes Mesh Deco', description: 'Sistemas WiFi Mesh para cobertura total en el hogar.', category: 'Routers', image: '/images/catalogo/tplink/redes-mesh-deco.jpg', brandUrl: 'https://www.tp-link.com/es/home-networking/deco/' },
    ],
  },
  {
    id: 'truaudio',
    name: 'TruAudio',
    description: 'Parlantes de pared, techo y exteriores para audio distribuido.',
    website: 'https://www.truaudio.com/',
    products: [
      { name: 'Soluciones Residenciales', description: 'Sistemas de audio completos para hogares con parlantes de techo, pared y exteriores.', category: 'Residencial', image: '/images/catalogo/truaudio/soluciones-residenciales.png', brandUrl: 'https://www.truaudio.com/application/%20residential' },
      { name: 'Serie Ghost', description: 'Parlantes invisibles que se integran perfectamente en paredes y techos.', category: 'Ghost Series', image: '/images/catalogo/truaudio/serie-ghost.png', brandUrl: 'https://www.truaudio.com/series/ghost' },
      { name: 'Home Theater', description: 'Sistemas de cine en casa con parlantes surround y subwoofers.', category: 'Home Theater', image: '/images/catalogo/truaudio/home-theater-elite26.png', brandUrl: 'https://www.truaudio.com/application/home-theater' },
      { name: 'Audio Exterior', description: 'Parlantes resistentes a la intemperie para jardines, piscinas y terrazas.', category: 'Exteriores', image: '/images/catalogo/truaudio/audio-exterior.png', brandUrl: 'https://www.truaudio.com/application/outdoor' },
      { name: 'Soundbar SB-Adapt', description: 'Barra de sonido adaptable con conectividad WiFi y Bluetooth.', category: 'Soundbar', image: '/images/catalogo/truaudio/soundbar-sb-adapt.png', brandUrl: 'https://www.truaudio.com/series/sb-adapt' },
      { name: 'Amplificadores', description: 'Amplificadores multi-canal para audio distribuido en todo el hogar.', category: 'Amplificadores', image: '/images/catalogo/truaudio/amplificadores.png', brandUrl: 'https://www.truaudio.com/' },
    ],
  },
  {
    id: 'vssl',
    name: 'VSSL',
    description: 'Amplificadores multiroom y soluciones de audio distribuido.',
    website: 'https://www.vssl.com/',
    products: [
      { name: 'A.6x', description: 'Amplificador multiroom de 6 zonas con streaming integrado.', category: 'Amplificadores', image: 'https://www.vssl.com/cdn/shop/products/A.6x-Front_1200x600_39beafff-1e1b-4932-af0d-20e6d624a401_740x.jpg', brandUrl: 'https://www.vssl.com/collections/x-series/products/vssl-a-6x' },
      { name: 'A.3x', description: 'Amplificador multiroom de 3 zonas para hogares medianos.', category: 'Amplificadores', image: '/images/catalogo/vssl/a-3x.webp', brandUrl: 'https://www.vssl.com/collections/x-series/products/vssl-a-3x' },
      { name: 'MS.1', description: 'Streaming amplifier de la nueva serie MX con WiFi y Bluetooth.', category: 'Amplificadores', image: '/images/catalogo/vssl/ms-1.webp', brandUrl: 'https://www.vssl.com/collections/mx-series/products/ms-1' },
      { name: 'MA.1', description: 'Amplificador de la serie MX con control por app y voz.', category: 'Amplificadores', image: '/images/catalogo/vssl/ma-1.webp', brandUrl: 'https://www.vssl.com/collections/mx-series/products/ma-1' },
      { name: 'SX Soundbar', description: 'Barra de sonido premium de la serie SX con Dolby Atmos.', category: 'Barras de Sonido', image: '/images/catalogo/vssl/sx-bar.webp', brandUrl: 'https://www.vssl.com/products/sx-soundbar' },
      { name: 'SX Subwoofer', description: 'Subwoofer inalámbrico de la serie SX para graves profundos.', category: 'Subwoofers', image: '/images/catalogo/vssl/sx-sub.webp', brandUrl: 'https://www.vssl.com/products/sx-subwoofer' },
    ],
  },
  {
    id: 'shelly',
    name: 'Shelly',
    description: 'Dispositivos inteligentes WiFi para automatización del hogar accesible.',
    website: 'https://shelly.cloud/',
    products: [
      { name: 'Relés Inteligentes', description: 'Relés WiFi para control de luces, persianas y dispositivos.', category: 'Relés', image: '/images/catalogo/shelly/reles-switches.webp', brandUrl: 'https://us.shelly.com/' },
      { name: 'Shelly Plus 2PM', description: 'Relé doble con medición de potencia para persianas y luces.', category: 'Relés', image: '/images/catalogo/shelly/plus-2pm.webp', brandUrl: 'https://us.shelly.com/' },
      { name: 'Shelly Dimmer 2', description: 'Dimmer WiFi para control de intensidad de luces.', category: 'Iluminación', image: '/images/catalogo/shelly/dimmer-2.webp', brandUrl: 'https://us.shelly.com/' },
      { name: 'Shelly i4', description: 'Módulo de 4 entradas para interruptores inteligentes.', category: 'Sensores', image: '/images/catalogo/shelly/i4.webp', brandUrl: 'https://us.shelly.com/' },
      { name: 'Shelly PRO', description: 'Panel inteligente con medición de potencia para instalaciones profesionales.', category: 'Profesional', image: '/images/catalogo/shelly/pro-4pm.webp', brandUrl: 'https://us.shelly.com/' },
      { name: 'Shelly BLU', description: 'Sensores Bluetooth de puerta, ventana, temperatura y humedad.', category: 'Sensores', image: '/images/catalogo/shelly/blu.webp', brandUrl: 'https://us.shelly.com/' },
    ],
  },
];

export function getBrandById(id: string): BrandCatalog | undefined {
  return brandCatalogs.find((b) => b.id === id);
}
