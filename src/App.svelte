<script>
  import { loggedIn,tasks,signup } from  "./store/store"
  import Login from "./components/login.svelte"
  import Signup from "./components/signup.svelte";
  import Home from "./components/Home.svelte";
  import Navbar from "./components/navbar.svelte";
</script>

<div>
<Navbar />
 {#if (!$signup && !$loggedIn)}
   <Login />
  {:else if $signup && !$loggedIn}
  <Signup />
  {:else if $loggedIn}
  <Home />
{/if}

</div>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
