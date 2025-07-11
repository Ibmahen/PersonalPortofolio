import ibma from "../assets/ibma.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center text-white bg-[#0a101e] py-16 px-6"
    >
      <div className="container mx-auto px-4 max-w-7xl z-10">
        <div className="mb-10">
          <h2 className="text-5xl p-8 font-bold text-[#FFCC00] text-center">
            About Me
            <hr className="w-60 h-1 mx-auto my-2 border-0 rounded-sm bg-[#FFCC00]" />
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            {" "}
            <img
              src={ibma}
              alt="Ibmahendra Ferdiansah"
              className="w-full h-auto max-w-md object-contain rounded-4xl"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            {" "}
            <p className="text-lg md:text-xl">
              Hello! I am Ibmahendra Ferdiansah, a Computer Science student at
              Indonesian Digital Technology University. I have a strong passion
              for creating meaningful digital experiences.
            </p>
            <p className="text-lg md:text-xl">
              Currently, I am deeply interested in Web Development. I focus on
              frontend development using technologies such as HTML, CSS,
              JavaScript, and React.js. On the backend side, I am learning
              Node.js with frameworks like Hapi.js and Express.js, and managing
              databases using MySQL and PostgreSQL.
            </p>
            <p className="text-lg md:text-xl">
              With a background rooted in curiosity, I continuously sharpen my
              skills in web development. I believe that learning never stops,
              and I am always open to new technologies and innovations.
            </p>
            <p className="text-lg md:text-xl">
              My goal is to to build digital products that are functional,
              modern, and provide real value to every user.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
