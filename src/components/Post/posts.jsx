// import { useEffect } from 'react'
// import React from 'react'
// import { usePostStore } from '../store/post-store'
// import Loader from './Loader/Loader'

// const Posts = () => {
//     const posts = usePostStore((state) => state.posts )
//     const isLoading = usePostStore((state) => state.isLoading )

//     useEffect(() => {
//         usePostStore.getState().fetchPosts()
//     }, [])

//     if (isLoading) return <Loader />
//     return (
//     <ul>
//         {posts.map((item) => {
//             return <div key={item.id}>
//                 <h4>{item.title}</h4>
//                 <p>{item.body}</p>
//             </div>
//         })}
//     </ul>
//   )
// }

// export default Posts

import React from 'react'
import { useUsersStore } from '../../store/post-store'
import { useState } from 'react'
import Loader from '../Loader/Loader'
import './Posts.css'
import { Button, ConfigProvider, Flex } from 'antd';


const Posts = () => {
    const users = useUsersStore((state) => state.users)
    const isLoading = useUsersStore((state) => state.isLoading) 
    const fetchUsers = useUsersStore((state) => state.fetchUsers)

    const [user, setUser] = useState(false);

    if (isLoading) return <Loader />

  return (
    <div>
        <Flex gap="small" wrap>
            <Button className='btn' onClick={fetchUsers} color="cyan" variant="solid">GET USERS</Button>
        </Flex>
    <div className='display'>
         {users.map((item) => {
            return <div className='card' key={item.id}>
                <h3>name: {item.name}</h3>
                <h4>username: {item.username}</h4>
                <h5>email: {item.email}</h5>
                <h5>phone: {item.phone}</h5>
            </div>
        })}
    </div>
    </div>
  )
}

export default Posts