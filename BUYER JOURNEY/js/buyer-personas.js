const buyerPersonas = [
    {
        name: 'Mateo "El Novato" Vargas',
        title: 'El Estudiante Entusiasta',
        icon: 'fas fa-dumbbell',
        demographics: {
            gender: 'Masculino',
            age: '20 años',
            location: 'Arequipa',
            income: 'Ingresos bajos'
        },
        info: [
            'Estudiante de pregrado',
            'Universidad Católica de Santa María',
            'Trabajo parcial o sin trabajo',
            'Vive con padres o residencia estudiantil',
            'Soltero',
            'Depende de mesada familial'
        ],
        professionalGoals: 'Centrado completamente en sus estudios universitarios. Su prioridad actual es obtener buenos resultados académicos y completar su carrera exitosamente.',
        personalGoals: [
            'Ganar masa muscular significativa',
            'Desarrollar un cuerpo fitness estético',
            'Mejorar su fuerza física',
            'Sentirse más seguro y atractivo',
            'Competir en fitness amateur'
        ],
        interests: [
            'Entrenar con pesas',
            'Ver videos de fitness',
            'Redes sociales (Instagram, TikTok)',
            'Salir con amigos',
            'Contenido fitness en redes'
        ],
        aspirations: [
            'Tener un físico atlético',
            'Destacar socialmente',
            'Sentirse bien consigo mismo',
            'Reconocimiento en fitness amateur',
            'Ser admirado en redes sociales'
        ],
        challenges: [
            { title: 'Falta de motivación', desc: 'Dificultad para mantener rutina constante', icon: 'fas fa-clock' },
            { title: 'Presupuesto limitado', desc: 'Poco dinero para membresías y nutrición', icon: 'fas fa-dollar-sign' },
            { title: 'Inseguridad técnica', desc: 'No sabe cómo entrenar correctamente', icon: 'fas fa-question-circle' },
            { title: 'Impaciencia', desc: 'Quiere ver resultados rápidamente', icon: 'fas fa-chart-line' }
        ],
        complaints: 'Es muy caro • No veo resultados • No sé qué ejercicios hacer • Me da vergüenza ir al gimnasio',
        howWeHelp: [
            'Planes de membresía asequibles para estudiantes',
            'Rutinas efectivas para principiantes e intermedios',
            'Ambiente motivador y sin juicios',
            'Información básica sobre nutrición',
            'Comunidad de apoyo para estudiantes'
        ],
        sources: [
            { name: 'Instagram', desc: 'Influencers fitness', icon: 'fab fa-instagram' },
            { name: 'TikTok', desc: 'Videos cortos', icon: 'fab fa-tiktok' },
            { name: 'YouTube', desc: 'Tutoriales fitness', icon: 'fab fa-youtube' },
            { name: 'Amigos', desc: 'Recomendaciones', icon: 'fas fa-users' },
            { name: 'Google', desc: 'Búsquedas rápidas', icon: 'fab fa-google' }
        ]
    },
    {
        name: 'Andrés "El Desestrés" Pérez',
        title: 'El Joven Profesional en Forma',
        icon: 'fas fa-briefcase',
        demographics: {
            gender: 'Masculino',
            age: '24 años',
            location: 'Vallecito, Arequipa',
            income: 'Medio-alto (B+)'
        },
        info: [
            'Universitario completo',
            'Empleado en startup de servicios',
            'Trabajo tiempo completo',
            'Soltero o en relación',
            'Vive independiente',
            'Ingresos estables'
        ],
        professionalGoals: 'Crecer en su carrera profesional y establecerse como un profesional exitoso en su campo.',
        personalGoals: [
            'Mantenerse en forma para liberar estrés',
            'Mejorar su salud general',
            'Tener buena apariencia física',
            'Mantener energía y vitalidad',
            'Equilibrio trabajo-vida saludable'
        ],
        interests: [
            'Ir al gimnasio',
            'Salir con amigos',
            'Tecnología',
            'Actividades al aire libre',
            'Networking profesional'
        ],
        aspirations: [
            'Tener éxito profesional',
            'Mantener estilo de vida saludable',
            'Sentirse con energía y vitalidad',
            'Ser eficiente en su tiempo',
            'Mantener buen aspecto físico'
        ],
        challenges: [
            { title: 'Falta de tiempo', desc: 'Demandas laborales intensas', icon: 'fas fa-clock' },
            { title: 'Cansancio laboral', desc: 'Fatiga después del trabajo', icon: 'fas fa-tired' },
            { title: 'Horarios rígidos', desc: 'Dificultad para encontrar tiempo libre', icon: 'fas fa-calendar-times' },
            { title: 'Estrés profesional', desc: 'Presión del trabajo afecta motivación', icon: 'fas fa-brain' }
        ],
        complaints: 'No tengo tiempo • Estoy muy cansado después del trabajo • ¿Está muy lleno a esta hora?',
        howWeHelp: [
            'Horarios flexibles (antes o después del trabajo)',
            'Ambiente para desconectar del trabajo',
            'Equipamiento de calidad para entrenamientos eficientes',
            'Clases rápidas y efectivas',
            'Ubicación conveniente'
        ],
        sources: [
            { name: 'Google Maps', desc: 'Ubicación y horarios', icon: 'fas fa-map-marker-alt' },
            { name: 'Reseñas Online', desc: 'Opiniones de usuarios', icon: 'fas fa-star' },
            { name: 'Compañeros', desc: 'Recomendaciones laborales', icon: 'fas fa-users' },
            { name: 'Redes Sociales', desc: 'Información rápida', icon: 'fas fa-share-alt' },
            { name: 'Web Gimnasios', desc: 'Info detallada', icon: 'fas fa-globe' }
        ]
    },
    {
        name: 'Sofía "La Bienestar" Gómez',
        title: 'La Profesional Activa',
        icon: 'fas fa-female',
        demographics: {
            gender: 'Femenino',
            age: '28 años',
            location: 'Yanahuara, Arequipa',
            income: 'Medio-alto (A-)'
        },
        info: [
            'Universitario completo',
            'Empleada en empresa de odontología',
            'Trabajo estable',
            'Soltera o en relación',
            'Vive independiente',
            'Buenos ingresos'
        ],
        professionalGoals: 'Desarrollarse en su carrera profesional y mantener un crecimiento constante en el área de la salud.',
        personalGoals: [
            'Mejorar su salud general',
            'Reducir estrés y ansiedad',
            'Perder algunos kilos',
            'Tonificar su cuerpo',
            'Socializar con otras personas'
        ],
        interests: [
            'Clases grupales (aeróbicos, bailes)',
            'Actividades sociales',
            'Bienestar integral',
            'Alimentación saludable',
            'Spa y relajación'
        ],
        aspirations: [
            'Sentirse con más energía',
            'Mejorar su autoestima',
            'Disfrutar actividades físicas variadas',
            'Conocer gente con intereses similares',
            'Mantener estilo de vida saludable'
        ],
        challenges: [
            { title: 'Falta de motivación', desc: 'Dificultad para ir regularmente', icon: 'fas fa-battery-empty' },
            { title: 'Clases aburridas', desc: 'No encuentra clases que disfrute', icon: 'fas fa-yawn' },
            { title: 'Ambiente intimidante', desc: 'Se siente incómoda en ambiente masculino', icon: 'fas fa-eye-slash' },
            { title: 'Horarios limitados', desc: 'Pocas opciones de horarios', icon: 'fas fa-clock' }
        ],
        complaints: 'Las clases no me motivan • El ambiente es muy masculino • Los horarios no me convienen',
        howWeHelp: [
            'Variedad de clases grupales dinámicas',
            'Ambiente acogedor e inclusivo',
            'Instructoras motivadoras',
            'Información sobre beneficios para salud mental',
            'Flexibilidad de horarios'
        ],
        sources: [
            { name: 'Instagram', desc: 'Contenido bienestar', icon: 'fab fa-instagram' },
            { name: 'Facebook', desc: 'Grupos de bienestar', icon: 'fab fa-facebook' },
            { name: 'Amigas', desc: 'Recomendaciones', icon: 'fas fa-user-friends' },
            { name: 'Google', desc: 'Clases específicas', icon: 'fab fa-google' },
            { name: 'Web Gimnasios', desc: 'Horarios y testimonios', icon: 'fas fa-globe' }
        ]
    },
    {
        name: 'Carolina "La Equilibrada" Ruiz',
        title: 'La Madre Saludable',
        icon: 'fas fa-heart',
        demographics: {
            gender: 'Femenino',
            age: '33 años',
            location: 'Afueras de Yanahuara',
            income: 'Medio-alto (B+)'
        },
        info: [
            'Universitario completo',
            'Tiempo parcial o negocio pequeño',
            'Casada con hijos',
            'Ingresos familiares estables',
            'Prioriza familia',
            'Busca equilibrio personal'
        ],
        professionalGoals: 'Mantener el equilibrio entre su trabajo y la familia, desarrollando actividades que le permitan contribuir económicamente sin descuidar a sus hijos.',
        personalGoals: [
            'Priorizar su salud para tener energía',
            'Perder peso después del embarazo',
            'Reducir el estrés diario',
            'Encontrar tiempo para ella misma',
            'Ser ejemplo para sus hijos'
        ],
        interests: [
            'Actividades familiares',
            'Bienestar integral',
            'Alimentación saludable',
            'Clases de bajo impacto',
            'Recuperación postparto'
        ],
        aspirations: [
            'Sentirse más saludable y con energía',
            'Recuperar su figura',
            'Tener espacio para relajarse',
            'Ser buen ejemplo para hijos',
            'Mantener equilibrio vida-familia'
        ],
        challenges: [
            { title: 'Falta de tiempo', desc: 'Responsabilidades familiares', icon: 'fas fa-baby' },
            { title: 'Falta motivación', desc: 'Dificultad para ser consistente', icon: 'fas fa-tired' },
            { title: 'Horarios rígidos', desc: 'Necesita flexibilidad extrema', icon: 'fas fa-clock' },
            { title: 'Culpa maternal', desc: 'Se siente mal por tiempo personal', icon: 'fas fa-heart-broken' }
        ],
        complaints: 'No tengo tiempo para mí • Es difícil encontrar horarios que me sirvan • Me siento culpable por dejar a mis hijos',
        howWeHelp: [
            'Horarios flexibles (cuando niños en escuela)',
            'Clases de bajo impacto y recuperación',
            'Ambiente amigable sin presiones',
            'Información sobre actividad física familiar',
            'Comunidad de apoyo entre madres'
        ],
        sources: [
            { name: 'Grupos Madres', desc: 'Comunidades online', icon: 'fas fa-users' },
            { name: 'Recomendaciones', desc: 'Otras madres', icon: 'fas fa-user-friends' },
            { name: 'Blogs Maternidad', desc: 'Contenido especializado', icon: 'fas fa-blog' },
            { name: 'Google', desc: 'Horarios flexibles', icon: 'fab fa-google' },
            { name: 'Web Gimnasios', desc: 'Testimonios madres', icon: 'fas fa-globe' }
        ]
    },
    {
        name: 'Alexia "La Promesa" Mendoza',
        title: 'El Competidor Ambicioso',
        icon: 'fas fa-trophy',
        demographics: {
            gender: 'Femenino',
            age: '22 años',
            location: 'Cerca universidades',
            income: 'Bajo-medio'
        },
        info: [
            'Estudiante últimos años o egresada',
            'Trabajo tiempo parcial',
            'Soltera',
            'Enfocada en fitness competitivo',
            'Depende apoyo familiar',
            'Invierte en entrenamiento'
        ],
        professionalGoals: 'Enfocada en su carrera profesional a futuro, pero actualmente prioriza completamente sus objetivos en el fitness competitivo.',
        personalGoals: [
            'Adentrarse en competiciones fitness profesional',
            'Ganar masa muscular y definición extrema',
            'Mejorar rendimiento en entrenamientos',
            'Representar a CulturalGym',
            'Ganar campeonatos'
        ],
        interests: [
            'Entrenamiento intenso con pesas',
            'Clases funcionales desafiantes',
            'Nutrición deportiva avanzada',
            'Seguir competencias fitness',
            'Estudiar técnicas avanzadas'
        ],
        aspirations: [
            'Lograr reconocimiento como atleta fitness',
            'Alcanzar máximo potencial físico',
            'Ganar competencias importantes',
            'Ser parte comunidad campeones',
            'Conseguir patrocinios'
        ],
        challenges: [
            { title: 'Entrenamiento especializado', desc: 'Necesita preparación específica', icon: 'fas fa-dumbbell' },
            { title: 'Entrenadores expertos', desc: 'Requiere experiencia en competición', icon: 'fas fa-user-tie' },
            { title: 'Costos elevados', desc: 'Suplementos y dietas específicas', icon: 'fas fa-dollar-sign' },
            { title: 'Disciplina extrema', desc: 'Constancia y dedicación total', icon: 'fas fa-fire' }
        ],
        complaints: 'No estoy progresando lo suficiente • Necesito un entrenador que me entienda • Es muy caro competir',
        howWeHelp: [
            'Entrenadores con experiencia en competiciones',
            'Equipamiento de alta calidad avanzado',
            'Ambiente competitivo y de apoyo',
            'Información sobre nutrición atlética',
            'Conexión con otros atletas'
        ],
        sources: [
            { name: 'Entrenadores', desc: 'Gimnasio especializado', icon: 'fas fa-user-tie' },
            { name: 'Atletas Pro', desc: 'Redes sociales', icon: 'fas fa-medal' },
            { name: 'Revistas Fitness', desc: 'Contenido especializado', icon: 'fas fa-newspaper' },
            { name: 'Competencias', desc: 'Eventos y resultados', icon: 'fas fa-trophy' },
            { name: 'Foros', desc: 'Culturismo y fitness', icon: 'fas fa-comments' }
        ]
    },
    {
        name: 'Javier "El Líder" Rojas',
        title: 'El Veterano Comunitario',
        icon: 'fas fa-users',
        demographics: {
            gender: 'Masculino',
            age: '40 años',
            location: 'Yanahuara, Arequipa',
            income: 'Alto (A)'
        },
        info: [
            'Técnico o universitario completo',
            'Dueño de taller de carros',
            'Casado',
            'Ingresos altos y estables',
            'Negocio establecido',
            'Líder comunitario'
        ],
        professionalGoals: 'Mantener y hacer crecer su negocio mientras disfruta de la estabilidad económica que ha logrado.',
        personalGoals: [
            'Mantenerse activo y saludable',
            'Disfrutar ambiente de comunidad fuerte',
            'Participar en eventos sociales',
            'Socializar y mantenerse conectado',
            'Mentorear a gente más joven'
        ],
        interests: [
            'Ir al gimnasio regularmente',
            'Eventos comunitarios (armwrestling)',
            'Socializar con amigos',
            'Hobbies relacionados con negocio',
            'Actividades familiares'
        ],
        aspirations: [
            'Mantener buena salud para familia y negocio',
            'Sentirse parte de comunidad activa',
            'Mantenerse conectado con gente joven',
            'Ser referente y mentor',
            'Disfrutar actividades sociales'
        ],
        challenges: [
            { title: 'Tiempo limitado', desc: 'Responsabilidades laborales', icon: 'fas fa-briefcase' },
            { title: 'Motivación a largo plazo', desc: 'Mantener constancia', icon: 'fas fa-battery-half' },
            { title: 'Variedad actividades', desc: 'Busca desafíos divertidos', icon: 'fas fa-puzzle-piece' },
            { title: 'Horarios eventos', desc: 'Conflicto con trabajo', icon: 'fas fa-calendar-times' }
        ],
        complaints: 'A veces falta variedad en actividades comunitarias • Los horarios de eventos no me coinciden',
        howWeHelp: [
            'Ambiente social y comunitario fuerte',
            'Organización de eventos y retos',
            'Fomentar interacción entre miembros',
            'Variedad más allá del entrenamiento tradicional',
            'Horarios flexibles para eventos'
        ],
        sources: [
            { name: 'Comunicación Directa', desc: 'En el gimnasio', icon: 'fas fa-handshake' },
            { name: 'WhatsApp Grupos', desc: 'Gimnasio', icon: 'fab fa-whatsapp' },
            { name: 'Carteleras', desc: 'Eventos físicos', icon: 'fas fa-clipboard' },
            { name: 'Redes Sociales', desc: 'Fotos y videos', icon: 'fas fa-camera' },
            { name: 'Comunicación Interna', desc: 'Canales gimnasio', icon: 'fas fa-bullhorn' }
        ]
    }
];

const journeyMaps = [
    {
        personaName: 'Mateo "El Novato" Vargas',
        stages: [
            {
                title: 'Descubrimiento',
                subtitle: 'Despertar la necesidad',
                icon: 'fas fa-lightbulb',
                trigger: 'Se siente acomplejado por su físico al compararse en redes sociales',
                painPoints: [
                    'Baja autoestima e inseguridad',
                    'Frustración por no saber cómo empezar',
                    'Falta de confianza en sí mismo'
                ],
                questions: [
                    '¿Cómo puedo ganar músculo?',
                    '¿Qué ejercicios son para principiantes?',
                    '¿Es muy caro ir al gimnasio?'
                ],
                actions: [
                    'Navega redes sociales buscando transformaciones',
                    'Pregunta a amigos que van al gimnasio',
                    'Busca videos de entrenamiento en YouTube'
                ]
            },
            {
                title: 'Consideración',
                subtitle: 'Evaluando opciones',
                icon: 'fas fa-search',
                research: 'Busca gimnasios cerca de universidad, compara precios y lee reseñas online',
                content: [
                    'Gimnasios baratos para estudiantes',
                    'Rutinas para principiantes',
                    'Testimonios de estudiantes'
                ],
                painPoints: [
                    'Confusión sobre qué gimnasio elegir',
                    'Preocupación por el costo',
                    'Incertidumbre sobre recibir ayuda'
                ]
            },
            {
                title: 'Decisión',
                subtitle: 'Eligiendo el gimnasio',
                icon: 'fas fa-check-circle',
                evaluation: 'Considera precio, ubicación, equipamiento y ambiente para principiantes',
                factors: [
                    'Precio asequible para estudiante',
                    'Cercanía a universidad',
                    'Orientación básica incluida',
                    'Recomendación de amigos'
                ],
                actions: [
                    'Visita las instalaciones',
                    'Pregunta sobre planes estudiantiles',
                    'Prueba clase gratuita'
                ]
            }
        ]
    },
    {
        personaName: 'Andrés "El Desestrés" Pérez',
        stages: [
            {
                title: 'Descubrimiento',
                subtitle: 'Necesidad de desestresarse',
                icon: 'fas fa-lightbulb',
                trigger: 'Se siente estresado y con poca energía por el trabajo',
                painPoints: [
                    'Estrés laboral constante',
                    'Fatiga y poca energía',
                    'Frustración por no tener tiempo'
                ],
                questions: [
                    '¿Cómo liberar estrés después del trabajo?',
                    '¿Qué gimnasios están cerca de oficina?',
                    '¿Puedo hacer ejercicio estando cansado?'
                ],
                actions: [
                    'Busca gimnasios cerca del trabajo',
                    'Pregunta a compañeros de trabajo',
                    'Investiga beneficios del ejercicio'
                ]
            },
            {
                title: 'Consideración',
                subtitle: 'Buscando eficiencia',
                icon: 'fas fa-search',
                research: 'Investiga gimnasios con horarios flexibles y equipamiento de calidad',
                content: [
                    'Gimnasios con horarios flexibles',
                    'Ejercicio después del trabajo',
                    'Beneficios para salud mental'
                ],
                painPoints: [
                    'Duda sobre mantener constancia',
                    'Preocupación por tiempo de traslado',
                    'Quiere que valga la inversión'
                ]
            },
            {
                title: 'Decisión',
                subtitle: 'Optimizando tiempo',
                icon: 'fas fa-check-circle',
                evaluation: 'Considera cercanía, horarios amplios y equipamiento eficiente',
                factors: [
                    'Ubicación conveniente al trabajo',
                    'Horarios amplios de operación',
                    'Buenas reseñas de equipamiento',
                    'Entrenadores profesionales'
                ],
                actions: [
                    'Visita en camino al trabajo',
                    'Pregunta sobre horarios',
                    'Consulta disponibilidad entrenadores'
                ]
            }
        ]
    },
    {
        personaName: 'Sofía "La Bienestar" Gómez',
        stages: [
            {
                title: 'Descubrimiento',
                subtitle: 'Buscando bienestar',
                icon: 'fas fa-lightbulb',
                trigger: 'Se siente con poca energía, ansiosa y quiere socializar más',
                painPoints: [
                    'Falta de motivación',
                    'Pocas oportunidades sociales',
                    'Inseguridad sobre tipo de ejercicio'
                ],
                questions: [
                    '¿Qué actividades físicas son divertidas?',
                    '¿Dónde conocer gente haciendo ejercicio?',
                    '¿Qué gimnasios tienen buenas clases?'
                ],
                actions: [
                    'Busca clases de baile y aeróbicos',
                    'Pregunta recomendaciones a amigas',
                    'Ve fotos de clases en redes'
                ]
            },
            {
                title: 'Consideración',
                subtitle: 'Evaluando ambiente',
                icon: 'fas fa-search',
                research: 'Busca variedad de clases grupales e información sobre instructoras',
                content: [
                    'Clases de aeróbicos divertidas',
                    'Gimnasios con buen ambiente femenino',
                    'Perfiles de instructoras'
                ],
                painPoints: [
                    'Duda si clases serán motivadoras',
                    'Preocupación por sentirse fuera de lugar',
                    'Ajuste de horarios a rutina'
                ]
            },
            {
                title: 'Decisión',
                subtitle: 'Ambiente acogedor',
                icon: 'fas fa-check-circle',
                evaluation: 'Considera variedad de clases, instructoras dinámicas y ambiente femenino',
                factors: [
                    'Horarios convenientes de clases',
                    'Clases dinámicas y divertidas',
                    'Ambiente cómodo para mujeres',
                    'Oportunidades de socialización'
                ],
                actions: [
                    'Pregunta sobre clase de prueba',
                    'Ve perfiles de instructoras',
                    'Consulta horarios específicos'
                ]
            }
        ]
    },
    {
        personaName: 'Carolina "La Equilibrada" Ruiz',
        stages: [
            {
                title: 'Descubrimiento',
                subtitle: 'Tiempo para sí misma',
                icon: 'fas fa-lightbulb',
                trigger: 'Poca energía para hijos, quiere recuperar figura y reducir estrés',
                painPoints: [
                    'Falta de tiempo personal',
                    'Culpa por dejar a los hijos',
                    'Cansancio físico y mental'
                ],
                questions: [
                    '¿Cómo hacer ejercicio con poco tiempo?',
                    '¿Hay gimnasios con horarios flexibles?',
                    '¿Qué ejercicio es bueno para mamás?'
                ],
                actions: [
                    'Busca "horarios flexibles mamás"',
                    'Pregunta a otras madres',
                    'Investiga ejercicios postparto'
                ]
            },
            {
                title: 'Consideración',
                subtitle: 'Flexibilidad familiar',
                icon: 'fas fa-search',
                research: 'Investiga horarios que se ajusten a rutina familiar y clases de bajo impacto',
                content: [
                    'Ejercicio para mamás con poco tiempo',
                    'Gimnasios con cuidado infantil',
                    'Testimonios de otras madres'
                ],
                painPoints: [
                    'Duda sobre ser constante',
                    'Preocupación por costo adicional',
                    'Necesita ambiente comprensivo'
                ]
            },
            {
                title: 'Decisión',
                subtitle: 'Apoyo maternal',
                icon: 'fas fa-check-circle',
                evaluation: 'Considera flexibilidad, ambiente de apoyo y comprensión familiar',
                factors: [
                    'Horarios adaptativos a familia',
                    'Ambiente acogedor sin juicios',
                    'Comprensión de necesidades maternas',
                    'Opciones de cuidado infantil'
                ],
                actions: [
                    'Contacta sobre horarios específicos',
                    'Pregunta sobre opciones madres',
                    'Visita en horario potencial'
                ]
            }
        ]
    },
    {
        personaName: 'Alexia "La Promesa" Mendoza',
        stages: [
            {
                title: 'Descubrimiento',
                icon: 'fas fa-lightbulb',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos cortos mostrando entrenamientos intensos de atletas del gimnasio, fragmentos de competencias locales donde atletas de CulturalGym han participado, mostrando la cultura de alto rendimiento del gimnasio.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels con entrenamientos avanzados realizados por atletas del gimnasio, carruseles mostrando los logros de los miembros en competencias, imágenes de atletas de CulturalGym en el gimnasio y en tarima.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones destacando los logros de los atletas de CulturalGym, presentando a los entrenadores con experiencia en competición, artículos de blog sobre la cultura competitiva del gimnasio.'
                    }
                ]
            },
            {
                title: 'Consideración',
                icon: 'fas fa-search',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos mostrando a los entrenadores especializados trabajando con atletas, testimonios cortos de atletas del gimnasio sobre el apoyo que reciben, mostrando el equipamiento avanzado disponible.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando sesiones de entrenamiento personalizado con los entrenadores, carruseles destacando la experiencia y conocimientos de los entrenadores, stories con preguntas y respuestas con atletas del gimnasio.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones presentando detalladamente a los entrenadores y sus especializaciones, testimonios más extensos de atletas sobre su progreso con los entrenadores del gimnasio, mostrando las instalaciones y el equipamiento avanzado.'
                    }
                ]
            },
            {
                title: 'Decisión',
                icon: 'fas fa-check-circle',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'CTAs como "¡Entrena con campeones!", videos mostrando cómo contactar a los entrenadores, testimonios de atletas invitando a otros a unirse a la comunidad competitiva.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Imágenes con CTAs para enviar un mensaje directo a los entrenadores o al gimnasio, stories con enlaces directos a la página de contacto o información sobre entrenamiento personalizado.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con información detallada sobre los programas de entrenamiento personalizado para competición, invitando a contactar para una consulta inicial con un entrenador.'
                    }
                ]
            }
        ]
    },
    {
        personaName: 'Javier "El Líder" Rojas',
        stages: [
            {
                title: 'Descubrimiento',
                icon: 'fas fa-lightbulb',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos cortos mostrando momentos divertidos de eventos comunitarios (armwrestling, baile), destacando la camaradería y el ambiente social del gimnasio.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando la participación activa de miembros en eventos y actividades sociales, carruseles con fotos de los eventos comunitarios, imágenes de miembros de diferentes edades interactuando.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones anunciando próximos eventos comunitarios, recordando eventos pasados con fotos y videos, fomentando la interacción entre los miembros en los comentarios.'
                    }
                ]
            },
            {
                title: 'Consideración',
                icon: 'fas fa-search',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos mostrando la variedad de actividades más allá del entrenamiento tradicional, testimonios cortos de miembros sobre lo mucho que disfrutan la comunidad, mostrando un ambiente acogedor para todas las edades.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando la diversidad de miembros y la inclusión en los eventos, carruseles destacando los beneficios de pertenecer a la comunidad de CulturalGym, stories con encuestas sobre qué tipo de eventos les gustaría ver en el futuro.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones creando grupos de discusión sobre temas de interés para los miembros, compartiendo historias de éxito y compañerismo dentro del gimnasio, anunciando actividades sociales y oportunidades para conectar.'
                    }
                ]
            },
            {
                title: 'Decisión',
                icon: 'fas fa-check-circle',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'CTAs como "¡Únete a nuestra gran familia!", videos mostrando la facilidad de hacerse miembro y participar en los eventos.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Imágenes con CTAs para visitar la página web o preguntar sobre la comunidad, stories con enlaces directos a información sobre la membresía y los eventos.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones invitando a nuevos miembros a unirse a la comunidad y participar en los próximos eventos, creando eventos en Facebook para las actividades sociales.'
                    }
                ]
            }
        ]
    }
];

const contentStrategies = [
    {
        personaName: 'Mateo "El Novato" Vargas',
        stages: [
            {
                title: 'Descubrimiento',
                icon: 'fas fa-lightbulb',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos cortos y dinámicos mostrando transformaciones físicas de principiantes, ejercicios básicos y efectivos para ganar músculo, consejos rápidos sobre nutrición económica para estudiantes, trends de fitness con un toque de humor.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels con rutinas sencillas para principiantes en el gimnasio, carruseles con consejos básicos de entrenamiento y nutrición, stories con preguntas y respuestas rápidas sobre dudas comunes de novatos.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con artículos de blog sencillos sobre "cómo empezar en el gimnasio sin sentirse intimidado", "errores comunes de principiantes y cómo evitarlos", videos cortos explicando la función de máquinas básicas.'
                    }
                ]
            },
            {
                title: 'Consideración',
                icon: 'fas fa-search',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos mostrando la variedad de equipamiento de CulturalGym, testimonios cortos de otros estudiantes sobre su experiencia como principiantes, mini-tours visuales del gimnasio destacando las áreas de pesas.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando entrenamientos completos para principiantes utilizando el equipamiento del gimnasio, carruseles destacando los beneficios de la membresía estudiantil, stories con encuestas sobre qué tipo de entrenamiento les interesa más a los principiantes.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con enlaces a guías más detalladas sobre "cómo elegir un gimnasio para estudiantes", comparativas de los planes de CulturalGym para estudiantes, videos más largos con entrenadores explicando rutinas para principiantes.'
                    }
                ]
            },
            {
                title: 'Decisión',
                icon: 'fas fa-check-circle',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Ofertas especiales para estudiantes mostrando el precio de la membresía diaria/mensual en pantalla de forma atractiva, videos con CTAs directas como "¡Inscríbete hoy y empieza tu transformación!", videos mostrando el ambiente amigable y motivador del gimnasio.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Imágenes atractivas con la oferta para estudiantes, stories con enlaces directos a la página de registro o contacto, testimonios de estudiantes satisfechos con su progreso en CulturalGym.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con enlaces directos a la página de registro con descuento para estudiantes, eventos promocionales para estudiantes (ej. día de puertas abiertas con descuentos), testimonios detallados de estudiantes con resultados.'
                    }
                ]
            }
        ]
    },
    {
        personaName: 'Andrés "El Desestrés" Pérez',
        stages: [
            {
                title: 'Descubrimiento',
                icon: 'fas fa-lightbulb',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos cortos mostrando entrenamientos rápidos y efectivos que se pueden hacer antes o después del trabajo, consejos para incorporar el ejercicio en una rutina ocupada, beneficios del ejercicio para reducir el estrés laboral.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels con rutinas de entrenamiento eficientes de 30-45 minutos, carruseles con consejos para mantener la energía después del trabajo, imágenes de personas entrenando con determinación después de la jornada laboral.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con artículos de blog sobre "cómo combatir el estrés laboral con el ejercicio", "rutinas de gimnasio efectivas para personas con poco tiempo", consejos para equilibrar trabajo y salud.'
                    }
                ]
            },
            {
                title: 'Consideración',
                icon: 'fas fa-search',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos mostrando la conveniencia de la ubicación de CulturalGym cerca de zonas de oficinas, horarios amplios que se adaptan a diferentes jornadas laborales, equipamiento moderno para entrenamientos eficientes.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando el gimnasio en horarios poco concurridos (ej. temprano en la mañana o tarde en la noche), carruseles destacando la calidad del equipamiento, stories con encuestas sobre sus horarios de entrenamiento preferidos.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones destacando los beneficios de la ubicación y los horarios de CulturalGym para profesionales, testimonios de otros profesionales que han encontrado tiempo para entrenar en el gimnasio, videos mostrando la calidad del equipamiento.'
                    }
                ]
            },
            {
                title: 'Decisión',
                icon: 'fas fa-check-circle',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos con CTAs como "¡Entrena antes o después del trabajo!", mostrando la facilidad de inscripción online, ofertas especiales para profesionales que se inscriban en ciertos horarios.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Imágenes con CTAs claras para visitar la página web o contactar, stories con enlaces directos a la página de contacto o registro, testimonios de profesionales satisfechos con la eficiencia de sus entrenamientos.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con enlaces directos a la página de registro con opciones de membresía flexibles, eventos o descuentos para empresas locales.'
                    }
                ]
            }
        ]
    },
    {
        personaName: 'Sofía "La Bienestar" Gómez',
        stages: [
            {
                title: 'Descubrimiento',
                icon: 'fas fa-lightbulb',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos cortos y divertidos mostrando fragmentos de clases grupales (aeróbicos, baile), testimonios rápidos de mujeres sobre lo mucho que disfrutan las clases, trends de baile con CTAs sutiles al gimnasio.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando la energía y la diversión de las clases grupales, carruseles con los horarios de las diferentes clases, imágenes de mujeres disfrutando juntas en las clases.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con los horarios completos de las clases grupales, presentaciones de las instructoras, artículos de blog sobre los beneficios de las clases grupales para la salud física y mental.'
                    }
                ]
            },
            {
                title: 'Consideración',
                icon: 'fas fa-search',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos mostrando la variedad de clases y la energía de las instructoras, testimonios de mujeres sobre cómo las clases les han ayudado a reducir el estrés y mejorar su estado de ánimo, mini-entrevistas con las instructoras.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando diferentes tipos de clases grupales, carruseles destacando los beneficios específicos de cada clase, stories con encuestas sobre qué tipo de clases les gustaría probar.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con descripciones detalladas de cada clase grupal, presentaciones más amplias de las instructoras y su experiencia, testimonios más largos de mujeres sobre su experiencia en las clases.'
                    }
                ]
            },
            {
                title: 'Decisión',
                icon: 'fas fa-check-circle',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'CTAs como "¡Únete a nuestra comunidad de baile!", videos mostrando la facilidad de reservar clases online, ofertas para probar la primera clase grupal.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Imágenes con CTAs para reservar una clase de prueba, stories con enlaces directos a la página de horarios y reservas, testimonios de mujeres que han encontrado amigas en las clases.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con enlaces directos a la página de horarios y reservas, eventos de "prueba gratuita de clases grupales", testimonios de mujeres sobre la comunidad y el apoyo que encuentran en las clases.'
                    }
                ]
            }
        ]
    },
    {
        personaName: 'Carolina "La Equilibrada" Ruiz',
        stages: [
            {
                title: 'Descubrimiento',
                icon: 'fas fa-lightbulb',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos cortos con ideas de ejercicios rápidos que se pueden hacer en casa, mostrando cómo incorporar actividad física en la rutina diaria con niños, consejos para mamás sobre cómo priorizar su bienestar.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando ejercicios sencillos que se pueden hacer en casa o en el gimnasio en poco tiempo, carruseles con consejos para encontrar tiempo para el ejercicio siendo mamá, imágenes de mamás activas y felices.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con artículos de blog sobre "ejercicio para mamás con poco tiempo", "cómo combatir el estrés postparto con actividad física", consejos para la salud y el bienestar de las madres.'
                    }
                ]
            },
            {
                title: 'Consideración',
                icon: 'fas fa-search',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos mostrando la flexibilidad de horarios de CulturalGym, testimonios cortos de otras mamás que entrenan en el gimnasio, mini-tours mostrando un ambiente acogedor y sin presiones.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando los horarios de clases en momentos estratégicos para las madres, carruseles destacando la comunidad amigable del gimnasio, stories con encuestas sobre los horarios de entrenamiento preferidos por las mamás.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones destacando la flexibilidad de horarios y el ambiente de apoyo de CulturalGym para madres, testimonios de otras mamás sobre su experiencia en el gimnasio, información sobre clases de bajo impacto o recuperación.'
                    }
                ]
            },
            {
                title: 'Decisión',
                icon: 'fas fa-check-circle',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'CTAs como "¡Encuentra tu tiempo para ti!", videos mostrando la facilidad de contactar para más información, ofertas especiales para nuevas mamás.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Imágenes con CTAs para enviar un mensaje directo o visitar la web, stories con enlaces directos a la página de contacto, testimonios de mamás satisfechas con el apoyo del gimnasio.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con enlaces directos a la página de contacto o registro, eventos informativos para madres sobre los beneficios del ejercicio y las opciones del gimnasio.'
                    }
                ]
            }
        ]
    },
    {
        personaName: 'Alexia "La Promesa" Mendoza',
        stages: [
            {
                title: 'Descubrimiento',
                icon: 'fas fa-lightbulb',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos cortos mostrando entrenamientos intensos de atletas del gimnasio, fragmentos de competencias locales donde atletas de CulturalGym han participado, mostrando la cultura de alto rendimiento del gimnasio.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels con entrenamientos avanzados realizados por atletas del gimnasio, carruseles mostrando los logros de los miembros en competencias, imágenes de atletas de CulturalGym en el gimnasio y en tarima.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones destacando los logros de los atletas de CulturalGym, presentando a los entrenadores con experiencia en competición, artículos de blog sobre la cultura competitiva del gimnasio.'
                    }
                ]
            },
            {
                title: 'Consideración',
                icon: 'fas fa-search',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos mostrando a los entrenadores especializados trabajando con atletas, testimonios cortos de atletas del gimnasio sobre el apoyo que reciben, mostrando el equipamiento avanzado disponible.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando sesiones de entrenamiento personalizado con los entrenadores, carruseles destacando la experiencia y conocimientos de los entrenadores, stories con preguntas y respuestas con atletas del gimnasio.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones presentando detalladamente a los entrenadores y sus especializaciones, testimonios más extensos de atletas sobre su progreso con los entrenadores del gimnasio, mostrando las instalaciones y el equipamiento avanzado.'
                    }
                ]
            },
            {
                title: 'Decisión',
                icon: 'fas fa-check-circle',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'CTAs como "¡Entrena con campeones!", videos mostrando cómo contactar a los entrenadores, testimonios de atletas invitando a otros a unirse a la comunidad competitiva.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Imágenes con CTAs para enviar un mensaje directo a los entrenadores o al gimnasio, stories con enlaces directos a la página de contacto o información sobre entrenamiento personalizado.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones con información detallada sobre los programas de entrenamiento personalizado para competición, invitando a contactar para una consulta inicial con un entrenador.'
                    }
                ]
            }
        ]
    },
    {
        personaName: 'Javier "El Líder" Rojas',
        stages: [
            {
                title: 'Descubrimiento',
                icon: 'fas fa-lightbulb',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos cortos mostrando momentos divertidos de eventos comunitarios (armwrestling, baile), destacando la camaradería y el ambiente social del gimnasio.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando la participación activa de miembros en eventos y actividades sociales, carruseles con fotos de los eventos comunitarios, imágenes de miembros de diferentes edades interactuando.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones anunciando próximos eventos comunitarios, recordando eventos pasados con fotos y videos, fomentando la interacción entre los miembros en los comentarios.'
                    }
                ]
            },
            {
                title: 'Consideración',
                icon: 'fas fa-search',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'Videos mostrando la variedad de actividades más allá del entrenamiento tradicional, testimonios cortos de miembros sobre lo mucho que disfrutan la comunidad, mostrando un ambiente acogedor para todas las edades.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Reels mostrando la diversidad de miembros y la inclusión en los eventos, carruseles destacando los beneficios de pertenecer a la comunidad de CulturalGym, stories con encuestas sobre qué tipo de eventos les gustaría ver en el futuro.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones creando grupos de discusión sobre temas de interés para los miembros, compartiendo historias de éxito y compañerismo dentro del gimnasio, anunciando actividades sociales y oportunidades para conectar.'
                    }
                ]
            },
            {
                title: 'Decisión',
                icon: 'fas fa-check-circle',
                platforms: [
                    {
                        name: 'TikTok',
                        icon: 'fab fa-tiktok',
                        className: 'tiktok-header',
                        content: 'CTAs como "¡Únete a nuestra gran familia!", videos mostrando la facilidad de hacerse miembro y participar en los eventos.'
                    },
                    {
                        name: 'Instagram',
                        icon: 'fab fa-instagram',
                        className: 'instagram-header',
                        content: 'Imágenes con CTAs para visitar la página web o preguntar sobre la comunidad, stories con enlaces directos a información sobre la membresía y los eventos.'
                    },
                    {
                        name: 'Facebook',
                        icon: 'fab fa-facebook',
                        className: 'facebook-header',
                        content: 'Publicaciones invitando a nuevos miembros a unirse a la comunidad y participar en los próximos eventos, creando eventos en Facebook para las actividades sociales.'
                    }
                ]
            }
        ]
    }
];

let currentPersonaIndex = 0;

function updateProgress() {
    const progress = ((currentPersonaIndex + 1) / buyerPersonas.length) * 100;
    document.querySelector('.progress-fill').style.width = progress + '%';
    document.querySelector('.progress-text').textContent = 
        `${currentPersonaIndex + 1} de ${buyerPersonas.length} - ${buyerPersonas[currentPersonaIndex].title}`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentPersonaIndex === 0;
    nextBtn.disabled = currentPersonaIndex === buyerPersonas.length - 1;
}

function renderPersona(persona) {
    const container = document.getElementById('personaContent');
    
    container.innerHTML = `
        <!-- Profile Section -->
        <div class="profile-section">
            <div class="profile-card">
                <div class="profile-image">
                    <i class="${persona.icon}"></i>
                </div>
                <div class="profile-name">${persona.name}</div>
                <div class="profile-title">${persona.title}</div>
                <div class="quick-stats">
                    <div class="stat-item">
                        <i class="fas fa-${persona.demographics.gender === 'Masculino' ? 'male' : 'female'} stat-icon"></i>
                        <span>${persona.demographics.gender}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-birthday-cake stat-icon"></i>
                        <span>${persona.demographics.age}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-map-marker-alt stat-icon"></i>
                        <span>${persona.demographics.location}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-wallet stat-icon"></i>
                        <span>${persona.demographics.income}</span>
                    </div>
                </div>
            </div>

            <div class="info-card">
                <h3><i class="fas fa-info-circle"></i>Información Demográfica</h3>
                <ul class="info-list">
                    ${persona.info.map(item => `<li><i class="fas fa-check"></i>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <!-- Goals Section -->
        <div class="goals-section">
            <div class="goals-card">
                <h3><i class="fas fa-trophy"></i>Objetivos Profesionales</h3>
                <p>${persona.professionalGoals}</p>
            </div>
            <div class="goals-card">
                <h3><i class="fas fa-star"></i>Objetivos Personales</h3>
                <ul class="info-list" style="color: white;">
                    ${persona.personalGoals.map(goal => `<li><i class="fas fa-check"></i>${goal}</li>`).join('')}
                </ul>
            </div>
        </div>

        <!-- Info Grid -->
        <div class="info-grid">
            <div class="info-card">
                <h3><i class="fas fa-heart"></i>Gustos e Intereses</h3>
                <ul class="info-list">
                    ${persona.interests.map(interest => `<li><i class="fas fa-check"></i>${interest}</li>`).join('')}
                </ul>
            </div>

            <div class="info-card">
                <h3><i class="fas fa-rocket"></i>Deseos y Aspiraciones</h3>
                <ul class="info-list">
                    ${persona.aspirations.map(aspiration => `<li><i class="fas fa-check"></i>${aspiration}</li>`).join('')}
                </ul>
            </div>
        </div>

        <!-- Challenges Section -->
        <div class="challenges-section">
            <h3><i class="fas fa-exclamation-triangle"></i>Principales Retos y Obstáculos</h3>
            <div class="challenges-grid">
                ${persona.challenges.map(challenge => `
                    <div class="challenge-item">
                        <i class="${challenge.icon}" style="color: #dc3545; font-size: 2em; margin-bottom: 10px;"></i>
                        <p><strong>${challenge.title}</strong><br>${challenge.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Quote Section -->
        <div class="quote-section">
            <div class="quote-text">${persona.complaints}</div>
            <p><strong>- Quejas más comunes de ${persona.name.split(' ')[0]}</strong></p>
        </div>

        <!-- How We Can Help -->
        <div class="info-card">
            <h3><i class="fas fa-hands-helping"></i>Cómo Podemos Ayudar</h3>
            <ul class="info-list">
                ${persona.howWeHelp.map(help => `<li><i class="fas fa-check"></i>${help}</li>`).join('')}
            </ul>
        </div>

        <!-- Information Sources -->
        <div class="sources-section">
            <h3><i class="fas fa-search"></i>Fuentes de Información Preferidas</h3>
            <div class="sources-grid">
                ${persona.sources.map(source => `
                    <div class="source-item">
                        <i class="${source.icon}"></i>
                        <p><strong>${source.name}</strong><br>${source.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderJourneyMap(journeyData) {
    const container = document.getElementById('journeyMapContent');
    
    container.innerHTML = `
        <div class="journey-map">
            <div class="journey-header">
                <h2><i class="fas fa-route"></i>Buyer Journey de ${journeyData.personaName}</h2>
                <p style="color: #6c757d;">Mapa del recorrido del cliente desde el descubrimiento hasta la decisión</p>
            </div>
            
            <div class="journey-stages">
                ${journeyData.stages.map((stage, index) => `
                    <div class="journey-stage">
                        <div class="stage-header">
                            <div class="stage-icon">
                                <i class="${stage.icon}"></i>
                            </div>
                            <div class="stage-title">${stage.title}</div>
                            <div class="stage-subtitle">${stage.subtitle}</div>
                        </div>
                        
                        <div class="stage-content">
                            ${stage.trigger ? `
                                <div class="stage-section">
                                    <div class="section-title">
                                        <i class="fas fa-bolt"></i> Detonante
                                    </div>
                                    <div class="section-content">${stage.trigger}</div>
                                </div>
                            ` : ''}
                            
                            ${stage.research ? `
                                <div class="stage-section">
                                    <div class="section-title">
                                        <i class="fas fa-search"></i> Investigación
                                    </div>
                                    <div class="section-content">${stage.research}</div>
                                </div>
                            ` : ''}
                            
                            ${stage.evaluation ? `
                                <div class="stage-section">
                                    <div class="section-title">
                                        <i class="fas fa-balance-scale"></i> Evaluación
                                    </div>
                                    <div class="section-content">${stage.evaluation}</div>
                                </div>
                            ` : ''}
                            
                            ${stage.painPoints ? `
                                <div class="stage-section pain-points">
                                    <div class="section-title">
                                        <i class="fas fa-exclamation-triangle"></i> Puntos de Dolor
                                    </div>
                                    <ul class="section-list">
                                        ${stage.painPoints.map(point => `<li>${point}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            
                            ${stage.questions ? `
                                <div class="stage-section">
                                    <div class="section-title">
                                        <i class="fas fa-question-circle"></i> Preguntas
                                    </div>
                                    <ul class="section-list">
                                        ${stage.questions.map(q => `<li>${q}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            
                            ${stage.content ? `
                                <div class="stage-section">
                                    <div class="section-title">
                                        <i class="fas fa-file-alt"></i> Contenido Buscado
                                    </div>
                                    <ul class="section-list">
                                        ${stage.content.map(c => `<li>${c}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            
                            ${stage.factors ? `
                                <div class="stage-section decision-factors">
                                    <div class="section-title">
                                        <i class="fas fa-check-circle"></i> Factores de Decisión
                                    </div>
                                    <ul class="section-list">
                                        ${stage.factors.map(f => `<li>${f}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            
                            ${stage.actions ? `
                                <div class="stage-section">
                                    <div class="section-title">
                                        <i class="fas fa-play-circle"></i> Acciones
                                    </div>
                                    <ul class="section-list">
                                        ${stage.actions.map(a => `<li>${a}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderContentStrategy(contentData) {
    const container = document.getElementById('contentStrategyContent');
    
    container.innerHTML = `
        <div class="content-strategy">
            <div class="content-header">
                <h2><i class="fas fa-bullhorn"></i>Estrategia de Contenido para ${contentData.personaName}</h2>
                <p style="color: #6c757d;">Contenido específico por plataforma y etapa del journey</p>
            </div>
            
            <div class="content-grid">
                ${contentData.stages.map((stage, stageIndex) => `
                    <div class="content-stage">
                        <div class="content-stage-title">
                            <i class="${stage.icon}"></i>
                            ${stage.title}
                        </div>
                        
                        ${stage.platforms.map((platform, platformIndex) => {
                            const uniqueId = `${currentPersonaIndex}-${stageIndex}-${platformIndex}`;
                            return `
                                <div class="platform-content">
                                    <div class="platform-header ${platform.className}">
                                        <i class="${platform.icon}"></i>
                                        ${platform.name}
                                    </div>
                                    <div class="platform-description">
                                        ${platform.content}
                                    </div>
                                    <div class="content-link-area">
                                        <div class="link-label">Agregar enlace de contenido:</div>
                                        <input 
                                            type="url" 
                                            class="content-link-input" 
                                            id="link-${uniqueId}"
                                            placeholder="https://ejemplo.com/post-o-video"
                                            onchange="toggleViewButton('${uniqueId}')"
                                        >
                                        <button 
                                            class="view-content-btn" 
                                            id="btn-${uniqueId}"
                                            onclick="openContentLink('${uniqueId}')"
                                        >
                                            <i class="fas fa-external-link-alt"></i> Ver Contenido
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function toggleViewButton(uniqueId) {
    const input = document.getElementById(`link-${uniqueId}`);
    const button = document.getElementById(`btn-${uniqueId}`);
    
    if (input.value.trim() !== '') {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

function openContentLink(uniqueId) {
    const input = document.getElementById(`link-${uniqueId}`);
    const url = input.value.trim();
    
    if (url !== '') {
        window.open(url, '_blank');
    }
}

function showPersona(index) {
    if (index >= 0 && index < buyerPersonas.length) {
        currentPersonaIndex = index;
        renderPersona(buyerPersonas[currentPersonaIndex]);
        renderJourneyMap(journeyMaps[currentPersonaIndex]);
        renderContentStrategy(contentStrategies[currentPersonaIndex]);
        updateProgress();
        updateNavigationButtons();
    }
}

function nextPersona() {
    if (currentPersonaIndex < buyerPersonas.length - 1) {
        showPersona(currentPersonaIndex + 1);
    }
}

function prevPersona() {
    if (currentPersonaIndex > 0) {
        showPersona(currentPersonaIndex - 1);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    showPersona(0);
    
    // Add event listeners
    document.getElementById('nextBtn').addEventListener('click', nextPersona);
    document.getElementById('prevBtn').addEventListener('click', prevPersona);
});
