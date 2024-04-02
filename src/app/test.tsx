"use client";
import { Container, Typography, styled } from "@mui/material";

const StyledLabel = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    color: "tomato",
  },
  [theme.breakpoints.up("sm")]: {
    color: "orange",
  },
  [theme.breakpoints.up("md")]: {
    color: "DodgerBlue",
  },
  [theme.breakpoints.up("lg")]: {
    color: "MediumSeaGreen",
  },
  [theme.breakpoints.up("xl")]: {
    color: "Violet",
  },
}));

const TailwindLabel = ({ title }: { title: string }) => {
  const responsiveSize =
    "sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl";
  const responsiveWeight =
    "sm:font-thin md:font-normal lg:font-medium xl:font-semibold 2xl:font-bold";
  const responsiveColor =
    "sm:text-slate-500 md:text-red-600 lg:text-orange-600 xl:text-lime-600 2xl:text-cyan-600";
  return (
    <Typography
      className={`mt-4 ${responsiveSize} ${responsiveWeight} ${responsiveColor} `}
    >
      {title}
    </Typography>
  );
};
export default function Client() {
  return (
    <Container sx={{ paddingY: 4 }}>
      <StyledLabel>Home page</StyledLabel>
      <TailwindLabel title="Tailwind CSS" />
    </Container>
  );
}
