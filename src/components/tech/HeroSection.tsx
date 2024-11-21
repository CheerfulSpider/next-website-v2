
import Image from 'next/image'
import { Box, Flex, Heading, Text, Button } from '@radix-ui/themes';
import heroBackgroundImg from '../../../public/images/tech/tech-hero-background-img.jpg';
const HeroSection = () => {
    return (
        <div className='block w-[1252px] item-center justify-center p-8 relative '>
            <h1 className='text-center text-white uppercase font-bold text-6xl py-6 z-20'>TECH AT DISTRIBUTE AID</h1>
           
                <Box className="w-full relative flex align-center items-center justify-center mt-4" >
                    
                    <Image
                        src={heroBackgroundImg}
                        alt="Hero Background"
                        className="w-full h-[520px] object-cover rounded-bl-[32px] rounded-br-[32px]"
                        
                    /> 
                    <Box className='gap-3 bg-[#252525B2]/70 w-full text-white flex flex-col absolute rounded-bl-[32px] rounded-br-[32px] inset-0 justify-center item-center text-center'>
                       
                        <Heading className='md:text-[45px] sm:text-[34px] mt-16 font-bold drop-shadow-[0px_4px_6px_rgba(5,30,93,0.7)]'>Open-Source Solutions For Global Aid Delivery</Heading>
                        <Text className='md:text-[22px] sm:text-md font-roboto font-bold leading-[28.13px] mx-32 mt-10  text-center drop-shadow-[0px_4px_6px_rgba(5,30,93,0.6)]'>Our diverse tech team of volunteers works hard to create technical solutions that make Distribute Aid’s work more efficient and easier to scale even with the limited resources NGOs have. We provide solutions that can be replicated across the sector by our partners and other NGOs in the field which is one of the reasons why our work is open-sourced.
                        <br></br>
                        <br></br>
                        Read on to learn more about our tech team and our Open Source Explorers program.</Text>
                        <Flex className='flex justify-center gap-5 item-center mt-10 '>
                            <Button className='px-10 py-8 text-sm  font-normal'>Join Our Team</Button>
                            <Button className='px-6 py-8 text-sm  bg-white text-blue-950 font-normal'>Become a Sponsor</Button>
                        </Flex>
                      
                    </Box>
                </Box>
            
        </div>
    )
};

export default HeroSection;