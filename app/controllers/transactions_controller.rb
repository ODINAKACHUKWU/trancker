class TransactionsController < ApplicationController
  before_action :set_transaction, only: [:show, :update, :destroy]

  def index
    @transactions = Transaction.order(id: :desc)
    render json: @transactions, status: :ok
  end

  def create
    @transaction = Transaction.new(transaction_params)

    if @transaction.save
      render json: @transaction, status: :created
    end
  end

  def show
    render json: @transaction, status: :ok
  end

  def update
    @transaction.update(transaction_params)
    render json: { message: 'Transaction was updated successfully.' }, status: :ok
  end

  def destroy
    @transaction.destroy
    render json: { message: 'Transaction was deleted successfully.' }, status: :ok
  end

  private

  def transaction_params
    params.require(:transaction).permit(:payee_name, :amount, :contribution_date, :memo)
  end

  def set_transaction
    @transaction = Transaction.find(params[:id])
  end
end
