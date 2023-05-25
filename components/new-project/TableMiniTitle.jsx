import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const Title = styled(Typography)({
  color: "#303030",
  fontSize: "16px",
  lineHeight: "19px",
  fontWeight: "500",
});

function TableMiniTitle(props) {
  return <Title>{props.text}</Title>;
}

export default TableMiniTitle;
