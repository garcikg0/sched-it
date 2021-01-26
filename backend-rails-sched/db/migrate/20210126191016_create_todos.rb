class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.belongs_to :calendar, null: false, foreign_key: true
      t.date :start_date
      t.date :due_date
      t.date :completed_date
      t.string :title
      t.string :description
      t.string :category

      t.timestamps
    end
  end
end
