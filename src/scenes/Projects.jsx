import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visibile: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({title, subtitle}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.toLowerCase().split(" ").join("-");

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                {subtitle}
                </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} className="h-64"/>
        </motion.div>
    )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are some projects that I have worked on!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
            {/* ROW 1*/}
            {/* <div className="flex justify-center text-center items-center p-10 bg-red max-width-[400px] text-2xl font-playfair font-semibold">
                BEAUTIFUL USER INTERFACES
            </div> */}
            <Project title="Project 1" subtitle="Website to raise awareness and provide supportive tools for mental health!" />
            <Project title="Project 2" subtitle="Fun game where two teams of NBA players battle against one another!"/>
            <Project title="Project 3" subtitle="Ecommerce website specializing in selling albums!"/>
            <Project title="Project 4" subtitle="Travel advisor app to locate restaurants, hotels and attractions near you!"/>
            <Project title="Project 5" subtitle="Sneakerheads need to check out the latest Nike shoes!" />

            {/* ROW 2 */}
            {/* <Project title="Project 3" />
            <Project title="Project 4" />src
            <Project title="Project 5" /> */}

            {/* ROW 3 */}
            {/* <Project title="Project 6" />
            <Project title="Project 7" /> */}

            {/* <div className="flex justify-center text-center items-center p-10 bg-blue max-width-[400px] text-2xl font-playfair font-semibold">
                SMOOTH USER EXPERIENCE
            </div> */}
            
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
