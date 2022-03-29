<script>
import ToolbarButton1 from "./ToolbarButton1.svelte";
import ToolbarButton2 from "./ToolbarButton2.svelte";
import ToolbarButton3 from "./ToolbarButton3.svelte";
</script>

<main>
  <div>
<ToolbarButton1 />
<ToolbarButton2 />
<ToolbarButton3 />
  </div>
</main>

<style>
  main {
    background: #00294d;
    height: 64px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-top: 8px;
    padding-bottom: 16px;
    border-top: #004887 solid 2px;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin: 0 32px;
  }
</style>