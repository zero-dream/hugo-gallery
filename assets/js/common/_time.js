import params from "@params";

(() => {
  const currBuildTime = params.buildTime;
  const prevBuildTime = localStorage.getItem("buildTime") || 0;

  if (prevBuildTime < currBuildTime) {
    localStorage.clear();
    localStorage.setItem("buildTime", currBuildTime);
  }
})();
