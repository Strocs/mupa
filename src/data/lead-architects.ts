import juanaPhoto from '../assets/juana-varela/juana_varela.jpg'
import vivianaPhoto from '../assets/viviana-hernandez/viviana_hernandez.jpg'
import aliciaPhoto from '../assets/alicia-silva/alicia_silva.png'
import libertadPhoto from '../assets/libertad-morales/libertad_morales.png'
import mariaPhoto from '../assets/maria-teresa-fierro/maria_teresa_fierro.jpg'
import pazPhoto from '../assets/paz-walker/paz_walker.png'

const juanaGallery = import.meta.glob('../assets/juana-varela/gallery/**')
const vivianaGallery = import.meta.glob(
  '../assets/viviana-hernandez/gallery/**'
)
const aliciaGallery = import.meta.glob('../assets/alicia-silva/gallery/**')
const libertadGallery = import.meta.glob(
  '../assets/libertad-morales/gallery/**'
)
const mariaGallery = import.meta.glob(
  '../assets/maria-teresa-fierro/gallery/**'
)
const pazGallery = import.meta.glob('../assets/paz-walker/gallery/**')

export const LEAD_ARCHITECTS = [
  {
    id: crypto.randomUUID(),
    name: 'Alicia Veronica Silva Riveros',
    short_name: 'Alicia Silva Riveros',
    birth_date: '1954',
    birth_place: 'Quillota',
    university: 'Universidad de Chile, sede Valparaíso',
    description:
      'La arquitecta Alicia Silva Riveros nació en 1954 en Quillota. A la edad de 12 años comienza sus primeros intereses por la arquitectura a través de su hermana pintora quien le muestra un libro sobre la vida de Miguel Ángel. Guarda este interés hasta 1974, en donde ingresa a estudiar arquitectura en la Universidad de Chile, sede Valparaíso. Se titula de arquitecta con un proyecto que mostraba un especial interés por sistemas constructivos y diseños de arquitectura sustentable. \n Su primer trabajo fue bajo el alero de un abogado, encargándose de temas legales referentes a terrenos, subdivisiones, loteos, etc. En 1984 se traslada al Valle del Elqui, para participar en una comunidad de vida sustentable, haciendo agricultura orgánica y conoce con mayor propiedad los sistemas constructivos artesanales del lugar e incorpora más en sus proyectos materiales naturales como la madera, piedra y tierra. \n En 1994 la invitan a participar como docente en la apertura de la Carrera de Arquitectura de la Universidad de La Serena en donde imparte diferentes asignaturas como: Tecnologías Alternativas, Arquitectura Biológica, Arquitectura en Tierra y Taller de Arquitectura, también comienza su perfeccionamiento académico. \n En 2002 participa en un Doctorado en Estudios en Desarrollo Urbano Sustentable en la Universidad Politécnica de Madrid logrando sacar Suficiencia investigadora; en 2003 un diplomado en Docencia Universitaria en la Universidad de La Serena. En 2011 fue pionera en la Red ARCOT (Arquitectura y Construcción en Tierra) Cátedra Unesco Chile, debido al compromiso personal que siempre tiene con nuestro planeta. \n Actualmente jubilada como docente, Alicia se dedica al cultivo y cuidado de la tierra, sigue trabajando de forma particular desarrollando proyectos dentro de la zona donde reside, también se dedica a la restauración y ocasionalmente apoya en proyectos de investigación.',
    quote:
      '...A las futuras arquitectas, que se den cuenta de la responsabilidad que tenemos sobre nuestro planeta en todos los niveles de energía, tierra, agua, aire y sol. Cuando diseñamos una obra o cualquier actividad en relación a intervenciones espaciales, tenemos que tomar consciencia de que la creación que hacemos debe ser sana, fluida y tiene que dialogar con nuestro entorno más importante, que es el natural...',
    color: ['#9571b0', 'purple'],
    main_img: aliciaPhoto,
    assets: aliciaGallery,
    videoId: '410321929'
  },
  {
    id: crypto.randomUUID(),
    name: 'Libertad Fatima Margarita Morales Vasquez',
    short_name: 'Libertad Morales Vasquez',
    birth_date: '3 de octubre 1957',
    birth_place: 'San Fernando',
    university: 'Universidad de Chile',
    description:
      'La arquitecta Libertad Morales Vásquez nació el 3 de octubre de 1957 en San Fernando. \n Libertad recuerda que con solo 16 años cuando termina el colegio no tenía muy claro que estudiar y es su hermano quien al ver sus capacidades y gustos le recomienda que considere la arquitectura. La creatividad y trabajar los espacios era algo que la motivaba. En 1984 se titula de arquitecta en la Universidad de Chile, y comienza a trabajar en diferentes proyectos de arquitectura educacional, comercial, industrial y viviendas, en el ámbito privado y público. Luego junto con su marido Lorenzo Lorenzi, desarrollan proyectos de construcción y esta experiencia los lleva a formar en 1994 en Coquimbo la empresa regional Constructora e Inmobiliaria Arquiform S.A. con la cual han desarrollado diversos proyectos en Coquimbo y La Serena. \n Libertad menciona, que a lo largo de los años han funcionado muy bien como dupla siendo ella quien mayoritariamente diseña y desarrolla los proyectos en planimetría, mientras que su marido se ha dedicado más al área de la construcción. Lo que más le ha gustado desarrollar son los proyectos de vivienda, siendo la mayoría proyectos de vivienda económica, en donde reconoce que siempre hay algo que aportar. \n Actualmente trabaja activamente en su empresa y participa en la Comisión Mujeres de la Cámara Chilena de la Construcción de la Región de Coquimbo.',
    quote:
      'Yo creo que las mujeres tienen bastantes habilidades para desarrollar en el ámbito de la creatividad y del diseño en arquitectura, que colaboran con una perspectiva  que beneficia en la mayor diversidad, no tan solo a la discusión arquitectónica, sino a toda la sociedad,… creo que ellas están en mejor pie ahora que antes, porque han ido ganando bastantes espacios y tienen más posibilidades de hacer un bonito trabajo y desarrollarlo bien… hay más libertades … las mujeres de ahora saben, ellas saben lo que no pueden permitir que se les haga y con eso tienen más terreno ganado',
    color: ['#98963b', 'ocher'],
    main_img: libertadPhoto,
    assets: libertadGallery,
    videoId: '410321929'
  },
  {
    id: crypto.randomUUID(),
    name: 'Paz Walker Fernández',
    short_name: 'Paz Walker Fernández',
    birth_date: '1 de febrero de 1951',
    birth_place: 'Concepción  ',
    university:
      'Universidad Católica de Valparaíso, Pontificia Universidad Católica de Chile, Universidad Politécnica de Madrid, España',
    description:
      'Paz Walker Fernández es Dra. Arquitecta chilena, nacida en 1951 en Concepción y radicada en La Serena desde 1990. \n Realizó sus estudios de Arquitectura en un inicio en la Universidad Católica de Valparaíso durante los dos primeros años para luego trasladarse y terminar sus estudios en Santiago en la Pontificia Universidad Católica de Chile donde obtuvo el título de Arquitecta en 1979.\n En 1980 comienza su desempeño profesional como socia de la oficina de Arquitectura Walker y Torres Asoc. realizando diversos proyectos Habitacionales y de Oficinas.En el año 1885 se traslada a Antofagasta a trabajar como Arquitecta de Serviu y paralelamente como docente de la Carrera de Arquitectura de la Universidad Católica del Norte labor en la que descubre su real vocación por la Docencia.\n En 1990 se traslada a La Serena a trabajar en el Departamento de Desarrollo Urbano del MINVU IV Región participando en diversas Comisiones, entre ellas como representante del Minvu en el Consejo Regional de Monumentos Nacionales.Dado su interés y experiencia en la Docencia, en 1992 es invitada a formar parte en una Comisión para crear la Carrera de Arquitectura en la Universidad de La Serena.\n Luego de un proceso de estudio y definición del Currículo de la Carrera ésta es aprobada por las autoridades Universitarias y abre sus puertas el 6 de Marzo de 1994, formando parte de ésta como Directora de la Escuela y posteriormente Directora del Departamento de Arquitectura hasta el año 2012.\n En el área del perfeccionamiento Docente en 1997 cursa un Diplomado de Docencia Universitaria  en La Universidad de La Serena y un Magister de Ciencias de la Educación en la Universidad Autónoma de Barcelona. Así mismo genera y coordina un Doctorado en Desarrollo Urbano Sustentable  con la Universidad Politécnica de Madrid.; en el que ella y  los Académicos del Departamento tienen la posibilidad de perfeccionarse.',
    quote:
      '...Creo que lo más importante de todo,  ha sido tener la oportunidad de colaborar con la creación de las Escuelas de Arquitectura en la Región para que los jóvenes que no podían ir a cursarla a otra ciudad tuvieran la oportunidad de acceder y cumplir con su vocación. Fue su sueño cumplido  Me siento privilegiada haber sido parte de su formación profesional. Siento que eso  ha dejado  huella, no solo por el conocimiento compartido, si no también por poder aportar a crearles  conciencia de que lo que ellos diseñen,  tiene mucha injerencia en la calidad de vida de otras personas, por lo tanto, tiene que haber mucho compromiso, mucha responsabilidad, en lo que hagan,  y que nunca olviden que el principal objetivo de nuestra profesión es crear espacios para el bienestar y la felicidad de las personas que los habitarán.',
    color: ['#ad60a3', 'fuchsia'],
    main_img: pazPhoto,
    assets: pazGallery,
    videoId: '410321929'
  },
  {
    id: crypto.randomUUID(),
    name: 'Juana Noemi Varela Kawasaki',
    short_name: 'Juana Varela Kawasaki',
    birth_date: '5 de septiembre de 1948',
    birth_place: 'Santiago de Chile',
    university: 'Universidad de Chile',
    description:
      'Juana Noemí Varela Kawasaki es una arquitecta chilena nacida el 5 de septiembre de 1948 en Santiago. \n Se titula de arquitecta de la Universidad de Chile en 1978 y comienza su primera experiencia laboral un año después como colaboradora en la Asociación de Industriales de la Construcción. \nEn 1980 comienza con el libre ejercicio de la profesión y emigra a la Región de Coquimbo, en donde postula al cargo de Directora de Obras en la Municipalidad de Coquimbo junto a otros 5 varones. No obtiene el cargo en ese momento, pero ingresa a la Municipalidad de Coquimbo como asesora urbanista, siendo la primera asesora urbanista de Santiago en la región. Luego de seis meses le ofrecen el mismo cargo que no había ganado, Directora de Obras de Coquimbo, en el cual tuvo una larga e importante trayectoria por 11 años. En 1991 ingresa al Minvu como arquitecta de la Unidad de Desarrollo Urbano. En 1993 pasa a ser Jefa de la Unidad de Desarrollo Urbano e Infraestructura. \n Además en su nutrida trayectoria realizó diversas pasantías: a Gijón en España invitada por la Ilustre Municipalidad de Coquimbo con el fin de conocer instalaciones Portuarias y sus transformaciones a usos turísticos y poder aplicar en la comuna; a Getafe también en España, invitada por la Ilustre Municipalidad de Coquimbo para conocer modelos de desarrollo productivo y como poder incluirlos en la planificación; y a Japón invitada por JICA (Agencia de Cooperación Internacional del Japón) para tener conocimiento cómo se enfrentan las áreas de riesgos por Tsunami y terremotos en dicho país y poder tener una planificación adecuada frente a estos acontecimientos. \n A partir del 2019 se desempeña como profesional y revisora independiente de obras de construcción en Primera Categoría y como Urbanista es asesora en Planificación Urbana.',
    quote:
      'Mi trabajo se enfoca más en la planificación y eso es muy a largo plazo, porque es el desarrollo de las ciudades y sus territorios, entonces no hay proyectos específicos, yo me enfoco en los planos reguladores, que son los instrumentos de planificación y sus normas… que son herramientas para la toma de decisiones, para resolver y orientar problemas urbanos, también me toca intervenir en proyectos, en el área más normativa, que se apliquen las normas y se cumpla todo a cabalidad. Yo me dedico a eso, a proyectar las políticas a seguir en diversos ámbitos como vivienda, transporte y medio ambiente, la planificación en Chile la realiza el Estado',
    color: ['#f4c602', 'yellow'],
    main_img: juanaPhoto,
    assets: juanaGallery,
    videoId: '410321929'
  },
  {
    id: crypto.randomUUID(),
    name: 'Maria Teresa Fierro Page',
    short_name: 'Maria Teresa Fierro Page',
    birth_date: '23 de noviembre de 1953',
    birth_place: 'Santiago',
    university: 'Universidad Católica de Valparaíso',
    description:
      'La arquitecta María Teresa Fierro Page, nació el 23 de noviembre de 1953 en Santiago. Su abuelo era arquitecto, por lo cual siempre tuvo la conexión con la arquitectura a su alrededor. \n Cuando termina el colegio entra a estudiar arte, pero luego se cambia a arquitectura en la Universidad Católica de Valparaíso. \n Sus primeros años profesionales se desempeñaron en la ciudad de Ovalle, realizando proyectos tanto municipales como privados, pero sobre todo de desarrollo rural. Luego se traslada a La Serena donde se desempeña como Asesora Urbanista en la Municipalidad de La Serena, para luego ser Directora de Obras de la misma Municipalidad entre 1987 y 1992. Ahí trabajó en importantes estudios de desarrollo comunal como:  consolidación de la Avenida del Mar y San Joaquín, saneamiento de títulos de dominio en Las Compañías y en el Estudio para la modificación del Plan Regulador Comunal, entre otros. Posteriormente vuelve a Santiago y estudia un posgrado en la Universidad Pontificia Católica, donde además es ayudante de taller en pregrado y postgrado. En la Universidad Andrés Bello es profesora guía de título y en la Corporación de Desarrollo de Santiago es arquitecta a cargo de proyectos de distintos Comités de Adelanto (1993-1997). \n En 1997 vuelve a La Serena y comienza su docencia en Arquitectura de la Universidad de La Serena, al mismo tiempo se reintegra a la Municipalidad de La Serena y es arquitecta de tiempo parcial. Luego de un tiempo como docente jornada completa, realiza su doctorado en Desarrollo Urbano Sustentable en la Universidad Politécnica de Madrid. En 2018 asume como directora de la Escuela de la Carrera de Arquitectura en La Universidad de La Serena y en 2019 hasta marzo de 2022 asume la Dirección General de Asuntos Estudiantiles de la misma Universidad. \n Actualmente se dedica al ejercicio libre de la profesión.',
    quote:
      'Que se atrevan, yo creo que los desafíos hay que tomarlos… la formación de arquitectos es súper integral, la formación en base a aprender haciendo es muy abierta, nos permite abordar rápidamente muchas cosas … yo creo que el resto del desarrollo como profesional, es esta metodología de trabajo que queda marcada a fuego , y también aparecen nuevas tecnologías, nuevos modos de ver … en donde ese modo de pensar, de atreverse y de hacer es personal, y a eso los desafío a que se siguen atreviendo y sigan haciendo … para, ahora, aprender de lo obrado.',
    color: ['#214988', 'blue'],
    main_img: mariaPhoto,
    assets: mariaGallery,
    videoId: '410321929'
  },
  {
    id: crypto.randomUUID(),
    name: 'Viviana Margarita Hernández Pérez',
    short_name: 'Viviana Hernandez Pérez',
    birth_date: '27 de agosto de 1952',
    birth_place: 'Chicolco-Petorca',
    university: 'Universidad de Chile',
    description:
      'Viviana Hernández Pérez es arquitecta chilena nacida en 1952 en Chicolco, provincia de Petorca, Región de Valparaíso. Se crio en Illapel, provincia del Choapa, Región de Coquimbo. \n Ingresa a la Universidad de Chile en Santiago y se titula en 1978. En 1979 ingresa a trabajar en el Ministerio de Vivienda y Urbanismo como arquitecta del Departamento de Desarrollo Urbano e Infraestructura. Desarrolla una nutrida trayectoria laboral por 40 años en el Minvu asumiendo diversos cargos: en 1990 asume como Jefa del Departamento de Planes y programas SEREMI-MINVU; en 2000 asume la Secretaría Regional Ministerial y Urbanismo Región de la Araucanía; en 2002 es Encargada de Proyectos especiales SEREMI-MINVU en la misma región. A partir del 2003 (hasta el 2015) también se desempeñó como académica en Universidad Mayor, en Universidad del Mar de Temuco y en Universidad del Mar en La Serena. En 2005 obtiene el grado de Magíster en Gerencia Pública en la Universidad Mayor. \n Desde el 2011 hasta 2015 se traslada a la Serena, donde ejerce como encargada del Plan de Gestión de Calidad de la Seremi Minvu de la Región de Coquimbo. En 2016 y 2017 trabajó en Minvu en la División Política Habitacional de Santiago, encargada de la gestión de Proyectos Urbanos Habitacionales a lo largo del país. En 2018 comienza con el libre ejercicio de la profesión, desarrollando proyectos de arquitectura y asesorías en materias de planificación en La Serena y como Perito Tasadora del Poder Judicial. \n En 2023 es elegida presidenta del Colegio de Arquitectos Zonal Región de Coquimbo.',
    quote:
      'Creer en lo que uno hace, querer lo que uno hace, y hacerlo pensando en los demás, no perder el foco que trabajamos para personas con el legítimo derecho de una buena vida, si no atendemos y entendemos a quienes tenemos que atender haremos obras para nosotros, más no para los otros.',
    color: ['#cf6a58', 'red'],
    main_img: vivianaPhoto,
    assets: vivianaGallery,
    videoId: '410321929'
  }
]
