import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import React from "react";
import './Card.css'
 
const Card = ({ title, description, imageSrc }) => { 
   return ( 
     <VStack
       color="black" 
       backgroundColor="white" 
       cursor="pointer" 
       borderRadius="xl"
       className="figure"> 
       <Image  className="img-hvr" borderRadius="xl" src={imageSrc} alt={title} /> 
       <VStack spacing={4} p={4} alignItems="flex-start"> 
         <HStack justifyContent="space-between" alignItems="center"> 
           <Heading className="txt-hvr" as="h3" size="md"> 
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg"> 
           {description} 
         </Text> 
         <HStack className="txticon-hvr" spacing={2} alignItems="center"> 
           <p >See more</p> 
           <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
         </HStack> 
       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 