import { motion } from "framer-motion";

const Experiance = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiance
      </motion.h1>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
            >
              <p className="mb-2 text-sm text-neutral-400">2024- present</p>
            </motion.div>
          </div>
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
          className="w-full max-w-wl lg:w-1/4">
            <h6 className="mb-2 font-semibold">
              Software Quality Engineer Intern -{" "}
              <span className="text-sm text-purple-700"> Wiley Global </span>
            </h6>
            <p className="mb-4 text-neutral-400">
              {" "}
              I.m working as software quality engineer intern at wiley global
              technologies, my key resposibilities are ...
              <br />
              <span className="mr-2 mt-9 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                {" "}
                Rest Assured Java Playwright
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
