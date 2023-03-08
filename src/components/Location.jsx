import Cloud from "../assets/images/cloud.png";

const Location = () => {
    return (
        <section id="section-locations">
            <div className="locations-head">
                <h2>The Perfect Travelling Experience.</h2>
                <h3>
                    We cover everything from picking the perfect hotel, <br />
                    flight and travelling destination.
                </h3>
                <img src={Cloud} className="moving-cloud cloud" alt="" />
            </div>
        </section>
    );
};

export default Location;
