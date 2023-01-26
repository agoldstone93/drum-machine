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
    document.querySelector("audio#" + soundId).play()
  }
  
  return (
    <button className='drum-pad' id={props.name} onClick={handleClick} >
      {props.name}
      <audio src={props.sound} className='clip' id={props.name} />
    </button>
  )
}