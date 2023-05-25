import React, { useEffect, useState } from "react";
import ExceptionTitle from "./ExceptionTitle";
import { Box, Container } from "@mui/material";
import ExceptionStartDate from "./ExceptionStartDate";
import WorkingHoursInput from "../my-projects/WorkingHoursInput";
import NameOfNewException from "./ExceptionName";
import dayjs from "dayjs";
import DeleteIcon from '@mui/icons-material/Delete';
function ExceptionList({ project, setProject, newException, setNewException }) {
  const [exception, setException] = useState({
    date: null,
    workingHours: 0,
    comment: "",
  });
  
  function handleExceptionPush() {
    if (exception.date && exception.workingHours !== '' && exception.comment) {
    setProject({
      ...project,
      calendarExceptions: [...project.calendarExceptions, exception],
    });
    setNewException(false);
    setException({
      date: null,
      workingHours: 0,
      comment: "",
    });
  } else {
    alert('Please fill all fields')
  }
  }

  function handleExceptionDelete(index) {
    const updatedExceptions = [...project.calendarExceptions];
    updatedExceptions.splice(index, 1);
    setProject({
      ...project,
      calendarExceptions: updatedExceptions,
    });
  }

  useEffect(() => {
    console.log(exception);
  }, [exception]);

  // function handleExceptionChange(e) {
  //   setProject({
  //     ...project,
  //     calendarExceptions: [
  //       ...project.calendarExceptions.slice(0, e.target.id),
  //       {
  //         ...project.calendarExceptions[e.target.id],
  //         [e.target.name]: e.target.value,
  //       },
  //       ...project.calendarExceptions.slice(e.target.id + 1),
  //     ],
  //   });
  // }

  return (
    <>
    {
      project.calendarExceptions.map((exception, index) => (
        <Box key={index}
      sx={{
        display: "flex",
        padding: "20px 40px",
        borderTop: "1px solid #cccccc",
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: "535px",
        }}
      >
        <ExceptionTitle text={dayjs(exception.date).format('MMMM D, YYYY')} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: 'center',
        }}
      >
        <Box sx={{
            width: "190px",
        }}>
          <ExceptionTitle text={exception.workingHours} />
        </Box>
        <Box sx={{
            width: '380px',

        }}>
            <ExceptionTitle text={exception.comment} />
        </Box>
        <Box sx={{

        }}>
            <DeleteIcon sx={{
              color: '#303030',
              cursor: 'pointer',
            }} onClick={() => handleExceptionDelete(index)} />
        </Box>
      </Box>
    </Box>
      ))
    }
    {/* <Box
      sx={{
        display: "flex",
        padding: "20px 40px",
        borderBottom: "1px solid #cccccc",
        borderTop: "1px solid #cccccc",
      }}
    >
      <Box
        sx={{
          width: "535px",
        }}
      >
        <ExceptionTitle text="March 21, 2024" />
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box sx={{
            width: "190px",
        }}>
          <ExceptionTitle text="0 h" />
        </Box>
        <Box sx={{
            // set full width
            width: '380px',

        }}>
            <ExceptionTitle text="International dog’s day" />
        </Box>
        <Box sx={{
            // set full width

        }}>
            <ExceptionTitle text="Edit" />
        </Box>
      </Box>
    </Box> */}


    {
      newException && <Box
      sx={{
        display: "flex",
        padding: "20px 40px",
        borderBottom: "1px solid #cccccc",
        borderTop: "1px solid #cccccc",
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: "535px",
        }}
      >
        <ExceptionStartDate exception={exception} setException={setException}/>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: 'center',
        }}
      >
        <Box sx={{
            width: "190px",
        }}>
          <WorkingHoursInput
          type='number'
          min={0}
          max={24}
          value={exception.workingHours}
          onChange={(e) =>
            setException({ ...exception, workingHours: e.target.value })
          }
        />
        </Box>
        <Box sx={{
            // set full width
            width: '380px',
          
        }}>
            <NameOfNewException sx={{
              width: '330px',
            }} exception={exception} setException={setException}/>
        </Box>
        <Box sx={{
            // set full width
            backgroundColor: '#2B353E',
            borderRadius: '15px',
            textAlign: 'center',
            padding: '6px 22px',
            textAlign: 'center',
            cursor: 'pointer',
            alignItems: 'center',
        }}
        onClick={handleExceptionPush}
        >
            <ExceptionTitle sx={{
              color: 'white',
              fontSize: '16px',
              marginTop: '4px',
            }} text="Confirm" />
        </Box>
      </Box>
    </Box>
    }
    </>
  );
}

export default ExceptionList;
