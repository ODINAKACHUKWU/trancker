class TransactionsController < ApplicationController
  before_action :set_transaction, only: [:show, :update, :destroy]

  def index
    @transactions = Transaction.order(id: :desc).page(params[:page] ? params[:page].to_i : 1)
    render json: { meta: pagination_meta(@transactions), data: @transactions }, status: :ok
  end

  def create
    @transaction = Transaction.new(transaction_params)

    if @transaction.save
      render json: { message: 'The transaction was successfully recorded.', data: @transaction }, status: :created
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

  def pagination_meta(object)
    {
      current_page: object.current_page,
      next_page: object.next_page,
      prev_page: object.prev_page,
      total_pages: object.total_pages,
      total_count: object.total_count
    }
  end

  def transaction_params
    params.require(:transaction).permit(:payee_name, :amount, :contribution_date, :memo)
  end

  def set_transaction
    @transaction = Transaction.find(params[:id])
  end
end
