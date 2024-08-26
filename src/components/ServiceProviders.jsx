import './styles/ServiceProviders.css'
import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom";
import {services} from "../data/data.js";

import {useRef} from "react";


export const ServiceProviders = () => {
    const carouselRef = useRef(null);

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };
    return (
        <>

            <div className="providers-slider-section">
                <h1>
                    Sellers / Service providers you are following
                </h1>
                <div className="custom-controls">
                    <button className="control-button" onClick={handlePrev}>
                        <svg className="icon icon-custom-left-arrow" xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24"
                             viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 12L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L3 12ZM7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071C9.09763 17.3166 9.09763 16.6834 8.70711 16.2929L7.29289 17.7071ZM8.70711 7.70711C9.09763 7.31658 9.09763 6.68342 8.70711 6.29289C8.31658 5.90237 7.68342 5.90237 7.29289 6.29289L8.70711 7.70711ZM21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V13ZM2.29289 12.7071L7.29289 17.7071L8.70711 16.2929L3.70711 11.2929L2.29289 12.7071ZM3.70711 12.7071L8.70711 7.70711L7.29289 6.29289L2.29289 11.2929L3.70711 12.7071ZM21 11H3V13H21V11Z"
                                fill="#C9CFCC"/>
                        </svg>
                    </button>
                    <button className="control-button" onClick={handleNext}>
                        <svg className="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 12L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L21 12ZM16.7071 6.29289C16.3166 5.90237 15.6834 5.90237 15.2929 6.29289C14.9024 6.68342 14.9024 7.31658 15.2929 7.70711L16.7071 6.29289ZM15.2929 16.2929C14.9024 16.6834 14.9024 17.3166 15.2929 17.7071C15.6834 18.0976 16.3166 18.0976 16.7071 17.7071L15.2929 16.2929ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13V11ZM21.7071 11.2929L16.7071 6.29289L15.2929 7.70711L20.2929 12.7071L21.7071 11.2929ZM20.2929 11.2929L15.2929 16.2929L16.7071 17.7071L21.7071 12.7071L20.2929 11.2929ZM3 13H21V11H3V13Z"
                                fill="#121715"/>
                        </svg>
                    </button>
                </div>
                <div className="provider-slider">
                    <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        ref={carouselRef}
                        draggable
                        focusOnSelect={false}
                        infinite
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1441
                                },
                                items: 5,
                                partialVisibilityGutter: 40
                            },
                            laptop: {
                                breakpoint: {
                                    max: 1440,
                                    min: 1200
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            largeTablet: {
                                breakpoint: {
                                    max: 1199,
                                    min: 992
                                },
                                items: 3,
                                partialVisibilityGutter: 30
                            },
                            mediumTablet: {
                                breakpoint: {
                                    max: 991,
                                    min: 768
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            },
                            smallTablet: {
                                breakpoint: {
                                    max: 767,
                                    min: 550
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            },
                            mobile: {
                                breakpoint: {
                                    max: 549,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },

                        }}
                        rewindWithAnimation={false}
                        shouldResetAutoplay
                        slidesToSlide={2}
                        swipeable
                    >
                        {
                            services.map((service, index) => {
                                return (
                                    <Link to={'service-details'} style={{paddingRight: '20px'}} key={index}
                                          className="provider-card">
                                        <div className="provider-card-header">
                                            <img src={service.serviceImage} alt=""/>
                                            {service.status !== '' ? <span>{service.status}</span> : ''}
                                        </div>
                                        <div className="provider-card-body">
                                            <h5>{service.serviceName}</h5>
                                            <div className="price">
                                                {
                                                    service.afterDiscount !== '' ?
                                                        <del>{service.afterDiscount}</del> : ' '
                                                }
                                                <span>{service.price}</span>
                                            </div>
                                        </div>
                                        <div className="provider-card-footer">
                                            <div className="provider-image">
                                                <img src={service.serviceProvider} alt=""/>
                                            </div>
                                            <div className="provider-text">
                                                <div className="provider-text-info">
                                                    <h6>{service.provider}</h6>
                                                    <p>{service.rating}</p>
                                                </div>
                                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                         fill="none">
                      <path
                          d="M14 19.5C14 20.0523 14.4477 20.5 15 20.5C15.5523 20.5 16 20.0523 16 19.5H14ZM2 19.5C2 20.0523 2.44772 20.5 3 20.5C3.55228 20.5 4 20.0523 4 19.5H2ZM21.7071 11.2071C22.0976 10.8166 22.0976 10.1834 21.7071 9.79289C21.3166 9.40237 20.6834 9.40237 20.2929 9.79289L21.7071 11.2071ZM17 14.5L16.2929 15.2071C16.6834 15.5976 17.3166 15.5976 17.7071 15.2071L17 14.5ZM15.7071 11.7929C15.3166 11.4024 14.6834 11.4024 14.2929 11.7929C13.9024 12.1834 13.9024 12.8166 14.2929 13.2071L15.7071 11.7929ZM16 19.5C16 17.957 15.0619 16.6826 13.7973 15.8395C12.5258 14.9918 10.8267 14.5 9 14.5V16.5C10.487 16.5 11.7879 16.9036 12.6879 17.5036C13.5949 18.1083 14 18.8338 14 19.5H16ZM9 14.5C7.17326 14.5 5.47422 14.9918 4.20266 15.8395C2.93809 16.6826 2 17.957 2 19.5H4C4 18.8338 4.40506 18.1083 5.31206 17.5036C6.21207 16.9036 7.51303 16.5 9 16.5V14.5ZM20.2929 9.79289L16.2929 13.7929L17.7071 15.2071L21.7071 11.2071L20.2929 9.79289ZM17.7071 13.7929L15.7071 11.7929L14.2929 13.2071L16.2929 15.2071L17.7071 13.7929ZM9 11.5C7.34315 11.5 6 10.1569 6 8.5H4C4 11.2614 6.23858 13.5 9 13.5V11.5ZM6 8.5C6 6.84315 7.34315 5.5 9 5.5V3.5C6.23858 3.5 4 5.73858 4 8.5H6ZM9 5.5C10.6569 5.5 12 6.84315 12 8.5H14C14 5.73858 11.7614 3.5 9 3.5V5.5ZM12 8.5C12 10.1569 10.6569 11.5 9 11.5V13.5C11.7614 13.5 14 11.2614 14 8.5H12Z"
                          fill="#01763F"/>
                    </svg>
                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </Carousel>


                </div>
            </div>
        </>
    )
}