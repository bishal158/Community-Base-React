// Styles
import "yet-another-react-lightbox/plugins/counter.css";
import "./styles/Home.css";
// Images
import indexBackground from "../assets/images/indexBackgroumd.png";
import indexBackground2 from "../assets/images/indexBackground2.png";
import mainIcon from "../assets/images/main-icon.png";
import videoBackground from "../assets/images/nr-Video-background.jpg";
import testmonialPhoto from "../assets/images/testmonialPhoto.png";
import testItemFrame from "../assets/images/testItemFrame.png";
// Others
import { Link } from "react-router-dom";
import {useEffect, useRef, useState} from "react";
// yet another react-lightbox
import Lightbox from 'yet-another-react-lightbox';
import VideoPlugin from 'yet-another-react-lightbox/plugins/video';
import {Counter} from "yet-another-react-lightbox/plugins";
// GASP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Home() {
  // yet another react lightbox
  const [open, setOpen] = useState(false);
  const slides = [
    {
      type: 'video',
      width: 1280,
      height: 720,
      poster: 'https://placekitten.com/1280/720',
      sources: [
        {
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          type: 'video/mp4',
        },
      ],
    },
  ];
  // GASP
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.utils.toArray('.animated-section').forEach((section) => {
      gsap.fromTo(
          section,
          { opacity: 0, y: 100, scale: 0.5 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 60%',
              scrub: true,
              toggleActions: 'play none none reverse',
            },
          }
      );
    });
  }, []);

  return (
    <>
      <div className="nr--index--background">
        <div className="nr--index--right">
          <img src={indexBackground} alt="not found" />
        </div>
        <div className="nr--index--left">
          <img src={indexBackground2} alt="not found" />
        </div>
      </div>

      <main>
        <section className="nr--banner--wrapper animated-section" >
          <div className="container">
            <div className="nr--banner--wrapper--main">
              <div className="nr--banner--wrapper--main--inner">
                <div className="nr--banner--header">
                  <Link to={'/'} >
                    <div className="nr--banner--header--logo">
                      <img src={mainIcon} alt="not found" />
                    </div>
                    <h4>
                      Community <span>Base</span>
                    </h4>
                  </Link>
                </div>

                <div className="nr--banner--heading">
                  <h2>
                    Bringing Communities Together, One Service at a Time:
                    Discover, Connect, Engage.
                  </h2>
                </div>

                <div className="nr--banner--video">
                  <button  id="video-trigger" onClick={()=> setOpen(true)}>
                    <div className="nr--banner--video--icon-svg" id="nr--videoPlay">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="110"
                        height="110"
                        viewBox="0 0 110 110"
                        fill="none"
                      >
                        <circle cx="55" cy="55" r="55" fill="white" />
                        <path
                          d="M76.0555 54.1727L42.0262 34.2003C41.7414 34.033 41.3921 34.0349 41.1091 34.2054C40.826 34.3758 40.652 34.689 40.6522 35.0277V74.9724C40.652 75.3111 40.826 75.6244 41.1091 75.7948C41.3921 75.9652 41.7414 75.9672 42.0262 75.7998L76.0555 55.8275C76.3436 55.6586 76.5217 55.3426 76.5217 55.0001C76.5217 54.6576 76.3436 54.3415 76.0555 54.1727Z"
                          fill="#01763F"
                        />
                      </svg>
                    </div>
                  </button>
                  <img src={videoBackground} alt="not found" />
                </div>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    plugins={[VideoPlugin,Counter]}

                />


                <div className="nr--banner--lower--text--and--btn">
                  <p>
                    Explore local services and connect with your community. Find
                    trusted professionals, engage in activities, and discover
                    what matters most. Join us today and be part of a thriving,
                    connected community.
                  </p>

                  <Link to={'/signin'} >Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="nr--who--we--are--wrapper animated-section" >
          <div className="container">
            <div className="nr--who--we--are--main">
              <div className="nr--who--we--are--content">
                <h3>Who we are</h3>
                <p>
                  We are a passionate team dedicated to bringing people together
                  through our innovative platform. Our goal is to help people
                  discover local services, connect with each other, and engage
                  in meaningful ways. At CommunityBase, we believe in the power
                  of community to create stronger, more vibrant neighborhoods.
                </p>
                <Link to={'/signup'} >
                  Join us in transforming your community, one service at a time.
                </Link>
              </div>
            </div>
          </div>
        </section  >

        <section className="nr--community--wrapper animated-section" >
          <div className="nr--community--background--text">
            <h4>CommunityBase</h4>
          </div>

          <div className="container">
            <div className="nr--community--main">
              <div className="nr--banner--header">
                <Link to={'/'}>
                  <div className="nr--banner--header--logo">
                    <img src={mainIcon} alt="not found" />
                  </div>
                  <h4>
                    Community <span>Base</span>
                  </h4>
                </Link>
              </div>
              <div className="nr--community--main--teext">
                <h4>
                  <span>CommunityBase</span> is a dynamic web application
                  designed to connect users with{" "}
                  <span className="second--span">
                    local service providers and sellers.
                  </span>{" "}
                  It serves as a versatile platform where community members can
                  discover a variety of services and products, engage in
                  meaningful interactions, and stay informed about local events
                  and updates.{" "}
                </h4>

                <div className="nr--community--main--teext--2nd">
                  <h5>
                    CommunityBase aims to foster stronger, more{" "}
                    <span>vibrant neighborhoods</span> by making it easy for
                    people to find and support local businesses, connect with
                    their neighbors, and participate in{" "}
                    <span>community activities.</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="nr--service--wrapper animated-section" >
          <div className="container">
            <div className="nr--service--main">
              <div className="nr--service--heading">
                <Link to={'/signup'}>Our Services</Link>
              </div>
              <div className="nr--service--heading--text">
                <h3>Connecting You with Local Experts</h3>
                <p>
                  Find trusted professionals for all your needs. From cleaning
                  and education to beauty and home repairs, our platform
                  connects you with local experts.
                </p>
              </div>

              <div className="nr--service--main--wrapper">
                <div className="nr--service--main--item">
                  <div className="nr--service--main--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_624_142)">
                        <path
                          d="M1.95936 18.6738C2.77641 18.9466 4.21565 19.5541 5.58625 20.9247C6.95684 22.2953 7.56431 23.7344 7.83716 24.5516C8.03364 25.1484 8.60512 25.657 9.3675 25.6573C10.1299 25.657 10.7014 25.1484 10.8978 24.5516C11.1707 23.7345 11.7782 22.2953 13.1487 20.9247C14.5193 19.5541 15.9587 18.9466 16.7756 18.6738C17.3725 18.4773 17.881 17.9058 17.8813 17.1435C17.881 16.3811 17.3725 15.8096 16.7756 15.6131C15.9586 15.3403 14.5193 14.7328 13.1487 13.3622C11.7782 11.9916 11.1707 10.5525 10.8978 9.73532C10.7014 9.13849 10.1299 8.62995 9.3675 8.62963C8.60512 8.62995 8.03364 9.13849 7.83716 9.73532C7.56431 10.5524 6.95684 11.9916 5.58625 13.3622C4.21565 14.7328 2.7763 15.3403 1.95936 15.6131C1.36253 15.8096 0.85399 16.3811 0.853668 17.1435C0.85399 17.9058 1.36253 18.4772 1.95936 18.6738ZM26.7608 17.1445C26.7608 18.0344 27.4823 18.7559 28.3721 18.7559H30.2127V20.5963C30.2127 21.4862 30.9342 22.2076 31.824 22.2076C32.7139 22.2076 33.4354 21.4862 33.4354 20.5963V18.7559H35.2758C36.1657 18.7559 36.8872 18.0344 36.8872 17.1445C36.8872 16.2546 36.1657 15.5332 35.2758 15.5332H33.4354V13.6927C33.4354 12.8029 32.7139 12.0814 31.824 12.0814C30.9342 12.0814 30.2127 12.8029 30.2127 13.6927V15.5332H28.3721C27.4823 15.5332 26.7608 16.2546 26.7608 17.1445ZM19.7426 6.67444H21.5831V8.5149C21.5831 9.40479 22.3045 10.1262 23.1944 10.1262C24.0843 10.1262 24.8057 9.40479 24.8057 8.5149V6.67444H26.6463C27.5362 6.67444 28.2576 5.953 28.2576 5.06312C28.2576 4.17323 27.5362 3.45179 26.6463 3.45179H24.8057V1.61133C24.8057 0.721445 24.0843 0 23.1944 0C22.3045 0 21.5831 0.721445 21.5831 1.61133V3.45179H19.7426C18.8527 3.45179 18.1313 4.17323 18.1313 5.06312C18.1313 5.953 18.8527 6.67444 19.7426 6.67444ZM27.8692 48.5809C27.9265 48.5737 29.5563 48.3606 31.0828 47.3317C31.1407 47.2926 31.195 47.2509 31.2511 47.2105L34.1806 32.5631H35.2758C36.1657 32.5631 36.8872 31.8417 36.8872 30.9518C36.8872 30.0619 36.1657 29.3405 35.2758 29.3405H4.20942C3.31954 29.3405 2.59809 30.0619 2.59809 30.9518C2.59809 31.8417 3.31954 32.5631 4.20942 32.5631H5.3048L8.19767 47.0278C8.36713 46.9208 8.52414 46.7953 8.66582 46.6535L18.6034 36.716C19.2326 36.0868 20.2529 36.0868 20.8822 36.716C21.5114 37.3453 21.5114 38.3655 20.8822 38.9948L10.9446 48.9324C10.4328 49.4441 9.712 49.9466 8.8479 50.279L9.53303 53.7047C9.60609 54.07 9.80343 54.3986 10.0915 54.6348C10.3795 54.8709 10.7405 55 11.113 55H23.8133C23.6578 54.5586 23.5672 54.0969 23.5442 53.6295C23.4159 51.0613 25.3142 48.8479 27.8692 48.5809Z"
                          fill="#01763F"
                        />
                        <path
                          d="M5.7477 47.234C4.74363 46.8182 4.0948 45.8471 4.0948 44.7589C4.0948 44.4343 4.1556 44.1191 4.27065 43.8257L3.46091 39.777L2.56436 40.6736C1.47307 41.7649 0.87204 43.2157 0.87204 44.7602C0.87204 47.1552 2.30183 49.2949 4.51439 50.2113C6.12314 50.8778 7.62823 50.7481 8.84768 50.279L8.19746 47.0278C7.47311 47.4849 6.56379 47.5719 5.7477 47.234ZM47.2427 29.6808V1.61133C47.2427 0.721445 46.5213 0 45.6314 0C44.7415 0 44.0201 0.721445 44.0201 1.61133V29.6808C44.554 29.6069 45.0924 29.5698 45.6314 29.5697C46.178 29.5697 46.7157 29.608 47.2427 29.6808ZM45.6314 32.7924C40.9362 32.7924 37.1164 36.6122 37.1164 41.3074C37.1164 50.7908 28.4384 51.7611 28.2119 51.7854C27.3574 51.8708 26.72 52.6114 26.7629 53.469C26.8057 54.3267 27.5134 55 28.3721 55H40.4536C52.5877 55 54.1463 45.8652 54.1463 41.3073C54.1463 36.6121 50.3266 32.7924 45.6314 32.7924Z"
                          fill="#01763F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_624_142">
                          <rect width="55" height="55" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h4>Cleaning Services</h4>
                  <p>
                    House cleaners, carpet cleaners, & window washing services
                    can advertise & schedule appointments with local residents.
                  </p>
                </div>

                <div className="nr--service--main--item">
                  <div className="nr--service--main--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                    >
                      <path
                        d="M40.8331 31.6668C42.8494 31.6668 44.5 30.0157 44.5 28V4.16685C44.5 2.15055 42.8494 0.5 40.8331 0.5H4.16685C2.14945 0.5 0.5 2.15055 0.5 4.16685V28C0.5 30.0157 2.14945 31.6668 4.16685 31.6668H7.83315V24.3331H15.1668C17.1831 24.3331 20.3088 23.5956 22.1133 22.6936L29.8331 18.8331L31.4732 22.1133L23.7529 25.9738C22.4153 26.6431 20.6162 27.2052 18.8331 27.5704V35.3331H0.5V39H4.16685V44.5H40.8331V39H44.5V35.3331H22.5V31.6668H40.8331ZM13.3331 20.6668C10.2966 20.6668 7.83315 18.2034 7.83315 15.1668C7.83315 12.1303 10.2966 9.66685 13.3331 9.66685C16.3697 9.66685 18.8331 12.1303 18.8331 15.1668C18.8331 18.2034 16.3697 20.6668 13.3331 20.6668ZM20.6668 8.75V6H39V8.75H20.6668ZM24.3331 14.25V11.5H39V14.25H24.3331Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <h4>Tutoring & Education</h4>
                  <p>
                    Tutors, language instructors, and music teachers can find
                    students within the community.
                  </p>
                </div>

                <div className="nr--service--main--item">
                  <div className="nr--service--main--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_642_107)">
                        <path
                          d="M35.9863 44.1504H1.61133C0.721445 44.1504 0 44.8718 0 45.7617C0 48.4315 2.16423 50.5957 4.83398 50.5957H32.7637C35.4334 50.5957 37.5977 48.4315 37.5977 45.7617C37.5977 44.8718 36.8762 44.1504 35.9863 44.1504ZM54.2082 7.17267C47.962 3.48155 41.6275 3.48155 35.3812 7.17267C34.6357 7.61321 34.3717 8.56432 34.7835 9.32616L39.675 18.3743H49.9145L54.806 9.32616C55.2177 8.56432 54.9537 7.61321 54.2082 7.17267ZM40.7664 21.5918H48.823V26.4258H40.7664V21.5918ZM40.7664 46.5674C40.7664 48.7922 42.5699 50.5957 44.7947 50.5957C47.0195 50.5957 48.823 48.7922 48.823 46.5674V29.6484H40.7664V46.5674ZM27.5341 16.6163C25.2008 14.283 22.0986 12.9981 18.7988 12.9981C15.499 12.9981 12.3968 14.283 10.0636 16.6163C7.73029 18.9495 6.44531 22.0518 6.44531 25.3516C6.44531 28.6514 7.73029 31.7536 10.0636 34.0868C12.3968 36.4201 15.499 37.7051 18.7988 37.7051C22.0986 37.7051 25.2008 36.4201 27.5341 34.0868C29.8674 31.7536 31.1523 28.6514 31.1523 25.3516C31.1523 22.0518 29.8674 18.9495 27.5341 16.6163ZM12.7222 28.4821C12.5105 28.4824 12.3009 28.4408 12.1054 28.3598C11.9099 28.2788 11.7323 28.1599 11.5829 28.01C10.9536 27.3808 10.9536 26.3606 11.5829 25.7313L19.1787 18.1355C19.8078 17.5062 20.8281 17.5062 21.4574 18.1355C22.0867 18.7648 22.0867 19.785 21.4574 20.4142L13.8616 28.01C13.7122 28.1599 13.5346 28.2788 13.339 28.3598C13.1435 28.4408 12.9338 28.4823 12.7222 28.4821ZM26.0149 24.9717L18.4191 32.5675C18.1045 32.8822 17.6921 33.0395 17.2798 33.0395C16.8675 33.0395 16.455 32.8823 16.1405 32.5675C15.5112 31.9382 15.5112 30.9181 16.1405 30.2888L23.7363 22.693C24.3654 22.0637 25.3857 22.0637 26.015 22.693C26.6442 23.3223 26.6442 24.3424 26.0149 24.9717Z"
                          fill="#01763F"
                        />
                        <path
                          d="M18.7988 6.55273C8.43315 6.55273 0 14.9859 0 25.3516C0 31.8252 3.28937 37.545 8.28438 40.9277H18.7988C10.1964 40.9277 3.22266 33.954 3.22266 25.3516C3.22266 16.7491 10.1964 9.77539 18.7988 9.77539C27.4013 9.77539 34.375 16.7491 34.375 25.3516C34.375 33.954 27.4013 40.9277 18.7988 40.9277H29.3133C34.3083 37.545 37.5977 31.8252 37.5977 25.3516C37.5977 14.9859 29.1645 6.55273 18.7988 6.55273Z"
                          fill="#01763F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_642_107">
                          <rect width="55" height="55" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h4>Beauty & Personal Care</h4>
                  <p>
                    Hairdressers, nail technicians, and makeup artists can offer
                    their services to local customers.
                  </p>
                </div>

                <div className="nr--service--main--item">
                  <div className="nr--service--main--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                    >
                      <path
                        d="M27.1391 34.2289L20.393 40.975C20.7593 42.5085 20.6966 44.1133 20.2119 45.6136C19.7271 47.1139 18.8389 48.452 17.6446 49.4813C16.4503 50.5106 14.9958 51.1914 13.4403 51.4494C11.8849 51.7074 10.2885 51.5324 8.82581 50.9437C8.69343 50.8906 8.57635 50.8054 8.48512 50.6958C8.3939 50.5861 8.3314 50.4555 8.30326 50.3157C8.27512 50.1758 8.28223 50.0312 8.32395 49.8948C8.36567 49.7584 8.44067 49.6345 8.54221 49.5344L12.8391 45.2375L12.2289 42.7711L9.76253 42.1609L5.50862 46.4578C5.40845 46.5594 5.28458 46.6344 5.14818 46.6761C5.01179 46.7178 4.86715 46.7249 4.72732 46.6968C4.58749 46.6686 4.45686 46.6061 4.34721 46.5149C4.23756 46.4237 4.15235 46.3066 4.09925 46.1742C3.67181 45.1591 3.44702 44.0702 3.43753 42.9688C3.43753 40.6895 4.34294 38.5037 5.95458 36.8921C7.56622 35.2804 9.75207 34.375 12.0313 34.375C12.6999 34.3733 13.3663 34.4512 14.0164 34.607L20.7711 27.8523L27.1391 34.2289ZM50.9438 8.82578C50.8907 8.6934 50.8055 8.57632 50.6958 8.48509C50.5862 8.39387 50.4555 8.33137 50.3157 8.30323C50.1759 8.2751 50.0312 8.28221 49.8948 8.32392C49.7584 8.36564 49.6346 8.44065 49.5344 8.54219L45.2375 12.8391L42.7711 12.2289L42.161 9.7625L46.4578 5.50859C46.5594 5.40842 46.6344 5.28455 46.6761 5.14816C46.7178 5.01176 46.7249 4.86712 46.6968 4.72729C46.6687 4.58746 46.6062 4.45683 46.5149 4.34718C46.4237 4.23754 46.3066 4.15232 46.1742 4.09922C45.1588 3.67263 44.0701 3.44787 42.9688 3.4375C40.6896 3.4375 38.5037 4.34291 36.8921 5.95455C35.2804 7.56619 34.375 9.75205 34.375 12.0312C34.3733 12.6998 34.4512 13.3662 34.6071 14.0164L29.5711 19.0523L35.9477 25.4289L40.9836 20.393C41.6338 20.5488 42.3002 20.6267 42.9688 20.625C44.0973 20.625 45.2148 20.4027 46.2575 19.9708C47.3001 19.539 48.2475 18.906 49.0455 18.1079C49.8435 17.3099 50.4765 16.3626 50.9084 15.3199C51.3402 14.2773 51.5625 13.1598 51.5625 12.0312C51.5658 10.9328 51.3556 9.84412 50.9438 8.82578ZM51.9578 43.8711L25.2055 17.1102L18.8289 23.4867L45.5899 50.2391C46.0063 50.665 46.503 51.0041 47.0514 51.2368C47.5997 51.4694 48.1888 51.591 48.7845 51.5943C49.3801 51.5977 49.9705 51.4829 50.5215 51.2565C51.0725 51.0301 51.573 50.6967 51.9942 50.2755C52.4154 49.8543 52.7489 49.3537 52.9753 48.8027C53.2017 48.2518 53.3165 47.6613 53.3131 47.0657C53.3097 46.47 53.1882 45.881 52.9556 45.3326C52.7229 44.7842 52.3838 44.2875 51.9578 43.8711ZM2.32893 17.9437C1.84613 18.4271 1.57495 19.0824 1.57495 19.7656C1.57495 20.4488 1.84613 21.1041 2.32893 21.5875L7.63128 26.8898C8.11468 27.3726 8.76995 27.6438 9.45315 27.6438C10.1364 27.6438 10.7916 27.3726 11.275 26.8898L12.8907 25.2828L3.93596 16.3281L2.32893 17.9437ZM30.7571 8.06094C30.6024 7.87188 27.0446 3.4375 21.2867 3.4375C19.7531 3.48627 18.2441 3.83699 16.8462 4.4696C15.4482 5.10222 14.1888 6.0043 13.1399 7.12422L7.12425 13.1398C7.0437 13.2197 6.97976 13.3148 6.93614 13.4195C6.89251 13.5242 6.87004 13.6366 6.87004 13.75C6.87004 13.8634 6.89251 13.9758 6.93614 14.0805C6.97976 14.1852 7.0437 14.2803 7.12425 14.3602L7.55393 14.7898C7.65368 14.8765 7.73452 14.9827 7.79144 15.1019C7.84836 15.2211 7.88013 15.3507 7.88478 15.4827C7.88943 15.6148 7.86685 15.7463 7.81845 15.8692C7.77005 15.9921 7.69687 16.1038 7.60346 16.1972C7.51006 16.2906 7.39842 16.3638 7.27551 16.4122C7.1526 16.4606 7.02104 16.4831 6.88902 16.4785C6.757 16.4739 6.62736 16.4421 6.50815 16.3852C6.38894 16.3282 6.28273 16.2474 6.19612 16.1477L13.0711 23.0227C12.9114 22.8388 12.8274 22.6012 12.836 22.3577C12.8445 22.1143 12.9451 21.8832 13.1173 21.711C13.2895 21.5388 13.5206 21.4383 13.764 21.4297C14.0074 21.4211 14.245 21.5052 14.4289 21.6648L15.718 22.9539C15.7979 23.0345 15.8929 23.0984 15.9977 23.142C16.1024 23.1856 16.2147 23.2081 16.3282 23.2081C16.4416 23.2081 16.5539 23.1856 16.6586 23.142C16.7634 23.0984 16.8584 23.0345 16.9383 22.9539L24.6727 15.2195C24.7532 15.1396 24.8172 15.0446 24.8608 14.9399C24.9044 14.8351 24.9269 14.7228 24.9269 14.6094C24.9269 14.4959 24.9044 14.3836 24.8608 14.2789C24.8172 14.1742 24.7532 14.0791 24.6727 13.9992L22.0946 11.4211C21.9844 11.3457 21.8906 11.2488 21.8189 11.1362C21.7473 11.0236 21.6991 10.8977 21.6774 10.766C21.6558 10.6343 21.661 10.4995 21.6928 10.3699C21.7246 10.2403 21.7823 10.1184 21.8625 10.0117C22.7219 8.74844 26.0219 7.78594 29.743 9.38438C29.9177 9.45808 30.1119 9.47192 30.2954 9.42373C30.4788 9.37555 30.6411 9.26804 30.7571 9.11797C30.8748 8.96697 30.9388 8.78095 30.9388 8.58945C30.9388 8.39795 30.8748 8.21194 30.7571 8.06094Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <h4>Home Repair & Maintenance</h4>
                  <p>
                    Local handymen, plumbers, electricians, and other home
                    repair professionals can offer their services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="nr--whyUs--wrapper animated-section" >
          <div className="container">
            <div className="nr--whyUs--main">
              <div className="nr--service--heading">
                <Link to={'/'}>Why Us?</Link>
              </div>
              <div className="nr--service--heading--text">
                <h3>Why Choose CommunityBase?</h3>
                <p>
                  Connect effortlessly with local services & products. Enjoy
                  real-time notifications, personalized experiences, seamless
                  communication, and support.
                </p>
              </div>

              <div className="nr--whyUs--main">
                <div className="nr--whyUs--item">
                  <div className="nr--whyUs--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M25 4.6875C20.9826 4.6875 17.0554 5.87881 13.715 8.11077C10.3746 10.3427 7.77111 13.5151 6.23371 17.2267C4.6963 20.9384 4.29405 25.0225 5.07781 28.9628C5.86157 32.903 7.79615 36.5224 10.6369 39.3631C13.4777 42.2039 17.097 44.1384 21.0372 44.9222C24.9775 45.706 29.0616 45.3037 32.7733 43.7663C36.4849 42.2289 39.6573 39.6254 41.8892 36.285C44.1212 32.9446 45.3125 29.0174 45.3125 25C45.3068 19.6145 43.1649 14.4513 39.3568 10.6432C35.5487 6.83507 30.3855 4.69319 25 4.6875ZM33.918 21.418L22.9805 32.3555C22.8354 32.5007 22.663 32.616 22.4734 32.6946C22.2837 32.7733 22.0803 32.8137 21.875 32.8137C21.6697 32.8137 21.4663 32.7733 21.2767 32.6946C21.087 32.616 20.9147 32.5007 20.7695 32.3555L16.082 27.668C15.7889 27.3748 15.6241 26.9771 15.6241 26.5625C15.6241 26.1479 15.7889 25.7502 16.082 25.457C16.3752 25.1638 16.7729 24.9991 17.1875 24.9991C17.6021 24.9991 17.9998 25.1638 18.293 25.457L21.875 29.041L31.707 19.207C31.8522 19.0619 32.0246 18.9467 32.2142 18.8681C32.4039 18.7896 32.6072 18.7491 32.8125 18.7491C33.0178 18.7491 33.2211 18.7896 33.4108 18.8681C33.6005 18.9467 33.7728 19.0619 33.918 19.207C34.0632 19.3522 34.1783 19.5245 34.2569 19.7142C34.3354 19.9039 34.3759 20.1072 34.3759 20.3125C34.3759 20.5178 34.3354 20.7211 34.2569 20.9108C34.1783 21.1005 34.0632 21.2728 33.918 21.418Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--whyUs--texts">
                    <h5>
                      Comprehensive, user-friendly platform:{" "}
                      <span>
                        Easily connect with local services and products.
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="nr--whyUs--item">
                  <div className="nr--whyUs--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M25 4.6875C20.9826 4.6875 17.0554 5.87881 13.715 8.11077C10.3746 10.3427 7.77111 13.5151 6.23371 17.2267C4.6963 20.9384 4.29405 25.0225 5.07781 28.9628C5.86157 32.903 7.79615 36.5224 10.6369 39.3631C13.4777 42.2039 17.097 44.1384 21.0372 44.9222C24.9775 45.706 29.0616 45.3037 32.7733 43.7663C36.4849 42.2289 39.6573 39.6254 41.8892 36.285C44.1212 32.9446 45.3125 29.0174 45.3125 25C45.3068 19.6145 43.1649 14.4513 39.3568 10.6432C35.5487 6.83507 30.3855 4.69319 25 4.6875ZM33.918 21.418L22.9805 32.3555C22.8354 32.5007 22.663 32.616 22.4734 32.6946C22.2837 32.7733 22.0803 32.8137 21.875 32.8137C21.6697 32.8137 21.4663 32.7733 21.2767 32.6946C21.087 32.616 20.9147 32.5007 20.7695 32.3555L16.082 27.668C15.7889 27.3748 15.6241 26.9771 15.6241 26.5625C15.6241 26.1479 15.7889 25.7502 16.082 25.457C16.3752 25.1638 16.7729 24.9991 17.1875 24.9991C17.6021 24.9991 17.9998 25.1638 18.293 25.457L21.875 29.041L31.707 19.207C31.8522 19.0619 32.0246 18.9467 32.2142 18.8681C32.4039 18.7896 32.6072 18.7491 32.8125 18.7491C33.0178 18.7491 33.2211 18.7896 33.4108 18.8681C33.6005 18.9467 33.7728 19.0619 33.918 19.207C34.0632 19.3522 34.1783 19.5245 34.2569 19.7142C34.3354 19.9039 34.3759 20.1072 34.3759 20.3125C34.3759 20.5178 34.3354 20.7211 34.2569 20.9108C34.1783 21.1005 34.0632 21.2728 33.918 21.418Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--whyUs--texts">
                    <h5>
                      Real-time notifications:{" "}
                      <span>Stay updated with instant alerts. </span>
                    </h5>
                  </div>
                </div>
                <div className="nr--whyUs--item">
                  <div className="nr--whyUs--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M25 4.6875C20.9826 4.6875 17.0554 5.87881 13.715 8.11077C10.3746 10.3427 7.77111 13.5151 6.23371 17.2267C4.6963 20.9384 4.29405 25.0225 5.07781 28.9628C5.86157 32.903 7.79615 36.5224 10.6369 39.3631C13.4777 42.2039 17.097 44.1384 21.0372 44.9222C24.9775 45.706 29.0616 45.3037 32.7733 43.7663C36.4849 42.2289 39.6573 39.6254 41.8892 36.285C44.1212 32.9446 45.3125 29.0174 45.3125 25C45.3068 19.6145 43.1649 14.4513 39.3568 10.6432C35.5487 6.83507 30.3855 4.69319 25 4.6875ZM33.918 21.418L22.9805 32.3555C22.8354 32.5007 22.663 32.616 22.4734 32.6946C22.2837 32.7733 22.0803 32.8137 21.875 32.8137C21.6697 32.8137 21.4663 32.7733 21.2767 32.6946C21.087 32.616 20.9147 32.5007 20.7695 32.3555L16.082 27.668C15.7889 27.3748 15.6241 26.9771 15.6241 26.5625C15.6241 26.1479 15.7889 25.7502 16.082 25.457C16.3752 25.1638 16.7729 24.9991 17.1875 24.9991C17.6021 24.9991 17.9998 25.1638 18.293 25.457L21.875 29.041L31.707 19.207C31.8522 19.0619 32.0246 18.9467 32.2142 18.8681C32.4039 18.7896 32.6072 18.7491 32.8125 18.7491C33.0178 18.7491 33.2211 18.7896 33.4108 18.8681C33.6005 18.9467 33.7728 19.0619 33.918 19.207C34.0632 19.3522 34.1783 19.5245 34.2569 19.7142C34.3354 19.9039 34.3759 20.1072 34.3759 20.3125C34.3759 20.5178 34.3354 20.7211 34.2569 20.9108C34.1783 21.1005 34.0632 21.2728 33.918 21.418Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--whyUs--texts">
                    <h5>
                      Personalized experiences:{" "}
                      <span>Enjoy services tailored to your needs.</span>
                    </h5>
                  </div>
                </div>
                <div className="nr--whyUs--item">
                  <div className="nr--whyUs--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M25 4.6875C20.9826 4.6875 17.0554 5.87881 13.715 8.11077C10.3746 10.3427 7.77111 13.5151 6.23371 17.2267C4.6963 20.9384 4.29405 25.0225 5.07781 28.9628C5.86157 32.903 7.79615 36.5224 10.6369 39.3631C13.4777 42.2039 17.097 44.1384 21.0372 44.9222C24.9775 45.706 29.0616 45.3037 32.7733 43.7663C36.4849 42.2289 39.6573 39.6254 41.8892 36.285C44.1212 32.9446 45.3125 29.0174 45.3125 25C45.3068 19.6145 43.1649 14.4513 39.3568 10.6432C35.5487 6.83507 30.3855 4.69319 25 4.6875ZM33.918 21.418L22.9805 32.3555C22.8354 32.5007 22.663 32.616 22.4734 32.6946C22.2837 32.7733 22.0803 32.8137 21.875 32.8137C21.6697 32.8137 21.4663 32.7733 21.2767 32.6946C21.087 32.616 20.9147 32.5007 20.7695 32.3555L16.082 27.668C15.7889 27.3748 15.6241 26.9771 15.6241 26.5625C15.6241 26.1479 15.7889 25.7502 16.082 25.457C16.3752 25.1638 16.7729 24.9991 17.1875 24.9991C17.6021 24.9991 17.9998 25.1638 18.293 25.457L21.875 29.041L31.707 19.207C31.8522 19.0619 32.0246 18.9467 32.2142 18.8681C32.4039 18.7896 32.6072 18.7491 32.8125 18.7491C33.0178 18.7491 33.2211 18.7896 33.4108 18.8681C33.6005 18.9467 33.7728 19.0619 33.918 19.207C34.0632 19.3522 34.1783 19.5245 34.2569 19.7142C34.3354 19.9039 34.3759 20.1072 34.3759 20.3125C34.3759 20.5178 34.3354 20.7211 34.2569 20.9108C34.1783 21.1005 34.0632 21.2728 33.918 21.418Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--whyUs--texts">
                    <h5>
                      Seamless communication:{" "}
                      <span>Effortlessly interact with service providers.</span>
                    </h5>
                  </div>
                </div>
                <div className="nr--whyUs--item">
                  <div className="nr--whyUs--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M25 4.6875C20.9826 4.6875 17.0554 5.87881 13.715 8.11077C10.3746 10.3427 7.77111 13.5151 6.23371 17.2267C4.6963 20.9384 4.29405 25.0225 5.07781 28.9628C5.86157 32.903 7.79615 36.5224 10.6369 39.3631C13.4777 42.2039 17.097 44.1384 21.0372 44.9222C24.9775 45.706 29.0616 45.3037 32.7733 43.7663C36.4849 42.2289 39.6573 39.6254 41.8892 36.285C44.1212 32.9446 45.3125 29.0174 45.3125 25C45.3068 19.6145 43.1649 14.4513 39.3568 10.6432C35.5487 6.83507 30.3855 4.69319 25 4.6875ZM33.918 21.418L22.9805 32.3555C22.8354 32.5007 22.663 32.616 22.4734 32.6946C22.2837 32.7733 22.0803 32.8137 21.875 32.8137C21.6697 32.8137 21.4663 32.7733 21.2767 32.6946C21.087 32.616 20.9147 32.5007 20.7695 32.3555L16.082 27.668C15.7889 27.3748 15.6241 26.9771 15.6241 26.5625C15.6241 26.1479 15.7889 25.7502 16.082 25.457C16.3752 25.1638 16.7729 24.9991 17.1875 24.9991C17.6021 24.9991 17.9998 25.1638 18.293 25.457L21.875 29.041L31.707 19.207C31.8522 19.0619 32.0246 18.9467 32.2142 18.8681C32.4039 18.7896 32.6072 18.7491 32.8125 18.7491C33.0178 18.7491 33.2211 18.7896 33.4108 18.8681C33.6005 18.9467 33.7728 19.0619 33.918 19.207C34.0632 19.3522 34.1783 19.5245 34.2569 19.7142C34.3354 19.9039 34.3759 20.1072 34.3759 20.3125C34.3759 20.5178 34.3354 20.7211 34.2569 20.9108C34.1783 21.1005 34.0632 21.2728 33.918 21.418Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--whyUs--texts">
                    <h5>
                      Community engagement:{" "}
                      <span>
                        Foster connections and support a vibrant local economy.
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="nr--testimonials--wrapper animated-section" >
          <div className="container">
            <div className="nr--testimonials--main">
              <div className="nr--testimonials--inner">
                <div className="nr--testimonials--header">
                  <div className="nr--testimonials--heading">
                    <Link to={'/'}>Testimonials</Link>
                  </div>
                  <div className="nr--testimonials--heading--text">
                    <h3>Why Choose CommunityBase?</h3>
                    <p>
                      Connect effortlessly with local services & products. Enjoy
                      real-time notifications, personalized experiences,
                      seamless communication, and support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="nr--testimonials--item--main">
                <div className="nr--testimonials--item">
                  <div className="nr--testItem--frameOne">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="28"
                      viewBox="0 0 39 28"
                      fill="none"
                    >
                      <path
                        d="M16.8316 20C16.8316 24.5517 13.6842 28 8.89474 28C4.10526 28 0 24.1379 0 17.2414C0 8.68965 6.43158 1.37931 14.7789 0V5.10345C9.98947 6.06896 6.43158 9.51724 6.43158 13.5172C7.25263 12.9655 8.34737 12.5517 10.1263 12.5517C13.6842 12.5517 16.8316 15.1724 16.8316 20ZM39 20C39 24.5517 35.7158 28 30.9263 28C26.2737 28 22.0316 24.1379 22.0316 17.2414C22.0316 8.68965 28.4632 1.37931 36.9474 0V5.10345C32.1579 6.06896 28.6 9.51724 28.6 13.3793C29.4211 12.8276 30.6526 12.5517 32.2947 12.5517C35.8526 12.5517 39 15.1724 39 20Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--testItem--text">
                    <p>
                      CommunityBase has made finding reliable local services a
                      breeze. From home repairs to pet care, I’ve connected with
                      trustworthy providers in my neighborhood. It’s truly
                      transformed how I manage my household needs!
                    </p>
                  </div>
                  <div className="nr--testItem--profile">
                    <div className="nr--testItem--profile--photo">
                      <img src={testmonialPhoto} alt="not found" />
                    </div>
                    <div className="nr--testItem--profile--text">
                      <h3>Carlos M.</h3>
                      <p>Event Planner</p>
                    </div>
                  </div>
                  <div className="nr--testItem--frame">
                    <img src={testItemFrame} alt="not found" />
                  </div>
                </div>

                <div className="nr--testimonials--item">
                  <div className="nr--testItem--frameOne">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="28"
                      viewBox="0 0 39 28"
                      fill="none"
                    >
                      <path
                        d="M16.8316 20C16.8316 24.5517 13.6842 28 8.89474 28C4.10526 28 0 24.1379 0 17.2414C0 8.68965 6.43158 1.37931 14.7789 0V5.10345C9.98947 6.06896 6.43158 9.51724 6.43158 13.5172C7.25263 12.9655 8.34737 12.5517 10.1263 12.5517C13.6842 12.5517 16.8316 15.1724 16.8316 20ZM39 20C39 24.5517 35.7158 28 30.9263 28C26.2737 28 22.0316 24.1379 22.0316 17.2414C22.0316 8.68965 28.4632 1.37931 36.9474 0V5.10345C32.1579 6.06896 28.6 9.51724 28.6 13.3793C29.4211 12.8276 30.6526 12.5517 32.2947 12.5517C35.8526 12.5517 39 15.1724 39 20Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--testItem--text">
                    <p>
                      CommunityBase has made finding reliable local services a
                      breeze. From home repairs to pet care, I’ve connected with
                      trustworthy providers in my neighborhood. It’s truly
                      transformed how I manage my household needs!
                    </p>
                  </div>
                  <div className="nr--testItem--profile">
                    <div className="nr--testItem--profile--photo">
                      <img src={testmonialPhoto} alt="not found" />
                    </div>
                    <div className="nr--testItem--profile--text">
                      <h3>Carlos M.</h3>
                      <p>Event Planner</p>
                    </div>
                  </div>
                  <div className="nr--testItem--frame">
                    <img
                      src={testItemFrame}
                      alt="not found"
                    />
                  </div>
                </div>

                <div className="nr--testimonials--item">
                  <div className="nr--testItem--frameOne">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="28"
                      viewBox="0 0 39 28"
                      fill="none"
                    >
                      <path
                        d="M16.8316 20C16.8316 24.5517 13.6842 28 8.89474 28C4.10526 28 0 24.1379 0 17.2414C0 8.68965 6.43158 1.37931 14.7789 0V5.10345C9.98947 6.06896 6.43158 9.51724 6.43158 13.5172C7.25263 12.9655 8.34737 12.5517 10.1263 12.5517C13.6842 12.5517 16.8316 15.1724 16.8316 20ZM39 20C39 24.5517 35.7158 28 30.9263 28C26.2737 28 22.0316 24.1379 22.0316 17.2414C22.0316 8.68965 28.4632 1.37931 36.9474 0V5.10345C32.1579 6.06896 28.6 9.51724 28.6 13.3793C29.4211 12.8276 30.6526 12.5517 32.2947 12.5517C35.8526 12.5517 39 15.1724 39 20Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--testItem--text">
                    <p>
                      CommunityBase has made finding reliable local services a
                      breeze. From home repairs to pet care, I’ve connected with
                      trustworthy providers in my neighborhood. It’s truly
                      transformed how I manage my household needs!
                    </p>
                  </div>
                  <div className="nr--testItem--profile">
                    <div className="nr--testItem--profile--photo">
                      <img src={testmonialPhoto} alt="not found" />
                    </div>
                    <div className="nr--testItem--profile--text">
                      <h3>Carlos M.</h3>
                      <p>Event Planner</p>
                    </div>
                  </div>
                  <div className="nr--testItem--frame">
                    <img src={testItemFrame} alt="not found" />
                  </div>
                </div>

                <div className="nr--testimonials--item">
                  <div className="nr--testItem--frameOne">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="28"
                      viewBox="0 0 39 28"
                      fill="none"
                    >
                      <path
                        d="M16.8316 20C16.8316 24.5517 13.6842 28 8.89474 28C4.10526 28 0 24.1379 0 17.2414C0 8.68965 6.43158 1.37931 14.7789 0V5.10345C9.98947 6.06896 6.43158 9.51724 6.43158 13.5172C7.25263 12.9655 8.34737 12.5517 10.1263 12.5517C13.6842 12.5517 16.8316 15.1724 16.8316 20ZM39 20C39 24.5517 35.7158 28 30.9263 28C26.2737 28 22.0316 24.1379 22.0316 17.2414C22.0316 8.68965 28.4632 1.37931 36.9474 0V5.10345C32.1579 6.06896 28.6 9.51724 28.6 13.3793C29.4211 12.8276 30.6526 12.5517 32.2947 12.5517C35.8526 12.5517 39 15.1724 39 20Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--testItem--text">
                    <p>
                      CommunityBase has made finding reliable local services a
                      breeze. From home repairs to pet care, I’ve connected with
                      trustworthy providers in my neighborhood. It’s truly
                      transformed how I manage my household needs!
                    </p>
                  </div>
                  <div className="nr--testItem--profile">
                    <div className="nr--testItem--profile--photo">
                      <img src={testmonialPhoto} alt="not found" />
                    </div>
                    <div className="nr--testItem--profile--text">
                      <h3>Carlos M.</h3>
                      <p>Event Planner</p>
                    </div>
                  </div>
                  <div className="nr--testItem--frame">
                    <img src={testItemFrame} alt="not found" />
                  </div>
                </div>

                <div className="nr--testimonials--item">
                  <div className="nr--testItem--frameOne">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="28"
                      viewBox="0 0 39 28"
                      fill="none"
                    >
                      <path
                        d="M16.8316 20C16.8316 24.5517 13.6842 28 8.89474 28C4.10526 28 0 24.1379 0 17.2414C0 8.68965 6.43158 1.37931 14.7789 0V5.10345C9.98947 6.06896 6.43158 9.51724 6.43158 13.5172C7.25263 12.9655 8.34737 12.5517 10.1263 12.5517C13.6842 12.5517 16.8316 15.1724 16.8316 20ZM39 20C39 24.5517 35.7158 28 30.9263 28C26.2737 28 22.0316 24.1379 22.0316 17.2414C22.0316 8.68965 28.4632 1.37931 36.9474 0V5.10345C32.1579 6.06896 28.6 9.51724 28.6 13.3793C29.4211 12.8276 30.6526 12.5517 32.2947 12.5517C35.8526 12.5517 39 15.1724 39 20Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--testItem--text">
                    <p>
                      CommunityBase has made finding reliable local services a
                      breeze. From home repairs to pet care, I’ve connected with
                      trustworthy providers in my neighborhood. It’s truly
                      transformed how I manage my household needs!
                    </p>
                  </div>
                  <div className="nr--testItem--profile">
                    <div className="nr--testItem--profile--photo">
                      <img src={testmonialPhoto} alt="not found" />
                    </div>
                    <div className="nr--testItem--profile--text">
                      <h3>Carlos M.</h3>
                      <p>Event Planner</p>
                    </div>
                  </div>
                  <div className="nr--testItem--frame">
                    <img src={testItemFrame} alt="not found" />
                  </div>
                </div>

                <div className="nr--testimonials--item">
                  <div className="nr--testItem--frameOne">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="28"
                      viewBox="0 0 39 28"
                      fill="none"
                    >
                      <path
                        d="M16.8316 20C16.8316 24.5517 13.6842 28 8.89474 28C4.10526 28 0 24.1379 0 17.2414C0 8.68965 6.43158 1.37931 14.7789 0V5.10345C9.98947 6.06896 6.43158 9.51724 6.43158 13.5172C7.25263 12.9655 8.34737 12.5517 10.1263 12.5517C13.6842 12.5517 16.8316 15.1724 16.8316 20ZM39 20C39 24.5517 35.7158 28 30.9263 28C26.2737 28 22.0316 24.1379 22.0316 17.2414C22.0316 8.68965 28.4632 1.37931 36.9474 0V5.10345C32.1579 6.06896 28.6 9.51724 28.6 13.3793C29.4211 12.8276 30.6526 12.5517 32.2947 12.5517C35.8526 12.5517 39 15.1724 39 20Z"
                        fill="#01763F"
                      />
                    </svg>
                  </div>
                  <div className="nr--testItem--text">
                    <p>
                      CommunityBase has made finding reliable local services a
                      breeze. From home repairs to pet care, I’ve connected with
                      trustworthy providers in my neighborhood. It’s truly
                      transformed how I manage my household needs!
                    </p>
                  </div>
                  <div className="nr--testItem--profile">
                    <div className="nr--testItem--profile--photo">
                      <img src={testmonialPhoto} alt="not found" />
                    </div>
                    <div className="nr--testItem--profile--text">
                      <h3>Carlos M.</h3>
                      <p>Event Planner</p>
                    </div>
                  </div>
                  <div className="nr--testItem--frame">
                    <img src={testItemFrame} alt="not found" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer--wrapper">
          <div className="container">
            <div className="nr--footer--texts">
              <div className="nr--footer--logo--text">
                <div className="nr--footer--logo">
                  <img src={mainIcon} alt="not found" />
                </div>
                <h4>
                  Community <span>Base</span>
                </h4>
              </div>

              <p>
                CommunityBase connects you with trusted local services and
                products, fostering a vibrant community and supporting the local
                economy.
              </p>
            </div>

            <div className="nr--footer--logos">
              <div className="nr--footer--icon">
                <div className="nr--footer--icon--facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 4.36084C7.78101 4.36084 4.36108 7.78077 4.36108 11.9997C4.36108 15.8123 7.15463 18.9725 10.8068 19.5462V14.2074H8.8665V11.9997H10.8068V10.3169C10.8068 8.40258 11.9465 7.34535 13.692 7.34535C14.5277 7.34535 15.4016 7.49431 15.4016 7.49431V9.37348H14.4391C13.4896 9.37348 13.1939 9.96244 13.1939 10.5667V11.9997H15.3122L14.9738 14.2074H13.1939V19.5462C16.8453 18.9733 19.6389 15.8115 19.6389 11.9997C19.6389 7.78077 16.2189 4.36084 12 4.36084Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="nr--footer--icon">
                <div className="nr--footer--icon--facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 4.36084C14.0755 4.36084 14.3344 4.36848 15.1487 4.40667C15.9623 4.44487 16.5161 4.57244 17.0034 4.76188C17.5076 4.95591 17.9323 5.21869 18.3571 5.64265C18.7455 6.02451 19.0461 6.48643 19.2378 6.99626C19.4265 7.48285 19.5548 8.03744 19.593 8.85098C19.6289 9.66528 19.6389 9.92424 19.6389 11.9997C19.6389 14.0752 19.6312 14.3342 19.593 15.1485C19.5548 15.962 19.4265 16.5158 19.2378 17.0032C19.0466 17.5133 18.746 17.9753 18.3571 18.3568C17.9751 18.7451 17.5132 19.0457 17.0034 19.2376C16.5168 19.4263 15.9623 19.5546 15.1487 19.5928C14.3344 19.6287 14.0755 19.6386 12 19.6386C9.92449 19.6386 9.66553 19.631 8.85122 19.5928C8.03768 19.5546 7.48386 19.4263 6.9965 19.2376C6.48647 19.0462 6.02447 18.7456 5.64289 18.3568C5.25438 17.975 4.95381 17.5131 4.76213 17.0032C4.57268 16.5166 4.44511 15.962 4.40692 15.1485C4.37101 14.3342 4.36108 14.0752 4.36108 11.9997C4.36108 9.92424 4.36872 9.66528 4.40692 8.85098C4.44511 8.03667 4.57268 7.48362 4.76213 6.99626C4.95328 6.48612 5.25392 6.02407 5.64289 5.64265C6.02458 5.254 6.48655 4.95341 6.9965 4.76188C7.48386 4.57244 8.03692 4.44487 8.85122 4.40667C9.66553 4.37077 9.92449 4.36084 12 4.36084ZM12 8.18028C10.987 8.18028 10.0155 8.58269 9.29922 9.29897C8.58293 10.0153 8.18053 10.9867 8.18053 11.9997C8.18053 13.0127 8.58293 13.9842 9.29922 14.7005C10.0155 15.4168 10.987 15.8192 12 15.8192C13.013 15.8192 13.9844 15.4168 14.7007 14.7005C15.417 13.9842 15.8194 13.0127 15.8194 11.9997C15.8194 10.9867 15.417 10.0153 14.7007 9.29897C13.9844 8.58269 13.013 8.18028 12 8.18028ZM16.9653 7.98931C16.9653 7.73607 16.8647 7.49319 16.6856 7.31412C16.5065 7.13505 16.2636 7.03445 16.0104 7.03445C15.7571 7.03445 15.5143 7.13505 15.3352 7.31412C15.1561 7.49319 15.0555 7.73607 15.0555 7.98931C15.0555 8.24256 15.1561 8.48543 15.3352 8.6645C15.5143 8.84357 15.7571 8.94417 16.0104 8.94417C16.2636 8.94417 16.5065 8.84357 16.6856 8.6645C16.8647 8.48543 16.9653 8.24256 16.9653 7.98931ZM12 9.70806C12.6078 9.70806 13.1907 9.9495 13.6204 10.3793C14.0502 10.809 14.2916 11.3919 14.2916 11.9997C14.2916 12.6075 14.0502 13.1904 13.6204 13.6202C13.1907 14.05 12.6078 14.2914 12 14.2914C11.3922 14.2914 10.8093 14.05 10.3795 13.6202C9.94975 13.1904 9.70831 12.6075 9.70831 11.9997C9.70831 11.3919 9.94975 10.809 10.3795 10.3793C10.8093 9.9495 11.3922 9.70806 12 9.70806Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="nr--footer--icon">
                <div className="nr--footer--icon--facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.7626 7.15379C19.1795 7.41175 18.561 7.58117 17.9278 7.65643C18.5952 7.25725 19.0948 6.62901 19.3333 5.88879C18.7069 6.26157 18.0202 6.52282 17.3044 6.66414C16.8237 6.14972 16.1864 5.80856 15.4917 5.69368C14.797 5.57881 14.0838 5.69667 13.463 6.02893C12.8423 6.36119 12.3486 6.88924 12.0589 7.53099C11.7692 8.17274 11.6996 8.89223 11.861 9.57761C10.5907 9.51394 9.34803 9.18384 8.21362 8.60874C7.07921 8.03364 6.07843 7.2264 5.27625 6.23942C4.9923 6.72712 4.84309 7.28153 4.84389 7.84587C4.84389 8.95351 5.40764 9.93205 6.26472 10.505C5.75751 10.489 5.26145 10.352 4.81792 10.1055V10.1452C4.81807 10.8829 5.07334 11.5978 5.54044 12.1688C6.00754 12.7397 6.65773 13.1316 7.38076 13.2779C6.90991 13.4055 6.41621 13.4243 5.93701 13.3329C6.14087 13.9679 6.5382 14.5232 7.07337 14.9211C7.60854 15.319 8.25475 15.5396 8.92153 15.552C8.25884 16.0724 7.50007 16.4572 6.68859 16.6842C5.87711 16.9112 5.02885 16.9761 4.19229 16.875C5.65262 17.8142 7.35257 18.3128 9.08882 18.3111C14.9654 18.3111 18.1791 13.4429 18.1791 9.22087C18.1791 9.08337 18.1753 8.94435 18.1692 8.80837C18.7947 8.35628 19.3346 7.79624 19.7634 7.15456L19.7626 7.15379Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;
