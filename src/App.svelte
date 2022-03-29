<script>
	import Counter from "./Counter.svelte";
	import New from "./New.svelte";
	import History from "./History.svelte";
	import Settings from "./Settings.svelte";
	import Toolbar from "./Toolbar.svelte";
  </script>
  
  <style>
	main {
	  width: 100%;
	}
	main::-webkit-scrollbar {
	  display: none;
	}
	div {
	  width: 100%;
	  display: none;
	}
	.visible {
	  display: block;
	}
  </style>
  
  <main>
  <div id="1" class="visible">
	<Counter />
	<History />
  </div>
  
  <div id="2">
	<New />
  </div>
  
  <div id="3">
	<Settings />
  </div>
  
	<Toolbar />
  </main>
  
