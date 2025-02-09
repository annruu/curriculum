/*window.addEventListener("click", function(event) {
    console.log("Clickaste en la página!");
    console.log(event);
});*/

// $('select').on('change', function (e) {
//     var optionSelected = $("option:selected", this);
//     var valueSelected = this.value;
// });

// $('.lenguaje').on('change', function() {
//     // alert( this.value ); // Arroja EN o ES según lo que se selecciona.
//     var lenguajeSeleccionado = $( "#lenguaje option:selected" ).text();
//     console.log("Lenguaje seleccionado: " + lenguajeSeleccionado);
//     if (lenguajeSeleccionado === EN){
//         $('#menu1').text('Awashuwashu');
//     } else {
        
//     }
// });

function navResponsive() {
    console.log('Nav responsive');
    var x = document.getElementById("navbar");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
}

$('section').on("click", function(event) {
    $(".menu").removeClass('responsive');
});

/*
//ways to retrieve selected option and text outside handler
console.log('Valor de opción seleccionado inicialmente ' + $('select option').filter(':selected').val()); 
console.log('Texto de opción seleccionado inicialmente ' + $('select option').filter(':selected').text());
*/


$('select').on('change', function () {
  //ways to retrieve selected option and text outside handler
  /*console.log('Changed option value ' + this.value);
  console.log('Changed option text ' + $(this).find('option').filter(':selected').text());*/
var este = $('select option').filter(':selected').val();
    if (este === "EN"){

        $('#lang-menu1').html('Home');
        $('#lang-menu2').html('Projects');
        $('#lang-menu3').html('Galery');
        $('#lang-menu4').html('Contact');

        $('#lang-title').html('Andrea Ruiz | Graphic Design');

        $('#lang-intro-1').html('¡Hi! 👋🏻');
        $('#lang-intro-2').html("I'm a Graphic and UI Designer 👩🏻‍💻<br>I have been always been passioned about challenges in which I can improve and give attractive and functional visual solutions.");
        $('#lang-intro-2-1').html("For me, commitment and responsibility are invaluables, that's why my priority has always been acting with those values in every move I make.");
        $('#lang-intro-2-2').html("In addition to my passion for graphic design, I strive to maintain a balance between my professional and personal life, which enhances my creativity. I am committed to continuously improving my skills and pouring all my talent into every project, whether it’s developing visual solutions or creating images that meaningfully connect with people.");
        
        $('#lang-subtitle1').html("Work experience");
        $('#lang-subtitle2').html("Skills");
        $('#lang-subtitle3').html("Portfolio");

        $('#lang-exp1').html('I did my internship in the Language Center at the Autonomous University of Hidalgo State in Mexico, generating Web resources for Make it Real! platform dedicated to the teaching of English Language');
        $('#lang-exp2').html('I worked during 5 years in CIGE México, a Startup focused on Technology sector where I performed Graphic Design activities, in adition to acquire and develop User Interface Design skills.');
        $('#lang-exp3').html('My activities were oriented towards the company branding and its products <a class="link-menu" href="https://if-bot.com" target="_blank">IFbot</a> and <a class="link-menu" href="https://litterae.io" target="_blank">Litterae</a>, social media content design and web resources of each one that included <span class="highlight-discrete">ilustrations</span>, <span class="highlight-discrete">UI Design</span>, <span class="highlight-discrete">audiovisual content</span> and <span class="highlight-discrete">animations</span>, as well as the support in the development and manteinance of the company products.');
        $('#lang-exp4').html('In January 2022, I started to work at <a class="link-menu" href="https://bootcamp-institute.com/" target="_blank">Bootcamp Institute</a>, initialy performind in Graphic Design area exclusively, creating <span class="highlight-discrete">presentations</span>, <span class="highlight-discrete">e-books</span>, social media content like <span class="highlight-discrete">banners</span>, <span class="highlight-discrete">infographics</span>, <span class="highlight-discrete">informative carousels</span>, <span class="highlight-discrete">graphic resources for its Website</span> like <span class="highlight-discrete">icons</span>, <span class="highlight-discrete">images</span>, <span class="highlight-discrete">animated svg</span>. Eventually, I started to perform Web design activities like <span class="highlight-discrete">page optimization</span> to achieve a correct display on different devices, <span class="highlight-discrete">design and creation of website pages</span> through <span class="highlight-discrete">Pagefly</span> and <span class="highlight-discrete">Shopify</span>, combining then my CSS, JavaScript and HTML previous knowledge with this tools and design.');
        $('#lang-exp5').html('In September 2022, I started working at StoryMarketing Studio, a Swiss company, where I worked as a <span class="highlight-discrete">Freelance Web Designer</span>, creating websites using platforms like <span class="highlight-discrete">WordPress and no-code tools such as Brizy</span>, as well as the <span class="highlight-discrete">GoHighLevel CRM</span>. I was also able to apply my knowledge of CSS, JS, and HTML, as well as my <span class="highlight-discrete">spoken and written English</span>.');
        $('#lang-exp6').html('In October 2023, I resumed my work at <a class="link-menu" href="https://bootcamp-institute.com/" target="_blank">Bootcamp Institute</a>, this time in a role focused on digital marketing. I participated in the <span class="highlight-discrete">management and updating of certain marketing processes</span> and social media, as well as the implementation of forms and the use of platforms like <span class="highlight-discrete">Tally</span>, <span class="highlight-discrete">Notion</span>, and <span class="highlight-discrete">Zapier</span>. I also took part in graphic design tasks, including the <span class="highlight-discrete">creation of graphic styles</span> for educational services, the creation of <span class="highlight-discrete">presentations</span>, <span class="highlight-discrete">content for social media</span> such as images and videos for social media posts, <span class="highlight-discrete">graphic resources</span> for the website, as well as <span class="highlight-discrete">adjustments and redesign of the site</span>.');
        $('#exp-current').html('<i class="fas fa-calendar-day"></i> 2023 - Current');

        $('#lang-skill-subtitle1').html("UI/UX");
        $('#lang-skill-subtitle2').html("Graphic Design");
        $('#lang-skill-subtitle3').html("Languages");
        $('#lang-skill-subtitle4').html("OTHER SKILLS");
        $('#lang-skill-lang1').html('🇲🇽 Spanish <span class="nivel">Native</span>');
        $('#lang-skill-lang2').html('🇬🇧 English <span class="nivel">Intermediate</span>');
        $('#lang-skill-other1').html("Responsive design");
        $('#lang-skill-other2').html("User Centered Design");
        $('#lang-skill-other3').html("Wireframes creation");
        $('#lang-skill-other4').html("Illustration");
        $('#lang-skill-other5').html("Freehand drawing");
        // $('#lang-skill-other6').html("Buena ortografía y redacción");
        $('#lang-skill-other6').html("Aesthetic sense");
        $('#lang-skill-other7').html("Remote work experience");
        $('#lang-skill-other8').html("Attention to details");
        $('#lang-skill-other9').html("Good communication");
        $('#lang-skill-other10').html("Honesty");
        $('#lang-skill-other11').html("Positive attitude");
        $('#lang-skill-other12').html("Responsibility");
        $('#lang-skill-other13').html("Loyalty");
        $('#lang-skill-other14').html("Collaboration");
        $('#lang-skill-other15').html("Teamwork");
        $('#lang-skill-other16').html("Quick learning");
        $('#lang-skill-other17').html("Minded to keep learning");
        $('#lang-skill-other18').html("Adherence to brand identity");

        $('#lang-proyecto1-1').html("I participated in the development of IF, a platform which offers financial virtual assistance to entrepreneurs and business.");
        $('#lang-proyecto1-2').html("Visit IF");
        $('#lang-proyecto1-3').html("I performed in branding, UI, web resources design, creation and implementation of HTML structure and CSS stylesheets, the development of some JavaScript functionalities of each model, writing and text revision, audiovisual and social media content design and the mantainance of the platform.");
        $('#lang-proyecto2-1').html("I participated as well in the development of Litterae, a platform dedicated to consulting job references of potential collaborators that a company could be interested in hiring.");
        $('#lang-proyecto2-2').html("Visit Litterae");
        $('#lang-proyecto2-3').html("I was involved in the concept development, UI design, audiovisual and visual resources creation, optimization of HTML structure and creation of CSS stylesheets.");
        
        $('#lang-subtitle-portfolio1').html("UI/UX");
        $('#lang-subtitle-portfolio2').html("Visual content");
        $('#lang-subtitle-portfolio3').html("Illustration");
        $('#lang-subtitle-portfolio4').html("Video");

        $('#lang-footer-title').html("Contact me");
        $('#lang-footer1').html('<i class="far fa-envelope"></i> Send me an e-mail');

        $('#lang-aside-title').html("Andrea Ruiz <br> Graphic Design");
        $('#lang-aside-info').html(" 👩🏻‍💻 <b>Graphic and UI designer.</b> I love Arts, reading and learning things✨");
        $('#lang-aside-subtitle1').html("Tools");
        $('#lang-aside-subtitle2').html("Languages");
        $('#lang-aside-language1').html("🇲🇽 Spanish");
        $('#lang-aside-language2').html("🇬🇧 English");

    } else {

        $('#lang-menu1').html('Inicio');
        $('#lang-menu2').html('Proyectos');
        $('#lang-menu3').html('Galería');
        $('#lang-menu4').html('Contacto');

        $('#lang-title').html('Andrea Ruiz | Diseño gráfico');

        $('#lang-intro-1').html('¡Hola! 👋🏻');
        $('#lang-intro-2').html('Soy Diseñadora Gráfico y UI 👩🏻‍💻 <br>Siempre me han apasionado los retos en los que pueda dar soluciones visuales funcionales y atractivas.  Me encanta ilustrar, es uno de mis pasatiempos ❤️ <br>Constantemente busco mejorar y desarrollar mis habilidades, actualmente estoy cursando una Certificación de Google en Diseño UX.  <br>Para mí, el compromiso y la responsabilidad son invaluables, por eso mi prioridad siempre ha sido actuar con tales valores en cada acción que tomo.');
        
        $('#lang-subtitle1').html("Experiencia");
        $('#lang-subtitle2').html("Habilidades");
        $('#lang-subtitle3').html("Portafolio");

        $('#lang-exp1').html("Realicé mi servicio social en el Centro de Lenguas de la Universidad Autónoma del Estado de Hidalgo, México, generando recursos web para la plataforma Make it Real! dedicada a la enseñanza de la Lengua Inglesa.");
        $('#lang-exp2').html("Trabajé durante 5 años en CIGE México, una Startup enfocada al sector tecnológico en donde desempeñé actividades de Diseño gráfico, además de adquirir y desarrollar habilidades de Diseño de Interfaz de Usuario.");
        $('#lang-exp3').html('Mis actividades fueron orientadas al diseño de la imagen de la empresa y sus productos <a class="link-menu" href="https://if-bot.com" target="_blank">IFbot</a> y <a class="link-menu" href="https://litterae.io" target="_blank">Litterae</a>, al diseño de contenido visual para redes sociales y de recursos web de cada uno, que incluían <span class="highlight-discrete">ilustraciones</span>, <span class="highlight-discrete">diseño UI</span>, <span class="highlight-discrete">contenido audiovisual</span> y <span class="highlight-discrete">animaciones</span>, así como apoyar en el desarrollo y mantenimiento de los productos de la empresa.');
        $('#lang-exp4').html('En enero de 2022 comencé a trabajar en <a class="link-menu" href="https://bootcamp-institute.com/" target="_blank">Bootcamp Institute</a>, desempeñándome inicialmente en el área exclusiva de Diseño Gráfico creando <span class="highlight-discrete">presentaciones</span>, <span class="highlight-discrete">e-books</span>, contenido para redes sociales como <span class="highlight-discrete">banners</span>, <span class="highlight-discrete">infografías</span>, <span class="highlight-discrete">carruseles</span>, <span class="highlight-discrete">promocionales</span>, <span class="highlight-discrete">recursos gráficos para su sitio Web</span> como <span class="highlight-discrete">iconos</span>, <span class="highlight-discrete">imágenes</span>, <span class="highlight-discrete">svg animados</span>, y eventualmente comencé a tomar actividades del sitio Web como <span class="highlight-discrete">optimización de las páginas</span> para la correcta visualización en diversos dispositivos, <span class="highlight-discrete">diseño y creación de páginas</span> a través de <span class="highlight-discrete">Pagefly</span> y <span class="highlight-discrete">Shopify</span>, combinando así mis conocimientos previos de CSS, javascript y html con esas herramientas y diseño.');

        $('#lang-skill-subtitle1').html("UI/UX");
        $('#lang-skill-subtitle2').html("Diseño Gráfico");
        $('#lang-skill-subtitle3').html("Idiomas");
        $('#lang-skill-subtitle4').html("OTRAS HABILIDADES");
        $('#lang-skill-lang1').html('🇲🇽 Español <span class="nivel">Nativo</span>');
        $('#lang-skill-lang2').html('🇬🇧 Inglés <span class="nivel">Intermedio</span>');
        $('#lang-skill-other1').html("Diseño responsivo");
        $('#lang-skill-other2').html("User Centered Design");
        $('#lang-skill-other3').html("Creación de wireframes");
        $('#lang-skill-other4').html("Ilustración");
        $('#lang-skill-other5').html("Dibujo a mano alzada");
        $('#lang-skill-other6').html("Buena ortografía y redacción");
        $('#lang-skill-other7').html("Experiencia en trabajo remoto");
        $('#lang-skill-other8').html("Atención a los detalles");
        $('#lang-skill-other9').html("Buena comunicación");
        $('#lang-skill-other10').html("Honestidad");
        $('#lang-skill-other11').html("Actitud positiva");
        $('#lang-skill-other12').html("Responsabilidad");
        $('#lang-skill-other13').html("Lealtad");
        $('#lang-skill-other14').html("Colaboración");
        $('#lang-skill-other15').html("Trabajo en equipo");
        $('#lang-skill-other16').html("Aprendizaje rápido");
        $('#lang-skill-other17').html("Dispuesta al aprendizaje continuo");

        $('#lang-proyecto1-1').html("Participé en el desarrollo de IF, una plataforma dedicada a brindar asesoría financiera virtual a emprendedores y empresarios.");
        $('#lang-proyecto1-2').html("Visitar IF");
        $('#lang-proyecto1-3').html("Me encargué del diseño y desarrollo de branding, UI, desarrollo de recursos web, creación e implementación de estructura HTML y hojas de estilos CSS, desarrollo de algunas funcionalidades de los modelos a través de JavaScript, revisión y redacción de textos, contenido para redes sociales y contenido audiovisuales, así como su mantenimiento.");
        $('#lang-proyecto2-1').html("También participé en el desarrollo de Litterae, una plataforma dedicada a la consulta de referencias laborales de posibles colaboradores que las empresas estén interesadas en contratar.");
        $('#lang-proyecto2-2').html("Visitar Litterae");
        $('#lang-proyecto2-3').html("Estuve involucrada en el desarrollo del diseño del concepto, UI, desarrollo de recursos visuales y audiovisuales, optimización de estructura HTML y creación de hojas estilos CSS.");
        
        $('#lang-subtitle-portfolio1').html("UI/UX");
        $('#lang-subtitle-portfolio2').html("Contenido visual");
        $('#lang-subtitle-portfolio3').html("Ilustración");
        $('#lang-subtitle-portfolio4').html("Video");

        $('#lang-footer-title').html("Contacto");
        $('#lang-footer1').html('<i class="far fa-envelope"></i> Envíame un e-mail');

        $('#lang-aside-title').html("Andrea Ruiz <br> Diseño Gráfico");
        $('#lang-aside-info').html(" 👩🏻‍💻<b>Diseñadora Gráfica y UI.</b> Me encanta el Arte, leer y aprender cosas✨");
        $('#lang-aside-subtitle1').html("Herramientas");
        $('#lang-aside-subtitle2').html("Lenguajes");
        $('#lang-aside-language1').html("🇲🇽 Español");
        $('#lang-aside-language2').html("🇬🇧 Inglés");
        
        //$('#').html("");

    }
});
// $('select[name=selector] option').filter(':selected').val();