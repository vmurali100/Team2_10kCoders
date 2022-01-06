const defState = {
  cricket: ["rohit", "yuvi", "dhoni", "virat"],
  football: ["ronaldo", "neymar", "messi"],
  dj: ["avicii", "martin", "mello", "skrillex"],
};
const Reducer = (state = defState, action) => {
  switch (action.type) {
    case "CRICKET":
      return state.cricket;
    case "FOOTBALL":
      return state.football;
    case "DJ":
      return state.dj;
    default:
      return state;
  }
};
export default Reducer
