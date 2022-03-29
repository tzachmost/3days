<script>
 import NumberInput from "./NumberInput.svelte";
 import Clear from "./Clear.svelte";
</script>

<main>
  <h2>Settings</h2>
  <NumberInput />
  <Clear />
  <p>Designed and coded by tzachmost.xyz</p>
</main>

<style>
  main {
    margin: 32px 0;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    width: 100%;
    margin-bottom: 16px;
  }
  p {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    position: fixed;
    bottom: 100px;
    left: 0;
    color: #004887;
  }
</style>