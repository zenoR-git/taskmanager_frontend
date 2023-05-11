<script>
     import { loggedIn,signup,token } from  "../store/store"
   let username = ''
   let password = ''


   const handlelogin = async () => {
    var data = {
    name: username,
    passsword: password
  }
    console.log(data)
      const resp = await fetch('https://task-manager-backend-service.onrender.com/login',{
        method: 'POST',
        mode: "cors",
        headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
      })
      console.log(resp)
      const dt = await resp.json()
      if (resp.status == 200){
          $token = dt.token
          $loggedIn = true
          $signup = false
      }
    }

  function navigateToSignup(){
    $signup = true
  }
</script>




<div class="vh-100 d-flex justify-content-center align-items-center">
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="border border-3 border-primary"></div>
        <div class="card bg-white shadow-lg">
          <div class="card-body p-5">
            <form on:submit|preventDefault={()=>handlelogin()} class="mb-3 mt-md-4">
              <h2 class="fw-bold mb-2 text-uppercase ">Login</h2>
              <p class=" mb-5">Please enter your Username and password!</p>
              <div class="mb-3">
                <label for="text" class="form-label ">Username</label>
                <input type="text" class="form-control" bind:value={username} id="email" placeholder="type a unique username">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label ">Password</label>
                <input type="password" class="form-control" bind:value={password} id="password">
              </div>
              <div class="d-grid">
                <button class="btn btn-outline-dark" type="submit">Login</button>
              </div>
            </form>
            <div>
              <p class="mb-0  text-center">Don't have an account? <a href="#"
                  class="text-primary fw-bold" on:click={navigateToSignup}>Sign
                  Up</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>