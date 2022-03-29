<script>
  import { db } from "./db";
  function alertDisAppear() {
    document.getElementById("alert").classList.remove("alertvisible");
    document.getElementById("alert").classList.add("alerthidden");
  }

  function clearDatabase() {
    document.getElementById("alert").classList.remove("alertvisible");
    document.getElementById("alert").classList.add("alerthidden");
    db.history
      .where("id")
      .above(0)
      .delete();
    db.storage.update(0, { value: 19 });
    document.getElementById("3").classList.remove("visible");
    document.getElementById("3-b").classList.remove("active");
    document.getElementById("3-i").classList.remove("active");
    document.getElementById("1").classList.add("visible");
    document.getElementById("1-b").classList.add("active");
    document.getElementById("1-i").classList.add("active");

    alert("Your data has been reset. Please refresh/restart the app.");
  }
</script>

<main id="alert" class="alerthidden">
  <div class="dialog">
  <h2>Resetting data</h2>
    <p>Do you really want to clear <strong>ALL</strong> data and come back to defaults? This action is <strong>NOT</strong> reversible. Think about it.</p>
    <div class="inside">
      <button on:click={alertDisAppear}>Cancel</button>
      <button on:click={clearDatabase} class="button2">Clear ALL</button>
    </div>
  </div>
</main>

<style>
main {
  display: block;
  position: fixed;
  top:-90px;
  left:0;
  width: 100%;
  height: calc(100vh + 90px);
  z-index: 15;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}
.dialog {
  width: calc(100vw - 64px);
  max-width: 600px;
  background: #fff;
  padding: 16px 16px;
  background: #00182d;
  border-radius: 12px;
}
.inside {
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
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
  }
  button:active {
    background: #004887;
  }
  p {
    margin-top: 16px;
    margin-bottom: 32px;
  }
  .button2 {
    background: #ff004e;
  }
  .button2:active {
    background: #a20032;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    width: 100%;
    margin-bottom: 32px;
    text-align: center;
  }
  .alerthidden {
    display: none;
  }
  .alertvisible {
    display: block;
  }
</style>