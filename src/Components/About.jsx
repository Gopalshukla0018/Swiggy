import { useContext } from "react";
import userContext from "../utils/userContext";


const About = () => {
 const data= useContext(userContext);
 console.log(data.loggedInUser.name);
  return (
    <div>
      <h1> About Us </h1>
      <p> We are a company that values food delivery </p>;
      <p> I am frontend developer </p>
        
    
    </div>
  );
};
export default About;
