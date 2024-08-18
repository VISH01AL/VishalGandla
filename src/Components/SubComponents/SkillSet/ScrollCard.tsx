import Styles from "./ScrollCard.module.css";

interface ProgrammingLanguage {
  icon: string;
  name: string;
}

interface ScrollCardProps {
  programmingLanguages: ProgrammingLanguage[];
  height:string;
  animationDuration:string;
}

const ScrollCard: React.FC<ScrollCardProps> = ({ programmingLanguages,height,animationDuration }) => {

  const showImages = () => {
    return programmingLanguages.map((language, index) => {
      return (
        <div key={index} className={Styles.eachitem}>
          <img
            src={language.icon}
            alt={language.name}
            className={Styles.image}
          />
          <div className={Styles.text}>{language.name}</div>
        </div>
      );
    });
  };
  
  return (
    <div className={Styles.container} style={{height:height}}>
      <div className={Styles.minicontainer1} style={{animationDuration:animationDuration}}>{showImages()}</div>
      <div className={Styles.minicontainer2} style={{animationDuration:animationDuration}}>{showImages()}</div>
    </div>
  );
};

export default ScrollCard;
