<script>
    import {loggedIn,token} from "../store/store"
    function handle_logout(){
        $loggedIn = false;
        $token = '';
    }
</script>

<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Task Manager</a>
   
    {#if $loggedIn }
    <form class="d-flex">
        <button class="btn btn-outline-success" type="submit" on:click={handle_logout}>LOGOUT</button>
      </form>
    {/if}
</div>
  </nav>