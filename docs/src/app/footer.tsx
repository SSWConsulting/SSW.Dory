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
      <footer className="bg-black py-6 md:py-4 lg:py-2 w-full">
        <section className="main-container">
          <div className="xl:mx-6">
            <div className="mx-6 flex flex-col-reverse md:flex-row justify-between align-middle leading-6">
              <div className="py-2">
                Copyright © SSW 1990 - {new Date().getFullYear()}. All Rights
                Reserved.
              </div>
              <div className="w-full md:w-3/6 md:text-right py-2">
                <a
                  className="footer-link"
                  href="https://github.com/SSWConsulting/SSW.Dory/issues"
                  target="_blank"
                >
                  FEEDBACK / SUGGEST A FEATURE
                </a>
                <span className="px-2">|</span>
                <a
                  className="footer-link"
                  href="https://ssw.com.au/terms-and-conditions"
                  target="_blank"
                >
                  TERMS AND CONDITIONS
                </a>
                <span className="px-2">|</span>
                <div className="inline-flex flex-row-reverse justify-end flex-nowrap">
                  <a
                    className="unstyled social-media-icon"
                    id="tiktok-icon"
                    title="SSW on TikTok"
                    href="https://www.tiktok.com/@ssw_tv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTiktok} size="lg" />
                  </a>
                  <a
                    className="unstyled social-media-icon"
                    id="twitter-icon"
                    title="SSW on Twitter"
                    href="https://twitter.com/SSW_TV"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a
                    className="unstyled social-media-icon"
                    id="instagram-icon"
                    title="SSW on Instagram"
                    href="https://www.instagram.com/ssw_tv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a
                    className="unstyled social-media-icon"
                    id="facebook-icon"
                    title="SSW on Facebook"
                    href="https://www.facebook.com/SSW.page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a
                    className="unstyled social-media-icon"
                    id="linkedin-icon"
                    title="SSW on LinkedIn"
                    href="https://www.linkedin.com/company/ssw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a
                    className="unstyled social-media-icon"
                    id="youtube-icon"
                    title="SSW on YouTube"
                    href="https://www.youtube.com/user/sswtechtalks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} size="lg" />
                  </a>
                </div>
              </div>
            </div>
            <hr className="border-gray-800 my-2"></hr>
            <div className="flex flex-col md:flex-row justify-between mx-6">
              <div className="py-2">
                Our website is under{" "}
                <a
                  className="footer-link"
                  href="https://www.ssw.com.au/rules/rules-to-better-websites-deployment"
                  target="_blank"
                >
                  CONSTANT CONTINUOUS DEPLOYMENT
                </a>
                .
              </div>
              <div className="md:text-right py-2">
                Powered by{" "}
                <a
                  className="footer-link"
                  href="https://www.ssw.com.au/rules/rules-to-better-azure"
                  target="_blank"
                >
                  Azure
                </a>{" "}
                and{" "}
                <a
                  className="footer-link"
                  href="https://www.ssw.com.au/rules/static-site-generator"
                  target="_blank"
                >
                  {" "}
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
