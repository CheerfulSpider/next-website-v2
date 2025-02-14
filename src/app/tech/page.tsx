import HeroSection from "@/components/tech/HeroSection";
import { Box, Flex } from "@radix-ui/themes";

const page = () => {
  return (
    <Flex
      position="relative"
      width="100%"
      direction="column"
      align="center"
      justify="start"
      gap={{ initial: "4", lg: "6", xl: "9" }}
    >
      <Box
        width="100%"
        position="absolute"
        inset="0"
        height="450px"
        className="bg-navy-900 -z-10"
      />

      <HeroSection />
    </Flex>
  );
};

export default page;
