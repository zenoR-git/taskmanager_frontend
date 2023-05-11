import { writable } from 'svelte/store';


export const loggedIn = writable(false);
export const tasks =  writable([])
export const signup = writable(false);
export const token = writable('')