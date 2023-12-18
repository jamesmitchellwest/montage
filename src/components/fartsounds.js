import React, { useEffect } from 'react'
import fartsound from "../assets/img/Fartguitar.mp3"
const FartSounds = () => {
  useEffect(() => {
    const handleButtonClick = () => {
      const audioPlayer = document.getElementById('audioPlayer')
      if (audioPlayer) {
        if (audioPlayer.paused) {
          audioPlayer.play()
        } else {
          audioPlayer.pause()
        }
      }
    }

    const playButton = document.getElementById('playButton')

    if (playButton) {
      playButton.addEventListener('click', handleButtonClick)
    }

    return () => {
      if (playButton) {
        playButton.removeEventListener('click', handleButtonClick)
      }
    }
  }, []) // Empty dependency array ensures that the effect runs only once during mounting

  return (
    <>
      {/* Example element with the class .guitarimg_wrap */}
      {/* <div className="guitarimg_wrap">Click to Play</div> */}

      {/* Include the audio element with the MP3 file and ID */}
      <audio id="audioPlayer" src={fartsound}></audio>
    </>
  )
}

export default FartSounds
