import { Stack } from "@chakra-ui/react";
import WorkCard from "../cards/Work";
import work from "@/data/work";

const Experience = () => {
  return (
    <Stack gap={{ base: 4, md: 8 }}>
      {work.map(({ role, company, start, end, summary, details, skills }) => (
        <WorkCard
          key={`${role}-${company}`}
          role={role}
          company={company}
          start={start}
          end={end}
          summary={summary}
          details={details}
          skills={skills}
        />
      ))}
    </Stack>
  );
};

export default Experience;
