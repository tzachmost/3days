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

                      document.getElementById("2").classList.add("visible");
                      document.getElementById("2-b").classList.add("active");
                      document.getElementById("2-i").classList.add("active");
                    }
</script>

<main>
<button on:click={handleClick}>
  <div>
    <svg id="2-i" data-name="icon / 24x24 / ic24-plus" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
      <path id="Icon" d="M8,0A1,1,0,0,1,9,1V7h6a1,1,0,0,1,0,2H9v6a1,1,0,0,1-2,0V9H1A1,1,0,0,1,1,7H7V1A1,1,0,0,1,8,0Z" fill="currentcolor"/>
    </svg>
  </div>
<p id="2-b">Add</p>
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