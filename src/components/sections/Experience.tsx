import { Stack } from "@chakra-ui/react";
import WorkCard from "../cards/Work";
import workExperience from "@/data/work";

const Experience = () => {
  return (
    <Stack gap={{ base: 4, md: 8 }}>
      {workExperience.map((work) => (
        <WorkCard key={`${work.role}-${work.company}`} work={work} />
      ))}
    </Stack>
  );
};

export default Experience;
