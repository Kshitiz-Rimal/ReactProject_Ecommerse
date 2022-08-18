import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "Black",
  //   backgroundColor: "White",
  // });
  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  // const darkModeEnable = () => {
  //   if (props.mode === "light") {
  //     setMyStyle({
  //       color: "Black",
  //       backgroundColor: "White",
  //     });
  //     setBtnText("Enable Dark mode");
  //   } else {
  //     setMyStyle({
  //       color: "White",
  //       backgroundColor: "Black",
  //     });
  //     setBtnText("Enable Light mode");
  //   }
  // };
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={darkModeEnable}
        >
          {btnText}
        </button> */}
        <br />
        {/* CARD TRY
        <button
          type="button"
          className="btn btn-primary my-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        {/* Modal Title Card popup */}
        {/* <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img src={IMG} className="card-img" alt="..." />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-dark text-white">
          <img src={IMG} className="card-img" alt="..." />
          <div
            className="card-img-overlay"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          ></div> 
        </div> */}
      </div>
    </div>
  );
}
