import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  console.log(user);
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="nav-bar">
      <div className="nav">
        <div>
          <h3 className="welcome">Welcome {user.username}!</h3>
        </div>
        <div>
          <Link className="title" to="/">
            {" "}
            W⌬rldPedi⍲{" "}
          </Link>
        </div>
        <div>
          <Button id="btn" as={Link} to="/">
            Home
          </Button>
          <Button id="btn" as={Link} to="/game">
            Game
          </Button>
          <Button id="btn" as={Link} to="/highscores">
            High Scores
          </Button>
        </div>
      </div>
      <div>
        <Button id="logout-btn" variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </div>
    </div>
  );
}

// const Wrapper = styled.header`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 8px;
// `;
// // font-family: "Permanent Marker", cursive;

// const Logo = styled.h1`
//   font-size: 3rem;
//   color: black;
//   margin: 0;
//   line-height: 1;

//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 4px;
//   position: absolute;
//   right: 8px;
// `;

export default NavBar;
