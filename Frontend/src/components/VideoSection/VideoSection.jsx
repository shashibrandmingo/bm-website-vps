import { Link } from "react-router-dom";
import videoImg from "../../assets/images/resource/cta-finel.png";
import shape from "../../assets/images/icons/video-shape-1-1.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section section-padding pt-0">
      {/* SHAPE */}
      <div className="video-light-shape-1">
        <img src={shape} alt="Digital Marketing Call To Action Shape" aria-hidden="true" loading="lazy" decoding="async" />
      </div>

      {/* IMAGE */}
      <div className="video-image fix video-cta-wrapper">
        {/* Guaranteed premium orange glow — independent of image crop */}
        <div className="video-cta-glow" aria-hidden="true"></div>

        <img src={videoImg} alt="Brandmingo Digital Marketing Agency in Noida" className="video-cta-bg-img" loading="lazy" decoding="async" />

        <div className="content video-cta-content">
          <h3 className="title video-cta-heading">
            Let's Build Your <br />
            Next Success Story.
          </h3>

          <p className="video-cta-desc">
            Creative branding, modern websites, and growth-focused marketing to
            help your business stand out and scale with confidence.
          </p>

          <div className="video-cta-btn-wrap project-btn text-center">
            <Link to="/contact-us" className="btn-style-one">
              <span className="btn-arrow-left">
                <img src={arrow} alt="Start project arrow" aria-hidden="true" loading="lazy" decoding="async" />
              </span>
              <span className="btn-title">Start Your Project</span>
              <span className="btn-arrow-right">
                <img src={arrow} alt="Start project arrow" aria-hidden="true" loading="lazy" decoding="async" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
