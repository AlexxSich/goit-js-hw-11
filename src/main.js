import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import "./js/pixabay-api"
import "./js/render-functions"

import { getImages } from "./js/pixabay-api";
import { imageTemplate } from "./js/render-functions";

const userInput = document.querySelector(".search-images-form");
const myGallery = document.querySelector(".gallery")
const loader = document.querySelector(".loader-container")

userInput.addEventListener('submit', userInputHandler);

function userInputHandler(event) {
    event.preventDefault();
    loader.classList.add("active");
    myGallery.innerHTML = "";
    const searchedImg = event.target.elements.search.value.trim();
    
    if(searchedImg !== "") {
       getImages(searchedImg).then(images => {
        if(images.hits.length !== 0) {
            const markup = imagesArr(images);
            myGallery.innerHTML = markup;
            new SimpleLightbox('.gallery-link', {
                captionsData: 'alt',
                captionDelay: 250,
            }).refresh();
        } else{
            iziToast.error({
                position: 'topRight',
                title: 'Error',
                message: '❌ Sorry, there are no images matching your search query. Please try again!',
              }); 
            };      
        }).catch(error => {
        iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: '❌ Something went wrong. Try again later.',
          });
        });
    } else {
        iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: '❌ Please input your request in the search field',
          });
    };     

    setTimeout(() => {
        loader.classList.remove("active");
    }, 1000);

    event.currentTarget.reset();
    };   

    function imagesArr(arr) {
        return arr.hits.map(imageTemplate).join("");
    }