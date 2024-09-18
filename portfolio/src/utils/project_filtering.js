const initProjectFilters = () => {
  // Function to filter projects
  const ProjectFilters = async (clickEvent) => {
    const filterButtons = document.querySelectorAll(".filter_btn");
    const filterableProjects = document.querySelectorAll(".single-project");

    filterButtons.forEach((button) => button.classList.remove("active"));

    clickEvent.target.classList.add("active");

    filterableProjects.forEach((project) => {
      project.classList.add("hidden");

      if (project.dataset.name === clickEvent.target.dataset.name || clickEvent.target.dataset.name === "all") {
        project.classList.remove("hidden");
      }
    });
  };

  const filterButtons = document.querySelectorAll(".filter_btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", ProjectFilters);
  });
};

export default initProjectFilters;
