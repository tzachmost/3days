<script>
 import HistoryElement from "./HistoryElement.svelte";
 import { history, historyCount } from "./variables";
</script>

<main>
<h2>History</h2>
{#if $historyCount > 1}
<div>
<p>Date range</p>
<p>Days</p>
<p></p>
</div>
{/if}
{#if $historyCount <= 1}<p>There is no data to display</p>{/if}
  {#if $history}
    {#each $history as historyel (historyel.id)}
      <HistoryElement range={historyel.daterange} days={historyel.days} id={historyel.id}/>
    {/each}
  {/if}
</main>

<style>
  div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 48px 48px;
    gap: 24px;
  }
  main {
    margin-top: 32px;
    padding-bottom: 64px;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    width: 100%;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
</style>