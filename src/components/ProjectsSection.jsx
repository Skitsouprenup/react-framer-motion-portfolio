import { useState, useEffect } from "react";
import PaginationButton from "./PaginationButton";
import { tagCategories } from '../utils/constants';

import { FlexContainer, GreenishText, Heading, IconContainer, Paragraph } from "../styles/globals.styles"
import { 
    ProjectThumbnail, 
    ProjectContainer, 
    TechCard, 
    ThumbnailTint,
    ProjectLinks
} from "../styles/projectssection.styles";
import { projects } from "../utils/projects";

import { BsYoutube, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeInLeftVariant } from "../utils/variants";
import { fadeInRightVariant } from "../utils/variants";

const ProjectsSection = () => {
    const[currentPage, setCurrentPage] = useState(0);
    const[minPageIndex, setMinPageIndex] = useState(0);
    const[maxPageIndex, setMaxPageIndex] = useState(5);
    const[pageButtons, setPageButtons] = useState([]);
    const[selectedProjects, setSelectedProjects] = useState(projects);
    const[pages, setPages] = useState([]);

    const setProjectPages = () => {
      setPages(selectedProjects.
        filter((_, index) => {
            return index >= minPageIndex &&
            index <= (maxPageIndex - 1);
        }));
    }

    const addPagination = () => {
      /* My very own implementation of pagination */

      /* Count number of pages */
      const itemPerPage = 5;
      let numPages = 0;
      if(selectedProjects.length <= itemPerPage)
          numPages = 1;
      if(selectedProjects.length > itemPerPage) {
          let numFloat = selectedProjects.length / itemPerPage;
          const numInt = parseInt(numFloat);

          numPages = numFloat > numInt ? 
              numInt + 1 : numInt;
      }
      /** */

      const leftArr = [];
      const rightArr = [];
      for(let i = 0; i < numPages; i++) {
          const pageNum = (i + 1).toString();

          /* First and last page */
          if(i === 0) {
              leftArr.push(pageNum);
              continue;
          }

          if(i === numPages - 1) {
              rightArr.push(pageNum);
              continue;
          }
          /** */

          /* Current page and relative pages on its left and right */
          if(i <= currentPage && i >= (currentPage - 2)) {
              leftArr.push(pageNum);
              continue;
          }

          if(i > currentPage && i <= (currentPage + 2)) {
              rightArr.push(pageNum);
              continue;
          }
          /** */

          /* Pages that are not in relative range of current page */
          if(i < currentPage) {
              if(!dotExist(leftArr)) leftArr.push('...');
              continue;
          }

          if(i > currentPage) {
              if(!dotExist(rightArr)) rightArr.push('...');
              continue;
          }
          /** */
      }
      setPageButtons(leftArr.concat(rightArr));

      setMinPageIndex(5 * (currentPage));
      setMaxPageIndex(5 * (currentPage + 1));
    }

    const setPagesByCategory = (category) => {
      if(category === 'All') {
        setSelectedProjects([...projects]);
        if(currentPage !== 0) setCurrentPage(0);
        return;
      }

      let regex = null;

      if(category.toLowerCase() === 'C'.toLowerCase()) {
        regex = new RegExp(`^${category}$`, 'i');
      } 
      else if(category.toLowerCase() === 'Java'.toLowerCase()) {
        regex = new RegExp(`^${category}(?!script)`, 'i');
      }
      else regex = new RegExp(`${category}`, 'i');

      const filtered = projects.filter((item) => {   
        let result = false;     
        for(const tag of item.technologies) {
          if(regex.test(tag)) {
            result = true;
            break;
          }
        }

        return result;
      });

      setSelectedProjects(filtered);
      if(currentPage !== 0) setCurrentPage(0);
    }

    useEffect(() => {
      addPagination();
    },[currentPage, selectedProjects]);

    useEffect(() => {
      setProjectPages();
    },[minPageIndex, maxPageIndex, selectedProjects]);

    const dotExist = (arr) => {
        let dots = false;
        for(const item of arr) {
            if(item === '...') {
                dots = true;
                break;
            }
        }
        return dots;
    };

    return (
        <FlexContainer
            id="projects"
            $gapx="15px"
            $gapy="20px"
            $left="15px" $right="15px"
            $top="40px" $bottom="40px"
            $direction="column"
            $childFullWidth>
            <FlexContainer
                $direction="column" 
                $align="center" 
                $gapy="10px">
                <Heading as="h6" $type="h6">MY PROJECTS</Heading>
                <Heading as="h3" $type="h3" $alignText="center">
                    What <GreenishText>I have built</GreenishText>
                </Heading>
            </FlexContainer>
            <FlexContainer $direction="column" $gapy="20px">
              
              {/* Select Category */}
              <ProjectContainer>
                <FlexContainer
                  $direction="column" 
                  $align="flex-start"
                  $gapy="10px"
                  style={{
                    margin: '0.5rem 0'
                  }}
                >
                  <Heading as="h6" $type="h6">Select Category</Heading>
                  <select
                    className="select"
                    onChange={(e) => setPagesByCategory(e.target.value)}
                  >
                    {
                      tagCategories.map((item) => (
                        <option value={item} key={item}>{item}</option>
                      ))
                    }
                  </select>
                </FlexContainer>
              </ProjectContainer>

              {/* Projects */}
              {
                pages.map((item) => <ProjectContainer
                                    as={motion.div}
                                    variants={
                                        item.id % 2 == 0 ? 
                                        fadeInLeftVariant : 
                                        fadeInRightVariant}
                                    initial="initial"
                                    whileInView="whileInView"
                                    key={item.id}>
                    <FlexContainer $direction="column" $gapy="10px">
                        <ProjectLinks $gapx="10px">
                            <Heading as="h5" $type="h5">{item.title}</Heading>
                            <IconContainer
                                $size="25px"
                                $color="gold"
                                $cursor="pointer"
                                className="icon"
                                onClick={() => window.open(item.github_url)}>
                                <BsGithub />
                            </IconContainer>
                            {
                                item?.video_url ? 
                                <IconContainer
                                    $size="25px"
                                    $color="gold"
                                    $cursor="pointer"
                                    className="icon"
                                    onClick={() => window.open(item.video_url)}>
                                    <BsYoutube />
                                </IconContainer> : null
                            }
                        </ProjectLinks>
                        <Paragraph>{item.description}</Paragraph>
                        <FlexContainer $gapx="10px" $gapy="10px" $wrap="wrap">
                            {
                                item.technologies.map((name) => {
                                    return <TechCard key={name} $color="black">{name}</TechCard>
                                })
                            }
                        </FlexContainer>
                    </FlexContainer>
                    <ProjectThumbnail>
                        <ThumbnailTint></ThumbnailTint>
                        <img
                            style={
                                {
                                    position: 'absolute',
                                    objectFit: 'cover',
                                    objectPosition: item?.thumbCoverPos ?? `${item.thumbCoverPos}`,
                                    width: '100%',
                                    height: '100%',
                                    zIndex: '10'
                                }
                            }
                            alt={`${item.title}-thumb`} 
                            src={item.thumbnail} />
                    </ProjectThumbnail>
                </ProjectContainer>)
              }
            </FlexContainer>

            <FlexContainer $gapx="10px" $justify="center">
                {
                    pageButtons.map((item) => {
                        return <PaginationButton key={item}
                        setCurrentPage={setCurrentPage}
                        label={item}
                        clickable={item !== '...' ? true : false}
                        selected={item === (currentPage + 1).toString() ? true : false} />
                    })
                }
            </FlexContainer>
        </FlexContainer>
    );
};

export default ProjectsSection;