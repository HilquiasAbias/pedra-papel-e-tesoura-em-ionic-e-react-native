import { IonButton } from "@ionic/react";
import "./GameContainer.css";

const GameContainer = () => {
  return (
    <div className="container">
      <div className="user-choice">
        <IonButton color="primary" onClick={() => onSelect("rock")}>
          Rock 🪨
        </IonButton>
        <IonButton color="secondary" onClick={() => onSelect("paper")}>
          Paper 📄
        </IonButton>
        <IonButton color="tertiary" onClick={() => onSelect("scissors")}>
          Scissor ✂️
        </IonButton>
      </div>
    </div>
  );
};

export default GameContainer;