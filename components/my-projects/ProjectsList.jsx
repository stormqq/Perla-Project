import { Box } from "@mui/material";
import React from "react";
import ProjectsHeadTitle from "./ProjectsHeadTitle";
import dayjs from "dayjs";
function ProjectsList({ projects }) {
    console.log('List:', projects)
  return (
    <>
      {projects && projects.map((project) => (
        <Box
          sx={{
            display: "flex",
            padding: "20px 40px",
            borderBottom: "1px solid #A5A5A5",
          }}
        >
            <ProjectsHeadTitle
            title={project.projectName}
            sx={{ width: "645px", color: '#303030', fontSize: "24px" }}
          />
          
          <Box
            sx={{
              display: "flex",
              //marginRight: "360px",
            }}
          >
            <ProjectsHeadTitle sx={{width: "267px", color: '#303030', fontSize: "24px"}} title={dayjs(project.startDate).format('DD/MM/YYYY')} />
            <ProjectsHeadTitle sx={{color: '#303030', fontSize: "24px"}} title={dayjs(project.finishDate).format('MMMM D, YYYY')} />
          </Box>
        </Box>
      ))}
    </>
  );
}

export default ProjectsList;
