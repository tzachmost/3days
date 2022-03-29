<script>
  import { total } from "./variables";
  import Alert from "./Alert.svelte";

  async function changeTotal() {
    if (1 === 1) {
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
  function alertAppear() {
    document.getElementById("alert").classList.remove("alerthidden");
    document.getElementById("alert").classList.add("alertvisible");
  }
</script>

<style>
  div {
    width: 100%;
  }
  main {
    display: grid;
    width: 100%;
    margin-bottom: 16px;
  }
  label {
    text-align: left;
    margin-bottom: 8px;
    margin-top: 16px;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
    position: absolute;
  }

  p {
    text-align: left;
    margin-top: 32px;
  }

  button {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #ff004e;
    border: none;
    transition: 0.3s ease;
    box-sizing: border-box;
  }
  button:active {
    background: #004887;
  }
  .alerthidden {
    display: none;
  }
  .alertvisible {
    display: block;
  }
</style>

<main>
	<label for="clear">Resetting data</label>
  <div><button on:click={alertAppear} id="clear" name="clear">Clear ALL data</button></div>
  <p>
  Warning! This will erase ALL your saved data, excluding total days. You will need to enter your days again.
  </p>
  <Alert />
</main>