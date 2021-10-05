class PostSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :caption, :likes
  has_one :user
end
