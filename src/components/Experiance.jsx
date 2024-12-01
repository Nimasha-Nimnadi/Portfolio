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
      <div className="flex">
        {/* Left Side Content */}
        <div className="w-3/4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
            className="mb-8"
          >
            <p className="mb-4 text-lg text-neutral-400 font-semibold">
              2024 - Present
            </p>
            <h6 className="mb-2 font-semibold">
              Software Quality Engineer Intern -{" "}
              <span className="text-sm text-purple-700">Wiley Global Technology</span>
            </h6>
            <p className="mb-4 text-neutral-400">
              I’m working as a software quality engineer intern at Wiley Global
              Technologies.
              <br />
              ✦ Proficient in API automation testing using Rest Assured and monitoring tools like Kibana, Dynatrace.
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
              <span className="mr-2 mt-9 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                Rest Assured Java Playwright
              </span>
            </p>
          </motion.div>
        </div>

        {/* Right Side: Two Rotating Wheels */}
        <div className="relative w-1/4 h-full">
          {/* First Wheel */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10, // Duration of one full rotation
              ease: "linear",
            }}
            className="absolute w-40 h-40"
            style={{ top: "10%", left: "30%" }} // Adjusted starting position
          >
            <div className="relative w-full h-full">
              {"Software Quality Engineering".split("").map((char, i, arr) => {
                const angle = (360 / arr.length) * i;
                return (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      transform: `rotate(${angle}deg) translate(0, -80px) rotate(-${angle}deg)`,
                      transformOrigin: "center",
                    }}
                    className="text-purple-700 text-lg font-bold"
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* Second Wheel */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 12, // Different duration for variety
              ease: "linear",
            }}
            className="absolute w-40 h-40"
            style={{ top: "60%", left: "60%" }} // Adjusted starting position
          >
            <div className="relative w-full h-full">
              {"Software Quality Engineering".split("").map((char, i, arr) => {
                const angle = (360 / arr.length) * i;
                return (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      transform: `rotate(${angle}deg) translate(0, -80px) rotate(-${angle}deg)`,
                      transformOrigin: "center",
                    }}
                    className="text-blue-600 text-lg font-bold"
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
