/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let islands = 0;

  const dfs = (i, j, grid) => {
    const queue = [[i, j]];
    while (queue.length) {
      const cI = queue[0][0];
      const cJ = queue[0][1];
      grid[cI][cJ] = "0";
      for (let dir = 0; dir < directions.length; dir++) {
        const [di, dj] = directions[dir];
        const adjI = di + cI;
        const adjJ = dj + cJ;
        if (grid[adjI] && grid[adjI][adjJ] === "1") {
          queue.push([adjI, adjJ]);
        }
      }
      queue.shift();
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j, grid);
        islands++;
      }
    }
  }
  console.log(islands);
  return islands;
};

numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);
