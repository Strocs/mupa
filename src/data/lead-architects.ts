import aliciaImg from '../assets/alicia_silva.png'
import libertadImg from '../assets/libertad_morales.png'
import juanaImg from '../assets/juana_varela.jpg'
import vivianaImg from '../assets/viviana_hernandez.jpeg'
import pazImg from '../assets/paz_walker.png'

interface Architect {
  id: `${string}-${string}-${string}-${string}-${string}`
  name: string
  short_name: string
  birth_date: string
  birth_place: string
  university: string
  description: string
  quote: string
  color: string
  main_img: string
  images: string[]
  videoURL: string
}


type Architects = Array<Architect>

export const LEAD_ARCHITECTS: Architects = [
  {
    id: crypto.randomUUID(),
    name: 'Juana Noemi Varela Kawasaki',
    short_name: 'Juana Varela',
    birth_date: '5 de septiembre de 1948',
    birth_place: 'Santiago de Chile',
    university: 'Universidad de Chile',
    description: 'Juana Noemí Varela Kawasaki es una arquitecta chilena nacida el 5 de septiembre de 1948 en Santiago. \n Se titula de arquitecta de la Universidad de Chile en 1978 y comienza su primera experiencia laboral un año después como colaboradora en la Asociación de Industriales de la Construcción. \nEn 1980 comienza con el libre ejercicio de la profesión y emigra a la Región de Coquimbo, en donde postula al cargo de Directora de Obras en la Municipalidad de Coquimbo junto a otros 5 varones. No obtiene el cargo en ese momento, pero ingresa a la  Municipalidad de Coquimbo como asesora urbanista, siendo la primera asesora urbanista de Santiago en la región. Luego de seis meses le ofrecen el mismo cargo que no había ganado, Directora de Obras de Coquimbo, en el cual tuvo una larga e importante trayectoria por 11 años. En 1991 ingresa al Minvu como arquitecta de la Unidad de Desarrollo Urbano. En 1993 pasa a ser Jefa de la Unidad de Desarrollo Urbano e Infraestructura. A partir del 2019 se desempeña como profesional y revisora independiente de obras de construcción en Primera Categoría y como Urbanista es asesora en Planificación Urbana. ',
    quote: 'Mi trabajo se enfoca más en la planificación y eso es muy a largo plazo, porque es el desarrollo de las ciudades, entonces no hay proyectos específicos, yo me enfoco en los planos reguladores, las normas, en algo más intangible. Si bien, me toca intervenir igual en proyectos, es en el área más normativa, que se apliquen las normas y se cumpla todo a cabalidad. Yo me dedico a eso, a planificar a futuro',
    color: 'yellow',
    main_img: 'libertad_morales.png',
    images: [],
    videoURL: ''
  },
  {
    id: crypto.randomUUID(),
    name: 'Viviana Hernandez Perez',
    short_name: 'Viviana Hernandez',
    birth_date: '27 de agosto de 1952',
    birth_place: 'Illapel',
    university: 'Universidad de Chile',
    description: 'Viviana Hernandez Perez es arquitecta chilena nacida en 1952 en Illapel, provincia del Choapa Región de Coquimbo. \nIngresa a la Universidad de Chile en Santiago y se titula en 1978. \nEn 1979 ingresa a trabajar en el Ministerio de Vivienda y Urbanismo como arquitecta del Departamento de Desarrollo Urbano e Infraestructura. Desarrolla una nutrida trayectoria laboral por 41 años en el Minvu asumiendo diversos cargos: en 1990 asume como Jefa del Departamento de Planes y programas SEREMI-MINVU; en 2000 asume la Secretaría Regional Ministerial y Urbanismo Región de la Araucanía; en 2002 es Encargada de Proyectos especiales SEREMI-MINVU en la misma región. A partir del 2003 y hasta el 2015 también se desempeñó como académica en Universidad Mayor y en Universidad del Mar de Temuco y en Universidad del Mar en La Serena. En 2016 y durante un año trabajó en Minvu en la División política habitacional de Santiago. En 2018 comienza con el libre ejercicio de la profesión, desarrollando proyectos de arquitectura y asesorías en materias de planificación en La Serena. En 2023 es elegida presidenta del Colegio de Arquitectos Zonal Región de Coquimbo.',
    quote: 'Creer en lo que uno hace, querer lo que uno hace, y hacerlo pensando en los demás, no perder el foco que trabajamos para personas con el legítimo derecho de una buena vida, si no atendemos y entendemos a quienes tenemos que atender haremos obras para nosotros, más no para los otros.',
    color: 'red',
    main_img: 'paz_walker.png',
    images: [],
    videoURL: ''
  },
  {
    id: crypto.randomUUID(),
    name: 'Alicia Veronica Silva Riveros',
    short_name: 'Alicia Silva',
    birth_date: '',
    birth_place: '',
    university: '',
    description: '',
    quote: '',
    color: 'purple',
    main_img: 'alicia_silva.png',
    images: [],
    videoURL: ''
  },
  {
    id: crypto.randomUUID(),
    name: 'Libertad Fatima Margarita Morales Vasquez',
    short_name: 'Libertad Morales',
    birth_date: '',
    birth_place: '',
    university: '',
    description: '',
    quote: '',
    color: 'ocher',
    main_img: 'libertad_morales.png',
    images: [],
    videoURL: ''
  },
  {
    id: crypto.randomUUID(),
    name: 'Maria Teresa Fierro Page',
    short_name: 'Maria Teresa Fierro',
    birth_date: '',
    birth_place: '',
    university: '',
    description: '',
    quote: '',
    color: 'blue',
    main_img: 'alicia_silva.png',
    images: [],
    videoURL: ''
  },
  {
    id: crypto.randomUUID(),
    name: 'Paz del Carmen Walker Fernandez',
    short_name: 'Paz Walker',
    birth_date: '',
    birth_place: '',
    university: '',
    description: '',
    quote: '',
    color: 'fuchsia',
    main_img: 'paz_walker.png',
    images: [],
    videoURL: ''
  }
]

// export const LEAD_ARCHITECTS: Architects = [
//   {
//     id: crypto.randomUUID(),
//     name: 'Juana Varela Kawasaki',
//     short_name: 'Juana Varela',
//     color: 'yellow',
//
//     images: []
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Viviana Hernandez Perez',
//     short_name: 'Viviana Hernandez',
//     color: 'red',
//
//     images: []
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Alicia Veronica Silva Riveros',
//     short_name: 'Alicia Silva',
//     color: 'purple',
//
//     images: []
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Libertad Fatima Margarita Morales Vasquez',
//     short_name: 'Libertad Morales',
//     color: 'ocher',
//
//     images: []
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Maria Teresa Fierro Page',
//     short_name: 'Maria Teresa Fierro',
//     color: 'blue',
//
//     images: []
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Paz del Carmen Walker Fernandez',
//     short_name: 'Paz Walker',
//     color: 'fuchsia',
//
//     images: []
//   }
// ]
