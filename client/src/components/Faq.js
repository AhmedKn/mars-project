import Navbar from "./Navbar"
import "../css/Faq.css"
function Faq() {
  return (
    <div id="faq">
      <Navbar />
      <div className="overlay"></div>
      <div className="faq">
        <h1>Frequently Asked Question</h1>
        <div className="items">
          <div className="item">
            <h3>What is the amount of oxygen in Mars' atmosphere?</h3>
            <p>The oxygen content of the Martian atmosphere is only 0.13 percent, compared with 21 percent in Earth's atmosphere. Carbon dioxide makes up 95.3 percent of the gas in the atmosphere of Mars. It also contains nitrogen and argon and very small amounts of water and methane.
          </p>
          </div>
          <div className="item">
            <h3>What is the thickness of the atmosphere of Mars?</h3>
            <p>The atmosphere of Mars is thin, cold, and dry and contains much less oxygen than the atmosphere of Earth. The oxygen content of the Martian atmosphere is only 0.13 percent, compared with 21 percent in Earth's atmosphere. Carbon dioxide makes up 95.3 percent of the gas in the atmosphere of Mars. It also contains nitrogen and argon and very small amounts of water and methane. Additionally, the atmospheric pressure on Mars is only about 1/100 that of Earth's!</p>
          </div>
          <div className="item">
            <h3>When will the first human mission to Mars be?</h3>
            <p>NASA currently is working to build the systems to take astronauts beyond low Earth orbit. NASA is working to meet the President's goal to send humans to Mars in the 2030s. We are developing the technology we will need and designing safety measures to protect our astronauts from the harsh environment beyond low Earth orbit.
         </p>
          </div>
          <div className="item">
            <h3>How long will it take to get to Mars?</h3>
            <p>It depends on how you go, what kind of rocket is used and what technologies are available. With current technology, our robotic missions usually take about 8 months to travel to Mars. We are exploring options that will minimize the duration of a human trip to Mars.
         </p>
          </div>
        </div>
      </div>
    </div>


  )
}


export default Faq;