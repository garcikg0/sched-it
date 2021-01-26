class TodoSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :due_date, :completed_date, :title, :description, :category
  has_one :calendar
end
