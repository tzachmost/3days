<script>
  import { total, used } from "./variables";
  import { db } from "./db";
  export let value;

  async function changeTotal() {
    if ((await $used) < value) {
      db.storage.update(0, { value: value });
      document.getElementById("3").classList.remove("visible");
      document.getElementById("3-b").classList.remove("active");
      document.getElementById("3-i").classList.remove("active");
      document.getElementById("1").classList.add("visible");
      document.getElementById("1-b").classList.add("active");
      document.getElementById("1-i").classList.add("active");
      return;
    }
    alert(
      "You have too many used days. Delete some entries or clear data to be able to change total days."
    );
  }
</script>

<style>
  div {
    width: 100%;
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
  main {
    display: grid;
    width: 100%;
  }
  p {
    text-align: left;
    margin-bottom: 8px;
  }
  input {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    border-radius: 8px;
    height: 48px;
    text-align: center;
    color: #fff;
    background-color: transparent;
    border: 4px solid #00294d;
    transition: 0.3s ease;
    box-sizing: border-box;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
    position: absolute;
  }

  input:focus {
    border-color: #0088ff;
    outline: none;
  }
  button {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #0088ff;
    border: none;
    transition: 0.3s ease;
    box-sizing: border-box;
  }
  button:active {
    background: #004887;
  }
</style>

<main>
	<p>Change total days</p>
  <div>
  {#if $total}<input type="number" pattern="\d*" id="number" name="number" step="1" min="1" max="99" bind:value={value} placeholder={"Current: " + $total.value}>{/if}
  <button on:click={changeTotal}>Change</button>
  </div>
</main>