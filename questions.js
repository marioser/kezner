// ============================================
// PREGUNTAS DE LA EVALUACIÓN
// ============================================

const questions = [
    {
        pregunta: "1. ¿Cuál de las siguientes es una característica de un proyecto?",
        opciones: [
            "Es permanente y repetitivo",
            "Tiene un inicio y fin definidos",
            "No tiene restricciones de recursos",
            "Siempre es exitoso"
        ],
        respuesta_correcta: 1,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "2. El triángulo de la gestión de proyectos incluye:",
        opciones: [
            "Tiempo, costo y calidad",
            "Alcance, tiempo y costo",
            "Recursos, tiempo y riesgo",
            "Calidad, riesgo y comunicación"
        ],
        respuesta_correcta: 1,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "3. ¿Qué es el alcance del proyecto?",
        opciones: [
            "El presupuesto total del proyecto",
            "El tiempo necesario para completar el proyecto",
            "El trabajo que debe realizarse para entregar un producto con las características especificadas",
            "Los riesgos asociados al proyecto"
        ],
        respuesta_correcta: 2,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "4. La estructura de desglose del trabajo (EDT/WBS) es:",
        opciones: [
            "Una lista de actividades del proyecto",
            "Una descomposición jerárquica del trabajo del proyecto",
            "Un cronograma detallado",
            "Un presupuesto del proyecto"
        ],
        respuesta_correcta: 1,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "5. ¿Cuál es el propósito principal de la gestión del tiempo en proyectos?",
        opciones: [
            "Minimizar los costos",
            "Asegurar que el proyecto se complete dentro del tiempo establecido",
            "Maximizar la calidad",
            "Reducir los riesgos"
        ],
        respuesta_correcta: 1,
        subcategoria: "Time Management"
    },
    {
        pregunta: "6. El método del camino crítico (CPM) se utiliza para:",
        opciones: [
            "Calcular el presupuesto del proyecto",
            "Identificar la secuencia de actividades que determina la duración mínima del proyecto",
            "Gestionar los recursos humanos",
            "Evaluar la calidad del producto"
        ],
        respuesta_correcta: 1,
        subcategoria: "Time Management"
    },
    {
        pregunta: "7. ¿Qué es la holgura (slack) en la gestión de proyectos?",
        opciones: [
            "El tiempo extra disponible en una actividad sin retrasar el proyecto",
            "El presupuesto adicional del proyecto",
            "La calidad mínima aceptable",
            "Los recursos no utilizados"
        ],
        respuesta_correcta: 0,
        subcategoria: "Time Management"
    },
    {
        pregunta: "8. Un diagrama de Gantt muestra:",
        opciones: [
            "Los costos del proyecto a lo largo del tiempo",
            "Las actividades del proyecto y su duración en el tiempo",
            "Los riesgos del proyecto",
            "La estructura organizacional del equipo"
        ],
        respuesta_correcta: 1,
        subcategoria: "Time Management"
    },
    {
        pregunta: "9. ¿Cuál es el objetivo principal de la gestión de costos del proyecto?",
        opciones: [
            "Minimizar todos los gastos",
            "Asegurar que el proyecto se complete dentro del presupuesto aprobado",
            "Maximizar las ganancias",
            "Reducir el alcance del proyecto"
        ],
        respuesta_correcta: 1,
        subcategoria: "Cost Management"
    },
    {
        pregunta: "10. El valor ganado (Earned Value) es una técnica que:",
        opciones: [
            "Mide únicamente los costos del proyecto",
            "Integra medidas de alcance, tiempo y costo para evaluar el rendimiento del proyecto",
            "Se enfoca solo en la calidad",
            "Evalúa únicamente los riesgos"
        ],
        respuesta_correcta: 1,
        subcategoria: "Cost Management"
    },
    {
        pregunta: "11. ¿Qué significa CPI (Cost Performance Index) en gestión de proyectos?",
        opciones: [
            "Índice de rendimiento de costos",
            "Índice de productividad del cronograma",
            "Índice de calidad del proyecto",
            "Índice de riesgo del costo"
        ],
        respuesta_correcta: 0,
        subcategoria: "Cost Management"
    },
    {
        pregunta: "12. Un CPI menor a 1.0 indica:",
        opciones: [
            "El proyecto está por debajo del presupuesto",
            "El proyecto está sobre el presupuesto",
            "El proyecto está a tiempo",
            "El proyecto tiene alta calidad"
        ],
        respuesta_correcta: 1,
        subcategoria: "Cost Management"
    },
    {
        pregunta: "13. ¿Cuál es el enfoque principal de la gestión de calidad en proyectos?",
        opciones: [
            "Reducir costos",
            "Acelerar el cronograma",
            "Asegurar que el proyecto satisfaga las necesidades para las cuales fue emprendido",
            "Minimizar riesgos"
        ],
        respuesta_correcta: 2,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "14. El control de calidad se enfoca en:",
        opciones: [
            "Planificar los estándares de calidad",
            "Identificar formas de mejorar la calidad",
            "Monitorear resultados específicos para determinar si cumplen con los estándares",
            "Capacitar al equipo en calidad"
        ],
        respuesta_correcta: 2,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "15. ¿Qué es el aseguramiento de calidad?",
        opciones: [
            "Inspección final del producto",
            "Aplicación sistemática de actividades de calidad para asegurar que el proyecto emplee todos los procesos necesarios",
            "Corrección de defectos",
            "Medición de la satisfacción del cliente"
        ],
        respuesta_correcta: 1,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "16. El principio de Pareto (regla 80/20) en calidad establece que:",
        opciones: [
            "80% de los problemas provienen del 20% de las causas",
            "20% de los problemas provienen del 80% de las causas",
            "80% del trabajo se hace en 20% del tiempo",
            "20% del equipo hace 80% del trabajo"
        ],
        respuesta_correcta: 0,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "17. ¿Qué es un riesgo en gestión de proyectos?",
        opciones: [
            "Un problema que ya ocurrió",
            "Un evento o condición incierta que puede tener un efecto positivo o negativo en el proyecto",
            "Una actividad del cronograma",
            "Un costo adicional"
        ],
        respuesta_correcta: 1,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "18. El análisis cualitativo de riesgos se enfoca en:",
        opciones: [
            "Calcular el costo exacto de los riesgos",
            "Priorizar riesgos según su probabilidad e impacto",
            "Eliminar todos los riesgos",
            "Transferir riesgos a terceros"
        ],
        respuesta_correcta: 1,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "19. ¿Cuál de las siguientes es una estrategia para riesgos negativos?",
        opciones: [
            "Explotar",
            "Mejorar",
            "Compartir",
            "Mitigar"
        ],
        respuesta_correcta: 3,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "20. El registro de riesgos contiene:",
        opciones: [
            "Solo los riesgos identificados",
            "Riesgos identificados, análisis y respuestas planificadas",
            "Únicamente las respuestas a los riesgos",
            "Solo los riesgos que ya ocurrieron"
        ],
        respuesta_correcta: 1,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "21. ¿Cuál es el objetivo principal de la gestión de recursos humanos en proyectos?",
        opciones: [
            "Reducir costos de personal",
            "Organizar, gestionar y liderar el equipo del proyecto",
            "Contratar más personal",
            "Minimizar conflictos"
        ],
        respuesta_correcta: 1,
        subcategoria: "Human Resources Management"
    },
    {
        pregunta: "22. La matriz de asignación de responsabilidades (RACI) define:",
        opciones: [
            "Los salarios del equipo",
            "Quién es Responsable, Aprobador, Consultado e Informado para cada actividad",
            "El cronograma del proyecto",
            "Los riesgos del proyecto"
        ],
        respuesta_correcta: 1,
        subcategoria: "Human Resources Management"
    },
    {
        pregunta: "23. ¿Qué significa la 'R' en la matriz RACI?",
        opciones: [
            "Revisar",
            "Responsable",
            "Reportar",
            "Rechazar"
        ],
        respuesta_correcta: 1,
        subcategoria: "Human Resources Management"
    },
    {
        pregunta: "24. El desarrollo del equipo incluye:",
        opciones: [
            "Solo capacitación técnica",
            "Mejorar competencias, interacción y ambiente del equipo",
            "Únicamente actividades sociales",
            "Solo evaluaciones de desempeño"
        ],
        respuesta_correcta: 1,
        subcategoria: "Human Resources Management"
    },
    {
        pregunta: "25. ¿Cuál es el propósito de la gestión de comunicaciones del proyecto?",
        opciones: [
            "Reducir reuniones",
            "Asegurar la generación, recopilación, distribución y disposición final de la información del proyecto",
            "Minimizar documentación",
            "Controlar rumores"
        ],
        respuesta_correcta: 1,
        subcategoria: "Communications Management"
    },
    {
        pregunta: "26. El plan de gestión de comunicaciones debe incluir:",
        opciones: [
            "Solo los canales de comunicación",
            "Qué información comunicar, a quién, cuándo y cómo",
            "Únicamente las reuniones programadas",
            "Solo los reportes de estado"
        ],
        respuesta_correcta: 1,
        subcategoria: "Communications Management"
    },
    {
        pregunta: "27. ¿Cuál es la regla general para el número de canales de comunicación en un equipo?",
        opciones: [
            "n + 1",
            "n × 2",
            "n(n-1)/2",
            "n²"
        ],
        respuesta_correcta: 2,
        subcategoria: "Communications Management"
    },
    {
        pregunta: "28. Los informes de rendimiento del proyecto deben:",
        opciones: [
            "Enviarse solo al final del proyecto",
            "Incluir información sobre el estado actual y pronósticos",
            "Contener solo buenas noticias",
            "Ser preparados únicamente por el gerente de proyecto"
        ],
        respuesta_correcta: 1,
        subcategoria: "Communications Management"
    },
    {
        pregunta: "29. ¿Qué es la gestión de adquisiciones del proyecto?",
        opciones: [
            "Comprar todos los materiales necesarios",
            "Los procesos para comprar o adquirir productos, servicios o resultados externos al equipo",
            "Contratar personal adicional",
            "Vender productos del proyecto"
        ],
        respuesta_correcta: 1,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "30. Un contrato de precio fijo es mejor cuando:",
        opciones: [
            "El alcance está mal definido",
            "Hay muchas incertidumbres",
            "El alcance está bien definido y es estable",
            "Se requiere máxima flexibilidad"
        ],
        respuesta_correcta: 2,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "31. ¿Qué tipo de contrato transfiere más riesgo al vendedor?",
        opciones: [
            "Costo más honorarios fijos",
            "Precio fijo firme",
            "Tiempo y materiales",
            "Costo más honorarios con incentivos"
        ],
        respuesta_correcta: 1,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "32. El proceso de cierre de adquisiciones incluye:",
        opciones: [
            "Solo el pago final",
            "Verificación de productos, actualización de registros y archivo de información",
            "Únicamente la firma del contrato",
            "Solo la evaluación del proveedor"
        ],
        respuesta_correcta: 1,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "33. ¿Cuál de los siguientes NO es un grupo de procesos de gestión de proyectos?",
        opciones: [
            "Inicio",
            "Planificación",
            "Implementación",
            "Cierre"
        ],
        respuesta_correcta: 2,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "34. El acta de constitución del proyecto (Project Charter) es:",
        opciones: [
            "Un documento que autoriza formalmente la existencia del proyecto",
            "El cronograma detallado del proyecto",
            "El presupuesto del proyecto",
            "La lista de riesgos del proyecto"
        ],
        respuesta_correcta: 0,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "35. ¿Quién debe aprobar el acta de constitución del proyecto?",
        opciones: [
            "El gerente de proyecto",
            "El equipo del proyecto",
            "El patrocinador del proyecto",
            "Los usuarios finales"
        ],
        respuesta_correcta: 2,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "36. La línea base del alcance incluye:",
        opciones: [
            "Solo la EDT",
            "EDT, diccionario de la EDT y declaración del alcance",
            "Solo la declaración del alcance",
            "Únicamente el diccionario de la EDT"
        ],
        respuesta_correcta: 1,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "37. Los tres tipos principales de estimación de costos son:",
        opciones: [
            "Orden de magnitud, paramétrica y presupuestaria",
            "Paramétrica, definitiva y de arriba hacia abajo",
            "Orden de magnitud, definitiva y de abajo hacia arriba",
            "Orden de magnitud, presupuestaria y definitiva"
        ],
        respuesta_correcta: 3,
        subcategoria: "Cost Management"
    },
    {
        pregunta: "38. Los buenos objetivos de proyecto deben ser:",
        opciones: [
            "Generales en vez de específicos",
            "Establecidos sin considerar restricciones de recursos",
            "Realistas y alcanzables",
            "Medibles, intangibles y verificables"
        ],
        respuesta_correcta: 2,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "39. El proceso de determinar qué riesgos pueden afectar el proyecto y documentar sus características es:",
        opciones: [
            "Identificación de riesgos",
            "Planificación de la respuesta a los riesgos",
            "Planificación de la gestión de riesgos",
            "Análisis cualitativo de riesgos"
        ],
        respuesta_correcta: 0,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "40. ¿En qué tipo de contrato es más probable que el contratista controle los costos?",
        opciones: [
            "Costo más honorarios fijos",
            "Precio fijo firme",
            "Tiempo y materiales",
            "Precio fijo con incentivos"
        ],
        respuesta_correcta: 1,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "41. ¿Cuál de las siguientes afirmaciones sobre el cronograma del proyecto es correcta?",
        opciones: [
            "El cronograma identifica las actividades del proyecto y sus relaciones, pero no su duración",
            "El cronograma es una herramienta útil únicamente para la fase de ejecución del proyecto",
            "El cronograma proporciona una base para monitorear y controlar el progreso del proyecto",
            "El cronograma debe prepararse solo por el gerente del proyecto"
        ],
        respuesta_correcta: 2,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "42. El proceso que consiste en subdividir los entregables y el trabajo del proyecto en componentes más pequeños y manejables se llama:",
        opciones: [
            "Desarrollo del plan de gestión",
            "Descomposición",
            "Codificación de cuentas",
            "Asignación de recursos"
        ],
        respuesta_correcta: 1,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "43. ¿Cuál de los siguientes NO es una herramienta o técnica para el análisis cualitativo de riesgos?",
        opciones: [
            "Evaluación de probabilidad e impacto",
            "Matrices de probabilidad e impacto",
            "Técnicas de representación de datos",
            "Análisis Monte Carlo"
        ],
        respuesta_correcta: 3,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "44. En la gestión de la calidad del proyecto, ¿cuál de los siguientes conceptos está más relacionado con la prevención de errores?",
        opciones: [
            "Inspección",
            "Planificación de la calidad",
            "Control de calidad",
            "Aseguramiento de la calidad"
        ],
        respuesta_correcta: 1,
        subcategoria: "Cost Management"
    },
    {
        pregunta: "45. ¿Cuál de los siguientes contratos tiene el mayor riesgo para el comprador?",
        opciones: [
            "Precio fijo firme",
            "Costo más honorarios fijos",
            "Costo más porcentaje de honorarios",
            "Precio fijo con incentivos"
        ],
        respuesta_correcta: 2,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "46. Una técnica utilizada para identificar relaciones lógicas entre las actividades del cronograma es:",
        opciones: [
            "Estimación paramétrica",
            "Método de la cadena crítica",
            "Método del camino crítico",
            "Técnica Delphi"
        ],
        respuesta_correcta: 2,
        subcategoria: "Human Resources Management"
    },
    {
        pregunta: "47. El proceso de controlar las comunicaciones del proyecto para asegurar que la información es apropiada y llega a los interesados adecuados es:",
        opciones: [
            "Planificar las comunicaciones",
            "Gestionar las comunicaciones",
            "Controlar las comunicaciones",
            "Distribuir la información"
        ],
        respuesta_correcta: 2,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "48. ¿Cuál de los siguientes no es un principio básico del desarrollo del equipo de proyecto?",
        opciones: [
            "Comunicación abierta y efectiva",
            "Claridad en los roles y responsabilidades",
            "Competencia técnica de todos los miembros",
            "Confianza y respeto mutuo"
        ],
        respuesta_correcta: 2,
        subcategoria: "Time Management"
    },
    {
        pregunta: "49. ¿Qué herramienta es más utilizada para analizar la causa raíz de un problema de calidad?",
        opciones: [
            "Diagrama de Ishikawa (espina de pescado)",
            "Gráfica de Gantt",
            "Diagrama de flujo",
            "Lista de verificación"
        ],
        respuesta_correcta: 0,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "50. El proceso de obtener las respuestas, apoyo y recursos necesarios de los interesados para tener éxito en el proyecto es:",
        opciones: [
            "Gestionar la participación de los interesados",
            "Identificar a los interesados",
            "Gestionar las comunicaciones",
            "Planificar la gestión de los interesados"
        ],
        respuesta_correcta: 0,
        subcategoria: "Cost Management"
    },
    {
        pregunta: "51. ¿Cuál de los siguientes métodos es el más efectivo para resolver conflictos dentro del equipo de proyecto?",
        opciones: [
            "Imposición",
            "Evitación",
            "Confrontación (resolución de problemas)",
            "Suavización"
        ],
        respuesta_correcta: 2,
        subcategoria: "Time Management"
    },
    {
        pregunta: "52. Un contrato de precio fijo es preferido por el comprador cuando:",
        opciones: [
            "El alcance del trabajo está claramente definido",
            "El trabajo es innovador y poco definido",
            "El vendedor asume poco riesgo",
            "Hay muchas incertidumbres en el proyecto"
        ],
        respuesta_correcta: 0,
        subcategoria: "Human Resources Management"
    },
    {
        pregunta: "53. El proceso de determinar las políticas, procedimientos y documentación para la planificación, desarrollo, gestión, ejecución y control de las actividades de gestión de proyectos es:",
        opciones: [
            "Desarrollar el plan para la dirección del proyecto",
            "Dirigir y gestionar el trabajo del proyecto",
            "Monitorear y controlar el trabajo del proyecto",
            "Cierre del proyecto o fase"
        ],
        respuesta_correcta: 0,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "54. Una de las principales responsabilidades del gerente de proyecto es:",
        opciones: [
            "Aprobar todos los contratos",
            "Asegurar la satisfacción del cliente",
            "Realizar todas las tareas técnicas",
            "Monitorear el rendimiento individual del equipo"
        ],
        respuesta_correcta: 1,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "55. La principal diferencia entre la estructura funcional y la matricial en la organización de proyectos es:",
        opciones: [
            "La cantidad de comunicación informal",
            "La claridad de la autoridad",
            "El nivel de integración entre áreas",
            "La duración del proyecto"
        ],
        respuesta_correcta: 2,
        subcategoria: "Human Resources Management"
    },
    {
        pregunta: "56. El proceso de mejorar las competencias, la interacción y el ambiente general del equipo es:",
        opciones: [
            "Gestionar el equipo",
            "Desarrollar el equipo",
            "Adquirir el equipo",
            "Planificar la gestión de recursos"
        ],
        respuesta_correcta: 1,
        subcategoria: "Communications Management"
    },
    {
        pregunta: "57. ¿Cuál es el propósito principal del control de cambios en un proyecto?",
        opciones: [
            "Permitir que todos los cambios sean implementados inmediatamente",
            "Asegurar que los cambios sean considerados de manera controlada y aprobada",
            "Reducir el número de cambios durante el proyecto",
            "Aumentar la flexibilidad del equipo"
        ],
        respuesta_correcta: 1,
        subcategoria: "Human Resources Management"
    },
    {
        pregunta: "58. ¿Qué documento define la justificación del proyecto, los requisitos iniciales, los productos entregables clave y el gerente del proyecto asignado?",
        opciones: [
            "Acta de constitución del proyecto",
            "Plan para la dirección del proyecto",
            "Estructura de desglose del trabajo (EDT)",
            "Declaración del alcance del proyecto"
        ],
        respuesta_correcta: 0,
        subcategoria: "Time Management"
    },
    {
        pregunta: "59. El método que permite obtener el valor presente de los flujos de efectivo futuros asociados con un proyecto se llama:",
        opciones: [
            "Tasa interna de retorno (TIR)",
            "Valor presente neto (VPN)",
            "Análisis de punto de equilibrio",
            "Costo de oportunidad"
        ],
        respuesta_correcta: 1,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "60. ¿Cuál es la herramienta preferida para controlar los cambios en el cronograma del proyecto?",
        opciones: [
            "Línea base del cronograma",
            "Acta de constitución del proyecto",
            "Plan de recursos humanos",
            "Plan de gestión de las comunicaciones"
        ],
        respuesta_correcta: 0,
        subcategoria: "Scope Management"
    },
    {
        pregunta: "61. ¿Cuál de los siguientes es un ejemplo de una técnica de resolución de conflictos?",
        opciones: [
            "Desviación",
            "Evasión",
            "Compromiso",
            "Negación"
        ],
        respuesta_correcta: 2,
        subcategoria: "Cost Management"
    },
    {
        pregunta: "62. ¿Cuál es la mejor manera de asegurar que los entregables del proyecto cumplen con los requisitos del cliente?",
        opciones: [
            "Inspección del cliente al final del proyecto",
            "Verificación y control de calidad en cada fase",
            "Revisión del contrato después del cierre",
            "Solo comunicación frecuente con el cliente"
        ],
        respuesta_correcta: 1,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "63. ¿Cuál de los siguientes eventos ocurre primero en el ciclo de vida de un proyecto?",
        opciones: [
            "Cierre del proyecto",
            "Ejecución del trabajo del proyecto",
            "Desarrollo del plan de dirección del proyecto",
            "Identificación de los interesados"
        ],
        respuesta_correcta: 3,
        subcategoria: "Time Management"
    },
    {
        pregunta: "64. ¿Cuál de las siguientes NO es una responsabilidad típica del gerente de proyecto?",
        opciones: [
            "Definir el alcance",
            "Gestionar el presupuesto",
            "Aprobar el acta de constitución",
            "Liderar el equipo"
        ],
        respuesta_correcta: 2,
        subcategoria: "Communications Management"
    },
    {
        pregunta: "65. ¿Cuál de las siguientes NO es una característica de un equipo de alto rendimiento?",
        opciones: [
            "Comunicación abierta",
            "Conflictos sin resolver",
            "Objetivos claros",
            "Apoyo mutuo"
        ],
        respuesta_correcta: 1,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "66. El proceso de documentar las acciones necesarias para definir, preparar, integrar y coordinar todos los planes subsidiarios es:",
        opciones: [
            "Desarrollar el plan para la dirección del proyecto",
            "Planificar la gestión del alcance",
            "Crear la EDT",
            "Gestionar el cronograma"
        ],
        respuesta_correcta: 0,
        subcategoria: "Human Resources Management"
    },
    {
        pregunta: "67. El propósito principal de una reunión de inicio de proyecto (kickoff) es:",
        opciones: [
            "Planificar la gestión de las comunicaciones",
            "Alinear las expectativas de los interesados",
            "Desarrollar la EDT",
            "Obtener aprobación del patrocinador"
        ],
        respuesta_correcta: 1,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "68. ¿Qué herramienta se utiliza comúnmente para identificar y documentar los interesados del proyecto?",
        opciones: [
            "Registro de interesados",
            "Acta de constitución",
            "Matriz de asignación de responsabilidades",
            "Cronograma del proyecto"
        ],
        respuesta_correcta: 0,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "69. ¿Cuál es la mejor forma de gestionar los riesgos conocidos en un proyecto?",
        opciones: [
            "Ignorarlos",
            "Desarrollar respuestas a los riesgos",
            "Transferirlos siempre al cliente",
            "Reunirse semanalmente para hablar de ellos"
        ],
        respuesta_correcta: 1,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "70. El análisis del valor ganado se utiliza principalmente para:",
        opciones: [
            "Estimar los costos futuros",
            "Medir el rendimiento del proyecto en costo y cronograma",
            "Analizar la calidad del producto",
            "Identificar los interesados"
        ],
        respuesta_correcta: 1,
        subcategoria: "Communications Management"
    },
    {
        pregunta: "71. ¿Cuál de los siguientes es un objetivo principal de la gestión de la integración del proyecto?",
        opciones: [
            "Gestionar la adquisición de recursos externos",
            "Asegurar que los cambios se gestionen de manera coordinada",
            "Preparar el acta de constitución",
            "Desarrollar el cronograma del proyecto"
        ],
        respuesta_correcta: 1,
        subcategoria: "Time Management"
    },
    {
        pregunta: "72. El proceso de dividir los entregables y el trabajo del proyecto en componentes más pequeños y manejables se conoce como:",
        opciones: [
            "Descomposición",
            "Creación de la EDT",
            "Asignación de recursos",
            "Definición de actividades"
        ],
        respuesta_correcta: 0,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "73. ¿Cuál de los siguientes documentos sirve como guía para las adquisiciones del proyecto?",
        opciones: [
            "Plan de gestión de adquisiciones",
            "Registro de interesados",
            "Plan de recursos humanos",
            "Cronograma del proyecto"
        ],
        respuesta_correcta: 0,
        subcategoria: "Cost Management"
    },
    {
        pregunta: "74. En la matriz de asignación de responsabilidades (RAM), ¿qué representa la intersección entre una tarea y una persona?",
        opciones: [
            "El nivel de autoridad",
            "El rol asignado a la persona en la tarea",
            "La duración de la tarea",
            "El costo asociado"
        ],
        respuesta_correcta: 1,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "75. ¿Qué técnica se utiliza para mostrar gráficamente la secuencia lógica de las actividades del proyecto?",
        opciones: [
            "Diagrama de flujo",
            "Diagrama de red",
            "Cronograma de barras",
            "Matriz de asignación"
        ],
        respuesta_correcta: 1,
        subcategoria: "Communications Management"
    },
    {
        pregunta: "76. El proceso de asegurar que todos los entregables cumplen con los requisitos especificados se denomina:",
        opciones: [
            "Control de calidad",
            "Aseguramiento de la calidad",
            "Gestión de la calidad",
            "Inspección del producto"
        ],
        respuesta_correcta: 0,
        subcategoria: "Risk Management"
    },
    {
        pregunta: "77. ¿Cuál de los siguientes es un resultado del proceso de identificar riesgos?",
        opciones: [
            "Lista de riesgos identificados",
            "Plan de respuesta a los riesgos",
            "Registro de interesados",
            "Plan de gestión de calidad"
        ],
        respuesta_correcta: 0,
        subcategoria: "Procurement Management"
    },
    {
        pregunta: "78. El principal objetivo del proceso de controlar el cronograma es:",
        opciones: [
            "Asegurar que los cambios en el cronograma se gestionen adecuadamente",
            "Desarrollar la EDT",
            "Identificar los interesados",
            "Elaborar el presupuesto"
        ],
        respuesta_correcta: 0,
        subcategoria: "Quality Management"
    },
    {
        pregunta: "79. ¿Cuál de los siguientes es un beneficio clave de utilizar la EDT en la planificación del proyecto?",
        opciones: [
            "Asegurar la calidad del producto",
            "Facilitar la estimación y control del trabajo",
            "Reducir el costo total del proyecto",
            "Eliminar los riesgos del proyecto"
        ],
        respuesta_correcta: 1,
        subcategoria: "Communications Management"
    },
    {
        pregunta: "80. ¿Cuál de los siguientes métodos es el más adecuado para analizar la variación entre el desempeño real y el planificado del proyecto?",
        opciones: [
            "Análisis de valor ganado",
            "Análisis Monte Carlo",
            "Tormenta de ideas",
            "Diagrama de Pareto"
        ],
        respuesta_correcta: 0,
        subcategoria: "Cost Management"
    }
];
