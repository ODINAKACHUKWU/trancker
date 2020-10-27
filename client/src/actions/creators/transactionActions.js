import axios from "axios";
import constants from "../../utils/constants";
import TYPES from "../constants";

const { BASE_URL } = constants;
const {
  SUBMITTING_TRANSACTION,
  SUBMIT_TRANSACTION_SUCCESS,
  SUBMIT_TRANSACTION_FAILURE,
  FETCHING_TRANSACTIONS,
  FETCH_TRANSACTIONS_FAILURE,
  FETCH_TRANSACTIONS_SUCCESS,
} = TYPES;

const submittingTransaction = (bool) => ({
  type: SUBMITTING_TRANSACTION,
  bool,
});

const submitTransactionFailure = (error) => ({
  type: SUBMIT_TRANSACTION_FAILURE,
  error,
});

const submitTransactionSuccess = (transaction) => ({
  type: SUBMIT_TRANSACTION_SUCCESS,
  transaction,
});

const fetchingTransactions = (bool) => ({
  type: FETCHING_TRANSACTIONS,
  bool,
});

const fetchTransactionsSuccess = (transactions) => ({
  type: FETCH_TRANSACTIONS_SUCCESS,
  transactions,
});

const fetchtTransactionsFailure = (error) => ({
  type: FETCH_TRANSACTIONS_FAILURE,
  error,
});

const recordTransaction = (data) => async (dispatch) => {
  dispatch(submittingTransaction(true));
  try {
    const url = `${BASE_URL}/transactions`;
    const response = await axios.post(url, data);
    const transaction = response.data;
    dispatch(submitTransactionSuccess(transaction));
  } catch (error) {
    dispatch(submitTransactionFailure(error.message));
  } finally {
    dispatch(submittingTransaction(false));
  }
};

const fetchTransactions = () => async (dispatch) => {
  dispatch(fetchingTransactions(true));
  try {
    const url = `${BASE_URL}/transactions`;
    const response = await axios.get(url);
    console.log(">>>>>>>>>>>> Response", response);
    // const transaction = response.data;
    // dispatch(fetchTransactionsSuccess());
  } catch (error) {
    console.log(">>>>>>>>>> Error", error);
    // dispatch(fetchTransactionsFailure(error.response.data.message));
  } finally {
    dispatch(fetchingTransactions(false));
  }
};

export { recordTransaction, fetchTransactions };
