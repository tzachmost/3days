<script>
  import { total, used } from "./variables";
</script>

<main>
<h2>Counter</h2>
  <div>
    <div>
      <div>
        <div>
          {#if $total}
          <h1>{$total.value + 1 - $used}/{$total.value}</h1>
          {/if}
          <p>Days left</p>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    width: 100%;
    margin-top: 16px;
    overflow: hidden;
    transition: 0.3s ease;
    pointer-events: none;
  }
  div {
    padding: 0px 8px;
    box-sizing: border-box;
    border: solid 4px #00294d;
    border-radius: 16px;
    width: 100%;
    border-top: 0px;
    border-bottom: 0px;
  }
  h1 {
    font-weight: 800;
    font-size: 64px;
    margin: 0;
    text-shadow: 2px 2px #0088ff;
  }
  p {
    margin: 0;
    margin-bottom: 16px;
    text-shadow: 1px 1px #0088ff;
  }
  div > div {
    border-color: #004887;
  }
  div > div > div {
    border-color: #0088ff;
  }
  div > div > div > div {
    border: solid 4px #fff;
  }
  h2 {
    width: 100%;
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    width: 100%;
    margin-bottom: 32px;
    margin-top: 16px;
  }
</style>