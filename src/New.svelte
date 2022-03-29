<script>
  import DateInput from "./DateInput.svelte";
  import { total, used } from "./variables";
  import { db } from "./db";

  let dateStart, dateEnd;
  let daysCount =
    (new Date(dateEnd) - new Date(dateStart)) / (24 * 3600 * 1000) + 1 || 0;
  let status = "";

  async function saveDays() {
    try {
      let range =
        dateStart.replace(/-/g, ".") + " – " + dateEnd.replace(/-/g, ".");
      let daysnumber =
        (new Date(dateEnd) - new Date(dateStart)) / (24 * 3600 * 1000) + 1 || 0;
      if (daysnumber <= 0) {
        return alert("Choose valid date.");
      }
      if (daysnumber > $total.value + 1 - $used) {
        return alert("You don't have that many days left.");
      }
      const id = await db.history.add({
        daterange: range,
        days: daysnumber
      });
      document.getElementById("2").classList.remove("visible");
      document.getElementById("2-b").classList.remove("active");
      document.getElementById("2-i").classList.remove("active");
      document.getElementById("1").classList.add("visible");
      document.getElementById("1-b").classList.add("active");
      document.getElementById("1-i").classList.add("active");
      status = `Date ${daterange} successfully added. Got id ${id}`;
      // Reset form:
      daterange = range;
      days = daysnumber;
    } catch (error) {
      status = `Failed to add ${daysCount}: ${error}`;
    }
  }
</script>

<main>
  <h2>Add new record</h2>
  <div>
    <div>
      <DateInput label={"Start date"} name={"start"} bind:date={dateStart}/>
      <DateInput label={"End date"} name={"end"} bind:date={dateEnd} minDate={dateStart}/>
    </div>
    <button on:click={saveDays}>Save {(new Date(dateEnd) - new Date(dateStart)) / (24 * 3600 * 1000) + 1 || 0} days</button>
  </div>
</main>

<style>
  .inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }
  button {
    width: calc(100% - 32px);
    height: 48px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #0088ff;
    border: none;
    transition: 0.3s ease;
    margin-top: 16px;
    position: fixed;
    left: 16px;
    bottom: 108px;
  }
  button:active {
    background: #004887;
  }
  main {
    margin: 32px 0px;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    width: 100%;
    margin-bottom: 32px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
</style>