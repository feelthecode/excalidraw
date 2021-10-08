import { exportToCanvas } from "./scene/export";
import { getDefaultAppState } from "./appState";

const { registerFont, createCanvas } = require("canvas");

const elements = [
  {
    id: "eVzaxG3YnHhqjEmD7NdYo",
    type: "diamond",
    x: 519,
    y: 199,
    width: 113,
    height: 115,
    strokeColor: "#000000",
    backgroundColor: "transparent",
    fillStyle: "hachure",
    strokeWidth: 1,
    roughness: 1,
    opacity: 100,
    seed: 749612521,
  },
  {
    id: "7W-iw5pEBPTU3eaCaLtFo",
    type: "ellipse",
    x: 552,
    y: 238,
    width: 49,
    height: 44,
    strokeColor: "#000000",
    backgroundColor: "transparent",
    fillStyle: "hachure",
    strokeWidth: 1,
    roughness: 1,
    opacity: 100,
    seed: 952056308,
  },
  {
    id: "kqKI231mvTrcsYo2DkUsR",
    type: "text",
    x: 557.5,
    y: 317.5,
    width: 43,
    height: 31,
    strokeColor: "#000000",
    backgroundColor: "transparent",
    fillStyle: "hachure",
    strokeWidth: 1,
    roughness: 1,
    opacity: 100,
    seed: 1683771448,
    text: "test",
    font: "20px Virgil",
    baseline: 22,
  },
];

registerFont("./public/fonts/hand-drawn/Virgil.woff2", { family: "Virgil" });
registerFont("./public/fonts/code/Cascadia.woff2", { family: "Cascadia" });

// international fonts
// persian fonts
registerFont("./public/fonts/hand-drawn/IRANSansDN.woff2", {
  family: "IRANSansDN",
});
registerFont("./public/fonts/normal/Vazir-Regular.woff2", {
  family: "Vazir",
});
registerFont("./public/fonts/code/Vazir-Code-Hack.woff2", {
  family: "Vazir-Code-Hack",
});

const canvas = exportToCanvas(
  elements as any,
  {
    ...getDefaultAppState(),
    offsetTop: 0,
    offsetLeft: 0,
    width: 0,
    height: 0,
  },
  {
    exportBackground: true,
    viewBackgroundColor: "#ffffff",
  },
  createCanvas,
);

const fs = require("fs");
const out = fs.createWriteStream("test.png");
const stream = (canvas as any).createPNGStream();
stream.pipe(out);
out.on("finish", () => {
  console.info("test.png was created.");
});
