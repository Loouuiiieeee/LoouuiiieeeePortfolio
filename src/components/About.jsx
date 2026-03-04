import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { OutsystemsIcon } from "../util/Icons";

const About = () => {
  return (
    <div className="bg-black text-white item-center">
      <h1 className="text-4xl font-bold text-center mb-1">About me</h1>
      <div className="flex flex-row ml-26 mb-20">
        <div>
          <p className="mt-4 text-lg text-gray-300 px-4 md:px-32 flex-1">
            Experienced in both traditional coding and low-code software
            development, with a proven track record in the Information
            Technology and Services industry. Proficient in Java (Spring Boot),
            Angular, SQL, TypeScript, JavaScript, and the OutSystems platform
            (Service Center, LifeTime, Visual Studio, and Integration Studio).
            Skilled in designing and developing scalable applications and
            solutions. Strong understanding of software development
            methodologies, including Agile and DevOps, with a demonstrated
            ability to troubleshoot, optimize, and enhance system performance.
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-10">
        Professional Experience
      </h1>
      <div>
        <VerticalTimeline className="mt-4">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(244, 250, 255)",
              color: "black",
            }}
            animate={true}
            contentArrowStyle={{ borderRight: "7px solid  rgb(254, 255, 255)" }}
            date={<span style={{ color: "#ffffff" }}>Nov 2024 – Present</span>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<OutsystemsIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Application Developer 2
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Seven Seven Global Services, Inc.
            </h4>
          </VerticalTimelineElement>

          {/* 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(244, 250, 255)",
              color: "black",
            }}
            animate={true}
            contentArrowStyle={{ borderRight: "7px solid  rgb(254, 255, 255)" }}
            date={
              <span style={{ color: "#ffffff" }}>April 2021 – Nov 2024</span>
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<OutsystemsIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Application Developer 1
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Seven Seven Global Services, Inc.
            </h4>
          </VerticalTimelineElement>
          {/* 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(244, 250, 255)",
              color: "black",
            }}
            animate={true}
            contentArrowStyle={{ borderRight: "7px solid  rgb(254, 255, 255)" }}
            date={<span style={{ color: "#ffffff" }}>Feb 2020 – Dec 2020</span>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<OutsystemsIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Service Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ALVTechnologies Philippine Incorporation
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
