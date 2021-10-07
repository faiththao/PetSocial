class Post < ApplicationRecord
    has_many :user_posts
    has_many :comments, through: :users

    validates :img_url, presence: true
end
