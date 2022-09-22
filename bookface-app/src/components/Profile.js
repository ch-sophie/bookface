import React from 'react'
import image from '../img/home1.jpg'
import setimage from '../img/logo.png'
import Navigation from './navigation'
import Header from './header'


const Profile = () => {
  return (
    <div class="container">
    <Header />

		<div class="profile">

			<div class="profile-image">

				<img src={setimage} alt="" height={"150px"} width={'100px'} />

			</div>

			<div class="profile-user-settings">

				<h1 class="profile-user-name">Bhama</h1>

				<button class="btn profile-edit-btn">Edit Profile</button>

				<button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

			</div>
      <div class="profile-bio">

<p><span class="profile-real-name">bhama</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit camera
</p>

</div>


			<div class="profile-stats">

				<ul>
					<li><span class="profile-stat-count">164</span> posts</li>
					<li><span class="profile-stat-count">188</span> followers</li>
					<li><span class="profile-stat-count">206</span> following</li>
				</ul>

			</div>


		</div>

<div class="gallery">

  <div class="gallery-item" tabindex="0">

  <img src={image}  class="gallery-image" alt=""  />

    <div class="gallery-item-info">

      <ul>
        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
      </ul>

    </div>

  </div>

  <div class="gallery-item" tabindex="0">

  <img src={image}  class="gallery-image" alt=""  />

    <div class="gallery-item-info">

      <ul>
        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 89</li>
        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 5</li>
      </ul>

    </div>

  </div>

  <div class="gallery-item" tabindex="0">

  <img src={image}  class="gallery-image" alt=""  />

    <div class="gallery-item-type">

      <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

    </div>

    <div class="gallery-item-info">

      <ul>
        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
      </ul>

    </div>

  </div>
  
  <div class="gallery-item" tabindex="0">

  <img src={image}  class="gallery-image" alt=""  />

    <div class="gallery-item-type">

      <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

    </div>

    <div class="gallery-item-info">

      <ul>
        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
      </ul>

    </div>

  </div>

  <div class="gallery-item" tabindex="0">

  <img src={image}  class="gallery-image" alt=""  />

    <div class="gallery-item-type">

      <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

    </div>

    <div class="gallery-item-info">

      <ul>
        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
      </ul>

    </div>

  </div>


	</div>
  <Navigation />
  </div>

  )
}

export default Profile
