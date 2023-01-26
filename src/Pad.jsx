import { padList1 } from './padList';

export default function Pad(props) {
  window.onkeypress = handleKeyPress;
  
  function handleKeyPress(e){
    if (e.code.substring(0,3)==="Key")
      playSound(e.code.substring(3,4))
  }

  function handleClick(){
    playSound(props.name)
    document.getElementById('display').innerHTML = props.id
  }
  
  function playSound(soundId) {
    pauseAll()
    document.querySelector("audio#" + soundId).play()
  }

  function pauseAll() {
    padList1.forEach(item => {
      let sound = document.querySelector("audio#" + item.name)
      sound.pause()
      sound.currentTime = 0
    })
  }
  
  return (
    <button className='drum-pad' id={props.name} onClick={handleClick} >
      {props.name}
      <audio src={props.sound} className='clip' id={props.name} />
    </button>
  )
}