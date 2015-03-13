(function() {
	angular.module('maiko.services', [])
		.factory('ContactService', ['$http', '$q', function ($http, $q) {

			var messageError = "No se puedo enviar la consulta. Por favor intenta más tarde!";

			function sendQuery(contact) {
				var deferred = $q.defer();
				$http.post("/partials/contacto", contact)
					.success(function (data, status) {
						if (status === 200) {
							contact = {
								message: "Consulta enviada!"
							};
						}
						else {
							contact.message = messageError;
						}
						deferred.resolve(contact);
					})
					.error(function (data, status) {
						contact.message = messageError;
						deferred.resolve(contact);
					});
				return deferred.promise;
			}

			return {
				sendQuery: sendQuery
			}
		}])
		.factory('InfoService', [function () {
			var img = {
				anteriorServicio: "/static/img/anterior-servicio.png",
				siguienteServicio: "/static/img/siguiente-servicio.png",
			}

			return {
				img: img
			}
		}])
		.factory('ServiceService', [function() {
			
			var services = {
				values: [
					{
						background: "redes-electricas.jpg",
						desc: [
							"Supervisión y mantenimiento de redes eléctricas de media y baja tensión, en coordinación con los operadores de red.",
							"Revisión, redistribución y balanceo de cargas en circuitos eléctricos normales y regulados, retorqueo de conexiones en contactores y tableros de sistemas de control y potencia.",
							"Cumplimiento del Reglamento Técnico de Instalaciones Eléctricas (RETIE) en todas las instalaciones",
							"Cálculo y diseño de tableros de control y potencia para redes eléctricas en nuevas áreas, con planimetría unifilar y memorias de cálculo. ",
							"Sistemas de iluminación fluorescente, incandescente, vapor de mercurio, luz mixta. Calculo luminotécnico de iluminación e implementación de nuevas tecnologías de ahorro y control."
						],
						name:"Redes eléctricas"
					},
					{
						background: "mamposteria-techos-falsos.jpg",
						desc: [
							"Reparación y/o construcción de muros (ladrillo-bloque) y sistemas ligeros           (drywall-superboard) en enchape o estuco.",
							"Mantenimiento de pisos duros y laminados.",
							"Pintura epoxica, vinilo, esmalte, o lacado de estructuras metálicas para todo tipo de áreas (laboratorios, oficinas, áreas de producción, zonas externas).",
							"Impermeabilización y limpieza de cubiertas y canales de agua lluvia",
							"Diseño e instalación de techos falsos en sistemas ligeros como drywall y/o fibra mineral. Integración de otros sistemas a techo falso como iluminación, sistema de detección, audio y video."
						],
						name: "Mampostería y techos falsos"
					},
					{
						background: "red-hidraulica.jpg",
						desc: [
							"Planes de mantenimiento para sistemas de red hidráulica, bombas de impulsión, sistemas hidroneumáticos, bombas sumergibles y de sistemas de arranque automático por sensores y limpieza y calibración de Hidroacumuladores. Ajuste de parámetros de presión y flujo de agua, revisión y diseño de controles de alternación. Revisión de todos los dispositivos del sistema como tuberías de agua potable, desagües, cheques, uniones, válvulas, etc.",
							"Pintura epóxica y mantenimiento de tanques de almacenamiento."
						],
						name:"Red hidráulica"
					},
					{
						background: "limpieza-areas.jpg",
						desc: [
							"Levantamiento de procesos operativos de limpieza de áreas.",
							"Creación e implementación  de rutinas de trabajo basados en tiempos estandarizados, estudio de tiempos y movimientos, disponibilidad y flexibilidad en  horarios para la atención de las necesidades de su compañía.",
							"Coordinación de servicios especializados con personal calificado y certificado como: lavado de fachadas con trabajo en alturas, limpieza de áreas en espacios confinados, lavado de tapetes, etc., garantizando el cumplimiento de la normatividad vigente en seguridad industrial y la mejor oferta costo-beneficio."
						],
						name:"Limpieza de áreas"
					},
					{
						background: "audio-video.jpg",
						desc: [
							"Reparación de equipos electrónicos de audio y video,  videobeam con ascensor de techo, televisores, amplificadores, etc. Suministro e Instalación de telones eléctricos, cajas de piso con conexiones VGA-HDMI-Audio-puntos eléctricos.",
							"Diseño e instalación de sistemas de audio y video en salones integrando  proyectores, pantallas, microfonía, pizarrones interactivos, videoconferencia, iluminación, sistemas de audio, así como pantalla táctil para controlar los elementos instalados incluyendo cortinas y el aire acondicionado o cualquier dispositivo electrónico de la sala . "
						],
						name:"Audio y video"
					},
					{
						background: "ornamentacion.jpg",
						desc: [
							"Fabricación, reparación, mantenimiento y pintura de estructuras metálicas, ventaneria, puertas, cerramientos perimetrales, etc. ",
							"Estructuras ligeras en aluminio y acero inoxidable, para áreas internas, y externas. "
						],
						name:"Ornamentación"
					},
					{
						background: "puertas-ingreso.jpg",					
						desc: [
							"Mantenimiento de puertas de ingreso peatonal y vehicular",
							"Limpieza y verificación de funcionamiento de rieles de desplazamiento, correas de movimiento, guardas, brazos de accionamiento hidráulico, revisión de moto reductores, finales de carrera, sensores, limpieza y lubricación de piñones y cremalleras, pintura general con poliuretano o lacas. "
						],
						name:"Ingresos"
					},
					{
						background: "mobiliario.jpg",
						desc: [
							"Instalación, desmonte y rediseño de espacios con mobiliario de oficina. Superficies de escritorio, gabinetes, cajoneras, divisiones modulares.",
							"Mantenimiento, reubicación  y revisión de archivos rodantes en todos los sistemas.",
							"Revisión y arreglo de cortinas tipo Sun Out y Black Out."
						],
						name:"Mobiliario"
					},
					{
						background: "planimetria-anicacion.jpg",
						desc: [
							"Levantamiento de planimetría total de áreas y/o digitalización de planimetría existente.",
							"Creación de planos en AutoCAD localizando estructura de la construcción, sistemas de agua potable, desagües, puntos eléctricos, sistemas de ventilación y extracción, red contra incendios, voz y datos, mobiliario y asignación de áreas en m2.",
							"Planos 3D a partir de planimetrías 2D con el fin de ubicar la ruta de cada sistema y renderización de áreas externas e internas. ",
						],
						name:"Planimetría y animación 2D y 3D"
					},
					{
						background: "administracion-tecnica.jpg",
						desc: [
							"En mantenimiento de equipos especializados, somos una gran ayuda para su empresa, pues brindamos una administración y asesoría técnica a nuestros clientes sobre el alcance, gestión y conocimiento general de los equipos, esto con el fin de servir de interlocutor con los proveedores especializados y así poder manejar un único lenguaje que sirva para comprender la gestión realizada por dichos proveedores como: UPS, generadores eléctricos, subestaciones, aire acondicionado, cuartos fríos, ascensores, red contra incendio, etc. "
						],
						name:"Administración técnica"
					},
					{
						background: "proyectos-ahorro-recursos.jpg",
						desc: [
							"Diseño, cálculo y gestión de proyectos que contribuyan con el ahorro de recursos hídricos y eléctricos mediante tecnologías innovadoras.",
							"Iluminación LED para áreas comunes y empresariales, que contribuyen con un ahorro hasta del 80% en sus consumos eléctricos. Garantías extensas en los productos que hacen sostenibles y viables los proyectos. ",
							"Estudio económico que soporte el retorno de inversión. ",
							"Acompañamiento y asesoría técnica de las mejores prácticas de implementación de este tipo de proyectos en el mercado. "
						],
						name:"Proyectos de ahorro de recursos"
					}
				]
			};

			return {
				services: services
			}
		}]);
})();