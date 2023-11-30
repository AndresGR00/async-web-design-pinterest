import "./searchInput.css";

export const SearchInput = () => {
  const header = document.querySelector("header");
  const containerDiv = document.createElement("div");
  containerDiv.className = "pt-search-bar";

  const glass = document.createElement("img");
  glass.src = "./public/glass.svg";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "pt-search-input";
  input.placeholder = "Buscar";

  containerDiv.appendChild(glass);
  containerDiv.appendChild(input);
  header.appendChild(containerDiv);
};

