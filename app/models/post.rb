class Post < ApplicationRecord
    belongs_to :user
    has_many :comments

    validates :img_url, presence: true

end
