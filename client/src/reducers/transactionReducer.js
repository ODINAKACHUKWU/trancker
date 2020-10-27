import TYPES from "../actions/constants";

const {
  SUBMITTING_TRANSACTION,
  SUBMIT_TRANSACTION_SUCCESS,
  SUBMIT_TRANSACTION_FAILURE,
  FETCHING_TRANSACTIONS,
  FETCH_TRANSACTIONS_FAILURE,
  FETCH_TRANSACTIONS_SUCCESS,
} = TYPES;

const initialState = {
  submittingTransaction: false,
  fetchingTransactions: false,
  transaction: {},
  transactions: [],
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
    default:
      return state;
  }
};
