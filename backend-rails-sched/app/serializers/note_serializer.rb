class NoteSerializer < ActiveModel::Serializer
  attributes :id, :start_datetime, :end_datetime, :title, :description, :location
  has_one :calendar
end
