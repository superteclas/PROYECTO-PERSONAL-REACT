import React from "react";

const Legal = () => {
  return (
    <div
      className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <h1 className="text-3xl font-bold mb-6 text-black">Aviso Legal</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">1. TITULAR DEL SITIO WEB</h2>
        <p className="text-justify leading-relaxed text-sm">
          En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de
          servicios de la sociedad de la información y de comercio electrónico, se hace constar que el sitio web{" "}
          <a href="https://alvaroponcekeys.com" target="_blank" rel="noopener noreferrer" className="text-black underline">
            https://alvaroponcekeys.com
          </a>{" "}
          es titularidad de Álvaro Ponce. Para contactar con el titular se facilita la dirección de correo electrónico{" "}
          <a href="mailto:alvaroponcemarin@gmail.com" className="text-black underline">
            alvaroponcemarin@gmail.com
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">2. OBJETO</h2>
        <p className="text-justify leading-relaxed text-sm">
          La presente página web tiene como finalidad proporcionar información sobre los servicios ofrecidos por el
          titular y servir como canal de comunicación entre los potenciales clientes y el titular. No se recogen datos
          personales mediante formularios en la web ni se almacenan datos personales con fines comerciales o de
          tratamiento automatizado.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">3. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
        <p className="text-justify leading-relaxed text-sm">
          Todas las fotografías utilizadas en este sitio web son de mi autoría, excepto la imagen del piano en la portada,
          la cual es de uso libre y sin derechos de autor. Los iconos empleados provienen de recursos disponibles en
          internet, y la tipografía utilizada corresponde a fuentes de Google Fonts. No obstante, el diseño general del
          sitio, así como todos los demás contenidos y elementos gráficos, son creación propia y están protegidos por
          derechos de propiedad intelectual.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">4. EXCLUSIÓN DE RESPONSABILIDAD</h2>
        <p className="text-justify leading-relaxed text-sm">
          El titular no se responsabiliza del uso que los usuarios puedan hacer de los contenidos incluidos en el sitio web.
          Asimismo, no garantiza que el sitio web se encuentre libre de errores o que su contenido se mantenga actualizado,
          aunque se realizarán las acciones oportunas para corregir o actualizar dicho contenido en caso necesario.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">5. PROTECCIÓN DE DATOS PERSONALES</h2>
        <p className="text-justify leading-relaxed text-sm">
          Este sitio web no almacena ni trata datos personales de los usuarios a través de formularios. El contacto con
          el titular se realiza exclusivamente mediante correo electrónico, y los datos que pudieran proporcionarse en
          dicho contexto no se almacenan en ninguna base de datos automatizada ni se ceden a terceros.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">6. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
        <p className="text-justify leading-relaxed text-sm">
          La relación entre el usuario y el titular se regirá por la normativa vigente en España y, en particular, por la
          legislación sobre protección de datos y servicios de la sociedad de la información. Para la resolución de
          cualquier conflicto o controversia relacionada con el presente sitio web, las partes se someten expresamente a
          los Juzgados y Tribunales del domicilio del titular, con renuncia a cualquier otro fuero que pudiera
          corresponderles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-black">7. USO DE HERRAMIENTAS DE ANALÍTICA Y CONTENIDO DE TERCEROS</h2>
        <p className="text-justify leading-relaxed text-sm">
          Este sitio web utiliza Google Search Console, una herramienta de análisis proporcionada por Google LLC, con el
          fin de obtener datos estadísticos anónimos sobre el rendimiento del sitio en los resultados de búsqueda. Esta
          herramienta no instala cookies en el navegador del usuario ni permite identificar a los visitantes del sitio.
        </p>
        <p className="text-justify leading-relaxed text-sm">
          Asimismo, este sitio web puede incluir vídeos embebidos desde la plataforma YouTube, propiedad de Google LLC. La
          visualización de dichos contenidos implica que YouTube puede recopilar información técnica sobre el navegador,
          dirección IP u otros identificadores, conforme a sus propias políticas de privacidad, ajenas a la del titular de
          este sitio web.
        </p>
      </section>

      <p className="text-right text-xs text-gray-600">
        Última actualización: 22 de julio de 2025
      </p>
    </div>
  );
};

export default Legal;
