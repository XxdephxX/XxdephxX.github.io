
// matrixs for each game piece //

function piece_1()
{
  this.state_1 = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]];
  this.state_2 = [
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 1]];
  this.state_3 = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0]];
  this.state_4 = [
    [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0]];

  this.states = [this.state_1, this.state_2, this.state_3, this.state_4];
  this.cur_state = 0;
  this.grid_x = 4;
  this.grid_y = -2;
}
function piece_2()
{
  this.state_1 = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1]];
  this.state_2 = [
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0]];
  this.state_3 = [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0]];
  this.state_4 = [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]];

  this.states = [this.state_1, this.state_2, this.state_3, this.state_4];
  this.cur_state = 0;
  this.grid_x = 4;
  this.grid_y = -2;
}
function piece_3()
{
  this.state_1 = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]];
  this.state_2 = [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]];
  this.state_3 = [
    [0, 1, 1],
    [0, 1, 0],
    [0, 0, 0]];
  this.state_4 = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 1]];

  this.states = [this.state_1, this.state_2, this.state_3, this.state_4];
  this.cur_state = 0;
  this.grid_x = 4;
  this.grid_y = -2;
}
function piece_4()
{
  this.state_1 = [
    [1, 1],
    [1, 1];

  this.states = [this.state_1];
  this.grid_x = 4;
  this.grid_y = -2;
}
function piece_5()
{
  this.state_1 = [
    [1]
    [1],
    [1],
    [1]];
  this.state_2 = [
    [1, 1, 1, 1]];

  this.states = [this.state_1, this.state_2];
  this.cur_state = 0;
  this.grid_x = 4;
  this.grid_y = -2;
}
function piece_6()
{
  this.state_1 = [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1]];
  this.state_2 = [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0]];

  this.states = [this.state_1, this.state_2];
  this.cur_state = 0;
  this.grid_x = 4;
  this.grid_y = -2;
}
function piece_7()
{
  this.state_1 = [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0]];
  this.state_2 = [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0]];

  this.states = [this.state_1, this.state_2];
  this.cur_state = 0;
  this.grid_x = 4;
  this.grid_y = -2;
}

function generateNewPiece()
{
  let i = Math.floor(Math.random() * 7) + 1;
  var p;

  switch(i)
  {
    case 1: p = new piece_1(); break;
    case 2: p = new piece_2(); break;
    case 3: p = new piece_3(); break;
    case 4: p = new piece_4(); break;
    case 5: p = new piece_5(); break;
    case 6: p = new piece_6(); break;
    case 7: p = new piece_7(); break;
  }

  return p;
}
