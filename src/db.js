// db.js
import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(4).stores({
  history: "++id, daterange, days",
  storage: "id, name, value"
});

db.on("populate", function () {
  db.storage.add({
    id: 0,
    name: "total",
    value: 19
  });
  db.history.add({
    id: 0,
    daterange: "11/01/1971",
    days: 1
  });
});
db.open();
