

function RecentPost() {
  return (
    <>
        <div className="main-content-display-recent-posts-container">
        <div className="recent-posts-shared-header-section">
          <h2>Recent Post’s you shared</h2>
          <button className="add-new-post-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M6 11.3867C5.44772 11.3867 5 11.8344 5 12.3867C5 12.939 5.44772 13.3867 6 13.3867V11.3867ZM18 13.3867C18.5523 13.3867 19 12.939 19 12.3867C19 11.8344 18.5523 11.3867 18 11.3867V13.3867ZM11 18.3867C11 18.939 11.4477 19.3867 12 19.3867C12.5523 19.3867 13 18.939 13 18.3867H11ZM13 6.38672C13 5.83443 12.5523 5.38672 12 5.38672C11.4477 5.38672 11 5.83443 11 6.38672H13ZM6 13.3867H12V11.3867H6V13.3867ZM12 13.3867H18V11.3867H12V13.3867ZM13 18.3867V12.3867H11V18.3867H13ZM13 12.3867V6.38672H11V12.3867H13Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {/*  post cards */}
      </div>
    </>
  )
}

export default RecentPost