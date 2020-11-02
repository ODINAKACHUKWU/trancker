class TransactionsController < ApplicationController
  before_action :set_transaction, only: [:show, :update, :destroy]

  def index
    @transactions = Transaction.order(created_at: :desc).page(params[:page] ? params[:page].to_i : 1)
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

  def report
    from = report_params[:year].to_i - report_params[:span].to_i
    to = report_params[:year]
    @summary = Transaction.fetch_report(report_params)
    @records = Transaction.within_range(from, to)
    set_header(@summary)
    render json: @records, status: :ok
  end

  private

  def set_header(object)
    response.set_header('Year', object[:year])
    response.set_header('Span', object[:span])
    response.set_header('Total', object[:total])
    response.set_header('Previous_Year_Total', object[:prev_year_total])
    response.set_header('Current_Year_Total', object[:current_year_total])
    response.set_header('Current_Month_Total', object[:current_month_total])
    response.set_header('Total_Transactions', object[:total_transactions])
    response.set_header('Previous_Month_Total', object[:prev_month_total])
  end

  def pagination_meta(object)
    {
      current_page: object.current_page,
      next_page: object.next_page,
      prev_page: object.prev_page,
      total_pages: object.total_pages,
      total_count: object.total_count
    }
  end

  def report_params
    params.permit(:year, :span)
  end

  def transaction_params
    params.require(:transaction).permit(:payee_name, :amount, :contribution_date, :memo)
  end

  def set_transaction
    @transaction = Transaction.find(params[:id])
  end
end
