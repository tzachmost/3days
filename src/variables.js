import { liveQuery } from "dexie";
import { db } from "./db";

export let history = liveQuery(() => db.history.where("id").above(0).toArray());
export let historyCount = liveQuery(() => db.history.count());

export let total = liveQuery(() =>
  db.storage.where("name").equals("total").first()
);

export let used = liveQuery(() => {
  var items = db
    .table("history")
    .toArray()
    .then((history) =>
      history.map((element) => element.days).reduce((total, num) => total + num)
    );
  return items;
});
