import { GET_EXAM_DATA, GET_FINISHEXAM_DATA, GET_LOGIN_DATA, GET_REGISTER_DATA, GET_STARTEXAM_DATA, GET_VERIFY_DATA } from "../actions/actionTypes";

const defaultstate = {
  registerdata: [],
  verifydata: [],
  logindata: [],
  examlist: [],
  startexamdata: [],
  finishexamdata: []
}

export default function rootReducer(state = defaultstate, action) {
  switch (action.type) {
    case GET_REGISTER_DATA:
      return { ...state, registerdata: action.payload }
    case GET_VERIFY_DATA:
      return { ...state, verifydata: action.payload }
    case GET_LOGIN_DATA:
      return { ...state, logindata: action.payload }
    case GET_EXAM_DATA:
      return { ...state, examlist: action.payload }
    case GET_STARTEXAM_DATA:
      return { ...state, startexamdata: action.payload }
    case GET_FINISHEXAM_DATA:
      return { ...state, finishexamdata: action.payload }

    default:
      return state
  }
}