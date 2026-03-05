import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AlvIcon, SevenSevenIcon } from "../util/Icons";

const About = () => {
  return (
    <div className="bg-black text-white item-center" id="about">
      <h1 className="text-4xl font-bold text-center mb-1">About me</h1>
      <div className="flex flex-col md:flex-row md:ml-24 mb-20">
        <div className="flex-1 px-4">
          <p className="mt-4 text-lg text-gray-300">
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
              borderTop: "3px solid #fd4f31",
            }}
            animate={true}
            contentArrowStyle={{ borderRight: "7px solid  rgb(254, 255, 255)" }}
            date={<span style={{ color: "#ffffff" }}>July 2025 - Present</span>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SevenSevenIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{
                fontSize: "20px",
                lineHeight: "30px",
                paddingBottom: "6px",
                fontWeight: "400px",
              }}
            >
              Application Developer 3
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Seven Seven Global Services, Inc.
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-5">
              <li>
                Create software applications based on project requirements.
              </li>
              <li>
                Take on leadership responsibilities in projects, possibly
                mentoring junior developers.
              </li>
              <li>
                Work with other developers, designers, and stakeholders to
                ensure application functionality and user experience.
              </li>
              <li>
                Identify and resolve issues, as well as perform regular
                maintenance on applications.
              </li>
              <li>
                Adhere to coding standards and best practices in software
                development.
              </li>
            </ul>
          </VerticalTimelineElement>
          {/* 0 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(244, 250, 255)",
              color: "black",
              borderTop: "3px solid #fd4f31",
            }}
            animate={true}
            contentArrowStyle={{ borderRight: "7px solid  rgb(254, 255, 255)" }}
            date={
              <span style={{ color: "#ffffff" }}>Nov 2024 – July 2025</span>
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SevenSevenIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{
                fontSize: "20px",
                lineHeight: "30px",
                paddingBottom: "6px",
                fontWeight: "400px",
              }}
            >
              Application Developer 2
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Seven Seven Global Services, Inc.
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-5">
              <li>
                Develops robust full-stack web applications using React
                (frontend) and Java Spring Boot (backend), with a focus on
                performance, scalability, and user experience.
              </li>
              <li>
                Builds and consumes RESTful APIs, enabling seamless data
                communication between client and server.
              </li>
              <li>
                Implements unit and integration tests using JUnit and Mockito,
                ensuring high code quality and reliability throughout the
                development lifecycle
              </li>
              <li>
                Applies responsive design principles and state management in
                React (e.g., using Redux –Saga, Hooks) to create dynamic and
                interactive user interfaces.
              </li>
              <li>
                Collaborates in an Agile environment with cross-functional
                teams, participating in sprint planning, daily stand-ups, and
                code reviews.
              </li>
              <li>
                Manages version control and collaboration using Git, and
                contributed to CI/CD pipelines for automated testing and
                deployment.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(244, 250, 255)",
              color: "black",
              borderTop: "3px solid #fd4f31",
            }}
            animate={true}
            contentArrowStyle={{ borderRight: "7px solid  rgb(254, 255, 255)" }}
            date={
              <span style={{ color: "#ffffff" }}>April 2021 – Nov 2024</span>
            }
            iconStyle={{ background: "#4cc2e4;", color: "#fff" }}
            icon={<SevenSevenIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{
                fontSize: "20px",
                lineHeight: "30px",
                paddingBottom: "6px",
                fontWeight: "400px",
              }}
            >
              Application Developer 1
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Seven Seven Global Services, Inc.
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-5">
              <li>
                Developed front-end web applications for the client using the
                OutSystems platform, following industry best practices for
                performance and maintainability.
              </li>
              <li>
                Conducted unit testing using BDD (Behavior-Driven Development)
                and performed system integration testing to ensure code quality,
                application stability, and optimized performance.
              </li>
              <li>
                Prepared release documentation and deployment scripts; provided
                production support and issue resolution as required.
              </li>
              <li>
                Actively participated in Agile workflows, collaborating closely
                with Business Analysts, Product Owners, and QA teams to ensure
                alignment with project goals and timely delivery.
              </li>
            </ul>
          </VerticalTimelineElement>
          {/* 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(244, 250, 255)",
              color: "black",
              borderTop: "3px solid #4cc2e4",
            }}
            animate={true}
            contentArrowStyle={{ borderRight: "7px solid  rgb(254, 255, 255)" }}
            date={<span style={{ color: "#ffffff" }}>Feb 2020 – Dec 2020</span>}
            iconStyle={{ background: "rgb(250, 250, 250)", color: "#fff" }}
            icon={<AlvIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Service Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ALVTechnologies Philippine Incorporation
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-5">
              <li>
                Installed and programmed laboratory equipment for school,
                hospital, and industrial applications.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
