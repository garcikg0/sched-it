class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.belongs_to :journal, null: false, foreign_key: true
      t.date :created_date
      t.string :content

      t.timestamps
    end
  end
end
