class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.string :payee_name
      t.date :contribution_date
      t.decimal :amount, precision: 10, scale: 2
      t.text :memo

      t.timestamps
    end
  end
end