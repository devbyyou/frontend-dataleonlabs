import './index.scss';


interface ButtonsProps {
  onYesClick: () => void;
  onNoClick: () => void;
  onYesHover: () => void;
  onNoHover: () => void;
  onMouseLeave: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onYesClick,
  onNoClick,
  onYesHover,
  onNoHover,
  onMouseLeave,

}) => (

  <div className="buttons">
    <div className="buttons-container">
      <button
        className="button"
        onClick={onYesClick}
        onMouseEnter={onYesHover}
        onMouseLeave={onMouseLeave}
      >
        Yes
      </button>
      <button
        className="button"
        onClick={onNoClick}
        onMouseEnter={onNoHover}
        onMouseLeave={onMouseLeave}
      >
        No
      </button>
    </div>
  </div>
);

export default Buttons;


