import ibma from "../assets/ibma.png"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center text-white bg-gray-900"
    >
      <div className="">
        <div>
          <h2 className="text-5xl p-8 font-bold text-[#FFCC00] text-center">
            About Me
            <hr className="w-60 h-1 mx-auto my-2 border-0 rounded-sm bg-[#FFCC00]" />
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center mx-10 md:mx-50">
          <div className="">
              <img src={ibma} alt="ibma" className="w-7xl" />
          </div>
          <div className="text-xl leading-relaxed mb-4 space-y-5">
            <p className="">
              Hello! I am Ibmahendra Ferdiansah, a Computer Science student at
              Indonesian Digital Technology University. I have a strong passion
              for creating meaningful digital experiences.
            </p>
            <p className="">
              Currently, I am deeply interested in Web Development. I focus on
              frontend development using technologies such as HTML, CSS,
              JavaScript, and React.js. On the backend side, I am learning
              Node.js with frameworks like Hapi.js and Express.js, and managing
              databases using MySQL and PostgreSQL.
            </p>
            <p className="">
              My journey in the world of technology began with curiosity and has
              grown into a dedicated pursuit of excellence in web development. I
              am committed to continuous learning and staying up-to-date with
              the latest technologies and industry trends.
            </p>
            <p className="">
              My goal is to build seamless and innovative digital solutions that
              can exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
