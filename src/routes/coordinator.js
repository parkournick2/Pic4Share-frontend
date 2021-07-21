export const goToLogin = (history) => {
  history.push("/login");
};
export const goToSignup = (history) => {
  history.push("/signup");
};
export const goToPictures = (history, id) => {
  history.push("/pictures/" + id);
};
export const goToAlbums = (history) => {
  history.push("/");
};
export const goBack = (history) => {
  history.goBack();
};
