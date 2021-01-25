import './index.css';
import WeeklyCal from './components/weeklyCal/WeeklyCal';

function App() {
  return (
    <div class="container">
      <div class="side-bar"> SIDE BAR </div>
      <div class="weekly-cal-container">
        <WeeklyCal />
      </div>
      

      <div class="personal-to-do">PERSONAL TO DO</div>
        
      <div class="work-to-do">WORK TO DO</div>
      <div class="post-it">POST IT</div>
    </div>
  );
}

export default App;
