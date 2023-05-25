import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const Title = styled(Typography)({
  color: "#303030",
  fontSize: "32px",
  lineHeight: "39px",
  fontWeight: "500",
  display: "block",
});

function ExceptionTitle({...props}) {
  return <Title {...props}>{props.text}</Title>;
}

export default ExceptionTitle;
