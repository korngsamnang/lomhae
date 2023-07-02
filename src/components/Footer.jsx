import TwitterIcon from "../assets/icons/twitter.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import IgIcon from "../assets/icons/instagram.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-sections">
                <h5>Lomhae &copy;</h5>
                <ul>
                    <li>
                        <a href="#" title="twitter-social-media">
                            <img src={TwitterIcon} alt="twitter-social-media" />
                        </a>
                    </li>
                    <li>
                        <a href="#" title="youtube-social-media">
                            <img src={YoutubeIcon} alt="youtube-social-media" />
                        </a>
                    </li>
                    <li>
                        <a href="#" title="instagram-social-media">
                            <img src={IgIcon} alt="instagram-social-media" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
