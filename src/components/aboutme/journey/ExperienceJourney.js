import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2023 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            SOMKODER
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Tutor
          </h6>
          <p>• Provide software engineering training to high school students, primary school students and form four leavers.</p>
          <p>• Providing information about the courses and potential careers in the Software Engineering field.</p>
          <p>• Effective follow-ups with the prospective students.</p>
          <p>• Provide daily, Weekly and monthly reporting about all operational activities.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            iTalanta
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Angular Developer
          </h6>
          <p>• Actively participated in the development process, and my code contributions were successfully merged into the project's main codebase.</p>
          <p>• Proficient in collecting and organizing data from diverse sources, utilizing statistical techniques and software 
            tools for data analysis and creating comprehensive reports and presentations that showcase significant insights and trends.</p>
          <p>• Collaborated with cross-functional teams to ensure that the project's codebase was well-organized and maintained.</p>
          <p>• Actively participated in the development process, and my code contributions were successfully merged into the project's main codebase.</p>
          <p>• Proficient in collecting and organizing data from diverse sources, utilizing statistical techniques and software applications for data analysis and creating comprehensive reports and presentations that showcase significant insights and trends.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
