const ROWS = 20;
const COLS = 10;
const size = 32;

var background_image;
var cur_piece;
var block_image;
var game_data;
var imgLoader;
var cur_time;
var isGameOver;
var line_span;
var cur_line
var cur_time;
var pre_time;

window.onload = onReady;

function onReady()
{
  const canvas = document.getElementById('board');
  const contex = canvas.getContext('2d');
  pre_time = 0; cur_time = 0;

  imgLoader = new bulkImageLoader();
  imgLoader.addImage("blocks.png", "blocks");
  imgLoader.onReadyCallback = onImagesLoaded;
  imgLoader.loadImages();

  document.onkeydown = getInput;
}

function onImagesLoaded(e)
{
  block_image = imgLoader.getImageAtIndex(0);
  start_game();
}

function start_game()
{
  var row;  var col;
  isGameOver = false;
  cur_line = 0;

  if(game_data === undefined)
  {
    game_data = new Array();
    for(row = 0; row < ROWS; row++)
    {
      game_data[row] = new Array();
      for(col = 0; col < COLS; col++)
      {
        game_data[row].push(0);
      }
    }
  }
  else {
    for(row = 0; row < ROWS; row++)
    {
      for(col = 0; col < COLS; col++)
      {
        game_data[row][col] = 0;
      }
    }
  }
  cur_piece = generateNewPiece();
  var animateFrame = window.requestAnimationFrame
  window.requestAnimationFrame = animateFrame;
  requestAnimationFrame(update);
}

functiona update()
{
  cur_time = new Date().getTime();

  if(cur_time - pre_time > 1000)
  {


    pre_time - cur_time;
  }
  contex.clearRect(0, 0, 320, 640);
  drawBoard();
  drawPiece(cur_piece);

  if(isGameOver === false)
  {
    requestAnimationFrame(update);
  }
  else {
    // game over //
  }
}

function drawBoard()
{
  for(var x = 0; x < ROWS; x++)
  {
    for(var y = 0; y < COLS; y++)
    {
      if(game_data[x][y] !== 0)
      {
        contex.drawImage(block_image, (game_data[x][y] - 1) * size,
        0, size, size, y*size, x*size, size, size);
      }
    }
  }
}

function drawPiece(p)
{
  var drawx = p.grid_x;
  var drawy = p.grid_y;
  var state = p.cur_state;

  for(var r = 0, len = p.states[state].length; r < len; r++)
  {
    for(var c = 0, len2 = p.states[state][r].length; c < len2; c++)
    {

    }
  }
}
