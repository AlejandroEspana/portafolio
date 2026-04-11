export interface TechCategory {
  category: string;
  items: string[];
}

export interface AnnexItem {
  imageUrl?: string;
  description?: string;
}

export interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroImage?: string;
  role: {
    title: string;
    tasks: string[];
  };
  team: string[];
  duration: string;
  summary: string[];
  technologies: TechCategory[];
  links: { label: string; url: string }[];
  annexes: AnnexItem[];
}

export const projects: ProjectDetails[] = [
  {
    id: "pulmomed",
    title: "PulmoMed",
    subtitle: "UCC - Realidad Virtual - mayo 2026",
    tagline: "Un proyecto de Realidad Virtual y Cancer de Pulmon",
    heroImage: "/Pulmomed.svg",
    role: {
      title: "Investigador/desarrollador",
      tasks: ["Scrum Manager", "desarrollador Unity", "Interaccion", "Interfaces"],
    },
    team: [
      "Alejandro España",
      "Matheu Ruales Galvis",
      "Nicolas Pasmiño",
      "Daniel Fernando Arteaga",
    ],
    duration: "2 años / aun en desarrollo",
    summary: [
      "PulmoMed es un software educativo que utiliza realidad virtual e inteligencia artificial para mejorar la enseñanza del cáncer de pulmón, permitiendo a los estudiantes interactuar con simulaciones del crecimiento y la metástasis tumoral en un entorno inmersivo.",
      "Se diseñó como una solución para superar las limitaciones de los métodos tradicionales, integrando tecnologías como Unity y Python bajo una arquitectura escalable.",
      "Su implementación busca fortalecer la formación médica, mejorar la comprensión clínica y contribuir a la reducción de diagnósticos tardíos en Colombia."
    ],
    technologies: [
      { category: "Motor Principal de Desarrollo", items: ["Unity"] },
      { category: "Lenguaje IA/Backend", items: ["Python / FastApi", "C#"] },
      { category: "Metodología Ágil de Desarrollo", items: ["Scrum"] },
      { category: "Estado", items: ["En desarrollo"] },
    ],
    links: [

    ],
    annexes: [
      { imageUrl: "/Pulmomed1.svg", description: "Una visualizacion 3D del modelo pulmonar, interactuable y realista con animaciones y estructuracion modular." },
      { imageUrl: "/Pulmomed2.svg", description: "Un museo con modelos interactivos e informacion representadas en burbujas desplegables" }
    ],
  },
  {
    id: "tutorialvr",
    title: "TutorialVR",
    subtitle: "App - Realidad Virtual - 2025",
    tagline: "App de aprendizaje VR para conocer el uso e interaccion de la tecnologia",
    heroImage: "/Tutorial.svg",
    role: { title: "Desarrollador Principal", tasks: ["Desarrollo General"] },
    team: ["Alejandro España"],
    duration: "Completado",
    summary: ["Proyecto interactivo para ayudar a los nuevos usuarios a familiarizarse con la realidad virtual. Utilizando la Gamificacion como pilar principal dentro del proyecto, orientando al usuario con modelos interactivos para su aprendizaje"],
    technologies: [
      { category: "Motor", items: ["Unity"] },
      { category: "Lenguaje", items: ["C#"] },
      { category: "Estado", items: ["Completado"] },
    ],
    links: [],
    annexes: [
      { imageUrl: "/Tutorial1.svg", description: "Primera vista de la interaccion del tutorial" },
      { imageUrl: "/Tutorial2.svg", description: "Mapeo y reconocimiento del entorno VR" }
    ],
  },
  {
    id: "anypost",
    title: "AnyPost",
    subtitle: "Web Automation - 2025",
    tagline: "Web para automatizar el post en diferentes redes sociales con un solo click",
    heroImage: "/anypost-landing-overview.svg",
    role: { title: "Fullstack Developer", tasks: ["Frontend", "Backend"] },
    team: ["Alejandro España", "Matheu Ruales Galvis", "Felipe Narvaez"],
    duration: "Completado",
    summary: ["Plataforma SaaS para gestionar publicaciones simultáneas en varias redes sociales a través de una sola interfaz."],
    technologies: [
      { category: "Tecnologías", items: ["React", "Node.js", "Java-Postgress"] },
      { category: "Metodologia", items: ["Scrum"] },
      { category: "Estado", items: ["Completado"] },
    ],
    links: [
      { label: "Github Frontend ↗", url: "https://github.com/matheuruales/Front_AnyPost" },
      { label: "Github Backend ↗", url: "https://github.com/matheuruales/Back_AnyPost" }
    ],
    annexes: [
      { imageUrl: "/anypost-dashboard-panel.svg", description: "Panel interactivo de control de publicaciones multiplataforma" }
    ],
  },
  {
    id: "goldengymapp",
    title: "GoldenGymApp",
    subtitle: "Software Gestión - 2025",
    tagline: "Web para la gestion de entrada y analisis de datos de un Gym",
    role: { title: "Backend Engineer", tasks: ["Integracion IOT"] },
    team: ["Alejandro España", "Daniel Fernando Arteaga", "Sebastian Fajardo"],
    duration: "Completado",
    summary: ["Sistema integral para la administración de gimnasios, control de accesos y métricas de crecimiento. Orientado a la optimización de procesos administrativos y de gestión de datos. utilizando IOT para el control de acceso biometrico."],
    technologies: [{ category: "Stack Backend", items: ["Python", "FastApi", "PostgreSQL"] }, { category: "Stack Frontend", items: ["React"] }],
    links: [],
    annexes: [],
  }
];
