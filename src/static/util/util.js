import { entreeImages, entreeDesc } from "./entreeimgLoader";
import { baltDesc, baltazarImages } from "./baltazarImgLoader";

export const imageLoader = project => {
    switch (project) {
        case "entrée":
            return { img: entreeImages, desc: entreeDesc };

        case "baltazár":
            return { img: baltazarImages, desc: baltDesc };

        case "cover":
            return { img: [baltazarImages[0], entreeImages[0]], desc: "cover photos" };

        default:
            return { img: [{ id: 0, src: "no" }], desc: "asd" };
    }
};
