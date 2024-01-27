import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    console.log("Reder App")
    const users = [
        {
            userName: 'kobahine',
            name: 'Luis Villa Fernández',
            isFollowing: true
        },
        {
            userName: 'joedoe',
            name: 'Joe Doe',
            isFollowing: false
        },
        {
            userName: 'ttbc',
            name: 'The three black crows',
            isFollowing: false
        },
    ]
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing})=>(
                        <TwitterFollowCard 
                            key={userName}
                            userName = {userName}
                            name= {name}
                            initialIsFollowing = {isFollowing} />
                    )
                )
            }
        </section>
       
       
    )
}