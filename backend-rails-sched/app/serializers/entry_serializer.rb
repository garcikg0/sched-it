class EntrySerializer < ActiveModel::Serializer
  attributes :id, :created_date, :content
  has_one :journal
end
