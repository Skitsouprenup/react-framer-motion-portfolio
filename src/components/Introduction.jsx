import { Paragraph } from "../styles/globals.styles";
import { IconContainer } from "../styles/globals.styles";
import { GreenishText } from "../styles/globals.styles";
import { FlexContainer, Heading } from "../styles/globals.styles";

import { BsYoutube, BsGithub } from 'react-icons/bs';
import { SiBlogger } from 'react-icons/si';
import { 
    DownloadCvButton, 
    ImageCard, 
    IntroductionSection, 
    PromotionIcons,
    IntroductionContent
} from "../styles/introduction.styles";

import profilePicture from '../assets/images/pic1.png';

import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/variants";

const Introduction = () => {
  return (
    <IntroductionSection 
        id="intro"
        $justify="center" 
        $gapx="15px"
        $padding="15px"
        $direction="column">
        <IntroductionContent $width="100%">
            {/*Left Side*/}
            <motion.div
                variants={fadeInLeftVariant}
                initial="initial"
                whileInView="whileInView">
                <Heading as="h4" $type="h4">Hello!</Heading>
                <Heading as="h1" $type="h1" $top="5px"> 
                I am <GreenishText>Kayle</GreenishText>
                </Heading>

                <Heading as="h3" $type="h3" $top="5px"> 
                I am a <GreenishText>Full Stack Developer</GreenishText>
                </Heading>

                <Paragraph $top="15px" $bottom="15px">
                    I am a full stack developer and have done multiple 
                    full stack projects.
                </Paragraph>
            </motion.div>

            {/*Right Side*/}
            <FlexContainer 
                as={motion.div} 
                $justify="center" 
                $flex="1"
                variants={fadeInRightVariant}
                initial="initial"
                whileInView="whileInView">
                <ImageCard>
                    <img
                        width="256px"
                        height="256px"
                        style={
                            {
                                position: 'relative', 
                                top: '-5px',
                                left: '10px'
                            }
                        }
                        alt="profile-pic" 
                        src={profilePicture} />
                </ImageCard>
            </FlexContainer>
        </IntroductionContent>

        <PromotionIcons $gapy="10px" $direction="column">
            <FlexContainer $gapx="20px">
                <IconContainer
                    onClick={() => window.open('https://github.com/Skitsouprenup')}
                    $color="secondary" 
                    $size="30px" 
                    $cursor="pointer"
                    $hoverColor="white">
                    <BsGithub />
                </IconContainer>
                <IconContainer 
                    onClick={() => window.open('https://www.youtube.com/channel/UCQ6VS7ALfG4MZacDRrvlMlw')}
                    $color="secondary" 
                    $size="30px"
                    $cursor="pointer"
                    $hoverColor="white">
                    <BsYoutube />
                </IconContainer>
                <IconContainer 
                    onClick={() => window.open('https://brainyghosts.blogspot.com/p/home-page.html')}
                    $color="secondary" 
                    $size="30px"
                    $cursor="pointer"
                    $hoverColor="white">
                    <SiBlogger />
                </IconContainer>
            </FlexContainer>

            <DownloadCvButton><b>Download CV</b></DownloadCvButton>
        </PromotionIcons>
    </IntroductionSection>
  );
};

export default Introduction;

