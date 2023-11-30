import "./searchInput.css";

export const SearchInput = () => {
  const header = document.querySelector("header");
  const containerDiv = document.createElement("div");
  containerDiv.className = "pt-search-bar";

  const glass = document.createElement("img");
  glass.src = "https://res.cloudinary.com/dbinlquvz/image/upload/v1701370542/3_Async_Web_Design_Pinterest/glass_kouudm.svg";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "pt-search-input";
  input.placeholder = "Buscar";

  containerDiv.appendChild(glass);
  containerDiv.appendChild(input);
  header.appendChild(containerDiv);
};

