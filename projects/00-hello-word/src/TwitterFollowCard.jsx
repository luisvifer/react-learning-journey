import { useState } from 'react'

export function TwitterFollowCard ({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const imageSrc = `https://unavatar.io/${userName}`
  const addAt = (userName) => `@${userName}`

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'jd-followCard-button is-following' : 'jd-followCard-button'
  console.log('Reder TwitterFollowCard ' + name)
  return (
    <article className='jd-followCard'>
      <header className='jd-followCard-header'>
        <img className='jd-followCard-avatar' alt='El avatar ramdom' src={imageSrc} />
        <div className='jd-followCard-info'>
          <strong>{name}</strong>
          <span className='jd-followCard-infoUserName'>{addAt(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='jd-followCard-text'>{text}</span>
          <span className='jd-followCard-unFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
