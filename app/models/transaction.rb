class Transaction < ApplicationRecord
  validates :payee_name, presence: true
  validates :contribution_date, presence: true
  validates :amount, presence: true
  validates :amount, numericality: { greater_than: 50 }

  scope :within_range, ->(from, to) { where(
                                  'contribution_date >= :from AND contribution_date <= :to',
                                  {from: "#{from}-01-01", to: "#{to}-12-31"})
                                }

  def self.fetch_report(params)
    current_year_records = within_range(params[:year], params[:year])
    prev_year_total = within_range(params[:year].to_i - 1, params[:year].to_i - 1).map(&:amount).sum
    ReportFormatterService.call(current_year_records, prev_year_total, total_contribution, params[:span])
  end

  def self.total_contribution
    all.map(&:amount).sum
  end
end
