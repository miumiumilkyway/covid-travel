import MapConfig from "./config.json";

let stageWidth =
  document.documentElement.clientWidth || document.body.clientWidth;
let stageHeight =
  document.documentElement.clientHeight || document.body.clientHeight;
let mapWidth = 700;
let mapHeight = 1000;
let nodeWidth = MapConfig.nodeWidth;
let nodeHeight = MapConfig.nodeHeight;

let chunkWidth = 81;
let chunkHeight = 91;
let chunkRows = 6;
let chunkCols = 8;

export {
  stageWidth,
  stageHeight,
  mapWidth,
  mapHeight,
  nodeWidth,
  nodeHeight,
  chunkWidth,
  chunkHeight,
  chunkRows,
  chunkCols,
};
