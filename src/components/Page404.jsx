import React from 'react'
import './Page404.css'
import BtnPrimary from "./BtnPrimary";
import BtnOutline from "./BtnOutline";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import ModalOverlay from "./ModalOverlay";

const Page404 = ({resetFilters}) => {
    const [showModal, setShowModal] = React.useState(false);
    
    const handleNotifyClick = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    return (
        <div className="empty-state">
            {/* <div className="musical-note">🎵</div> */}
            <div className="rest-note">
                <div className="staff-lines">
                    <div className="staff-line"></div>
                    <div className="staff-line"></div>
                    <div className="staff-line"></div>
                    <div className="staff-line"></div>
                    <div className="staff-line"></div>
                </div>
                <div className="whole-rest">𝄽</div>
            </div>

            <h3 className="empty-title">
                Nothing Found — Yet
                {/* <GiSaxophone size={40} /> */}
            </h3>
            <p className="empty-message">
                We’re still tuning up.
                <br />
                More carefully selected saxophone gear is on the way.
                <br />
                {/* <br /> */}
                <span className="accent-text">— Be part of what comes next. —
                    {/* <br /> */}
                    {/* you’re helping shape what comes next. */}
                </span>
            </p>

            <div className="action-buttons">
                <BtnPrimary label={"Explore All Products"} showIcon={false} onClick={resetFilters} />
                <BtnOutline label={<><IoIosNotifications size={16}/> Notify When Available</>} onClick={handleNotifyClick} />
            </div>
            {showModal && (
                <ModalOverlay
                    onClose={handleCloseModal}
                    title="Get Notified!"
                    msg="Be the first to know when new items are added to this category."
                    cta="Notify me"
                />
            )}
            {/* <div className="musical-tip">
      <div className="tip-icon">💡</div>
      <p><strong>Pro Tip:</strong> Try adjusting your filters or browse by category to discover gear that'll make your sax sing!</p>
    </div> */}
        </div>
    )
}

export default Page404