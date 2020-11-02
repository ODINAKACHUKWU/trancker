class ReportFormatterService < ApplicationService::Base
  attr_accessor :year, :span, :prev_month_total, :current_year_records, :current_month_total, :total_contribution, :prev_year_total, :current_year_total

  MONTHS = %w[jan feb mar apr may jun jul aug sep oct nov dec].freeze

  def initialize(current_year_records, prev_year_total, total_contribution, span)
    @year = Date.today.year
    @span = span
    @current_year_records = current_year_records
    @prev_year_total = prev_year_total
    @total_contribution = total_contribution
    @current_year_total = calculate_current_year_total
    @current_month_total = compute_current_month_total
    @prev_month_total = compute_prev_month_total
  end

  def call
    {
      year: year,
      span: span,
      total: total_contribution,
      prev_year_total: prev_year_total,
      current_year_total: current_year_total,
      current_month_total: current_month_total,
      total_transactions: Transaction.all.count,
      prev_month_total: prev_month_total
    }
  end

  private

  def compute_current_month_total
    records = current_year_records.select { |x| x.contribution_date.to_s.split('-')[1].to_i == Date.today.month }
    records.map(&:amount).sum
  end

  def calculate_current_year_total
    current_year_records.map(&:amount).sum
  end

  def compute_prev_month_total
    records = current_year_records.select { |x| x.contribution_date.to_s.split('-')[1].to_i == Date.today.month - 1 }
    records.map(&:amount).sum
  end
end
