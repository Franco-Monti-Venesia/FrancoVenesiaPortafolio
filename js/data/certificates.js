/**
 * Datos: certificados en el orden en que se muestran.
 *  - file:  imagen en assets/img/
 *  - short: nombre corto [ES, EN] (etiqueta de la tarjeta)
 *  - title: nombre completo [ES, EN] (texto al ampliar)
 *  - ym:    mes de finalización 'AAAA-MM' (si queda vacío, no se muestra la fecha)
 *  - featured: true para marcarlo como "Certificado destacado"
 * La institución es siempre Coderhouse.
 */

const CE = [
  {
    file: 'Carrera Full Stack.png',
    short: ['Carrera Full Stack', 'Full Stack Program'],
    title: ['Carrera de Desarrollo Full Stack', 'Full Stack Development Program'],
    ym: '2026-09',
  },
  {
    file: 'Carrera Backend.png',
    short: ['Carrera Backend', 'Backend Program'],
    title: ['Carrera de Desarrollo Backend', 'Backend Development Program'],
    ym: '2026-09',
  },
  {
    file: 'CertificadoCarrera de Desarrollo Frontend React.webp',
    short: ['Carrera Frontend React', 'Frontend React Program'],
    title: ['Carrera de Desarrollo Frontend React', 'Frontend React Development Program'],
    ym: '2025-04',
  },
  {
    file: 'CertificadoReactJS.webp',
    short: ['React JS', 'React JS'],
    title: ['React JS', 'React JS'],
    ym: '2025-05',
  },
  {
    file: 'CertificadoJavaScript.webp',
    short: ['JavaScript', 'JavaScript'],
    title: ['JavaScript', 'JavaScript'],
    ym: '2024-12',
    featured: true,
  },
  {
    file: 'Certificado de SQL.png',
    short: ['SQL', 'SQL'],
    title: ['Bases de Datos SQL', 'SQL Databases'],
    ym: '2026-03',
  },
  {
    file: 'Certificado de Backend III.png',
    short: ['Backend III', 'Backend III'],
    title: ['Backend III: Testing y Escalabilidad', 'Backend III: Testing and Scalability'],
    ym: '2026-09',
    featured: true,
  },
  {
    file: 'Certificado de Backend II.png',
    short: ['Backend II', 'Backend II'],
    title: [
      'Backend II: Diseño y Arquitectura Backend',
      'Backend II: Backend Design and Architecture',
    ],
    ym: '2026-07',
  },
  {
    file: 'Certificado de Backend I.png',
    short: ['Backend I', 'Backend I'],
    title: ['Backend I: Desarrollo Avanzado de Backend', 'Backend I: Advanced Backend Development'],
    ym: '2026-04',
  },
  {
    file: 'CertificadoDesarrolloWeb.webp',
    short: ['Desarrollo Web', 'Web Development'],
    title: ['Desarrollo Web', 'Web Development'],
    ym: '2024-10',
    featured: true,
  },
];

const MONTHS = {
  es: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};
