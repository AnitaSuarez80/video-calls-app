import './App.css';
import MenuTop from './components/MenuTop';
import ModeratorScreen from './components/ModeratorScreen';
import Participants from './components/Participants';
import VideoParticipants from './components/VideoParticipants';
import Chats from './components/Chats'
import ActionMenu from './components/ActionMenu'

function App() {
  return (
    <div className="App">

      <MenuTop />

      <ModeratorScreen />

      <Participants />

      <VideoParticipants />
{/* 
      <VideoParticipants 
        image = 'one'
        name = 'Cassie Jung'
        icon = 'off'
      />

      <VideoParticipants 
        image = 'two'
        name = 'Alice Wong'
        icon = 'on'
      />

      <VideoParticipants 
        image = 'three'
        name = 'Thresa Webb'
        icon = 'on'
      />

      <VideoParticipants 
        image = 'four'
        name = 'Christian Wong'
        icon = 'off'
      /> */}

      <Chats />

      <ActionMenu />

      {/* <Participants
        name='Kathryn Murphy'
        image='1'

      /> */}
      
     
    </div>
  );
}

export default App;
