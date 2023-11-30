import { CircleButton } from "./components/circleButton/circleButton.js";
import { Header } from "./components/header/header.js";
import { getImages } from "./components/images/images.js";
import { MainHTML } from "./components/main-html/main-html.js";
import { RectangularButton } from "./components/rectangularButton/rectangularButton.js";
import { SearchInput } from "./components/searchInput/searchInput.js";
import "./style.css";

const printHeader = () => {
  Header();
  CircleButton(
    "https://res.cloudinary.com/dbinlquvz/image/upload/v1696447938/Pinterest%20Structure%20HTML%20Proyect/favicon_sarqjp.webp",
    "#"
  );
  RectangularButton("Inicio", "#", "pt-active-button");
  RectangularButton("Explorar", "#", "");
  RectangularButton("Crear", "#", "");
  SearchInput();
  CircleButton("./public/bell.svg", "#");
  CircleButton("./public/comment.svg", "#");
  CircleButton("./public/profile-picture.png", "#");
};

const printMain = () => {
  MainHTML();
};

printHeader();
printMain();
