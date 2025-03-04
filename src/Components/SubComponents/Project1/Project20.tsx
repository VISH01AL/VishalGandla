import Styles from '../AllProject.module.css'
import useTheme from '../../hooks/theme/useTheme';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project20 = ({ updateNone }: functionType) => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>
      <div
        className={Styles.transparentemptyspace}
        onClick={(e) => {
          updateNone(e);
        }}
      ></div>
      <div className={`${Styles.minicontainer} ${Styles[`container_${theme}`]}`}>
        <div
          onClick={(e) => {
            updateNone(e);
          }}
          className={Styles.backToProject}
        >
          Back to Projects
        </div>
        <div className={Styles.title}>
          CIFAR-10 Image Classification using Convolutional Neural Networks (CNN)
        </div>

        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            Implemented a CNN classifier using PyTorch to classify images in the CIFAR-10 dataset.
          </li>
          <li className={Styles.description}>
            Developed a custom neural network architecture with multiple convolutional and fully connected layers, achieving a final test accuracy of over 80%.
          </li>
          <li className={Styles.description}>
          Decreased the learning rate after the first few iterations to improve model performance, while incorporating techniques such as mini-batch gradient descent, batch normalization, dropout, and regularization for optimization
          </li>
          <li className={Styles.description}>
            Visualized the output of the first convolutional layer and saved the visualizations to assist in understanding the feature extraction process.
          </li>
          <li className={Styles.description}>
            Incorporated ResNet-20 testing functionality, allowing the model to be tested using a pretrained ResNet-20 architecture for performance comparison.
          </li>
          <li className={Styles.description}>
            Used THOP to calculate the model’s MACs and number of parameters, as well as the computational cost of the custom model and ResNet-20.
          </li>
          <li className={Styles.description}>
            Implemented inference speed testing, measuring the average inference time across multiple iterations to evaluate model efficiency.
          </li>
        </ul>

        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
          <li>Python</li>
          <li>PyTorch</li>
          <li>Image Classification</li>
          <li>CIFAR-10 Dataset</li>
          <li>THOP</li>
          <li>NumPy</li>
          <li>Matplotlib</li>
        </ul>

        <a
          href="https://github.com/aritificial-intelligence/CIFAR_10-IMAGE-CLASSIFICATION-USING-CNN"
          className={Styles.projectLinkATag}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={Styles.projectLink}>
            GitHub <img src={externalLink} alt="GitHub Link" className={Styles.projectLinkExternal}></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project20;
