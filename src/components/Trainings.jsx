const trainings = [
  {
    id: 1,
    title: "Java Development Training (OOP)",
    description:
      "Comprehensive training focused on Object-Oriented Programming principles using Java, including encapsulation, inheritance, polymorphism, abstraction, exception handling, and application development fundamentals.",
    service: "Seven Seven Global Services, 2023",
  },
  {
    id: 2,
    title: "SQL Training",
    description:
      "Hands-on training in Structured Query Language (SQL) covering database design, CRUD operations, joins, indexing, stored procedures, and query optimization using relational databases.",
    service: "Seven Seven Global Services, 2023",
  },
  {
    id: 3,
    title: "React JS Training",
    description:
      "Frontend development training using React JS, covering components, props, state management, hooks, routing, and building responsive single-page applications.",
    service: "Seven Seven Global Services, 2023",
  },
  {
    id: 4,
    title: "Angular Training",
    description:
      "Training focused on Angular fundamentals including components, services, dependency injection, routing, and building scalable enterprise-level web applications.",
    service: "Seven Seven Global Services, 2023",
  },
  {
    id: 5,
    title: "OutSystems Development Training",
    description:
      "Low-code application development training using the OutSystems platform, covering reactive web applications, data modeling, workflows, API integrations, and deployment best practices.",
    service: "Seven Seven Global Services, 2021",
  },
  {
    id: 6,
    title: "Six Sigma White Belt Training",
    description:
      "Introduction to Six Sigma methodologies and process improvement principles, focusing on quality management concepts, DMAIC framework, and continuous improvement strategies.",
    service: "Seven Seven Global Services, 2023",
  },
];

const Trainings = () => {
  return (
    <div className="bg-black text-white item-center " id="Training & Seminars">
      <h1 className="text-4xl font-bold text-center mb-12 mt ">
        Trainings & Seminars
      </h1>
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 ">
        {trainings.map((training) => (
          <div>
            <div
              key={training.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 p-5"
            >
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {training.title}
              </h3>
              <p className="mt-2 text-gray-300">{training.description}</p>
              <div className="mt-4 inline-block text-green-400 hover:text-blue-500">
                {training.service} - Date accquired
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Trainings;
