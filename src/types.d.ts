interface payloadType {
  type: string;
  payload: {
    quesId: string;
    selected: string;
  };
}

interface quizType {
  quesID: string;
  ques: string;
  options: [
    { optionId: string; option: string },
    { optionId: string; option: string },
    { optionId: string; option: string },
    { optionId: string; option: string }
  ];
  selected: string;
}

interface selections {
  quesId: string;
  selected: string;
}

interface ans {
  quesID: string;
  ans: string;
}
