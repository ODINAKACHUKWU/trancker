import keymirror from "keymirror";

const TYPES = keymirror({
  SUBMITTING_TRANSACTION: null,
  SUBMIT_TRANSACTION_SUCCESS: null,
  SUBMIT_TRANSACTION_FAILURE: null,
  FETCHING_TRANSACTIONS: null,
  FETCH_TRANSACTIONS_SUCCESS: null,
  FETCH_TRANSACTIONS_FAILURE: null,
  UPDATING_TRANSACTION: null,
  UPDATE_TRANSACTION_SUCCESS: null,
  UPDATE_TRANSACTION_FAILURE: null,
  DELETING_TRANSACTION: null,
  DELETE_TRANSACTION_SUCCESS: null,
  DELETE_TRANSACTION_FAILURE: null,
});

export default TYPES;
