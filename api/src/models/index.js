let users = {
  1: {
    id: "1",
    username: "James Rowbotham",
  },
  2: {
    id: "2",
    username: "Gijs Lebesque",
  },
};

let snippets = {
  1: {
    id: "1",
    snippet: `const findTheHighestNumber = (array) => { const sortedArray = array.sort((itemA, itemB) => itemA - itemB ) return sortedArray[sortedArray.length-1] } `,
    userId: "1",
  },
  2: {
    id: "2",
    snippet: "const findTheHighestNumber = (array) => { const sortedArray = array.sort((itemA, itemB) => itemA - itemB ) return sortedArray[sortedArray.length-1] } ",
    userId: "2",
  },
};

export default {
  users,
  snippets
}
