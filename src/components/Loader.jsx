import React from "react"
import "../assets/css/loader.css"
import "../assets/css/navbar.css"

function Loader() {
  return (
    <>
      <div
        style={{ background: "linear-gradient(rgb(16,19,20) ,rgb(16,19,20)" }}
        className="loader-main lg:h-screen md:h-screen d-flex justify-center align-middle lg:pt-[20%] md:pt-[50%]">
        <div className="ui-abstergo">
          <div className="abstergo-loader ">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="ui-text mt-4">
            {/* <div className="logo ">
              <span className='lg:text-[43px] lg:font-normal md:text-[38px]'  id="logo">
                {" "}
                &lt;/&gt; Moaz Raheem
              </span>
            </div> */}

            <div className="ui-dot "></div>
            <div className="ui-dot "></div>
            <div className="ui-dot "></div>
          </div>
        </div>
        {/* loading  */}
        
      </div>
    </>
  )
}

export default Loader
