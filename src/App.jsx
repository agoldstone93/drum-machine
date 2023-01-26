import './App.css'
import Pad from './Pad';
import { padList1, padList2 } from './padList';

export default function App () {
  const drumPads1 = padList1.map(pad => (
    <Pad 
      key={pad.id}
      name={pad.name}
      sound={pad.sound}
      id={pad.id}/>
  ));

  // const drumPads2 = padList2.map(pad => (
  //   <Pad 
  //     key={pad.id} 
  //     name={pad.name} 
  //     sound={pad.sound} 
  //     id={pad.id}/>
  // ));
  
  return (
    <div id='drum-machine'>
      {drumPads1}
      <div id='display'>
        Sound
      </div>
    </div>
  )
}
