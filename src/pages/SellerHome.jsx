import React from "react";
import SwitchMode from "../utils/SwitchMode";
import NotificationBtn from "../utils/NotificationBtn";
import RecentPost from "../components/RecentPost";
import './styles/SellerHome.css'



function SellerHome() {

  return (
    <>
      <div class="main-content-display-header-container seller-home">
        <div class="user-controller-section">
          <div class="welcome-msg-section">
            <h1>Seller Profile</h1>
          </div>
          <div class="controller-section">
            <a href="statics.html" class="statics-btn">
              <img src="assets/images/statistic 2.png" alt="" srcset="" />
              <span>Statics</span>
            </a>
            <SwitchMode/>

           <NotificationBtn/>
          </div>
        </div>
      </div>

      <div class="main-content-display-counter-container">
        <div class="main-content-display-counter-header"></div>
        <div class="main-content-display-counter-body">
          <div class="main-content-display-counter-logo">
            <img
              src="assets/images/seller-home-counter-logo.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="main-content-display-counter-section">
            <div class="seller-name-section">
              <h5>Dope.Store</h5>
              <p>Royal Ln. Mesa,</p>
            </div>
            <div class="seller-counter-section">
              <div class="counter-box">
                <h2 data-target="5905">0</h2>
                <p>Followers</p>
              </div>
              <div class="counter-box">
                <h2 data-target="110">0</h2>
                <p>Products</p>
              </div>
              <div class="counter-box">
                <h2 data-target="4.8">0.0</h2>
                <p>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-content-display-new-item-container">
        <div class="new-items-header-section">
          <h1>New</h1>
          <a href="upload-new-product-and-service.html" class="upload-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M6 11.9702C5.44772 11.9702 5 12.4179 5 12.9702C5 13.5225 5.44772 13.9702 6 13.9702V11.9702ZM18 13.9702C18.5523 13.9702 19 13.5225 19 12.9702C19 12.4179 18.5523 11.9702 18 11.9702V13.9702ZM11 18.9702C11 19.5225 11.4477 19.9702 12 19.9702C12.5523 19.9702 13 19.5225 13 18.9702H11ZM13 6.97021C13 6.41793 12.5523 5.97021 12 5.97021C11.4477 5.97021 11 6.41793 11 6.97021H13ZM6 13.9702H12V11.9702H6V13.9702ZM12 13.9702H18V11.9702H12V13.9702ZM13 18.9702V12.9702H11V18.9702H13ZM13 12.9702V6.97021H11V12.9702H13Z"
                fill="white"
              />
            </svg>
            Upload New
          </a>
        </div>

        <div class="new-item-product-card-slider owl-carousel owl-theme">
          <div class="item new-product-card">
            <div class="new-product-card-header">
              <img src="assets/images/new-product-1.png" alt="" srcset="" />
              <button
                class="new-product-update-btn"
                data-bs-toggle="modal"
                data-bs-target="#update-modal-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M1 17.5563H17M1 17.5563V13.5563L9 5.55627M1 17.5563L5 17.5562L13 9.55626M9 5.55627L11.8686 2.68762L11.8704 2.68591C12.2652 2.29103 12.463 2.09324 12.691 2.01916C12.8919 1.9539 13.1082 1.9539 13.3091 2.01916C13.5369 2.09319 13.7345 2.29075 14.1288 2.68508L15.8686 4.42487C16.2646 4.82089 16.4627 5.01899 16.5369 5.24732C16.6022 5.44816 16.6021 5.66451 16.5369 5.86535C16.4628 6.09351 16.265 6.29132 15.8695 6.68677L15.8686 6.68762L13 9.55626M9 5.55627L13 9.55626"
                    stroke="#01763F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="new-product-card-body">
              <div class="new-product-info">
                <h1>Razer Nari Headphones</h1>
                <p>
                  {/* <!-- if any --> */}
                  {/* <!-- <del>$ 75.00 </del> --> */}
                  <span>$ 89.00</span>
                </p>
              </div>
            </div>
          </div>

          <div class="item new-product-card">
            <div class="new-product-card-header">
              <img src="assets/images/new-product-2.png" alt="" srcset="" />
              <button
                class="new-product-update-btn"
                data-bs-toggle="modal"
                data-bs-target="#update-modal-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M1 17.5563H17M1 17.5563V13.5563L9 5.55627M1 17.5563L5 17.5562L13 9.55626M9 5.55627L11.8686 2.68762L11.8704 2.68591C12.2652 2.29103 12.463 2.09324 12.691 2.01916C12.8919 1.9539 13.1082 1.9539 13.3091 2.01916C13.5369 2.09319 13.7345 2.29075 14.1288 2.68508L15.8686 4.42487C16.2646 4.82089 16.4627 5.01899 16.5369 5.24732C16.6022 5.44816 16.6021 5.66451 16.5369 5.86535C16.4628 6.09351 16.265 6.29132 15.8695 6.68677L15.8686 6.68762L13 9.55626M9 5.55627L13 9.55626"
                    stroke="#01763F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="new-product-card-body">
              <div class="new-product-info">
                <h1>Winter cloth cleaning</h1>
                <p>
                  <del>$ 75.00 </del>
                  <span> $ 5500/hr</span>
                </p>
              </div>
            </div>
          </div>

          <div class="item new-product-card">
            <div class="new-product-card-header">
              <img src="assets/images/new-product-3.png" alt="" srcset="" />
              <button
                class="new-product-update-btn"
                data-bs-toggle="modal"
                data-bs-target="#update-modal-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M1 17.5563H17M1 17.5563V13.5563L9 5.55627M1 17.5563L5 17.5562L13 9.55626M9 5.55627L11.8686 2.68762L11.8704 2.68591C12.2652 2.29103 12.463 2.09324 12.691 2.01916C12.8919 1.9539 13.1082 1.9539 13.3091 2.01916C13.5369 2.09319 13.7345 2.29075 14.1288 2.68508L15.8686 4.42487C16.2646 4.82089 16.4627 5.01899 16.5369 5.24732C16.6022 5.44816 16.6021 5.66451 16.5369 5.86535C16.4628 6.09351 16.265 6.29132 15.8695 6.68677L15.8686 6.68762L13 9.55626M9 5.55627L13 9.55626"
                    stroke="#01763F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="new-product-card-body">
              <div class="new-product-info">
                <h1>Amazfit GTR 3 S.Watch</h1>
                <p>
                  <del>$ 119.99</del>
                  <span>$ 89.00</span>
                </p>
              </div>
            </div>
          </div>

          <div class="item new-product-card">
            <div class="new-product-card-header">
              <img src="assets/images/product-image-3.png" alt="" srcset="" />
              <button
                class="new-product-update-btn"
                data-bs-toggle="modal"
                data-bs-target="#update-modal-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M1 17.5563H17M1 17.5563V13.5563L9 5.55627M1 17.5563L5 17.5562L13 9.55626M9 5.55627L11.8686 2.68762L11.8704 2.68591C12.2652 2.29103 12.463 2.09324 12.691 2.01916C12.8919 1.9539 13.1082 1.9539 13.3091 2.01916C13.5369 2.09319 13.7345 2.29075 14.1288 2.68508L15.8686 4.42487C16.2646 4.82089 16.4627 5.01899 16.5369 5.24732C16.6022 5.44816 16.6021 5.66451 16.5369 5.86535C16.4628 6.09351 16.265 6.29132 15.8695 6.68677L15.8686 6.68762L13 9.55626M9 5.55627L13 9.55626"
                    stroke="#01763F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="new-product-card-body">
              <div class="new-product-info">
                <h1>Full House Cleaning</h1>
                <p>
                  <del>$ 119.99</del>
                  <span>$ 89.99/hr</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="update-modal-1"
          tabindex="-1"
          aria-labelledby="update-modal-1"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <form class="modal-content">
              <div class="modal-header">
                <h5 class="modal-header-title" id="update-modal-1">
                  Edit Product
                </h5>
                <button
                  type="button"
                  class="btn-close modal-close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div action="" class="upload-form">
                  <div class="upload-form-input-wrapper">
                    <label for="product-name">Product Name</label>
                    <input
                      type="text"
                      id="product-name"
                      name="product-name"
                      required
                    />
                  </div>

                  <div class="upload-form-input-wrapper">
                    <label for="product-description">Description</label>
                    <textarea
                      name="product-description"
                      id="product-description"
                      required
                    ></textarea>
                  </div>

                  <div class="upload-form-input-wrapper price-input-wrapper">
                    <div class="upload-form-inner-input-wrapper">
                      <label for="product-price">Sale Price</label>
                      <input
                        type="text"
                        id="product-price"
                        name="product-price"
                        required
                      />
                    </div>
                    <div class="upload-form-inner-input-wrapper">
                      <label for="product-discount">Discount</label>
                      <input
                        type="text"
                        id="product-discount"
                        name="product-discount"
                        required
                      />
                    </div>
                  </div>

                  <div class="upload-form-input-wrapper color-input-wrapper">
                    <label>Select Color</label>
                    <div class="color-wrapper">
                      <input
                        type="text"
                        name="color"
                        id="dark-gray"
                        value="dark-gray"
                        required
                      />

                      <input
                        type="text"
                        name="color"
                        id="black"
                        value="black"
                        required
                      />

                      <input
                        type="text"
                        name="color"
                        id="white"
                        value="white"
                        required
                      />

                      <input
                        type="text"
                        name="color"
                        id="olive"
                        value="olive"
                        required
                      />
                    </div>
                  </div>

                  <div class="upload-form-input-wrapper">
                    <label for="product-tags">Tags</label>
                    <input
                      type="text"
                      id="product-tags"
                      name="product-tags"
                      placeholder="Type and enter"
                      required
                    />
                  </div>

                  <div class="upload-form-image-input-wrapper">
                    <label>Product Images</label>
                    <label
                      for="product-images"
                      class="image-upload-container"
                      data-product-image-container
                    >
                      <span class="upload-sign">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M6.6665 13.8333L9.99984 10.5M9.99984 10.5L13.3332 13.8333M9.99984 10.5V18M16.6665 14.4524C17.6844 13.6117 18.3332 12.3399 18.3332 10.9167C18.3332 8.38536 16.2811 6.33333 13.7498 6.33333C13.5677 6.33333 13.3974 6.23833 13.3049 6.08145C12.2182 4.23736 10.2119 3 7.9165 3C4.46472 3 1.6665 5.79822 1.6665 9.25C1.6665 10.9718 2.36271 12.5309 3.48896 13.6613"
                            stroke="#475467"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <div class="image-upload-text">
                        <span>Click to upload</span>
                        <span> or drag and drop</span>
                      </div>
                      <h5>PNG or JPG (max. 400x400px)</h5>
                    </label>
                    <input
                      type="file"
                      id="product-image"
                      name="product-images"
                      accept="image/*"
                      multiple
                      required
                      data-product-image-upload-input
                    />

                    <div
                      id="product-image-preview"
                      class="image-preview"
                      data-product-image-preview
                    ></div>
                    <p>
                      You need at least 4 images. Pay attention to the quality
                      of the pictures you add (importent)
                    </p>
                  </div>

                  <div class="upload-form-input-wrapper">
                    <label for="product-category">Publish Category</label>
                    <select 
                      name="product-category"
                      id="product-category"
                      required
                    >
                      <option value="hat">Hat</option>
                      <option value="hat">Mobile Accessories</option>
                      <option value="hat">Electronics</option>
                      <option value="hat">Vehicles</option>
                      <option value="hat">Toy</option>
                      <option value="hat">Fashion</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="modal-footer upload-form-button-wrapper">
                <button type="submit" class="upload-form-submit-btn">
                  Publish Update
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          class="modal fade"
          id="update-modal-2"
          tabindex="-1"
          aria-labelledby="update-modal-2"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <form class="modal-content">
              <div class="modal-header">
                <h5 class="modal-header-title" id="update-modal-2">
                  Edit Service
                </h5>
                <button
                  type="button"
                  class="btn-close modal-close-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div action="" class="upload-form">
                  <div class="upload-form-input-wrapper">
                    <label for="service-name">Service Name</label>
                    <input
                      type="text"
                      id="service-name"
                      name="service-name"
                      required
                    />
                  </div>

                  <div class="upload-form-input-wrapper">
                    <label for="service-description">Description</label>
                    <textarea
                      name="service-description"
                      id="service-description"
                      required
                    ></textarea>
                  </div>

                  <div class="upload-form-input-wrapper date-picker">
                    <label for="service-date">Date</label>
                    <input
                      type="text"
                      id="service-date"
                      name="service-date"
                      required
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16 2V5"
                        stroke="#28303F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8 2V5"
                        stroke="#28303F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
                        stroke="#28303F"
                        stroke-width="1.5"
                      />
                      <path
                        d="M3 9H21"
                        stroke="#28303F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>

                  <div class="upload-form-input-wrapper price-input-wrapper">
                    <div class="upload-form-inner-input-wrapper">
                      <label for="service-price">Price</label>
                      <input
                        type="text"
                        id="service-price"
                        name="service-price"
                        required
                      />
                    </div>
                    <div class="upload-form-inner-input-wrapper">
                      <label for="service-completion-time">
                        Completion Time
                      </label>
                      <input
                        type="text"
                        id="service-completion-time"
                        name="service-completion-time"
                        required
                      />
                    </div>
                  </div>

                  <div class="upload-form-input-wrapper">
                    <label for="service-pickup-loction">Pickup Location</label>
                    <input
                      type="text"
                      id="service-pickup-loction"
                      name="service-pickup-loction"
                      required
                    />
                  </div>

                  <div class="upload-form-input-wrapper">
                    <label for="service-tags">Tags</label>
                    <input
                      type="text"
                      id="service-tags"
                      name="service-tags"
                      placeholder="Type and enter"
                      required
                    />
                  </div>

                  <div class="upload-form-image-input-wrapper">
                    <label>Product Images</label>
                    <label
                      for="service-images"
                      class="image-upload-container"
                      data-service-image-container
                    >
                      <span class="upload-sign">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M6.6665 13.8333L9.99984 10.5M9.99984 10.5L13.3332 13.8333M9.99984 10.5V18M16.6665 14.4524C17.6844 13.6117 18.3332 12.3399 18.3332 10.9167C18.3332 8.38536 16.2811 6.33333 13.7498 6.33333C13.5677 6.33333 13.3974 6.23833 13.3049 6.08145C12.2182 4.23736 10.2119 3 7.9165 3C4.46472 3 1.6665 5.79822 1.6665 9.25C1.6665 10.9718 2.36271 12.5309 3.48896 13.6613"
                            stroke="#475467"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <div class="image-upload-text">
                        <span>Click to upload</span>
                        <span> or drag and drop</span>
                      </div>
                      <h5>PNG or JPG (max. 400x400px)</h5>
                    </label>
                    <input
                      type="file"
                      id="service-images"
                      name="service-images"
                      accept="image/*"
                      multiple
                      required
                      data-service-image-upload-input
                    />

                    <div
                      id="service-image-preview"
                      data-service-image-preview
                      class="image-preview"
                    ></div>
                    <p>
                      You need at least 4 images. Pay attention to the quality
                      of the pictures you add (importent)
                    </p>
                  </div>

                  <div class="upload-form-input-wrapper">
                    <label for="service-category">Publish Category</label>
                    <select
                      name="service-category"
                      id="service-category"
                      required
                    >
                      <option value="hat">Home Cleaning</option>
                      <option value="hat">Rooftop Cleaning</option>
                      <option value="hat">Electronics</option>
                      <option value="hat">Vehicles</option>
                      <option value="hat">Toy</option>
                      <option value="hat">Fashion</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="modal-footer upload-form-button-wrapper">
                <button type="submit" class="upload-form-submit-btn">
                  Publish Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <RecentPost/>
    </>
  );
}

export default SellerHome;
