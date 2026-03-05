import luwijim from "../assets/luwii.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16" id="home">
      <div>
        <img
          src={luwijim}
          alt=""
          className="bg-white mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-yellow-500">
            Louiejim Hernandez
          </span>
          , a Front-End Developer and OutSystems Developer .
        </h1>
        <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
          {" "}
          I specialize in building modern, responsive web applications using
          both hard-coded solutions and low-code platforms, delivering efficient
          and user-friendly digital experiences.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Contact With Me
          </button>
          <button className="bg-gradient-to-r from-rose-400 to-orange-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
