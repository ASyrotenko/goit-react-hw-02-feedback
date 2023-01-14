import { FeedbackList, FeedbackBtn } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackList>
        {options.map((option, i) => (
          <li key={i}>
            <FeedbackBtn type="button" onClick={onLeaveFeedback}>
              {option}
            </FeedbackBtn>
          </li>
        ))}
      </FeedbackList>
    </>
  );
};
