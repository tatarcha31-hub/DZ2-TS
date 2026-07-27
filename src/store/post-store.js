// import { create } from "zustand"

import { create } from "zustand";

// export const usePostStore = create((set, get) => ({
//     posts: [],
//     error: null,
//     isLoading: false,
//     fetchPosts: async () => {
//         set({isLoading: true})
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//             const data = await response.json()
//             set({posts: data})
//         } catch (error) {
//             set({error: error.message})
//         } finally{
//             set({isLoading: false})
//         }
//     }
    
// }))

export const useUsersStore = create((set) => ({
    users: [], 
    isLoading: false,
    error: null,
    fetchUsers: async() => {
        set({isLoading: true})
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            set({users: data})
        } catch (error) {
            set({error: error.message})
        } finally {
            set({isLoading: false})
        }
    }
}))