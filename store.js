// importing express
const express = require("express");

// initializing express to app variable
const app = express();

// initializing the port to run the server
const PORT = 8080;

// using middleware to parse JSON data
app.use(express.json());

// initializing a list variable to store a list of web project items
const listOfItems = [
  {
    id: 1,
    title: "Online store",
    description: "Online store created with HTML, CSS and Javascript.",
    URL: "http://heroku/myapp/game/",
  },
  {
    id: 2,
    title: "React Game",
    description: "Tic tac toe game created using Create React app.",
    URL: "http://git.com/myrepos/shop/index",
  },
];

/**
 * Adding the additional item to the list of web project items
 */
app.post("/api", (req, res) => {
  const newListItem = req.body;
  console.log(newListItem);
  listOfItems.push(newListItem);
  res.json({
    message: "item has been added succesfully on the list",
    listOfItem: newListItem,
  });
});

// Getting web project items
app.get("/api", (req, res) => {
  res.json(listOfItems);
});

/**
 * Deleting an item from the web project list using its id
 */
app.delete("/api/:id", (req, res) => {
  const listId = req.params.id;
  listOfItems.splice(listId, 1);
  console.log(listOfItems);
  res.json({
    message: "Item has been deleted successfully from the web projcet items",
  });
});

/**
 * updating the title and description of an item on the list of web project items
 */
app.put("/api/:id", (req, res) => {
  const listId = req.params.id;
  const updatedListItem = req.body;
  listOfItems[listId] = updatedListItem;
  console.log(listOfItems);
  res.json({
    message: "list item has been successfully updated",
    listItem: updatedListItem,
  });
});

/**
 * Starting the server
 */
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
