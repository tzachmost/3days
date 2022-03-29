<script>
  import { db } from "./db";
  export let range;
  export let days;
  export let id;
  import { liveQuery } from "dexie";

  let left = liveQuery(() =>
    db.storage
      .where("name")
      .equals("left")
      .first()
  );

  let daysValue = liveQuery(() =>
    db.history
      .where("id")
      .equals(id)
      .first()
  );

  async function removeItem(id) {
    db.history
      .where("id")
      .anyOf(id)
      .delete();
  }
</script>

<main>
  <div>{range || "No date"}</div>
  <div class="days">{days || "No days"}</div>
  <button on:click={removeItem(id)}><svg id="icon_24x24_ic24-delete" data-name="icon / 24x24 / ic24-delete" xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
  <path id="Icon" d="M11,20H5a3,3,0,0,1-3-3V7A1,1,0,0,1,3,6H13a1,1,0,0,1,1,1V17A3,3,0,0,1,11,20ZM4,8v9a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V8ZM15,4H1A1,1,0,0,1,1,2H5V1A1,1,0,0,1,6,0h4a1,1,0,0,1,1,1V2h4a1,1,0,0,1,0,2Z" transform="translate(0 0)" fill="#fff"/>
</svg></button>
</main>

<style>
  main {
    width: 100%;
    margin-bottom: 16px;
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 16px;
  }
  button {
    display: grid;
    place-content: center;
    width: 48px;
    height: 48px;
    color: #fff;
    background-color: #ff004e;
    border-radius: 8px;
    border: none;
    transition: 0.3s ease;
  }
  button:active {
    background: #a20032;
  }
  div {
    display: grid;
    place-content: center;
    border: 4px solid #00294d;
    border-radius: 8px;
  }
  .days {
    width: 48px;
  }
</style>