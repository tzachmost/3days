<script>
              function handleClick() {
                document.getElementById("1").classList.remove("visible");
                document.getElementById("1-b").classList.remove("active");
                document.getElementById("1-i").classList.remove("active");

                document.getElementById("2").classList.remove("visible");
                document.getElementById("2-b").classList.remove("active");
                document.getElementById("2-i").classList.remove("active");

                document.getElementById("3").classList.remove("visible");
                document.getElementById("3-b").classList.remove("active");
                document.getElementById("3-i").classList.remove("active");

                document.getElementById("1").classList.add("visible");
                document.getElementById("1-b").classList.add("active");
                document.getElementById("1-i").classList.add("active");
              }
</script>

<main>
<button on:click={handleClick}>
<container><svg class="active" id="1-i" data-name="icon / 24x24 / ic24-home" xmlns="http://www.w3.org/2000/svg" width="20.005" height="20" viewBox="0 0 20.005 20">
  <path id="Icon" d="M15,20H5a3,3,0,0,1-3-3V11H1A1,1,0,0,1,.3,9.292l9-9a1,1,0,0,1,1.414,0l9,9A1,1,0,0,1,19,11H18v6A3,3,0,0,1,15,20ZM9,12h2a2,2,0,0,1,2,2v4h2a1,1,0,0,0,1-1V10a1,1,0,0,1,.649-.937L10,2.414,3.353,9.063A1.006,1.006,0,0,1,4,10v7a1,1,0,0,0,1,1H7V14A2,2,0,0,1,9,12Zm0,2v4h2V14H9Z" transform="translate(0 0)" fill="currentcolor"/>
</svg></container>
<p class="active" id="1-b">Home</p>
</button>
</main>

<style>
  .active {
    color: #0088ff;
  }
  main {
    width: 64px;
    display: grid;
    place-items: center;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
    display: grid;
    place-items: center;
  }
  div {
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
  }
  svg {
    color: white;
    width: 100%;
  }
  p {
    margin-top: 8px;
    font-weight: 600;
    font-size: 1em;
    text-align: center;
    color: white;
  }
</style>