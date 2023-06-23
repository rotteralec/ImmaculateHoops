import { useState } from 'react'
import ReactDOM from "react-dom"
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1>Immaculate Hoops</h1>
<div class='game-board'>

<div class='board-column'>
      <div class='board-square'>
        <img className='image-answer' src='https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
    </div>
    
    <div class='board-column'>
      <div class='board-square'>
        <img className='image-answer' src='https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
    </div>

    <div class='board-column'>
      <div class='board-square'>
        <img className='image-answer' src='https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
    </div>

    <div class='board-column'>
      <div class='board-square'>
        <img className='image-answer' src='https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
      <div class='board-square'>
        <img className='image-answer' src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203999.png' alt='Better than Flopbiid' >
        </img>
      </div>
    </div>



</div>


<div class="social-panel-container">
	<div class="social-panel">
		<p>Created by
			<a target="_blank" href="https://github.com/rotteralec" >AL</a></p>
		<button class="close-btn"><i class="fas fa-times"></i></button>
		<h4>Get in touch on</h4>
		<ul>
			<li>
				<a href="https://github.com/rotteralec" target="_blank">
					<i class="fab fa-discord"></i>
				</a>
			</li>
			<li>
				<a href="https://github.com/rotteralec" target="_blank">
					<i class="fab fa-twitter"></i>
				</a>
			</li>
			<li>
				<a href="https://github.com/rotteralec" target="_blank">
					<i class="fab fa-linkedin"></i>
				</a>
			</li>
			<li>
				<a href="https://github.com/rotteralec" target="_blank">
					<i class="fab fa-facebook"></i>
				</a>
			</li>
			<li>
				<a href="https://github.com/rotteralec" target="_blank">
					<i class="fab fa-instagram"></i>
				</a>
			</li>
		</ul>
	</div>
</div>
<button class="floating-btn">
	Get in Touch
</button>

<div class="floating-text">
	Part of <a href="https://github.com/rotteralec" target="_blank">AL's Portfolio</a>
</div>
    </>
  )
}

export default App
