class User < ApplicationRecord
    has_many :posts
    has_many :comments, through: :posts

    validates :username, presence: true, uniqueness: true
end
