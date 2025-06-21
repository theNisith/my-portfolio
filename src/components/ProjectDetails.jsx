import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 md:max-w-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-3 right-3 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-4">
          <h5 className="mb-2 text-xl font-bold text-white md:text-2xl">{title}</h5>
          <p className="mb-3 text-sm font-normal text-neutral-400 md:text-base">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-2 text-sm font-normal text-neutral-400 md:text-base">{subDesc}</p>
          ))}
          <div className="flex flex-col gap-3 mt-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 hover-animation md:size-10"
                />
              ))}
            </div>
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium cursor-pointer hover-animation md:text-base"
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-3 md:size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
