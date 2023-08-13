import { BlueLightVariant, Paragraph } from "../styles/globals.styles";
import { FlexContainer, Heading, IconContainer } from "../styles/globals.styles";
import { SkillCardContainer, SkillCard, SkillsContainer } from "../styles/skillssection.styles";
import { knowledgeableSkillsData } from '../utils/skills';
import theme from "../utils/theme";

import { motion } from 'framer-motion';
import { skillCardFadeIn, skillsFadeInLeft } from "../utils/variants";

const SkillsSection = () => {
  return (
    <SkillsContainer 
        id="skills"
        $gapx="10px"
        $gapy="15px"
        $left="15px" $right="15px"
        $top="40px" $bottom="40px"
        $childFullWidth>

        <SkillCardContainer
            as={motion.div}
            variants={skillsFadeInLeft}
            initial="initial"
            whileInView="whileInView">
            {
                knowledgeableSkillsData.map(
                    (skill) => <SkillCard 
                                    key={skill.id}>
                        <IconContainer
                            as={motion.div}
                            variants={skillCardFadeIn}>
                            <skill.icon color={theme.colors.secondary_alt} size="50px"/>
                        </IconContainer>

                        <Heading 
                            as={motion.h5}
                            variants={skillCardFadeIn}
                            $type="h5">
                            {skill.name}
                        </Heading>
                    </SkillCard>
                )
            }
        </SkillCardContainer>
        <FlexContainer
            as={motion.div}
            $direction="column" 
            $align="center" 
            $gapy="10px">
            <Heading as="h6" $type="h6">MY SKILLS</Heading>
            <Heading as="h3" $type="h3" $alignText="center">
                What <BlueLightVariant>I can do</BlueLightVariant>
            </Heading>
            <Paragraph $alignText="center" $top="10px">
                I&apos;m a full stack developer that is knowledgeable
                about different types of front-end and back-end frameworks.
                My main tech stack is MERN stack.
                <br /><br />
                I also have experience with other tech stacks aside from my
                main stack like Angular, Spring Boot, Vue3, Django, etc.
            </Paragraph>
        </FlexContainer>

    </SkillsContainer>
  );
};

export default SkillsSection;