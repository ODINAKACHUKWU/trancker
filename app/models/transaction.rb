class Transaction < ApplicationRecord
  validates :payee_name, presence: true
  validates :contribution_date, presence: true
  validates :amount, presence: true
  validates :amount, numericality: { greater_than: 50 }
end
