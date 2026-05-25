import * as params from "@params";
import fjGallery from "lib/flickr-justified-gallery/fjGallery.esm.js";

fjGallery(document.querySelectorAll(".fj-gallery"), {
  itemSelector: ".fj-gallery-item",
});
