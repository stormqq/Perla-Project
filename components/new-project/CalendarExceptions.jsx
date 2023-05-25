import { Box } from "@mui/material";
import React, { useState } from "react";
import TableMiniTitle from "./TableMiniTitle";
import ExceptionList from "./ExceptionList";
import DaysOfWeek from "./DaysOfWeek";
import { AddIcon } from "../my-projects/AddCircleIcon";

function CalendarExceptions({project, setProject, newException, setNewException}) {

  if (!project.calendarExceptions.length && !newException) {
    return (
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: "15px",
        minHeight: "300px",
      }}>
        <Box><DaysOfWeek text='You don’t have any exceptions yet' /></Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <DaysOfWeek text='Click on the' /><AddIcon sx={{
            marginBottom: "15px",
            color: '#2B353E'
          }} onClick={() => setNewException(true)} /> 
          <DaysOfWeek text='button to add calendar exception' />
        </Box>

      </Box>
    )
  }
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "15px",
          minHeight: "300px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "20px 40px",
            justifyContent: "space-between",
            marginRight: "334px",
          }}
        >
          <Box
            sx={{
              maxWidth: "471px",
            }}
          >
            <TableMiniTitle text="Date" />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "84px",
            }}
          >
            <Box>
              <TableMiniTitle text="Working Hours" />
            </Box>
            <Box>
              <TableMiniTitle text="Name of the exception" />
            </Box>
          </Box>
        </Box>
        <ExceptionList project={project} setProject={setProject} newException={newException} setNewException={setNewException} />
      </Box>
    </div>
  );
}

export default CalendarExceptions;
