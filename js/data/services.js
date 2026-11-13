/**
 * Datos: servicios de "Webs a medida" (S) y niveles de "Sistemas a medida" (SYS), con textos en español e inglés.
 * Q(es, en) devuelve el par [ES, EN]. Campos opcionales: durLabel (etiqueta de la píldora) y noCust (oculta el texto de personalizable).
 */

const Q = (es, en) => [es, en];

const S = [
  {
    i: '🖥️',
    t: Q('Sitio vitrina', 'Showcase website'),
    s: Q('Tu negocio, online en una página.', 'Your business online in one page.'),
    d: Q(
      'Una página rápida y clara con lo esencial: qué ofrecés, dónde estás y cómo contactarte. Pensada para que te encuentren y te elijan.',
      'A fast, clear page with the essentials: what you offer, where you are and how to reach you. Built so people find you and choose you.',
    ),
    dur: Q('4 días a 2 semanas', '4 days to 2 weeks'),
    inc: [
      Q('Diseño a medida con tu marca y tus colores', 'Custom design with your brand and colors'),
      Q('Adaptado a computadora, tablet y celular', 'Responsive on desktop, tablet and mobile'),
      Q(
        'Secciones de servicios, galería, ubicación y contacto',
        'Services, gallery, location and contact sections',
      ),
      Q('Mapa de Google y botón de WhatsApp', 'Google map and WhatsApp button'),
      Q('Animaciones y detalles visuales modernos', 'Modern animations and visual details'),
      Q('SEO básico y velocidad optimizada', 'Basic SEO and optimized speed'),
      Q(
        'Publicación online y ayuda para conectar tu dominio',
        'Online publishing and help connecting your domain',
      ),
      Q(
        'Extras opcionales: modo claro/oscuro, multi-idioma, turnero y panel de administración',
        'Optional extras: light/dark mode, multi-language, booking system and admin panel',
      ),
    ],
    get: [
      Q('Sitio publicado y funcionando', 'A live, working site'),
      Q('Una página que carga en segundos', 'A page that loads in seconds'),
      Q('Soporte inicial después de la entrega', 'Initial support after delivery'),
      Q('Mantenimiento mensual opcional', 'Optional monthly maintenance'),
    ],
    fit: Q(
      'Tenés un negocio local sin web, o solo con Instagram, y querés verte profesional y aparecer en Google.',
      'You run a local business with no website, or only Instagram, and want to look professional and show up on Google.',
    ),
    ideal: [
      Q('Peluquerías', 'Hair salons'),
      Q('Estéticas y spas', 'Beauty & spas'),
      Q('Gastronomía', 'Restaurants & cafés'),
      Q('Profesionales independientes', 'Independent professionals'),
      Q('Comercios locales', 'Local shops'),
    ],
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Sass',
      'Bootstrap',
      'Tailwind CSS',
      'React',
      'Vite',
      'Git',
      'GitHub',
      'Vercel',
    ],
  },
  {
    i: '🚀',
    t: Q('Landing page', 'Landing page'),
    s: Q(
      'Una página, un objetivo: que te contacten.',
      'One page, one goal: get people to contact you.',
    ),
    d: Q(
      'Una página pensada para convertir visitas en consultas: mensaje claro, diseño que llama la atención y un botón directo a tu WhatsApp.',
      'A page built to turn visits into inquiries: a clear message, an eye-catching design and a direct WhatsApp button.',
    ),
    dur: Q('4 días a 2 semanas', '4 days to 2 weeks'),
    inc: [
      Q('Estructura pensada para generar consultas', 'Structure built to generate inquiries'),
      Q('Mensaje claro y llamadas a la acción', 'Clear message and calls to action'),
      Q(
        'Formulario de contacto que llega directo a tu mail',
        'Contact form delivered straight to your email',
      ),
      Q('Botón de WhatsApp y redes sociales', 'WhatsApp button and social media'),
      Q('Diseño a medida adaptado a todos los dispositivos', 'Custom design for every device'),
      Q('Animaciones y detalles visuales modernos', 'Modern animations and visual details'),
      Q('SEO básico y velocidad optimizada', 'Basic SEO and optimized speed'),
      Q(
        'Publicación online y ayuda para conectar tu dominio',
        'Online publishing and help connecting your domain',
      ),
    ],
    get: [
      Q(
        'Una landing lista para campañas y redes',
        'A landing page ready for campaigns and social media',
      ),
      Q('Carga en segundos', 'Loads in seconds'),
      Q('Soporte inicial después de la entrega', 'Initial support after delivery'),
      Q('Mantenimiento mensual opcional', 'Optional monthly maintenance'),
    ],
    fit: Q(
      'Querés presentar un producto, servicio o promoción y que te contacten.',
      'You want to present a product, service or promotion and get contacted.',
    ),
    ideal: [
      Q('Lanzamientos', 'Launches'),
      Q('Profesionales', 'Professionals'),
      Q('Marcas nuevas', 'New brands'),
      Q('Campañas en redes', 'Social media campaigns'),
    ],
    tech: [
      'React',
      'Vite',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Sass',
      'Bootstrap',
      'Git',
      'GitHub',
      'Vercel',
    ],
  },
  {
    i: '🏢',
    t: Q('Sitio empresarial', 'Business website'),
    s: Q('La web completa de tu empresa.', 'The complete website for your company.'),
    d: Q(
      'Un sitio con varias secciones para presentar tu empresa con seriedad: quiénes son, qué ofrecen, tu catálogo y cómo contactarte.',
      'A multi-section website to present your company with credibility: who you are, what you offer, your catalog and how to get in touch.',
    ),
    dur: Q('7 a 15 días', '7 to 15 days'),
    inc: [
      Q(
        'Varias secciones: inicio, servicios, catálogo, nosotros y contacto',
        'Several sections: home, services, catalog, about us and contact',
      ),
      Q('Catálogo de productos o servicios', 'Product or service catalog'),
      Q(
        'Sección "Nosotros" con tu historia y tu equipo',
        'About us section with your story and team',
      ),
      Q('Formulario de contacto, mapa y WhatsApp', 'Contact form, map and WhatsApp'),
      Q('Diseño a medida con la identidad de tu marca', 'Custom design with your brand identity'),
      Q('Adaptado a computadora, tablet y celular', 'Responsive on desktop, tablet and mobile'),
      Q('SEO básico y velocidad optimizada', 'Basic SEO and optimized speed'),
      Q(
        'Publicación online y ayuda para conectar tu dominio',
        'Online publishing and help connecting your domain',
      ),
      Q(
        'Opcional: blog, multi-idioma y modo claro/oscuro',
        'Optional: blog, multi-language and light/dark mode',
      ),
    ],
    get: [
      Q(
        'Una web que transmite confianza y profesionalismo',
        'A website that conveys trust and professionalism',
      ),
      Q('Todo tu contenido ordenado en un solo lugar', 'All your content organized in one place'),
      Q('Soporte inicial después de la entrega', 'Initial support after delivery'),
      Q('Mantenimiento mensual opcional', 'Optional monthly maintenance'),
    ],
    fit: Q(
      'Querés una presencia web completa y profesional para tu empresa o comercio.',
      'You want a complete, professional web presence for your company or shop.',
    ),
    ideal: [
      Q('Empresas y pymes', 'Companies & SMEs'),
      Q('Estudios y consultoras', 'Studios & consultancies'),
      Q('Comercios con catálogo', 'Shops with a catalog'),
      Q('Industrias y talleres', 'Industry & workshops'),
    ],
    tech: [
      'React',
      'Vite',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Sass',
      'Bootstrap',
      'Firebase',
      'Git',
      'GitHub',
      'Vercel',
    ],
  },
  {
    i: '📅',
    t: Q(
      'Web de reservas automáticas y panel de administración',
      'Automatic booking website and admin panel',
    ),
    s: Q('Turnero 100% administrable.', '100% manageable booking system.'),
    d: Q(
      'Tus clientes reservan solos y vos gestionás todo desde un panel simple, con la disponibilidad siempre al día.',
      'Your clients book on their own and you manage everything from a simple dashboard, with availability always up to date.',
    ),
    dur: Q('4 días a 2 semanas', '4 days to 2 weeks'),
    inc: [
      Q('Reserva de turnos por servicio, día y horario', 'Bookings by service, day and time slot'),
      Q(
        'Disponibilidad en tiempo real y bloqueo de horarios',
        'Real-time availability and slot blocking',
      ),
      Q('Panel de administración privado con login', 'Private admin dashboard with login'),
      Q(
        'Confirmar o rechazar turnos con mensaje de WhatsApp prearmado',
        'Confirm or reject bookings with a pre-written WhatsApp message',
      ),
      Q('Recordatorios de turnos y modo vacaciones', 'Booking reminders and vacation mode'),
      Q('Detalle completo de cada turno', 'Full detail of every booking'),
      Q('Adaptado a computadora, tablet y celular', 'Responsive on desktop, tablet and mobile'),
      Q(
        'Publicación online y ayuda para conectar tu dominio',
        'Online publishing and help connecting your domain',
      ),
    ],
    get: [
      Q('Menos mensajes y menos turnos perdidos', 'Fewer messages and missed bookings'),
      Q('Una agenda siempre actualizada', 'An always up-to-date schedule'),
      Q('Acceso al panel desde el celular', 'Dashboard access from your phone'),
      Q('Soporte inicial y mantenimiento opcional', 'Initial support and optional maintenance'),
    ],
    fit: Q(
      'Tenés una peluquería, estética o consultorio que hoy agenda por mensajes y querés ordenarte.',
      'You run a salon, clinic or studio that books by message today and want to get organized.',
    ),
    ideal: [
      Q('Peluquerías', 'Hair salons'),
      Q('Estéticas y spas', 'Beauty & spas'),
      Q('Consultorios', 'Clinics'),
      Q('Barberías y estudios', 'Barbershops & studios'),
    ],
    tech: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'React',
      'Firebase',
      'Tailwind CSS',
      'Bootstrap',
      'Git',
      'GitHub',
      'Vercel',
    ],
  },
  {
    i: '🛒',
    t: Q('E-commerce', 'E-commerce'),
    s: Q('Tienda online: vendé las 24 horas.', 'Online store: sell around the clock.'),
    d: Q(
      'Una tienda moderna, rápida y fácil de usar: catálogo, carrito, checkout y un panel para que gestiones tus productos y pedidos.',
      'A modern, fast, easy-to-use store: catalog, cart, checkout and a dashboard to manage your products and orders.',
    ),
    dur: Q('10 a 18 días', '10 to 18 days'),
    inc: [
      Q(
        'Catálogo con categorías, filtros y buscador',
        'Catalog with categories, filters and search',
      ),
      Q('Fichas de producto con fotos y variantes', 'Product pages with photos and variants'),
      Q('Carrito y checkout simple y rápido', 'Simple, fast cart and checkout'),
      Q(
        'Medios de pago a definir (transferencia, Mercado Pago u otros)',
        'Payment methods to define (bank transfer, Mercado Pago or others)',
      ),
      Q(
        'Panel de administración para productos y pedidos',
        'Admin dashboard for products and orders',
      ),
      Q('Confirmación de compra por email', 'Purchase confirmation by email'),
      Q(
        'Diseño a medida adaptado a computadora, tablet y celular',
        'Custom design for desktop, tablet and mobile',
      ),
      Q(
        'SEO básico, velocidad optimizada y publicación online',
        'Basic SEO, optimized speed and online publishing',
      ),
    ],
    get: [
      Q('Una tienda lista para vender', 'A store ready to sell'),
      Q(
        'Panel para cargar y editar productos vos mismo',
        'A dashboard to add and edit products yourself',
      ),
      Q('Capacitación breve para usar el panel', 'A short walkthrough of the dashboard'),
      Q(
        'Soporte inicial y mantenimiento mensual opcional',
        'Initial support and optional monthly maintenance',
      ),
    ],
    fit: Q(
      'Querés vender productos online con una tienda moderna y tener tus pedidos ordenados.',
      'You want to sell products online with a modern store and keep your orders organized.',
    ),
    ideal: [
      Q('Comercios locales', 'Local shops'),
      Q('Indumentaria y accesorios', 'Clothing & accessories'),
      Q('Gastronomía y alimentos', 'Food & beverages'),
      Q('Cosmética y belleza', 'Cosmetics & beauty'),
    ],
    tech: [
      'React',
      'JavaScript',
      'Vite',
      'Firebase',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'Bootstrap',
      'Git',
      'GitHub',
      'Vercel',
    ],
  },
  {
    i: '✨',
    t: Q('Web avanzada', 'Advanced website'),
    s: Q(
      'Un escalón más, con funciones a tu medida.',
      'One step up, with features tailored to you.',
    ),
    d: Q(
      'Para cuando el sitio necesita más que páginas: funciones extra, integraciones y contenido que podés actualizar vos, sin llegar a ser un sistema.',
      'For when your site needs more than pages: extra features, integrations and content you can update yourself, without becoming a full system.',
    ),
    dur: Q('4 a 21 días', '4 to 21 days'),
    inc: [
      Q('Todo lo de un sitio empresarial', 'Everything in a business website'),
      Q(
        'Funciones a elección: formularios avanzados, calculadoras, filtros, área de clientes',
        'Features of your choice: advanced forms, calculators, filters, client area',
      ),
      Q(
        'Integraciones con servicios externos y redes sociales',
        'Integrations with external services and social media',
      ),
      Q('Panel simple para actualizar tu contenido', 'Simple dashboard to update your content'),
      Q(
        'Login y base de datos si el proyecto lo necesita',
        'Login and database if the project needs it',
      ),
      Q('Animaciones e interacciones avanzadas', 'Advanced animations and interactions'),
      Q('Multi-idioma y modo claro/oscuro', 'Multi-language and light/dark mode'),
      Q('SEO y rendimiento optimizados', 'Optimized SEO and performance'),
    ],
    get: [
      Q('Una web robusta y completa, hecha a tu medida', 'A robust, complete website made for you'),
      Q('Funciones que se adaptan a cómo trabajás', 'Features that fit how you work'),
      Q('Posibilidad de seguir ampliándola', 'Room to keep growing it'),
      Q('Soporte inicial y mantenimiento opcional', 'Initial support and optional maintenance'),
    ],
    fit: Q(
      'Tu proyecto necesita más que un sitio estándar, pero no un sistema completo.',
      'Your project needs more than a standard site, but not a full system.',
    ),
    ideal: [
      Q('Marcas en crecimiento', 'Growing brands'),
      Q('Proyectos con funciones propias', 'Projects with their own features'),
      Q('Portales y comunidades', 'Portals & communities'),
      Q('Negocios con contenido dinámico', 'Businesses with dynamic content'),
    ],
    tech: [
      'React',
      'Vite',
      'JavaScript',
      'Node.js',
      'Express',
      'Firebase',
      'MongoDB',
      'Tailwind CSS',
      'Git',
      'GitHub',
      'Vercel',
    ],
  },
];

const SYS = [
  {
    i: '🧩',
    t: Q('Sistema listo para usar', 'Ready-to-use system'),
    s: Q('Un sistema ya armado, tal cual.', 'A ready-made system, as is.'),
    d: Q(
      'Elegís un sistema base, lo usás tal cual y lo probás 30 días gratis con los datos reales de tu negocio. Es el camino más rápido.',
      'You pick a base system, use it as is and try it free for 30 days with your real business data. It is the fastest way.',
    ),
    dur: Q(
      '30 días gratis, luego licencia mensual con soporte',
      '30 days free, then a monthly license with support',
    ),
    durLabel: Q('Modalidad:', 'Model:'),
    noCust: true,
    inc: [
      Q('Prueba gratis de 30 días con tus datos reales', 'Free 30-day trial with your real data'),
      Q('Panel de administración listo para usar', 'Ready-to-use admin dashboard'),
      Q(
        'Gestión de clientes, ventas, turnos o stock (según el sistema)',
        'Management of clients, sales, bookings or stock (depending on the system)',
      ),
      Q('Puesta en marcha rápida', 'Fast setup'),
      Q(
        'Soporte y actualizaciones incluidos en la licencia',
        'Support and updates included in the license',
      ),
      Q('Adaptado a computadora, tablet y celular', 'Responsive on desktop, tablet and mobile'),
    ],
    get: [
      Q('Un sistema funcionando en pocos días', 'A system up and running in a few days'),
      Q('Sin costo de desarrollo inicial', 'No initial development cost'),
      Q('Soporte mientras lo uses', 'Support while you use it'),
      Q(
        'Podés pasar a una versión personalizada cuando quieras',
        'You can move to a customized version whenever you want',
      ),
    ],
    fit: Q(
      'Querés ordenar tu negocio ya, sin esperar a que se desarrolle algo nuevo.',
      'You want to organize your business now, without waiting for something new to be built.',
    ),
    ideal: [
      Q('Comercios', 'Shops'),
      Q('Gimnasios y centros', 'Gyms & centers'),
      Q('Consultorios', 'Clinics'),
      Q('Emprendimientos', 'Small businesses'),
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
  },
  {
    i: '🛠️',
    t: Q('Sistema personalizado', 'Customized system'),
    s: Q(
      'Ese mismo sistema, adaptado a tu negocio.',
      'That same system, adapted to your business.',
    ),
    d: Q(
      'Parto del sistema base y lo adapto a cómo trabaja tu negocio: campos, reportes, permisos y tu marca. Tiene un costo aparte.',
      'I start from the base system and adapt it to how your business works: fields, reports, permissions and your brand. It has a separate cost.',
    ),
    dur: Q('Según el alcance de la adaptación', 'Depending on the scope of the adaptation'),
    durLabel: Q('Modalidad:', 'Model:'),
    noCust: true,
    inc: [
      Q('Todo lo del sistema listo para usar', 'Everything in the ready-to-use system'),
      Q(
        'Adaptación de campos, reportes y permisos',
        'Adaptation of fields, reports and permissions',
      ),
      Q('Tu marca y tus colores en todo el sistema', 'Your brand and colors across the system'),
      Q(
        'Integraciones a medida (pagos, WhatsApp, email)',
        'Custom integrations (payments, WhatsApp, email)',
      ),
      Q('Carga inicial de tus datos', 'Initial loading of your data'),
      Q('Capacitación para tu equipo', 'Training for your team'),
    ],
    get: [
      Q(
        'Un sistema que habla el idioma de tu negocio',
        'A system that speaks your business language',
      ),
      Q('Menos tareas manuales y menos errores', 'Fewer manual tasks and fewer errors'),
      Q(
        'Soporte y actualizaciones con licencia mensual',
        'Support and updates with a monthly license',
      ),
      Q('Costo aparte según lo que se adapte', 'Separate cost depending on what is adapted'),
    ],
    fit: Q(
      'Tu negocio tiene procesos propios que un sistema estándar no cubre.',
      'Your business has its own processes that a standard system does not cover.',
    ),
    ideal: [
      Q('Comercios', 'Shops'),
      Q('Gimnasios y centros', 'Gyms & centers'),
      Q('Consultorios', 'Clinics'),
      Q('Equipos de trabajo', 'Work teams'),
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'JWT', 'Docker'],
  },
  {
    i: '🏗️',
    t: Q('Sistema desde cero', 'System from scratch'),
    s: Q('Completamente a medida.', 'Completely custom.'),
    d: Q(
      'Se arma entero para vos: relevamiento de tu negocio, diseño, desarrollo y puesta en marcha. Otro costo.',
      'Built entirely for you: business analysis, design, development and launch. Separate cost.',
    ),
    dur: Q('Según el alcance del proyecto', 'Depending on the scope of the project'),
    durLabel: Q('Modalidad:', 'Model:'),
    noCust: true,
    inc: [
      Q('Relevamiento de lo que tu negocio necesita', 'Analysis of what your business needs'),
      Q('Diseño y desarrollo desde cero', 'Design and development from scratch'),
      Q('Base de datos y panel de administración propios', 'Your own database and admin dashboard'),
      Q('Roles de usuario y seguridad', 'User roles and security'),
      Q('Documentación y entrega del código', 'Documentation and code handover'),
      Q('Soporte y mantenimiento opcional', 'Optional support and maintenance'),
    ],
    get: [
      Q('Un sistema pensado solo para tu negocio', 'A system designed only for your business'),
      Q('El código y la documentación son tuyos', 'The code and documentation are yours'),
      Q('Posibilidad de crecer por etapas', 'Room to grow in stages'),
      Q('Soporte inicial y mantenimiento opcional', 'Initial support and optional maintenance'),
    ],
    fit: Q(
      'Necesitás algo que no existe en el mercado o que no se adapta a tu forma de trabajar.',
      'You need something that does not exist on the market or does not fit how you work.',
    ),
    ideal: [
      Q('Negocios con procesos propios', 'Businesses with their own processes'),
      Q('Gestión interna', 'Internal management'),
      Q('Paneles y reportes', 'Dashboards & reports'),
      Q('Herramientas para equipos', 'Team tools'),
    ],
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'MySQL',
      'Firebase',
      'JWT',
      'Swagger',
      'Docker',
      'Docker Compose',
      'Git',
      'GitHub',
    ],
  },
];
