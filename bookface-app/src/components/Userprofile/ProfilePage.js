import React from 'react'
import './Style.css'
import setimage from '../img/user7.jpg'
import user1 from '../img/book7.jpg'
import user2 from '../img/book1.jpg'
import user3 from '../img/book2.jpg'
import user4 from '../img/book3.jpg'
import user5 from '../img/book4.jpg'
import user6 from '../img/book6.jpg'
import Navigation from '../navigation'



const ProfilePage = () => {
  return (
    <div>
        <body>

      <main>
    <header>
    <div class="header-wrap">
      <div class="profile-pic">
        <img src={setimage} alt="profile-logo" />
      </div>
      <div class="profile-info">
        <div class="title row">
          <h2>priti</h2>
          <span class="verfied-icon"></span>
          <button class="primary">Follow</button>
        </div>
        <div class="desktop-only">
          <div class="details row">
            <ul>
              <li><span>722</span> posts</li>
              <li><span>25.1m</span> followers</li>
              <li><span>6</span> following</li>
            </ul>
          </div>
          <div class="descriptions row last">
            <h1>priti</h1>
            <span>
              Everyone has a story to tell.
              <br />
              Tag #ShotoniPhone to take part.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-info mobile-only">
      <div class="descriptions row">
        <h1>priti</h1>
        <span>
          Everyone has a story to tell.
          <br />
          Tag #ShotoniPhone to take part.
        </span>
      </div>
    </div>
  </header>
            <div class="desktop-only">
        <div class="tabs">
          <div class="tab-item active" style={{marginRight: '60px'}}>
            <svg
              aria-label="Posts"
              class="_8-yf5"
              fill="#262626"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                clip-rule="evenodd"
                d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span>POSTS</span>
          </div>
        </div>
      </div>
      <div class="mobile-tabs mobile-only">
        <ul>
          <li>
            <div>722</div>
            posts
          </li>
          <li>
            <div>25.1m</div>
            followers
          </li>
          <li>
            <div>6</div>
            following
          </li>
        </ul>
        <div class="actions">
          <svg
            aria-label="Posts"
            class="_8-yf5"
            fill="rgb(0, 149, 246)"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <svg
            aria-label="Posts"
            class="_8-yf5"
            fill="#8e8e8e"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"
            ></path>
          </svg>
          <svg
            aria-label="Tagged"
            class="_8-yf5"
            fill="#8e8e8e"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"
            ></path>
          </svg>
        </div>
      </div> 

      <div class="gallery">
        <div class="gallery-item">
          <img alt="gallery-post" src={user1}/>
          <span class="media-icon"></span>
        </div>
        <div class="gallery-item">
        <img alt="gallery-post" src={user2}/>
          <span class="media-icon"></span>
        </div>
        <div class="gallery-item">
        <img alt="gallery-post" src={user3}/>
          <span class="media-icon"></span>
        </div>
        <div class="gallery-item">
        <img alt="gallery-post" src={user4}/>
        </div>
        <div class="gallery-item">
        <img alt="gallery-post" src={user5}/>
        </div>
        <div class="gallery-item">
        <img alt="gallery-post" src={user6}/>
          <span class="media-icon"></span>
        </div>
      </div>
      <Navigation />
      </main>
</body>
  </div>
)
}

export default ProfilePage
