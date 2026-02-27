/* ============================================================
   Equitable Law Firm — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ---------- DOM References ---------- */
  var header = document.querySelector('.header');
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');
  var navLinks = document.querySelectorAll('.nav__link');
  var contactForm = document.getElementById('contactForm');

  /* ==========================================================
     i18n — Simple Translation System
     ========================================================== */
  var translations = {
    // ===== SHARED / GLOBAL =====
    // Nav links
    'nav.home': { en: 'Home', es: 'Inicio' },
    'nav.about': { en: 'About', es: 'Nosotros' },
    'nav.practice': { en: 'Practice Areas', es: 'Areas de Practica' },
    'nav.results': { en: 'Results', es: 'Resultados' },
    'nav.contact': { en: 'Contact', es: 'Contacto' },

    // Header
    'header.consultation': { en: 'Free Consultation', es: 'Consulta Gratis' },

    // Footer headings
    'footer.practice': { en: 'Practice Areas', es: 'Areas de Practica' },
    'footer.quicklinks': { en: 'Quick Links', es: 'Enlaces Rapidos' },
    'footer.offices': { en: 'Our Offices', es: 'Nuestras Oficinas' },
    'footer.tagline': {
      en: 'Justice Within Reach. Serving injured workers and accident victims across Los Angeles and Southern California for over 25 years.',
      es: 'Justicia a Su Alcance. Sirviendo a trabajadores lesionados y victimas de accidentes en Los Angeles y el Sur de California por mas de 25 anos.'
    },
    'footer.home': { en: 'Home', es: 'Inicio' },
    'footer.aboutus': { en: 'About Us', es: 'Nosotros' },
    'footer.contact': { en: 'Contact', es: 'Contacto' },
    'footer.call': { en: 'Call (800) 360-3038', es: 'Llame al (800) 360-3038' },
    'footer.pi': { en: 'Personal Injury', es: 'Lesiones Personales' },
    'footer.wc': { en: "Workers' Compensation", es: 'Compensacion de Trabajadores' },
    'footer.el': { en: 'Employment Law', es: 'Derecho Laboral' },
    'footer.cd': { en: 'Criminal Defense', es: 'Defensa Criminal' },
    'footer.copy': {
      en: '\u00A9 2025 Equitable Law Firm. All rights reserved.',
      es: '\u00A9 2025 Equitable Law Firm. Todos los derechos reservados.'
    },
    'footer.disclaimer': {
      en: 'This website is for informational purposes only and does not constitute legal advice. Contacting Equitable Law Firm through this site does not create an attorney-client relationship. Past results do not guarantee future outcomes. This is a demo website built by Adaptation Living LLC.',
      es: 'Este sitio web es solo para fines informativos y no constituye asesoramiento legal. Contactar a Equitable Law Firm a traves de este sitio no crea una relacion abogado-cliente. Los resultados pasados no garantizan resultados futuros. Este es un sitio web de demostracion creado por Adaptation Living LLC.'
    },

    // ===== INDEX PAGE =====
    'hero.badge': {
      en: 'Serving Los Angeles & Southern California',
      es: 'Sirviendo a Los Angeles y el Sur de California'
    },
    'hero.title': {
      en: 'Fighting for the <span class="text-accent">Compensation</span> You Deserve',
      es: 'Luchando por la <span class="text-accent">Compensacion</span> que Usted Merece'
    },
    'hero.subtitle': {
      en: 'When you have been injured due to someone else\'s negligence, you need a proven legal team on your side. Equitable Law Firm has recovered millions for personal injury and workers\' compensation clients across Los Angeles.',
      es: 'Cuando usted ha sido lesionado debido a la negligencia de otra persona, necesita un equipo legal probado a su lado. Equitable Law Firm ha recuperado millones para clientes de lesiones personales y compensacion de trabajadores en todo Los Angeles.'
    },
    'hero.btn.consultation': { en: 'Free Consultation', es: 'Consulta Gratis' },
    'hero.btn.call': { en: 'Call Now', es: 'Llame Ahora' },

    // Practice Areas section (index)
    'practice.badge': { en: 'What We Do', es: 'Lo Que Hacemos' },
    'practice.heading': { en: 'Our Practice Areas', es: 'Nuestras Areas de Practica' },
    'practice.subheading': {
      en: 'We focus on the areas of law where we can make the greatest impact for individuals and families facing difficult times.',
      es: 'Nos enfocamos en las areas del derecho donde podemos tener el mayor impacto para individuos y familias que enfrentan momentos dificiles.'
    },
    'practice.pi.title': { en: 'Personal Injury', es: 'Lesiones Personales' },
    'practice.pi.desc': {
      en: 'Car accidents, truck collisions, motorcycle injuries, pedestrian incidents, and rideshare accidents. We fight to get you full and fair compensation for your injuries.',
      es: 'Accidentes de auto, colisiones de camiones, lesiones de motocicleta, incidentes peatonales y accidentes de transporte compartido. Luchamos para obtener una compensacion completa y justa por sus lesiones.'
    },
    'practice.wc.title': { en: "Workers' Compensation", es: 'Compensacion de Trabajadores' },
    'practice.wc.desc': {
      en: 'Workplace injuries, repetitive stress conditions, and occupational illnesses. We ensure you receive the medical care and wage benefits you are entitled to under California law.',
      es: 'Lesiones en el trabajo, condiciones de estres repetitivo y enfermedades ocupacionales. Nos aseguramos de que reciba la atencion medica y los beneficios salariales a los que tiene derecho bajo la ley de California.'
    },
    'practice.el.title': { en: 'Employment Law', es: 'Derecho Laboral' },
    'practice.el.desc': {
      en: 'Wrongful termination, workplace discrimination, sexual harassment, and wage disputes. We protect your rights as an employee under California\'s strong labor laws.',
      es: 'Despido injustificado, discriminacion laboral, acoso sexual y disputas salariales. Protegemos sus derechos como empleado bajo las fuertes leyes laborales de California.'
    },
    'practice.cd.title': { en: 'Criminal Defense', es: 'Defensa Criminal' },
    'practice.cd.desc': {
      en: 'DUI, drug charges, theft, assault, and other criminal matters. We provide aggressive defense to protect your freedom, your record, and your future.',
      es: 'DUI, cargos de drogas, robo, asalto y otros asuntos criminales. Proporcionamos una defensa agresiva para proteger su libertad, su historial y su futuro.'
    },
    'practice.learnmore': { en: 'Learn More', es: 'Mas Informacion' },

    // Why Choose Us section
    'why.badge': { en: 'Why Equitable Law', es: 'Por Que Equitable Law' },
    'why.heading': { en: 'Why Clients Choose Us', es: 'Por Que los Clientes Nos Eligen' },
    'why.subheading': {
      en: 'For over two decades, Equitable Law Firm has been a trusted advocate for injured workers and accident victims across Southern California.',
      es: 'Por mas de dos decadas, Equitable Law Firm ha sido un defensor de confianza para trabajadores lesionados y victimas de accidentes en todo el Sur de California.'
    },
    'why.years': { en: 'Years of Experience', es: 'Anos de Experiencia' },
    'why.offices': { en: 'Office Locations', es: 'Oficinas' },
    'why.availability': { en: 'Availability', es: 'Disponibilidad' },
    'why.free': { en: 'Free', es: 'Gratis' },
    'why.consultation': { en: 'Consultation', es: 'Consulta' },

    // Attorney Spotlight (index)
    'attorney.badge': { en: 'Managing Attorney', es: 'Abogado Principal' },
    'attorney.title': { en: 'Founder & Managing Attorney', es: 'Fundador y Abogado Principal' },
    'attorney.bio1': {
      en: 'With over 25 years of legal experience, Michael H. Moghtader has dedicated his career to representing individuals who have been injured or wronged. He founded Equitable Law Firm with a simple mission: to ensure that every client receives the justice and compensation they deserve, regardless of the size of their case or the power of their opponent.',
      es: 'Con mas de 25 anos de experiencia legal, Michael H. Moghtader ha dedicado su carrera a representar a personas que han sido lesionadas o perjudicadas. Fundo Equitable Law Firm con una mision simple: asegurar que cada cliente reciba la justicia y la compensacion que merece, independientemente del tamano de su caso o el poder de su oponente.'
    },
    'attorney.bio2': {
      en: 'Mr. Moghtader is known for his meticulous case preparation, aggressive negotiation tactics, and willingness to take cases to trial when insurance companies refuse to offer fair settlements. He has successfully recovered millions of dollars for his clients across personal injury, workers\' compensation, and employment law matters.',
      es: 'El Sr. Moghtader es conocido por su meticulosa preparacion de casos, tacticas de negociacion agresivas y su disposicion para llevar casos a juicio cuando las companias de seguros se niegan a ofrecer acuerdos justos. Ha recuperado con exito millones de dolares para sus clientes en asuntos de lesiones personales, compensacion de trabajadores y derecho laboral.'
    },
    'attorney.cred.bar': { en: 'California State Bar', es: 'Colegio de Abogados de California' },
    'attorney.cred.years': { en: '25+ Years Experience', es: '25+ Anos de Experiencia' },
    'attorney.cred.millions': { en: 'Millions Recovered', es: 'Millones Recuperados' },
    'attorney.cred.bilingual': { en: 'Bilingual (English/Farsi)', es: 'Bilingue (Ingles/Farsi)' },
    'attorney.readbio': { en: 'Read Full Bio', es: 'Leer Biografia Completa' },

    // Testimonials
    'testimonials.badge': { en: 'Client Testimonials', es: 'Testimonios de Clientes' },
    'testimonials.heading': { en: 'What Our Clients Say', es: 'Lo Que Dicen Nuestros Clientes' },
    'testimonials.subheading': {
      en: 'The trust our clients place in us is the foundation of everything we do. Here is what some of them have to say about their experience.',
      es: 'La confianza que nuestros clientes depositan en nosotros es la base de todo lo que hacemos. Esto es lo que algunos de ellos dicen sobre su experiencia.'
    },
    'testimonial1.quote': {
      en: 'After my car accident, I didn\'t know where to turn. The insurance company was offering me next to nothing. Mr. Moghtader took my case and fought for me every step of the way. He got me a settlement that covered all of my medical bills and then some. I can\'t recommend this firm highly enough.',
      es: 'Despues de mi accidente de auto, no sabia a quien acudir. La compania de seguros me ofrecia casi nada. El Sr. Moghtader tomo mi caso y lucho por mi en cada paso del camino. Me consiguio un acuerdo que cubrio todas mis facturas medicas y mas. No puedo recomendar esta firma lo suficiente.'
    },
    'testimonial1.case': { en: 'Auto Accident \u2014 Personal Injury', es: 'Accidente de Auto \u2014 Lesiones Personales' },
    'testimonial2.quote': {
      en: 'I was injured on the job and my employer tried to deny my workers\' comp claim. Equitable Law Firm stepped in, gathered the evidence, and got my claim approved. They handled everything with the insurance company so I could focus on my recovery. Professional, responsive, and truly caring.',
      es: 'Me lesione en el trabajo y mi empleador trato de negar mi reclamo de compensacion de trabajadores. Equitable Law Firm intervino, reunio la evidencia y logro que mi reclamo fuera aprobado. Manejaron todo con la compania de seguros para que yo pudiera concentrarme en mi recuperacion. Profesionales, responsivos y verdaderamente compasivos.'
    },
    'testimonial2.case': { en: 'Workplace Injury \u2014 Workers\' Compensation', es: 'Lesion en el Trabajo \u2014 Compensacion de Trabajadores' },
    'testimonial3.quote': {
      en: 'I was wrongfully terminated after reporting safety violations at my workplace. The team at Equitable Law took on my employment law case and secured a significant settlement. They kept me informed throughout the entire process and made me feel like a priority, not just another case number.',
      es: 'Fui despedido injustamente despues de reportar violaciones de seguridad en mi lugar de trabajo. El equipo de Equitable Law tomo mi caso de derecho laboral y aseguro un acuerdo significativo. Me mantuvieron informado durante todo el proceso y me hicieron sentir como una prioridad, no solo otro numero de caso.'
    },
    'testimonial3.case': { en: 'Wrongful Termination \u2014 Employment Law', es: 'Despido Injustificado \u2014 Derecho Laboral' },

    // CTA Banner (index)
    'cta.title': {
      en: 'Injured? Don\'t Wait. <span class="text-accent">Call Now.</span>',
      es: 'Lesionado? No Espere. <span class="text-accent">Llame Ahora.</span>'
    },
    'cta.btn.consultation': { en: 'Free Consultation', es: 'Consulta Gratis' },
    'cta.btn.call247': { en: 'Call 24/7', es: 'Llame 24/7' },

    // Contact section (index & contact page)
    'contact.badge': { en: 'Get in Touch', es: 'Contactenos' },
    'contact.heading': { en: 'Contact Our Team', es: 'Contacte a Nuestro Equipo' },
    'contact.subheading': {
      en: 'Ready to discuss your case? Fill out the form below or call us directly. We respond to every inquiry within 24 hours.',
      es: 'Listo para discutir su caso? Complete el formulario a continuacion o llamenos directamente. Respondemos a cada consulta dentro de 24 horas.'
    },
    'contact.form.title': { en: 'Request a Free Consultation', es: 'Solicite una Consulta Gratis' },
    'contact.form.subtitle': {
      en: 'Fill out the form below and a member of our legal team will contact you within 24 hours. All information is kept strictly confidential.',
      es: 'Complete el formulario a continuacion y un miembro de nuestro equipo legal lo contactara dentro de 24 horas. Toda la informacion se mantiene estrictamente confidencial.'
    },
    'contact.form.name': { en: 'Full Name', es: 'Nombre Completo' },
    'contact.form.email': { en: 'Email Address', es: 'Correo Electronico' },
    'contact.form.phone': { en: 'Phone Number', es: 'Numero de Telefono' },
    'contact.form.casetype': { en: 'Case Type', es: 'Tipo de Caso' },
    'contact.form.select': { en: 'Select a case type...', es: 'Seleccione un tipo de caso...' },
    'contact.form.pi': { en: 'Personal Injury', es: 'Lesiones Personales' },
    'contact.form.wc': { en: "Workers' Compensation", es: 'Compensacion de Trabajadores' },
    'contact.form.el': { en: 'Employment Law', es: 'Derecho Laboral' },
    'contact.form.cd': { en: 'Criminal Defense', es: 'Defensa Criminal' },
    'contact.form.other': { en: 'Other', es: 'Otro' },
    'contact.form.describe': { en: 'Describe Your Case', es: 'Describa Su Caso' },
    'contact.form.submit': { en: 'Submit Your Case', es: 'Envie Su Caso' },
    'contact.form.privacy': {
      en: 'By submitting this form, you agree to be contacted by Equitable Law Firm regarding your inquiry. We respect your privacy and will never share your information.',
      es: 'Al enviar este formulario, acepta ser contactado por Equitable Law Firm con respecto a su consulta. Respetamos su privacidad y nunca compartiremos su informacion.'
    },
    'contact.form.success': {
      en: 'Thank you! Your message has been received. We will contact you within 24 hours.',
      es: 'Gracias! Su mensaje ha sido recibido. Lo contactaremos dentro de 24 horas.'
    },

    // Contact sidebar
    'contact.info.title': { en: 'Contact Information', es: 'Informacion de Contacto' },
    'contact.info.callemail': { en: 'Call or Email', es: 'Llame o Envie Correo' },
    'contact.info.phone': { en: 'Phone', es: 'Telefono' },
    'contact.info.email': { en: 'Email', es: 'Correo Electronico' },
    'contact.info.hours': { en: 'Hours', es: 'Horario' },
    'contact.info.available': { en: 'Available 24/7', es: 'Disponible 24/7' },
    'contact.info.available.emergencies': { en: 'Available 24/7 for emergencies', es: 'Disponible 24/7 para emergencias' },
    'contact.info.officehours': { en: 'Office hours: Mon-Fri 9am-6pm', es: 'Horario de oficina: Lun-Vie 9am-6pm' },
    'contact.info.offices': { en: 'Our Offices', es: 'Nuestras Oficinas' },
    'contact.info.officelocations': { en: 'Office Locations', es: 'Ubicaciones de Oficinas' },
    'contact.info.whycontact': { en: 'Why Contact Us?', es: 'Por Que Contactarnos?' },
    'contact.info.whatexpect': { en: 'What to Expect', es: 'Que Esperar' },
    'contact.info.nofee': { en: 'No fee unless we win your case', es: 'Sin costo a menos que ganemos su caso' },
    'contact.info.freeconf': { en: 'Free, confidential consultation', es: 'Consulta gratis y confidencial' },
    'contact.info.freereview': { en: 'Free, no-obligation case review', es: 'Evaluacion gratuita y sin compromiso' },
    'contact.info.response24': { en: 'Response within 24 hours', es: 'Respuesta dentro de 24 horas' },
    'contact.info.confidential': { en: 'Completely confidential', es: 'Completamente confidencial' },
    'contact.info.sehabla': { en: 'Se habla Espanol / Farsi spoken', es: 'Se habla Espanol / Se habla Farsi' },

    // Contact page CTA
    'contact.cta.title': {
      en: 'Prefer to Talk? <span class="text-accent">Call Us Now.</span>',
      es: 'Prefiere Hablar? <span class="text-accent">Llamenos Ahora.</span>'
    },
    'contact.cta.subtitle': {
      en: 'Our team is standing by to take your call. Consultations are always free and completely confidential.',
      es: 'Nuestro equipo esta listo para atender su llamada. Las consultas siempre son gratis y completamente confidenciales.'
    },
    'contact.cta.callnow': { en: 'Call Now', es: 'Llame Ahora' },

    // Contact page map section
    'contact.map.badge': { en: 'Find Us', es: 'Encuentrenos' },
    'contact.map.heading': { en: 'Our Locations', es: 'Nuestras Ubicaciones' },
    'contact.map.subheading': {
      en: 'Four offices across Los Angeles and Ventura County for your convenience.',
      es: 'Cuatro oficinas en Los Angeles y el Condado de Ventura para su conveniencia.'
    },
    'contact.map.interactive': { en: 'Interactive Map', es: 'Mapa Interactivo' },
    'contact.map.desc': {
      en: 'Google Maps integration will be added here showing all four office locations.',
      es: 'Se agregara la integracion de Google Maps aqui mostrando las cuatro ubicaciones de oficinas.'
    },

    // ===== ABOUT PAGE =====
    'about.breadcrumb': { en: 'About Us', es: 'Nosotros' },
    'about.hero.title': {
      en: 'About <span class="text-accent">Equitable Law Firm</span>',
      es: 'Acerca de <span class="text-accent">Equitable Law Firm</span>'
    },
    'about.hero.subtitle': {
      en: 'Over 25 years of committed legal advocacy for individuals and families across Los Angeles and Southern California.',
      es: 'Mas de 25 anos de defensa legal comprometida para individuos y familias en todo Los Angeles y el Sur de California.'
    },
    'about.story.badge': { en: 'Our Story', es: 'Nuestra Historia' },
    'about.story.heading': { en: 'A Firm Built on Principle', es: 'Una Firma Construida Sobre Principios' },
    'about.story.p1': {
      en: 'Equitable Law Firm was founded with a straightforward conviction: the legal system should work for everyone, not just those who can afford the most expensive representation. Managing Attorney Michael H. Moghtader established the firm to provide aggressive, high-caliber legal representation to individuals who have been injured, wronged, or denied the benefits they are owed.',
      es: 'Equitable Law Firm fue fundada con una conviccion directa: el sistema legal debe funcionar para todos, no solo para aquellos que pueden pagar la representacion mas costosa. El Abogado Principal Michael H. Moghtader establecio la firma para proporcionar representacion legal agresiva y de alto calibre a personas que han sido lesionadas, perjudicadas o a quienes se les han negado los beneficios que merecen.'
    },
    'about.story.p2': {
      en: 'From the beginning, we have operated on a contingency-fee basis for personal injury and workers\' compensation cases. That means our clients pay nothing unless we recover compensation on their behalf. This is not just a business model; it is a reflection of our belief that access to justice should never depend on the size of your bank account.',
      es: 'Desde el principio, hemos operado con honorarios de contingencia para casos de lesiones personales y compensacion de trabajadores. Eso significa que nuestros clientes no pagan nada a menos que recuperemos una compensacion en su nombre. Esto no es solo un modelo de negocio; es un reflejo de nuestra creencia de que el acceso a la justicia nunca debe depender del tamano de su cuenta bancaria.'
    },
    'about.story.p3': {
      en: 'Over the past two and a half decades, we have grown from a single attorney practice into a multi-office firm with locations in Encino, Oxnard, Van Nuys, and Baldwin Park. Our growth has been driven entirely by results and referrals: satisfied clients who tell their friends, family, and coworkers about the quality of representation they received.',
      es: 'Durante las ultimas dos decadas y media, hemos crecido de una practica de un solo abogado a una firma con multiples oficinas en Encino, Oxnard, Van Nuys y Baldwin Park. Nuestro crecimiento ha sido impulsado enteramente por resultados y referencias: clientes satisfechos que les cuentan a sus amigos, familiares y companeros de trabajo sobre la calidad de la representacion que recibieron.'
    },
    'about.mission.title': { en: 'Our Mission', es: 'Nuestra Mision' },
    'about.mission.text': {
      en: 'To level the playing field between injured individuals and powerful insurance companies, corporations, and government entities. We believe every client deserves to be heard, every case deserves thorough preparation, and every adversary deserves to know we will not back down.',
      es: 'Nivelar el campo de juego entre personas lesionadas y poderosas companias de seguros, corporaciones y entidades gubernamentales. Creemos que cada cliente merece ser escuchado, cada caso merece una preparacion exhaustiva, y cada adversario merece saber que no retrocederemos.'
    },
    'about.approach.title': { en: 'Our Approach', es: 'Nuestro Enfoque' },
    'about.approach.p1': {
      en: 'We take a hands-on approach to every case. Mr. Moghtader personally reviews each new matter and remains involved throughout the process. We do not hand your case off to an inexperienced associate or a paralegal. When you hire Equitable Law Firm, you get direct access to an attorney with decades of trial and negotiation experience.',
      es: 'Tomamos un enfoque practico en cada caso. El Sr. Moghtader revisa personalmente cada nuevo asunto y permanece involucrado durante todo el proceso. No entregamos su caso a un asociado sin experiencia o a un asistente legal. Cuando contrata a Equitable Law Firm, obtiene acceso directo a un abogado con decadas de experiencia en juicios y negociaciones.'
    },
    'about.approach.p2': {
      en: 'We prepare every case as though it is going to trial. This is not because we are eager to litigate; it is because insurance companies settle cases faster and for higher amounts when they know the other side is ready and willing to go to court. Our reputation for thorough preparation gives us leverage that benefits every client we represent.',
      es: 'Preparamos cada caso como si fuera a juicio. Esto no es porque estemos ansiosos por litigar; es porque las companias de seguros resuelven los casos mas rapido y por montos mas altos cuando saben que la otra parte esta lista y dispuesta a ir a la corte. Nuestra reputacion de preparacion exhaustiva nos da ventaja que beneficia a cada cliente que representamos.'
    },

    // About - Attorney Bio section
    'about.attorney.badge': { en: 'Managing Attorney', es: 'Abogado Principal' },
    'about.attorney.title': { en: 'Founder & Managing Attorney', es: 'Fundador y Abogado Principal' },
    'about.attorney.bio1': {
      en: 'Michael H. Moghtader is the founder and managing attorney of Equitable Law Firm. With more than 25 years of experience practicing law in California, he has established himself as a formidable advocate for injured workers, accident victims, and employees whose rights have been violated.',
      es: 'Michael H. Moghtader es el fundador y abogado principal de Equitable Law Firm. Con mas de 25 anos de experiencia practicando derecho en California, se ha establecido como un formidable defensor de trabajadores lesionados, victimas de accidentes y empleados cuyos derechos han sido violados.'
    },
    'about.attorney.bio2': {
      en: 'Mr. Moghtader earned his Juris Doctor from a respected California law school and was admitted to the California State Bar, where he has maintained an active and unblemished record throughout his career. He is admitted to practice before all California state courts and multiple federal courts.',
      es: 'El Sr. Moghtader obtuvo su Doctorado en Jurisprudencia de una respetada escuela de derecho de California y fue admitido en el Colegio de Abogados de California, donde ha mantenido un registro activo e impecable a lo largo de su carrera. Esta admitido para practicar ante todos los tribunales estatales de California y multiples tribunales federales.'
    },
    'about.attorney.bio3': {
      en: 'His practice is concentrated in four core areas: personal injury, workers\' compensation, employment law, and criminal defense. Across these disciplines, Mr. Moghtader has successfully handled thousands of cases, recovering millions of dollars in settlements and verdicts for his clients. He is known for his ability to distill complex legal and medical issues into clear, compelling arguments that resonate with judges, arbitrators, and juries.',
      es: 'Su practica se concentra en cuatro areas principales: lesiones personales, compensacion de trabajadores, derecho laboral y defensa criminal. A traves de estas disciplinas, el Sr. Moghtader ha manejado exitosamente miles de casos, recuperando millones de dolares en acuerdos y veredictos para sus clientes. Es conocido por su capacidad para destilar asuntos legales y medicos complejos en argumentos claros y convincentes que resuenan con jueces, arbitros y jurados.'
    },
    'about.attorney.bio4': {
      en: 'Beyond the courtroom, Mr. Moghtader is deeply committed to the communities he serves. He regularly provides free legal consultations to individuals who have been injured or wronged, regardless of whether they ultimately retain his firm. He believes that everyone deserves to understand their legal rights and options, even if they choose a different path.',
      es: 'Mas alla de la sala del tribunal, el Sr. Moghtader esta profundamente comprometido con las comunidades a las que sirve. Regularmente proporciona consultas legales gratuitas a personas que han sido lesionadas o perjudicadas, independientemente de si finalmente contratan a su firma. Cree que todos merecen entender sus derechos legales y opciones, incluso si eligen un camino diferente.'
    },
    'about.attorney.bio5': {
      en: 'Mr. Moghtader is bilingual in English and Farsi, enabling him to serve a broader cross-section of the diverse Los Angeles community. He maintains offices in Encino, Oxnard, Van Nuys, and Baldwin Park to ensure clients across the region have convenient access to quality legal representation.',
      es: 'El Sr. Moghtader es bilingue en ingles y farsi, lo que le permite servir a una seccion mas amplia de la diversa comunidad de Los Angeles. Mantiene oficinas en Encino, Oxnard, Van Nuys y Baldwin Park para asegurar que los clientes en toda la region tengan acceso conveniente a representacion legal de calidad.'
    },
    'about.attorney.cred.bar': { en: 'California State Bar Member', es: 'Miembro del Colegio de Abogados de California' },
    'about.attorney.cred.years': { en: '25+ Years Experience', es: '25+ Anos de Experiencia' },
    'about.attorney.cred.millions': { en: 'Millions Recovered', es: 'Millones Recuperados' },
    'about.attorney.cred.bilingual': { en: 'Bilingual (English / Farsi)', es: 'Bilingue (Ingles / Farsi)' },
    'about.attorney.cred.courts': { en: 'Federal & State Courts', es: 'Tribunales Federales y Estatales' },
    'about.attorney.cred.thousands': { en: 'Thousands of Cases Handled', es: 'Miles de Casos Manejados' },

    // About - Values
    'about.values.badge': { en: 'Our Values', es: 'Nuestros Valores' },
    'about.values.heading': { en: 'What Drives Us', es: 'Lo Que Nos Impulsa' },
    'about.values.subheading': {
      en: 'These are the principles that guide every decision we make and every case we take.',
      es: 'Estos son los principios que guian cada decision que tomamos y cada caso que aceptamos.'
    },
    'about.values.integrity': { en: 'Integrity', es: 'Integridad' },
    'about.values.integrity.desc': {
      en: 'We are honest with our clients about the strengths and challenges of their cases. We do not make promises we cannot keep, and we never mislead or overcharge. Our word is our bond.',
      es: 'Somos honestos con nuestros clientes sobre las fortalezas y desafios de sus casos. No hacemos promesas que no podemos cumplir, y nunca enganamos ni cobramos de mas. Nuestra palabra es nuestro compromiso.'
    },
    'about.values.client': { en: 'Client First', es: 'El Cliente Primero' },
    'about.values.client.desc': {
      en: 'Every decision we make is guided by what is best for the client. We return calls promptly, explain legal concepts in plain language, and keep our clients informed at every stage of their case.',
      es: 'Cada decision que tomamos se guia por lo que es mejor para el cliente. Devolvemos las llamadas rapidamente, explicamos conceptos legales en lenguaje sencillo y mantenemos a nuestros clientes informados en cada etapa de su caso.'
    },
    'about.values.tenacity': { en: 'Tenacity', es: 'Tenacidad' },
    'about.values.tenacity.desc': {
      en: 'We do not settle for less than our clients deserve. If an insurance company refuses to negotiate fairly, we are prepared to take the case to trial and fight for the maximum recovery.',
      es: 'No nos conformamos con menos de lo que nuestros clientes merecen. Si una compania de seguros se niega a negociar justamente, estamos preparados para llevar el caso a juicio y luchar por la recuperacion maxima.'
    },
    'about.values.accessibility': { en: 'Accessibility', es: 'Accesibilidad' },
    'about.values.accessibility.desc': {
      en: 'With four offices across the greater Los Angeles area and availability around the clock, we make sure quality legal representation is within reach for everyone who needs it.',
      es: 'Con cuatro oficinas en toda el area metropolitana de Los Angeles y disponibilidad las 24 horas, nos aseguramos de que la representacion legal de calidad este al alcance de todos los que la necesitan.'
    },
    'about.values.transparency': { en: 'Transparency', es: 'Transparencia' },
    'about.values.transparency.desc': {
      en: 'No hidden fees, no surprise charges. We work on contingency for injury and workers\' comp cases, meaning you pay nothing upfront and nothing at all unless we recover compensation for you.',
      es: 'Sin tarifas ocultas, sin cargos sorpresa. Trabajamos con honorarios de contingencia para casos de lesiones y compensacion de trabajadores, lo que significa que no paga nada por adelantado y nada en absoluto a menos que recuperemos una compensacion para usted.'
    },
    'about.values.excellence': { en: 'Excellence', es: 'Excelencia' },
    'about.values.excellence.desc': {
      en: 'We hold ourselves to the highest standard of legal practice. We invest in continuing education, stay current on changes in the law, and apply the same level of rigor to every case, large or small.',
      es: 'Nos mantenemos al mas alto estandar de practica legal. Invertimos en educacion continua, nos mantenemos al dia con los cambios en la ley y aplicamos el mismo nivel de rigor a cada caso, grande o pequeno.'
    },

    // About - Office locations
    'about.offices.badge': { en: 'Our Locations', es: 'Nuestras Ubicaciones' },
    'about.offices.heading': { en: 'Offices Across Los Angeles', es: 'Oficinas en Todo Los Angeles' },
    'about.offices.subheading': {
      en: 'Convenient locations throughout the greater LA area ensure that quality legal representation is never far away.',
      es: 'Ubicaciones convenientes en toda el area metropolitana de LA aseguran que la representacion legal de calidad nunca este lejos.'
    },

    // About CTA
    'about.cta.title': { en: 'Ready to Discuss Your Case?', es: 'Listo para Discutir Su Caso?' },

    // ===== PRACTICE AREAS PAGE =====
    'pa.breadcrumb': { en: 'Practice Areas', es: 'Areas de Practica' },
    'pa.hero.title': {
      en: 'Our <span class="text-accent">Practice Areas</span>',
      es: 'Nuestras <span class="text-accent">Areas de Practica</span>'
    },
    'pa.hero.subtitle': {
      en: 'We concentrate on four areas of law where we deliver the greatest results for our clients. Explore each practice area below to learn how we can help you.',
      es: 'Nos concentramos en cuatro areas del derecho donde entregamos los mejores resultados para nuestros clientes. Explore cada area de practica a continuacion para saber como podemos ayudarle.'
    },

    // Personal Injury detail
    'pa.pi.title': { en: 'Personal Injury', es: 'Lesiones Personales' },
    'pa.pi.desc': {
      en: 'If you have been injured due to someone else\'s negligence, carelessness, or reckless behavior, you may be entitled to compensation for your medical bills, lost wages, pain and suffering, and other damages. At Equitable Law Firm, we handle the full spectrum of personal injury cases across Los Angeles and Southern California. We work on a contingency-fee basis, which means you pay nothing unless we win.',
      es: 'Si ha sido lesionado debido a la negligencia, descuido o comportamiento imprudente de otra persona, puede tener derecho a compensacion por sus facturas medicas, salarios perdidos, dolor y sufrimiento, y otros danos. En Equitable Law Firm, manejamos el espectro completo de casos de lesiones personales en todo Los Angeles y el Sur de California. Trabajamos con honorarios de contingencia, lo que significa que no paga nada a menos que ganemos.'
    },
    'pa.pi.case.car': { en: 'Car Accidents', es: 'Accidentes de Auto' },
    'pa.pi.case.truck': { en: 'Truck Accidents', es: 'Accidentes de Camion' },
    'pa.pi.case.moto': { en: 'Motorcycle Accidents', es: 'Accidentes de Motocicleta' },
    'pa.pi.case.ped': { en: 'Pedestrian Accidents', es: 'Accidentes de Peatones' },
    'pa.pi.case.ride': { en: 'Rideshare Accidents (Uber/Lyft)', es: 'Accidentes de Transporte Compartido (Uber/Lyft)' },
    'pa.pi.case.bike': { en: 'Bicycle Accidents', es: 'Accidentes de Bicicleta' },
    'pa.pi.case.slip': { en: 'Slip and Fall / Premises Liability', es: 'Caidas / Responsabilidad de Propietarios' },
    'pa.pi.case.dog': { en: 'Dog Bites', es: 'Mordeduras de Perro' },
    'pa.pi.case.death': { en: 'Wrongful Death', es: 'Muerte Injusta' },

    // Workers' Comp detail
    'pa.wc.title': { en: "Workers' Compensation", es: 'Compensacion de Trabajadores' },
    'pa.wc.desc': {
      en: 'California law requires virtually all employers to carry workers\' compensation insurance. If you were injured on the job or developed an illness due to your working conditions, you are entitled to medical treatment, temporary and permanent disability benefits, and vocational rehabilitation. Unfortunately, insurers routinely deny, delay, or undervalue legitimate claims. Equitable Law Firm fights to make sure you receive everything the law provides.',
      es: 'La ley de California requiere que practicamente todos los empleadores tengan seguro de compensacion de trabajadores. Si fue lesionado en el trabajo o desarrollo una enfermedad debido a sus condiciones laborales, tiene derecho a tratamiento medico, beneficios de discapacidad temporal y permanente, y rehabilitacion vocacional. Desafortunadamente, las aseguradoras rutinariamente niegan, retrasan o subvaloran reclamos legitimos. Equitable Law Firm lucha para asegurar que reciba todo lo que la ley proporciona.'
    },
    'pa.wc.case.workplace': { en: 'Workplace Injuries', es: 'Lesiones en el Trabajo' },
    'pa.wc.case.rsi': { en: 'Repetitive Stress Injuries (RSI)', es: 'Lesiones por Estres Repetitivo (RSI)' },
    'pa.wc.case.occ': { en: 'Occupational Illness', es: 'Enfermedad Ocupacional' },
    'pa.wc.case.const': { en: 'Construction Accidents', es: 'Accidentes de Construccion' },
    'pa.wc.case.back': { en: 'Back and Spinal Cord Injuries', es: 'Lesiones de Espalda y Medula Espinal' },
    'pa.wc.case.denied': { en: 'Denied or Delayed Claims', es: 'Reclamos Denegados o Retrasados' },
    'pa.wc.case.disability': { en: 'Temporary & Permanent Disability', es: 'Discapacidad Temporal y Permanente' },
    'pa.wc.case.third': { en: 'Third-Party Workplace Claims', es: 'Reclamos de Terceros en el Trabajo' },
    'pa.wc.case.voc': { en: 'Vocational Rehabilitation', es: 'Rehabilitacion Vocacional' },

    // Employment Law detail
    'pa.el.title': { en: 'Employment Law', es: 'Derecho Laboral' },
    'pa.el.desc': {
      en: "California has some of the strongest employee protection laws in the nation. If your employer has violated your rights \u2014 whether through unlawful termination, discrimination, harassment, or wage theft \u2014 Equitable Law Firm can help you hold them accountable. We represent employees in claims against employers of all sizes, from small businesses to Fortune 500 corporations.",
      es: "California tiene algunas de las leyes de proteccion al empleado mas fuertes de la nacion. Si su empleador ha violado sus derechos \u2014 ya sea por despido ilegal, discriminacion, acoso o robo de salarios \u2014 Equitable Law Firm puede ayudarle a hacerlos responsables. Representamos a empleados en reclamos contra empleadores de todos los tamanos, desde pequenas empresas hasta corporaciones Fortune 500."
    },
    'pa.el.case.wrongful': { en: 'Wrongful Termination', es: 'Despido Injustificado' },
    'pa.el.case.discrim': { en: 'Workplace Discrimination', es: 'Discriminacion Laboral' },
    'pa.el.case.harassment': { en: 'Sexual Harassment', es: 'Acoso Sexual' },
    'pa.el.case.wage': { en: 'Wage & Hour Disputes', es: 'Disputas de Salarios y Horas' },
    'pa.el.case.overtime': { en: 'Unpaid Overtime', es: 'Horas Extra No Pagadas' },
    'pa.el.case.retaliation': { en: 'Retaliation', es: 'Represalias' },
    'pa.el.case.hostile': { en: 'Hostile Work Environment', es: 'Ambiente de Trabajo Hostil' },
    'pa.el.case.whistle': { en: 'Whistleblower Protection', es: 'Proteccion de Denunciantes' },
    'pa.el.case.fmla': { en: 'FMLA / CFRA Violations', es: 'Violaciones de FMLA / CFRA' },

    // Criminal Defense detail
    'pa.cd.title': { en: 'Criminal Defense', es: 'Defensa Criminal' },
    'pa.cd.desc': {
      en: "A criminal charge can have life-altering consequences \u2014 imprisonment, fines, a permanent record, and damage to your reputation and career. At Equitable Law Firm, we believe everyone is entitled to a vigorous defense. We analyze every piece of evidence, challenge every procedural error, and fight to protect your constitutional rights at every stage of the process.",
      es: "Un cargo criminal puede tener consecuencias que cambian la vida \u2014 encarcelamiento, multas, un registro permanente y dano a su reputacion y carrera. En Equitable Law Firm, creemos que todos tienen derecho a una defensa vigorosa. Analizamos cada pieza de evidencia, desafiamos cada error procesal y luchamos por proteger sus derechos constitucionales en cada etapa del proceso."
    },
    'pa.cd.case.dui': { en: 'DUI / DWI Defense', es: 'Defensa de DUI / DWI' },
    'pa.cd.case.drug': { en: 'Drug Charges', es: 'Cargos de Drogas' },
    'pa.cd.case.theft': { en: 'Theft & Burglary', es: 'Robo y Hurto' },
    'pa.cd.case.assault': { en: 'Assault & Battery', es: 'Asalto y Agresion' },
    'pa.cd.case.domestic': { en: 'Domestic Violence', es: 'Violencia Domestica' },
    'pa.cd.case.white': { en: 'White Collar Crimes', es: 'Crimenes de Cuello Blanco' },
    'pa.cd.case.restrain': { en: 'Restraining Orders', es: 'Ordenes de Restriccion' },
    'pa.cd.case.expunge': { en: 'Expungements', es: 'Eliminacion de Antecedentes' },
    'pa.cd.case.juvenile': { en: 'Juvenile Defense', es: 'Defensa de Menores' },

    // Practice Areas CTA
    'pa.cta.title': { en: 'Not Sure Which Practice Area Applies?', es: 'No Esta Seguro Que Area de Practica Aplica?' },
    'pa.cta.subtitle': {
      en: 'We offer free consultations for all case types. Call us or fill out our contact form and we will evaluate your situation at no cost.',
      es: 'Ofrecemos consultas gratis para todos los tipos de casos. Llamenos o complete nuestro formulario de contacto y evaluaremos su situacion sin costo.'
    },
    'pa.freecaseeval': { en: 'Free Case Evaluation', es: 'Evaluacion de Caso Gratis' },

    // ===== CONTACT PAGE =====
    'contactpage.breadcrumb': { en: 'Contact', es: 'Contacto' },
    'contactpage.hero.title': {
      en: 'Contact <span class="text-accent">Equitable Law Firm</span>',
      es: 'Contacte a <span class="text-accent">Equitable Law Firm</span>'
    },
    'contactpage.hero.subtitle': {
      en: 'We are here to help. Reach out by phone, email, or the form below for a free, no-obligation consultation about your case.',
      es: 'Estamos aqui para ayudar. Comuniquese por telefono, correo electronico o el formulario a continuacion para una consulta gratuita y sin compromiso sobre su caso.'
    },

    // Logo tagline
    'logo.tagline': { en: 'Justice Within Reach', es: 'Justicia a Su Alcance' },

    // Scroll indicator
    'hero.scroll': { en: 'Scroll', es: 'Desplazar' }
  };

  var currentLang = 'en';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('equitable-lang', lang);

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update all elements with data-i18n
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        // Check if element has child elements we should preserve (like SVGs)
        var hasIconChild = el.querySelector('svg');
        if (hasIconChild && !el.getAttribute('data-i18n-html')) {
          // For elements with SVG icons, we need to preserve the SVG
          // Only replace the text node
          var textNodes = [];
          el.childNodes.forEach(function(node) {
            if (node.nodeType === 3) { // TEXT_NODE
              textNodes.push(node);
            }
          });
          if (textNodes.length > 0) {
            // Replace the last text node (usually the label after the icon)
            textNodes[textNodes.length - 1].textContent = ' ' + translations[key][lang];
          }
        } else if (el.getAttribute('data-i18n-html') !== null) {
          el.innerHTML = translations[key][lang];
        } else {
          el.textContent = translations[key][lang];
        }
      }
    });

    // Update placeholder attributes
    var placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (translations[key] && translations[key][lang]) {
        el.setAttribute('placeholder', translations[key][lang]);
      }
    });

    // Update toggle buttons
    var toggleBtns = document.querySelectorAll('.lang-toggle__btn');
    toggleBtns.forEach(function (btn) {
      btn.classList.remove('lang-toggle__btn--active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('lang-toggle__btn--active');
      }
    });
  }

  function initLanguageToggle() {
    // Load saved preference
    var savedLang = localStorage.getItem('equitable-lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      currentLang = savedLang;
    }

    // Bind toggle buttons
    var toggleBtns = document.querySelectorAll('.lang-toggle__btn');
    toggleBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (lang) {
          setLanguage(lang);
        }
      });
    });

    // Apply initial language
    setLanguage(currentLang);
  }

  /* ---------- Mobile Menu Toggle ---------- */
  function initMobileMenu() {
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('nav--open');
      hamburger.classList.toggle('hamburger--active');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav--open');
        hamburger.classList.remove('hamburger--active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
        hamburger.classList.remove('hamburger--active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        hamburger.focus();
      }
    });
  }

  /* ---------- Header Shrink on Scroll ---------- */
  function initHeaderShrink() {
    if (!header) return;

    var scrollThreshold = 60;
    var ticking = false;

    function updateHeader() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('header--shrink');
      } else {
        header.classList.remove('header--shrink');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;

      var targetId = link.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      var headerHeight = header ? header.offsetHeight : 0;
      var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Set focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }

  /* ---------- Contact Form Validation ---------- */
  function initFormValidation() {
    if (!contactForm) return;

    var fields = {
      name: {
        el: contactForm.querySelector('#formName'),
        validate: function (v) { return v.trim().length >= 2; },
        message: 'Please enter your full name.'
      },
      email: {
        el: contactForm.querySelector('#formEmail'),
        validate: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); },
        message: 'Please enter a valid email address.'
      },
      phone: {
        el: contactForm.querySelector('#formPhone'),
        validate: function (v) { return v.trim() === '' || /^[\d\s\-()+ .]{7,}$/.test(v); },
        message: 'Please enter a valid phone number.'
      },
      caseType: {
        el: contactForm.querySelector('#formCaseType'),
        validate: function (v) { return v !== ''; },
        message: 'Please select a case type.'
      },
      message: {
        el: contactForm.querySelector('#formMessage'),
        validate: function (v) { return v.trim().length >= 10; },
        message: 'Please describe your case (at least 10 characters).'
      }
    };

    function showError(field) {
      var input = fields[field].el;
      if (!input) return;
      var errorEl = input.parentElement.querySelector('.form-group__error');
      input.classList.add('form-group__input--error');
      if (errorEl) {
        errorEl.textContent = fields[field].message;
        errorEl.classList.add('form-group__error--visible');
      }
    }

    function clearError(field) {
      var input = fields[field].el;
      if (!input) return;
      var errorEl = input.parentElement.querySelector('.form-group__error');
      input.classList.remove('form-group__input--error');
      if (errorEl) {
        errorEl.classList.remove('form-group__error--visible');
      }
    }

    // Real-time clearing of errors on input
    Object.keys(fields).forEach(function (key) {
      var input = fields[key].el;
      if (!input) return;
      input.addEventListener('input', function () {
        if (fields[key].validate(input.value)) {
          clearError(key);
        }
      });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;
      var firstInvalid = null;

      Object.keys(fields).forEach(function (key) {
        var input = fields[key].el;
        if (!input) return;
        if (!fields[key].validate(input.value)) {
          showError(key);
          isValid = false;
          if (!firstInvalid) firstInvalid = input;
        } else {
          clearError(key);
        }
      });

      if (!isValid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Demo — show success message
      var statusEl = contactForm.querySelector('.form-status');
      if (statusEl) {
        statusEl.className = 'form-status form-status--success';
        var successKey = 'contact.form.success';
        if (translations[successKey] && translations[successKey][currentLang]) {
          statusEl.textContent = translations[successKey][currentLang];
        } else {
          statusEl.textContent = 'Thank you! Your message has been received. We will contact you within 24 hours.';
        }
        statusEl.style.display = 'block';
      }

      contactForm.reset();

      // Scroll success into view
      if (statusEl) {
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Hide after 6s
      setTimeout(function () {
        if (statusEl) {
          statusEl.style.display = 'none';
        }
      }, 6000);
    });
  }

  /* ---------- Intersection Observer — Reveal Animations ---------- */
  function initRevealAnimations() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately
      reveals.forEach(function (el) {
        el.classList.add('reveal--visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Active Nav Link Highlight ---------- */
  function initActiveNavHighlight() {
    var sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('nav__link--active');
            }
          });
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- Phone Number Click Tracking (placeholder) ---------- */
  function initPhoneTracking() {
    var phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Analytics placeholder
        if (typeof gtag === 'function') {
          gtag('event', 'phone_call', {
            event_category: 'Contact',
            event_label: link.getAttribute('href')
          });
        }
      });
    });
  }

  /* ---------- Initialize ---------- */
  function init() {
    initMobileMenu();
    initHeaderShrink();
    initSmoothScroll();
    initFormValidation();
    initRevealAnimations();
    initActiveNavHighlight();
    initPhoneTracking();
    initLanguageToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
