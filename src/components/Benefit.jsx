import RouteSolid from "../assets/icons/route-solid.svg";
import BedSolid from "../assets/icons/bed-solid.svg";
import Plan from "../assets/icons/plane-departure-solid.svg";

const Benefit = () => {
    return (
        <section id="benefits-section">
            <div className="benefits-head">
                <h2>The Perfect Travel</h2>
                <h3>
                    We cover picking the perfect hotel <br />
                    to flight and destination.
                </h3>
            </div>
            <div className="cards">
                <div className="each-card">
                    <div className="card-icon">
                        <img src={RouteSolid} alt="route-icon" />
                    </div>
                    <h4>Travel</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint sed deleniti modi ipsa blanditiis incidunt!
                    </p>
                </div>
                <div className="each-card">
                    <div className="card-icon">
                        <img src={BedSolid} alt="bed-icon" />
                    </div>
                    <h4>Hotel</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint sed deleniti modi ipsa blanditiis incidunt!
                    </p>
                </div>
                <div className="each-card">
                    <div className="card-icon">
                        <img src={Plan} alt="plan-icon" />
                    </div>
                    <h4>Fly</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint sed deleniti modi ipsa blanditiis incidunt!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefit;
