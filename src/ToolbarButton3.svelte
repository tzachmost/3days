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

                  document.getElementById("3").classList.add("visible");
                  document.getElementById("3-b").classList.add("active");
                  document.getElementById("3-i").classList.add("active");
                }
</script>

<main>
<button on:click={handleClick}>
<div><svg id="3-i" data-name="icon / 24x24 / ic24-settings" xmlns="http://www.w3.org/2000/svg" width="20" height="19.998" viewBox="0 0 20 19.998">
  <path id="Icon" d="M10.994,20H9.085a1.237,1.237,0,0,1-.3-.029c-.581-.126-.8-.329-1.344-1.612l-.088-.211-.34-.842-.026-.011-.635.286a5.16,5.16,0,0,1-1.769.583,1.368,1.368,0,0,1-.832-.288l-.113-.1L2.279,16.422l-.155-.169c-.362-.426-.4-.75.066-1.943l.238-.584.291-.682-.006-.014-.657-.245C.7,12.271.327,12.045.138,11.633L.085,11.5l-.043-.147A1.09,1.09,0,0,1,0,11.118l0-.126V9.083a1.209,1.209,0,0,1,.039-.349C.167,8.226.356,8,1.294,7.581l.393-.17L2.7,7,2.7,6.986l-.378-.832c-.621-1.412-.673-1.847-.281-2.327L2.1,3.763l.128-.135,1.35-1.346a1.353,1.353,0,0,1,.945-.389,3.78,3.78,0,0,1,1.186.316l.582.231.661.276.027-.011.247-.665C7.821.476,8.04.175,8.693.029A1.166,1.166,0,0,1,8.9,0h2.123a1.03,1.03,0,0,1,.2.028c.581.126.8.329,1.342,1.611l.088.211.339.841.028.011.437-.2a8.072,8.072,0,0,1,1.774-.655L15.3,1.84l.124-.006a1.371,1.371,0,0,1,.832.288l.109.1,1.357,1.352.094.1c.422.464.473.785-.005,2.015l-.157.391-.37.875.007.017.847.317.408.161c1.061.433,1.274.665,1.413,1.189A1.119,1.119,0,0,1,20,8.906v2.006a1.218,1.218,0,0,1-.038.346c-.14.563-.345.777-1.616,1.314l-.21.087L17.3,13l-.005.014.3.661c.74,1.643.782,2.03.284,2.585l-.062.068-1.393,1.391a1.358,1.358,0,0,1-.948.391,4.88,4.88,0,0,1-1.533-.452l-.418-.171-.477-.2-.027.011-.247.661c-.593,1.561-.793,1.843-1.429,2.006a1.036,1.036,0,0,1-.231.038ZM6.96,15.2a1,1,0,0,1,.267.036l.114.04.824.34a1,1,0,0,1,.5.461l.049.107.2.517.292.71.168.387.092.2h1.119l.159-.376.208-.532.338-.907a1,1,0,0,1,.449-.522l.106-.051.82-.339a1.006,1.006,0,0,1,.382-.075.99.99,0,0,1,.26.035l.124.042.773.328.563.229.309.119.2.074.791-.789-.152-.376-.229-.522-.4-.882a1.008,1.008,0,0,1-.06-.67l.044-.13.335-.811a1,1,0,0,1,.448-.5l.1-.049.921-.37.471-.2.129-.056L18,10.528V9.4l-.314-.134L17.261,9.1l-1.072-.4a1,1,0,0,1-.531-.452l-.052-.108-.335-.815a1.009,1.009,0,0,1-.037-.651l.045-.126.311-.726,0-.006c.081-.193.15-.358.209-.506l.109-.275.119-.321-.79-.787L15,4.016c-.136.055-.287.119-.449.19l-.175.077-.923.418a.991.991,0,0,1-.416.091,1.007,1.007,0,0,1-.25-.032l-.13-.044-.823-.338a1,1,0,0,1-.5-.452l-.049-.105-.291-.728-.212-.51-.117-.272L10.523,2H9.408l-.157.369c-.059.142-.121.3-.2.516L8.7,3.815a1,1,0,0,1-.446.518l-.105.051-.819.341a1,1,0,0,1-.649.041l-.126-.044-.969-.409L5.062,4.1l-.352-.13-.79.788L4.013,5c.036.088.077.187.125.3l.161.365.4.884a1,1,0,0,1,.06.668l-.044.13-.335.814a1,1,0,0,1-.453.5l-.1.049L2.74,9.144,2.2,9.377,2,9.468V10.6l.235.1c.092.039.19.079.3.122l.372.144.9.335a1,1,0,0,1,.533.451l.053.108.335.812a1.006,1.006,0,0,1,.038.653l-.045.127-.389.913-.244.6-.119.319.79.789L5,15.98c.086-.035.182-.075.285-.119l.725-.32L6.53,15.3A1.007,1.007,0,0,1,6.96,15.2ZM10,14a4,4,0,1,1,4-4A4.005,4.005,0,0,1,10,14Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,10,8Z" transform="translate(0 0)" fill="currentcolor"/>
</svg></div>
<p id="3-b">Settings</p>
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