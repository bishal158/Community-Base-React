
import "./styles/BuyerHome.css";
import SwitchMode from "../utils/SwitchMode";
import profilePic from "../assets/images/profile-img.png";
import NotificationBtn from "../utils/NotificationBtn";
import {ServiceProviders} from "../components/ServiceProviders.jsx";
function BuyerHome() {
  return (
    <>
      <div className="main-content-display-header-container">
        <div
          className="user-controller-section"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <div className="welcome-msg-section">
            <h1>Welcome back, Danic 👋</h1>
            <p>Please your eyes on today’s trending item with ease!</p>
          </div>

          <div className="controller-section">
            <SwitchMode />

            <NotificationBtn />

            <span className="user-img">
              <img src={profilePic} alt="" srcSet="" />
            </span>
          </div>
        </div>

        <div className="user-search-filter-section">
          <div className="search-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <path
                d="M27.0384 26.75L24.7208 24.5M14.8712 25.625C16.3168 25.625 17.7483 25.3486 19.0839 24.8115C20.4195 24.2744 21.6331 23.4871 22.6553 22.4947C23.6776 21.5023 24.4884 20.3241 25.0417 19.0274C25.5949 17.7308 25.8796 16.341 25.8796 14.9375C25.8796 13.534 25.5949 12.1442 25.0417 10.8476C24.4884 9.5509 23.6776 8.37272 22.6553 7.3803C21.6331 6.38787 20.4195 5.60063 19.0839 5.06354C17.7483 4.52644 16.3168 4.25 14.8712 4.25C11.9515 4.25 9.15147 5.376 7.08698 7.3803C5.02249 9.38459 3.86267 12.103 3.86267 14.9375C3.86267 17.772 5.02249 20.4904 7.08698 22.4947C9.15147 24.499 11.9515 25.625 14.8712 25.625Z"
                stroke="#798680"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
          </div>
          <div className="filter-wrapper">
            <button className="filter-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_528_1719)">
                  <path
                    d="M4.875 1.5L4.875 6M4.875 13.5L4.875 16.5M13.125 1.5L13.125 4.5M13.125 12L13.125 16.5M7.5 10.5C7.5 10.1553 7.4321 9.81394 7.30018 9.49546C7.16827 9.17698 6.97491 8.8876 6.73116 8.64385C6.4874 8.40009 6.19802 8.20674 5.87954 8.07482C5.56106 7.9429 5.21972 7.875 4.875 7.875C4.53028 7.875 4.18894 7.9429 3.87046 8.07482C3.55198 8.20674 3.2626 8.40009 3.01884 8.64385C2.77509 8.8876 2.58173 9.17698 2.44982 9.49546C2.3179 9.81394 2.25 10.1553 2.25 10.5C2.25 11.1962 2.52656 11.8639 3.01884 12.3562C3.51113 12.8484 4.17881 13.125 4.875 13.125C5.57119 13.125 6.23887 12.8484 6.73116 12.3562C7.22344 11.8639 7.5 11.1962 7.5 10.5ZM15.75 7.5C15.75 6.80381 15.4734 6.13613 14.9812 5.64384C14.4889 5.15156 13.8212 4.875 13.125 4.875C12.4288 4.875 11.7611 5.15156 11.2688 5.64384C10.7766 6.13613 10.5 6.80381 10.5 7.5C10.5 8.19619 10.7766 8.86387 11.2688 9.35616C11.7611 9.84844 12.4288 10.125 13.125 10.125C13.8212 10.125 14.4889 9.84844 14.9812 9.35616C15.4734 8.86387 15.75 8.19619 15.75 7.5Z"
                    stroke="#121715"
                    strokeWidth="1.92857"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_528_1719">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0 18) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Filters</span>
            </button>
            <div className="filter-screen">
              <div className="filter-screen-header">
                <span>Applied filters</span>
                <button>
                  Clear all
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.3955 9.59497L9.60352 14.387"
                      stroke="#D0011B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.3976 14.3898L9.60156 9.59277"
                      stroke="#D0011B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="gender-check-container">
                <p>Gender</p>
                <div className="input-wrapper">
                  <input type="checkbox" id="male" name="gender" value="male" />
                  <label htmlFor="male">Mens</label>
                </div>
                <div className="input-wrapper">
                  <input
                    type="checkbox"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label htmlFor="female">Womens</label>
                </div>
              </div>

              <div className="price-range-container">
                <p>Price</p>
                <div className="price-wrapper">
                  <div className="price-input">
                    <div className="field">
                      <input type="number" className="input-min" value="1800" />
                    </div>
                    <div className="field">
                      <input type="number" className="input-max" value="7500" />
                    </div>
                  </div>
                  <div className="slider">
                    <div className="progress"></div>
                  </div>
                  <div className="range-input">
                    <input
                      type="range"
                      className="range-min"
                      min="0"
                      max="10000"
                      value="1800"
                      step="100"
                    />
                    <input
                      type="range"
                      className="range-max"
                      min="0"
                      max="10000"
                      value="7500"
                      step="100"
                    />
                  </div>
                </div>
              </div>

              <div className="choose-color-container">
                <p>Colors</p>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    value="black"
                    name="color"
                  />
                  <label className="custom-checkbox" htmlFor="checkbox1">
                    Black
                  </label>

                  <input
                    type="checkbox"
                    id="checkbox2"
                    name="color"
                    value="gray"
                  />
                  <label className="custom-checkbox" htmlFor="checkbox2">
                    Gray
                  </label>

                  <input
                    type="checkbox"
                    id="checkbox3"
                    name="color"
                    value="white"
                  />
                  <label className="custom-checkbox" htmlFor="checkbox3">
                    White
                  </label>

                  <input
                    type="checkbox"
                    id="checkbox4"
                    name="color"
                    value="red"
                  />
                  <label className="custom-checkbox" htmlFor="checkbox4">
                    Red
                  </label>

                  <input
                    type="checkbox"
                    id="checkbox5"
                    name="color"
                    value="orange"
                  />
                  <label className="custom-checkbox" htmlFor="checkbox5">
                    Orange
                  </label>

                  <input
                    type="checkbox"
                    id="checkbox6"
                    name="color"
                    value="blue"
                  />
                  <label className="custom-checkbox" htmlFor="checkbox6">
                    Blue
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Providers You are Following*/}
      <ServiceProviders/>
      <div className="categories-section">
        <h1>Categories</h1>
        <div className="categories-list-container">
          <form className="category-slider">
            <input type="checkbox" id="category-1" name="category" />
            <label className="category-box category-box-1" htmlFor="category-1">
              🚗 Vehicles
            </label>

            <input type="checkbox" id="category-2" name="category" />
            <label className="category-box category-box-2" htmlFor="category-2">
              ⚡ Electronics
            </label>

            <input type="checkbox" id="category-3" name="category" />
            <label className="category-box category-box-3" htmlFor="category-3">
              🧸 Toy
            </label>

            <input type="checkbox" id="category-4" name="category" />
            <label className="category-box category-box-4" htmlFor="category-4">
              👚 Fashion
            </label>

            <input type="checkbox" id="category-5" name="category" />
            <label className="category-box category-box-5" htmlFor="category-5">
              📱 Mobile accessories
            </label>

            <input type="checkbox" id="category-6" name="category" />
            <label className="category-box category-box-6" htmlFor="category-6">
              🛏️ Furniture
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default BuyerHome;
