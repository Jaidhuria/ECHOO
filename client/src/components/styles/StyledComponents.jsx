import { styled } from "@mui/material";
import { Link as Linkcomponent } from "../styles/StyledComponents";

export const visuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
});

export const link = styled(Linkcomponent)({
    textDecoration: "none",
    color: "inherit",
    padding: "1rem",
});