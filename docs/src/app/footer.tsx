import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="py-2 text-center bg-grey-translucent text-sm w-full">
        <section className="main-container">
          We <FontAwesomeIcon icon={faHeart} className="text-ssw-red" /> open
          source. Powered by{" "}
          <a
            className="action-button-label footer-greybar-link"
            href="https://github.com/SSWConsulting/SSW.Dory"
          >
            GitHub <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>
    </>
  );
}
