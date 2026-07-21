import { Stack } from "@chakra-ui/react";
import EducationCard from "../cards/Education";
import education from "@/data/education";

const Education = () => {
  return (
    <Stack gap={{ base: 4, md: 8 }}>
      {education.map(({ school, degree, award, start, end }) => (
        <EducationCard
          key={degree}
          school={school}
          degree={degree}
          award={award}
          start={start}
          end={end}
        />
      ))}
    </Stack>
  );
};

export default Education;
