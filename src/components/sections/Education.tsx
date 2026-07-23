import { Stack } from "@chakra-ui/react";
import EducationCard from "../cards/Education";
import education from "@/data/education";

const Education = () => {
  return (
    <Stack gap={{ base: 4, md: 8 }}>
      {education.map((edu) => (
        <EducationCard key={edu.degree} education={edu} />
      ))}
    </Stack>
  );
};

export default Education;
