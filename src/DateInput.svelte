<script>
  export let date;
  export let label;
  export let name;
  export let minDate;
</script>

<style>
  main {
    display: grid;
    width: 100%;
    margin-bottom: 16px;
  }
  label {
    text-align: left;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
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
</style>

<main>
	<label for="start">{label}</label>
  <input type="date" id={name} name={name} bind:value={date} placeholder="DD/MM/YYYY" minDate={minDate}>
</main>