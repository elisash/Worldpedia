import { useEffect, useState } from "react";

function Home() {

  return (
<div className="home">
    <div className="home-words">
      
    <h2>Welcome to our web game!</h2>
    <p className="welcome">

Our game is designed to help kids and adults enhance and
 learn about the capitals, languages, flags, and continents
  of the world. We believe that learning about geography and 
  cultural diversity can be fun and engaging, and our game is 
  designed to make it easy and enjoyable to do so.</p>

<p className="welcome">In our game, you will be challenged to test your
 knowledge of the world's countries. You will be asked
  to identify the capital, language, flag, and continent 
  of each country, and you will be scored based on your accuracy.
   With each correct answer, you will learn more about the world 
   and improve your understanding of geography and culture.</p>
<p className="welcome">
We hope that our game will not only be a fun way to pass
 the time, but also a useful tool for learning and 
 improving your knowledge of the world. So why wait?
  Start playing today and see how much you can learn!</p>


    </div>


    </div>
    
    
  )



}

export default Home;






// import ReactMarkdown from "react-markdown";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { Box, Button } from "../styles";



  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   fetch("/recipes")
  //     .then((r) => r.json())
  //     .then(setRecipes);
  // }, []);

 
  //   <Wrapper>
  //     {recipes.length > 0 ? (
  //       recipes.map((recipe) => (
  //         <Recipe key={recipe.id}>
  //           <Box>
  //             <h2>{recipe.title}</h2>
  //             <p>
  //               <em>Time to Complete: {recipe.minutes_to_complete} minutes</em>
  //               &nbsp;·&nbsp;
  //               <cite>By {recipe.user.username}</cite>
  //             </p>
  //             <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
  //           </Box>
  //         </Recipe>
  //       ))
  //     ) : (
  //       <>
  //         <h2>No Recipes Found</h2>
  //         <Button as={Link} to="/new">
  //           Make a New Recipe
  //         </Button>
  //       </>
  //     )}
  //   </Wrapper>
  // );
// }

// const Wrapper = styled.section`
//   max-width: 800px;
//   margin: 40px auto;
// `;

// const Recipe = styled.article`
//   margin-bottom: 24px;
