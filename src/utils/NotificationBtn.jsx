import React from 'react'
import { Link } from 'react-router-dom'
function NotificationBtn() {
  return (
  <>
    <Link to={"/dashboard/user-notification"} className="notification-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9954 7.09003V10.1576M12.0138 3C8.62386 3 5.87875 5.74511 5.87875 9.13504V11.0695C5.87875 11.6959 5.62082 12.6355 5.2984 13.1698L4.12851 15.1227C3.40999 16.3294 3.90742 17.6744 5.23392 18.1165C10.6435 19.0834 13.3629 19.1068 18.8029 18.1165C19.0935 18.0196 19.3586 17.8586 19.5787 17.6454C19.7987 17.4322 19.968 17.1723 20.0742 16.8849C20.1803 16.5975 20.2205 16.29 20.1918 15.9849C20.163 15.6799 20.0662 15.3852 19.9083 15.1227L18.7384 13.1698C18.416 12.6355 18.158 11.6867 18.158 11.0695V9.13504C18.1488 5.76353 15.3853 3 12.0138 3Z"
                  stroke="#1F2B47"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M15.0629 18.1594C15.0629 19.7205 13.6811 21 11.9954 21C11.1571 21 10.3833 20.6759 9.83061 20.1641C9.2779 19.6522 8.92786 18.9357 8.92786 18.1594"
                  stroke="#1F2B47"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <circle
                  cx="17.5597"
                  cy="5.49683"
                  r="3.49683"
                  fill="url(#paint0_linear_528_1704)"
                  stroke="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_528_1704"
                    x1="19.6503"
                    y1="2.32399"
                    x2="14.6493"
                    y2="8.39579"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF3D3E" />
                    <stop offset="1" stopColor="#FF5C5D" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
  </>
  )
}

export default NotificationBtn