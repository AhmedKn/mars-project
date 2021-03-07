import '../css/Home.css';
import Navbar from "./Navbar";


function App() {
  return (
    <div className="home">
      <header>
        <div className="overlay"></div>
        <Navbar />
        <div className="content">
          <h1>MARS & BEYOND</h1>
          <p>THE ROAD TO MAKING HUMANITY MULTIPLANETARY</p>
        </div>
        <a href="#intro" className="scroll-down">
          <i className="fas fa-chevron-down"></i>
        </a>
      </header>
      <div className="intro" id="intro">
        <div className="content">
          <h1>WHY MARS?</h1>
          <p>At an average distance of 140 million miles, Mars is one of Earth's closest habitable neighbors. Mars is about half again as far from the Sun as Earth is, so it still has decent sunlight. It is a little cold, but we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace elements, which means that we can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is about 38% of that of Earth, so you would be able to lift heavy things and bound around. Furthermore, the day is remarkably close to that of Earth.</p>
        </div>
      </div>
      <div className="stats text-center">
        <h1>Mars Vs Earth</h1>
        <table>
          <tr>
            <td></td>
            <td>Earth</td>
            <td>Mars</td>
          </tr>
          <tr>
            <td>Average Distance from Sun</td>
            <td>93 million miles</td>
            <td>142 million miles</td>
          </tr>
          <tr>
            <td>Average Speed in Orbiting Sun</td>
            <td>14.5 miles per second</td>
            <td>18.5 miles per second</td>
          </tr>
          <tr>
            <td>Diameter</td>
            <td>7,926 miles	</td>
            <td>4,220 miles</td>
          </tr>

          <tr>
            <td>Tilt of Axix</td>
            <td>23.5 degrees</td>
            <td>25 degrees</td>
          </tr>

          <tr>
            <td>Length of Year</td>
            <td>365.25 Days</td>
            <td>687 Earth Days</td>
          </tr>

          <tr>
            <td>Length of Day	</td>
            <td>23 hours 56 minutes</td>
            <td>24 hours 37 minutes</td>
          </tr>

          <tr>
            <td>Gravity</td>
            <td>2.66 times that of Mars	</td>
            <td>0.375 that of Earth</td>
          </tr>

          <tr>
            <td>Temperature</td>
            <td>Average 57 degrees F</td>
            <td>Average -81 degrees F</td>
          </tr>

          <tr>
            <td>Atmosphere</td>
            <td>nitrogen, oxygen, argon, others</td>
            <td>mostly carbon dioxide, some water vapor</td>
          </tr>
        </table>
      </div>

    </div>
  );
}

export default App;
