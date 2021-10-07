class Post < ApplicationRecord
    belongs_to :user
    has_many :comments, through: :users

    validates :img_url, presence: true
end
