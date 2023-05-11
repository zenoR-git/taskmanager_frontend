<script>
   import { loggedIn,signup,token } from  "../store/store"
   let username = ''
   let password = ''

   async function handleSignUp(){
    var data = {
    name: username,
    password: password
    }
    console.log(data)
      const resp = await fetch('https://task-manager-backend-service.onrender.com/signup',{
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

    function navigateToLogin(){
    $signup = false
  }

 </script>

<div class="vh-100 d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="border border-3 border-primary"></div>
          <div class="card bg-white shadow-lg">
            <div class="card-body p-5">
              <form on:submit|preventDefault={handleSignUp} class="mb-3 mt-md-4">
                <h2 class="fw-bold mb-2 text-uppercase ">Signup</h2>
                <p class=" mb-5">Please enter a Username and Password!</p>
                <div class="mb-3">
                  <label for="text" class="form-label ">User Name</label>
                  <input type="text" class="form-control" bind:value={username} id="text">
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label ">Password</label>
                  <input type="password" class="form-control" bind:value={password} id="password">
                </div>
                <div class="d-grid">
                  <button class="btn btn-outline-dark" type="submit">Signup</button>
                </div>
              </form>
              <div>
                <p class="mb-0  text-center">Already have an account? <a href="#"
                    class="text-primary fw-bold" on:click={navigateToLogin}>Login</a></p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>