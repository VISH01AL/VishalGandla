import Styles from "../AllProject.module.css";
import useTheme from "../../hooks/theme/useTheme";
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project23 = ({ updateNone }: functionType) => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>
      <div
        className={Styles.transparentemptyspace}
        onClick={(e) => {
          updateNone(e);
        }}
      ></div>
      <div
        className={`${Styles.minicontainer} ${Styles[`container_${theme}`]}`}
      >
        <div
          onClick={(e) => {
            updateNone(e);
          }}
          className={Styles.backToProject}
        >
          Back to Projects
        </div>
        <div className={Styles.title}>
          Oneshot and Iterative Magnitude Pruning of VGG neural network with Fine-Tuning for Model Optimization
        </div>
        

        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            Implemented Oneshot Magnitude Pruning (OMP) and Iterative Magnitude Pruning (IMP) for model sparsity optimization.
          </li>
          <li className={Styles.description}>
            Built a pruning mechanism that allows pruning filters and channels for each convolutional layer in a neural network.
          </li>
          <li className={Styles.description}>
            Used external YAML configuration files to specify the sparsity ratios for each layer dynamically.
          </li>
          <li className={Styles.description}>
            Designed the pruning process to include fine-tuning (masked retraining) for OMP and multiple iterations for IMP to restore accuracy.
          </li>
          <li className={Styles.description}>
            Demonstrated the application of channel pruning after filter pruning, optimizing the model's efficiency while maintaining accuracy.
          </li>
          <li className={Styles.description}>
            Analyzed the impact of pruning on sparsity and accuracy across various test cases, and compared results with standard models.
          </li>
        </ul>

        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul
          className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}
        >
          <li>Python</li>
          <li>PyTorch</li>
          <li>Neural Networks</li>
          <li>Magnitude Pruning</li>
          <li>YAML</li>
          <li>Masked Retraining</li>
          <li>Model Optimization</li>
          <li>Machine Learning</li>
        </ul>

        <a
          href="https://github.com/aritificial-intelligence/VGG13_Pruning"
          className={Styles.projectLinkATag}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={Styles.projectLink}>
            GitHub{" "}
            <img
              src={externalLink}
              alt="GitHub Link"
              className={Styles.projectLinkExternal}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project23;
