// const loader = document.querySelector(".loader-container")


export function getImages(searchedImg) {
    // loader.classList.add("active");

    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '43021441-25d1e61ac4c3414aff6179b78',
        q: searchedImg,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const url = `${BASE_URL}?${params}`;

    // setTimeout(() => {
    //     loader.classList.remove("active");
    //    }, 1000);
       
return fetch(url).then(res => res.json());

}
