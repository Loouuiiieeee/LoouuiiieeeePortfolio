import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AngularLogo from "../assets/Icons/angular.png";
import AtomLogo from "../assets/Icons/atom.png";
import AvatarLogo from "../assets/Icons/avatar.png";
import BurpLogo from "../assets/Icons/burp.png";
import DockerLogo from "../assets/Icons/docker.png";
import GithubLogo from "../assets/Icons/github.png";
import GitlabLogo from "../assets/Icons/gitlab.png";
import JavaLogo from "../assets/Icons/java.png";
import JiraLogo from "../assets/Icons/jira.png";
import JsLogo from "../assets/Icons/js.png";
import SqlLogo from "../assets/Icons/sql.png";
import TypescriptLogo from "../assets/Icons/typescript.png";

const Skills = () => {
  const skillList = [
    { name: "React", img: AtomLogo },
    { name: "Outsystems", img: AvatarLogo },
    { name: "Burp", img: BurpLogo },
    { name: "Github", img: GithubLogo },
    { name: "Gitlab", img: GitlabLogo },
    { name: "Java", img: JavaLogo },
    { name: "Jira", img: JiraLogo },
    { name: "JsLogo", img: JsLogo },
    { name: "Angular", img: AngularLogo },
    { name: "Docker", img: DockerLogo },
    { name: "Sql", img: SqlLogo },
    { name: "Typescript", img: TypescriptLogo },
  ];

  // Function to split skills into chunks of 9
  const chunkArray = (arr, size) =>
    arr.reduce(
      (acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc),
      [],
    );

  const slides = chunkArray(skillList, 6); // Each slide = 9 skills

  return (
    <div
      className="bg-black text-white flex flex-col items-center py-10"
      id="skills"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1} // 1 slide per 3x3 grid
        pagination={{ clickable: true }}
        className="w-4/5"
      >
        {slides.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-3 gap-6">
              {group.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 flex flex-col justify-center items-center text-lg font-semibold hover:scale-105 transform transition-transform duration-300 cursor-pointer"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-20 h-20 object-contain mb-2"
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
