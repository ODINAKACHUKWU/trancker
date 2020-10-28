import TYPES from "../actions/constants";

const {
  SUBMITTING_TRANSACTION,
  SUBMIT_TRANSACTION_SUCCESS,
  SUBMIT_TRANSACTION_FAILURE,
  FETCHING_TRANSACTIONS,
  FETCH_TRANSACTIONS_FAILURE,
  FETCH_TRANSACTIONS_SUCCESS,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE,
  DELETING_TRANSACTION,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_FAILURE,
  UPDATING_TRANSACTION,
} = TYPES;

const initialState = {
  submittingTransaction: false,
  fetchingTransactions: false,
  deletingTransaction: false,
  transaction: {},
  transactions: [],
  message: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMITTING_TRANSACTION:
      return {
        ...state,
        submittingTransaction: action.bool,
      };
    case SUBMIT_TRANSACTION_SUCCESS:
      return {
        ...state,
        transaction: action.transaction,
      };
    case SUBMIT_TRANSACTION_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case FETCHING_TRANSACTIONS:
      return {
        ...state,
        fetchingTransactions: action.bool,
      };
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.transactions,
      };
    case FETCH_TRANSACTIONS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        message: action.message,
      };
    case DELETE_TRANSACTION_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case DELETING_TRANSACTION:
      return {
        ...state,
        deletingTransaction: action.bool,
      };
    case UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        message: action.message,
      };
    case UPDATE_TRANSACTION_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case UPDATING_TRANSACTION:
      return {
        ...state,
        updatingTransaction: action.bool,
      };
    default:
      return state;
  }
};
