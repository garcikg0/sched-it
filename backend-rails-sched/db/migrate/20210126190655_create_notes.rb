class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.belongs_to :calendar, null: false, foreign_key: true
      t.datetime :start_datetime
      t.datetime :end_datetime
      t.string :title
      t.string :description
      t.string :location

      t.timestamps
    end
  end
end
