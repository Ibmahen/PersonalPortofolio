export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row px-6 py-16 text-white bg-gradient-to-bl from-gray-900 to-black mix-blend-screen">
      <div className="container">
        <h2 className="text-5xl p-8 font-bold text-[#FFCC00] text-center space-y-6">
          About Me
        </h2>
        <div className="p-8 shadow-lg mb-8 mx-56">
          <p className="text-xl leading-relaxed mb-4">
            Hello! I am Ibmahendra Ferdiansah, a Computer Science student at
           Indonesian Digital Technology University. I have a strong passion for
            creating meaningful digital experiences.
          </p>
          <p className="text-xl leading-relaxed mb-4">
            Currently, I am deeply interested in Web Development. I focus on
            frontend development using technologies such as HTML, CSS,
            JavaScript, and React.js. On the backend side, I am learning
            Node.js with frameworks like Hapi.js and Express.js, and
            managing databases using MySQL and PostgreSQL.
          </p>
          <p className="text-xl leading-relaxed mb-4">
            My journey in the world of technology began with curiosity and has
            grown into a dedicated pursuit of excellence in web development. I
            am committed to continuous learning and staying up-to-date with the
            latest technologies and industry trends.
          </p>
          <p className="text-xl leading-relaxed">
            My goal is to build seamless and innovative digital solutions that
            can exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
