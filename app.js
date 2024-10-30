const fs = require("fs");
const yargs = require("yargs");
const data10 = require("./data10");

// Add command
yargs.command({
  command: "add",
  describe: " to add an item",
  builder: {
    id: {
      describe: "this is the ID in add command",
      demandOption: true,
      type: "string",
    },
    fname: {
      describe: "this is the first name desc in add command",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name desc in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.addPerson(x.id, x.fname, x.lname, x.city, x.age);
  },
});

// Delete command
yargs.command({
  command: "delete",
  describe: "to delete an item",
  builder: {
    id: {
      describe: "this is id desc in delete command ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.deleteData(x.id);
  },
});

// delete all Command
yargs.command({
  command: "deleteAll",
  describe: "Delete data of all people",
  handler: () => {
    data10.savealldata([]); // Overwrites data with an empty array
    console.log("All data has been deleted.");
  },
});

// Read command
yargs.command({
  command: "read",
  describe: "to read an item",
  builder: {
    id: {
      describe: "this is id desc in read command ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.readData(x.id);
  },
});

// command to read all data
yargs.command({
  command: "viewAll",
  describe: "to view all data",
  handler: () => {
    data10.listData();
  },
});

yargs.parse(); // handler only
