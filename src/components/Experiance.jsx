import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div className="flex flex-wrap justify-center mb-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl lg:w-2/3 bg-neutral-900 p-6 rounded-lg shadow-lg"
        >
          <p className="mb-2 text-sm text-neutral-400 text-center">
            2024 - present
          </p>
          <h6 className="mb-4 text-lg font-semibold text-center">
            Software Quality Engineer Intern -{" "}
            <span className="text-purple-700">Wiley Global Technology</span>
          </h6>
          <p className="text-neutral-400 text-justify">
            I’m working as a software quality engineer intern at Wiley Global Technologies.
            <br />
            Proficient in API automation testing using Rest Assured and monitoring tools like Kibana, Dynatrace.
            <br />✦ Experience with manual API testing using Postman and API documentation tools like Swagger, ReDoc.
            <br />✦ Skilled in performance testing and monitoring with Gatling, Gems, and TIBCO.
            <br />✦ Experienced in Playwright automation testing for UI and API, with accessibility testing using Playwright AXE.
            <br />✦ Advanced knowledge of Java and Python for automation.
            <br />✦ Expertise in continuous integration and deployment with Jenkins and ArgoCD.
            <br />✦ Knowledge of migration testing for complex data models and transformation workflows.
            <br />✦ Hands-on experience with Alfresco Digital Content Management System.
            <br />✦ Proficient in regression, load, and smoke testing methodologies.
            <br />✦ In-depth knowledge of SDLC processes, emphasizing early integration of QA best practices.
            <br />✦ Exposure to accessibility testing and best practices.
            <br />✦ Hands-on experience in AI-based testing and integrating Gen AI tools for enhancing quality assurance processes.
            <br />✦ Familiarity with Agile workflows and cross-functional collaboration in testing environments.
            <br />✦ Strong domain understanding of journal publishing and article production workflows.
            <br />
            <span className="mt-4 inline-block rounded bg-purple-900 px-2 py-1 text-sm font-medium text-neutral-100">
              Rest Assured Java Playwright
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
