import React from "react";

const TestAlgorithm = () => {
  function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      console.log("range", left, right);
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid;
      }
      console.log("mid", mid);
      // 目標值比中間元素大，則左半邊
      if (target > array[mid]) {
        console.log("找左半邊 ");
        left = mid + 1;
      } else {
        // 若目標值小於中間元素，則右半邊
        right = mid - 1;
        console.log("找右半邊 ");
      }
    }

    return -1; // target not found
  }
  let target = 2;
  let result;
  //   result = binarySearch([1, 2, 3, 4, 5], target);
  // --------------------------------------------
  //   graph data structure
  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  // Create a new graph
  let socialNetwork = new Graph();

  // Add users to the graph
  socialNetwork.addVertex("User1");
  socialNetwork.addVertex("User2");
  socialNetwork.addVertex("User3");

  // Connect users
  socialNetwork.addEdge("User1", "User2"); // User1 and User2 are now friends
  socialNetwork.addEdge("User2", "User3"); // User2 and User3 are now friends
  console.log(socialNetwork.adjacencyList);
  return (
    <div>
      {result ? (
        <div>
          the index of {target} in this array is {result}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TestAlgorithm;
