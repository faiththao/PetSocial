# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create!(username: 'bye22', password: '1234', password_confirmation: '1234')
# User.create!(username: 'abc123', password: '1234', password_confirmation: '1234')
# Post.create!(user_id: 1, img_url: "https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg", caption: "Robbie is so cute!", likes: 0)
Comment.create!(user_id: 1, post_id:5, comment: "the cutest!", likes: 0)