import validator from "validator";
import isEmpty from "is-empty";

const transactionValidator = (data) => {
  const { payee_name, contribution_date, amount } = data;
  const errors = {};
  const trimmedPayee = payee_name.trim();
  const trimmedDate = contribution_date.trim();
  const trimmedAmount = amount.trim();
  const today = new Date();
  const date = trimmedDate.split("-").map((x) => parseInt(x));

  if (validator.isEmpty(trimmedPayee) || trimmedPayee.split(" ").length !== 2)
    errors.payee_name = "Payee's first and last name is required";

  if (
    validator.isEmpty(trimmedDate) ||
    date[0] !== today.getFullYear() ||
    date[1] !== today.getMonth() + 1 ||
    date[2] !== today.getDate()
  )
    errors.contribution_date = "A current contribution date is required";

  if (
    validator.isEmpty(trimmedAmount) ||
    trimmedAmount < 50 ||
    trimmedAmount % 50 !== 0
  )
    errors.amount =
      "Amount is required in multiples of 50 and a minimum of NGN50";

  return { errors, isValid: isEmpty(errors) };
};

export { transactionValidator };
