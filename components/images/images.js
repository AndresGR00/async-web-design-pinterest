import "./images.css";

const accessKey = "lvRQ6FCTCGEUajI8tLmWSQtOOmNHqx5Eiz7WYifZckI";
let keyword = "landscapes";
let page = 1;

export async function getImages(query, page, perPage = 17) {
  const apiUrl = `https://api.unsplash.com/search/photos?&page=${page}&query=${query}&client_id=${accessKey}&per_page=${perPage}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener imágenes:", error);
  }
}

const showImages = (images) => {
  const main = document.querySelector(".pt-main");
  
  const notFoundResults = document.createElement('h4');
  notFoundResults.textContent = 'No se han encontrado resultados';
  notFoundResults.className = 'pt-no-result-found';
  notFoundResults.style.display = 'none';
  main.appendChild(notFoundResults);

  if(images.length === 0){
      notFoundResults.style.display = 'block';
      main.classList.add('pt-flex');
  } else {
    main.classList.remove('pt-flex');
    images.forEach((image) => {
      const a = document.createElement('a');
      a.href = image.urls.full;
  
      const imgElement = document.createElement("img");
      imgElement.className = "pt-grid-img";
      imgElement.src = image.urls.regular;
      imgElement.alt = image.alt_description;
  
      a.appendChild(imgElement);
      main.appendChild(a);
    });
  }
};

const loadMoreImages = async () => {
  page++;
  const images = await getImages(keyword, page, 5);
  showImages(images);
};

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("input");

  /* searchInput.addEventListener("input", async (event) => { //Busca según se escribe
    const searchTerm = event.target.value;
    console.log(event.target.value);
    const images = await getImages(searchTerm);
    showImages(images);
  }); */

  searchInput.addEventListener("keyup", async (event) => {
    //Busca al hacer enter
    if (event.key === "Enter") {
      const main = document.querySelector(".pt-main");
      main.innerHTML = "";
      const searchTerm = event.target.value;
      keyword = event.target.value;
      page = 1;
      const images = await getImages(searchTerm, page);
      showImages(images);
      event.target.value = "";
    }
  });
});

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    loadMoreImages();
  }
});

window.addEventListener("load", async () => {
  const initialImages = await getImages("landscapes");
  showImages(initialImages);
});

