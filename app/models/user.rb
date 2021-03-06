class User < ApplicationRecord
    has_many :posts
    has_many :comments, through: :posts

    has_secure_password

    validates :username, presence: true, uniqueness: true, length: {minimum: 4}

    # def password=(new_password)
    #     salt = BCrypt::Engine::generate_salt
    #     # => $2a$12$UW5etUc/o1YL4sSdeTBPku
    #     self.password_digest = BCrypt::Engine::hash_secret(new_password, salt)
    #     # => $2a$12$UW5etUc/o1YL4sSdeTBPkueUWwNIPNdQNAwzuSGkS3L5coBKMMZHm"
    # end

    # def authenticate(password)
    #     # Salts generated by generate_salt are always 29 chars long.
    #     salt = password_digest[0..28]
    #     # compare the saved password_digest against the plaintext password by running the plaintext password through the same hashing function
    #     return nil unless BCrypt::Engine::hash_secret(password, salt) == self.password_digest
    #     self
    # end
end
