<script>
    import { token,tasks } from  "../store/store"
    import {onMount}  from "svelte"

    let update_id = ""
    let show_edit = false
    let newItem = '';

   
    const task_getter = async ()=>{
        let res = await fetch('https://task-manager-backend-service.onrender.com/api/tasks',{
            method: 'GET',
            mode:'cors',
            headers: {
            'authorization':'Bearer '+ $token
        }})
        console.log(res)
        let data = await res.json()
        $tasks= data
        console.log(data)
    }


    onMount(task_getter)


    async function taskadder(){
        let payload = {
            title:newItem,
        }
        let res = await fetch('https://task-manager-backend-service.onrender.com/api/tasks',{
            method: 'POST',
            headers: {
            'content-type': 'application/json',
            'authorization':'Bearer '+ $token,
            },
            body: JSON.stringify(payload)
    })
        console.log(res)
    }


    async function task_delete(id){
    let payload = {
        id: id
    }
    let res = await fetch('https://task-manager-backend-service.onrender.com/api/tasks/delete',{
            method: 'DELETE',
            headers: {
            'content-type': 'application/json',
            'authorization':'Bearer '+ $token,
            },
            body: JSON.stringify(payload)
    })
        console.log(res)
    }


    
	
	function addToList() {
		taskadder().then(()=>task_getter())
        newItem = ''
	}
	
	async function removeFromList(id) {
		await task_delete(id)
        await task_getter()
    }

    async function updateList(){
        let payload = {
        id: update_id,
        new: {
            title: newItem,
        }
    }
    let res = await fetch('https://task-manager-backend-service.onrender.com/api/tasks/update',{
            method: 'PUT',
            headers: {
            'content-type': 'application/json',
            'authorization':'Bearer '+ $token,
            },
            body: JSON.stringify(payload)
    })
        console.log(res)
     await task_getter()
     newItem = ''
     show_edit = false
     update_id = ''
    }
</script>



<div class="container text-center">
<input bind:value={newItem} class="form-control my-4" type="text" placeholder="new todo item..">
{#if (show_edit)}
<button on:click={updateList} class="btn btn-danger mb-2">Edit</button>
{:else}
<button on:click={addToList} class="btn btn-primary mb-2">Add</button>
{/if}
<br/>
</div>


<div class="container my-3 title">
{#each $tasks as item, index}
    <div class="row">
    <div class="col-10">
	<span class:checked={item.title}>{item.title}</span>
    </div>
    <div class="col-2">
	<span data-id={item._id} on:click={(e) => removeFromList(e.currentTarget.getAttribute("data-id"))}>❌</span>
    <span data-id={item._id} on:click={(e)=>{newItem =  $tasks[index].title
     show_edit = true
     update_id = e.currentTarget.getAttribute("data-id")
     }}>📝</span>
     </div>
	<br/>
  </div>
{/each} 
</div>

<style> 
	.checked {
       
    }

</style> 