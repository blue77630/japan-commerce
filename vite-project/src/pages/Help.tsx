import { useNavigate } from "react-router-dom";

function Help(){
  const navigate = useNavigate();
  return (
    <body className="bg-purple page-animate-in">

    <button className="back-btn-help" onClick={() => navigate('/')}>
      ← Back
    </button>

        <div className="help-image-background">
          <h2>How can we help you?</h2>
        </div>

        <div>
          <div className="imagecontainer">
            <div className="paddingButton imagesButton">
              <button
                className="help-rect-btn help-btn help-button"
                onClick={() => navigate('/HelpSectionPages/create-account')}
              >
                <img src="./public/account2.webp" alt="" className="help-btn-img" />
                <div className="help-btn-desc">
                  <span className="help-btn-title">How to create an account?</span>
                  <span className="help-btn-text">Step-by-step guide to register on the site.</span>
                </div>
              </button>
            </div>
            <div className="paddingButton imagesButton">
              <button
                className="help-rect-btn help-btn help-button"
                onClick={() => navigate('/HelpSectionPages/add-order')}
              >
                <img src="./public/order.png" alt="" className="help-btn-img" />
                <div className="help-btn-desc">
                  <span className="help-btn-title">How to add an order?</span>
                  <span className="help-btn-text">Instructions to add a new order.</span>
                </div>
              </button>
            </div>
          </div>

          <div className="imagecontainer">
              <div className="paddingButton">
                <button className="help-rect-btn help-btn help-button" onClick={() => navigate('/HelpSectionPages/track-order')}>
                  <img src="./public/TrackOrder.png" alt="" className="help-btn-img" />
                  <div className="help-btn-desc">
                    <span className="help-btn-title">How to track my order?</span>
                    <span className="help-btn-text">Find out the status of your order.</span>
                  </div>
                </button>
              </div>
              <div className="paddingButton">
                <button className="help-rect-btn help-btn help-button" onClick={() => navigate('/HelpSectionPages/cancel-order')}>
                  <img src="./public/CancelOrder.png" alt="" className="help-btn-img" />
                  <div className="help-btn-desc">
                    <span className="help-btn-title">How to cancel my order?</span>
                    <span className="help-btn-text">Instructions to cancel your order.</span>
                  </div>
                </button>
              </div>
          </div>

          <div className="imagecontainer">
              <div className="paddingButton">
                <button className="help-rect-btn help-btn help-button" onClick={() => navigate('/HelpSectionPages/contact-support')}>
                  <img src="./public/Contact-Support.png" alt="" className="help-btn-img" />
                  <div className="help-btn-desc">
                    <span className="help-btn-title">How to contact support?</span>
                    <span className="help-btn-text">Get in touch with our support team.</span>
                  </div>
                </button>
              </div>
              <div className="paddingButton">
                <button className="help-rect-btn help-btn help-button" onClick={() => navigate('/HelpSectionPages/payment-methods')}>
                  <img src="./public/Payment-Method-Free-Download-PNG.png" alt="" className="help-btn-img" />
                  <div className="help-btn-desc">
                    <span className="help-btn-title">What payment methods are accepted?</span>
                    <span className="help-btn-text">Find out about the payment options available.</span>
                  </div>
                </button>
              </div>
          </div>
        </div>
        <div className="help-footer">
          need more help? contact us at <a href="mailto:Yongmcpe@gmail.com">Yongmcpe@gmail.com</a>
        </div>
    </body>
  )
}

export default Help