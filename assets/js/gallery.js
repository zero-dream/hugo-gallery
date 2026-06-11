import * as params from "@params";
import fjGallery from "lib/flickr-justified-gallery/fjGallery.esm.js";

fjGallery(document.querySelectorAll(".fj-gallery"), {
  itemSelector: ".fj-gallery-item",
  gutter: { horizontal: params.gutterH, vertical: params.gutterV },
  rowHeight: params.rowHeight,
  rowHeightTolerance: params.rowHeightTolerance,
});

const galleryEl = document.getElementById("gallery");
galleryEl.classList.remove("hidden");
