function dirReduc(arr) {
  const opposites = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };
  const counters = {
    NORTH: 0,
    SOUTH: 0,
    EAST: 0,
    WEST: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const prevItem = arr[i - 1];
    const opposite = opposites[item];
    if (prevItem && prevItem === opposite) {
      counters[prevItem]--;
    } else {
      counters[item]++;
    }
  }

  const result = [];
  for (key in counters) {
    while (counters[key] > 0) {
      result.push(key);
      counters[key]--;
    }
  }

  return result;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
