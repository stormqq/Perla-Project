"use client";
import { useEffect, useState } from "react";
import LandingLogo from "@/components/landing/LandingLogo";
import UserFormControl from "@/components/my-projects/UserFormControl";
import { Box, Button } from "@mui/material";
import PersonalProjectTitle from "@/components/new-project/PersonalProjectTitle";
import BackBtn from "@/components/new-project/BackBtn";
import StartDate from "@/components/new-project/StartDate";
import FinishDate from "@/components/new-project/FinishDate";
import ProjectDescriptionText from "@/components/new-project/ProjectDesciptionText";
import NameOfNewProject from "@/components/new-project/NameOfNewProject";
import ProjectCurrency from "@/components/new-project/ProjectCurrency";
import ProjStat from "@/components/new-project/ProjectStatus";
import WorkingDaysTitle from "@/components/new-project/WorkingDaysTitle";
import WorkingDaysAndHours from "@/components/new-project/WorkingHours";
import CalendarExceptions from "@/components/new-project/CalendarExceptions";
import {signIn, signOut, useSession } from 'next-auth/react'
import dayjs from "dayjs";
import { AddIcon } from "@/components/my-projects/AddCircleIcon";
import CreateProjectButton from "@/components/new-project/CreateProjectButton";
function NewProject() {
  const {data} = useSession()
  console.log(data)
  const [project, setProject] = useState({
    projectName: "",
    projectCurrency: "UAH",
    projectStatus: "New",
    startDate: dayjs(),
    finishDate: dayjs().add(1, "month"),
    workingDays: {
      monday: 8,
      tuesday: 8,
      wednesday: 8,
      thursday: 8,
      friday: 8,
      saturday: 0,
      sunday: 0,
    },
    calendarExceptions: [

    ],
    // tasks: {
    //   taskName: "",
    //   subtasks: [
    //     {
    //       name: "Start",
    //       duration: 0,
    //       startDate: dayjs(),
    //     },
    //     {
    //       name: "Finish",
    //       duration: 0,

    //     }
    //   ],
    // }
    
  });
  const [newException, setNewException] = useState(false);

  async function createProject() {
    try {
    const res = await fetch("/api/createproject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    const data = await res.json();
    console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    console.log(project)
  }, [project])

  useEffect(() => {
    setProject({...project, creator: data?.user?.email})
  }, [data])
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "13px 30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LandingLogo />
        <UserFormControl></UserFormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "325px", marginTop: "47px" }}>
        <BackBtn />
        <PersonalProjectTitle text="New personal project" />
      </Box>
      <Box
        sx={{
          backgroundColor: "#F3F3F3",
          borderRadius: "20px",
          padding: "40px",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 196,
              width: 196,
              borderRadius: "50%",
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
          <Box display="flex" gap={"60px"}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <ProjectDescriptionText text="Name" />
                <NameOfNewProject project={project} setProject={setProject} placeholder="Name of the project" />
              </Box>
              <Box display={"flex"} gap={"160px"}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <ProjectDescriptionText text="Project currency" />
                  <ProjectCurrency
                    value1={"In progress"}
                    value2={"Completed"}
                  ></ProjectCurrency>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <ProjectDescriptionText text="Project status" />
                  <ProjStat value1={"UAH"} value2="EUR" value3={"USD"} />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <ProjectDescriptionText text="Start date" />
                <StartDate project={project} setProject={setProject} />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <ProjectDescriptionText text="Finish date" />
                <FinishDate project={project} setProject={setProject} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box marginTop={"91px"} marginBottom="60px">
          <WorkingDaysTitle
            text="Working days and hours"
            sx={{ marginBottom: "30px" }}
          />
          <WorkingDaysAndHours
            project={project} setProject={setProject} 
          />
        </Box>

        <Box>
          <Box sx={{
            display: "flex",
            gap: '30px',
            alignItems: "center",
            marginBottom: "30px"
          }}>
          <WorkingDaysTitle
            text="Project calendar exceptions"
          />
          <AddIcon onClick={() => setNewException(true)} />
          </Box>
          <CalendarExceptions newException={newException} setNewException={setNewException} project={project} setProject={setProject} />

          </Box>
          <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "30px"
      }} onClick={createProject}>
        <CreateProjectButton>Create</CreateProjectButton>
      </Box>
      </Box>
    </Box>
  );
}

export default NewProject;
