import React from "react";
import Schedule from "../photos/schedule.png"

function Project() {
  return (
<>
<figure className="col-md-4">
<img src={Schedule} className="img-thumbnail" alt="schedule"/>
<a href="https://ikethe4.github.io/day-planner/" className="link-text">Work Day Schedule Planner</a>
</figure>
</>
  );
}

export default Project;