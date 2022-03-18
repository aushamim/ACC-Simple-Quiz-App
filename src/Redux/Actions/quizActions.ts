export const getQuiz = () => {
  const x = localStorage.getItem("quiz");
  return x ? JSON.parse(x) : [];
};
export const getSelections = () => {
  const x = localStorage.getItem("selections");
  return x ? JSON.parse(x) : [];
};
export const resetQuiz = () => {
  localStorage.removeItem("quiz");
  localStorage.removeItem("selections");
  window.location.reload();
};
