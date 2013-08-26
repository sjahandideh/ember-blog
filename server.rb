require 'sinatra'
require 'json'

set :public_folder, 'js'
set :public_folder, 'css'
set :public_folder, 'vendors'

get '/' do
  send_file 'index.html'
end

get '/posts' do

  [{
    id: 1,
    title: "Ruby Meta Programming",
    author: "Dave Thomas",
    intro:  "this is the introduction to Ruby Metaprogramming",
    extended: "I don't know yet",
    publishedAt: '2-13-2012'
  }, {
    id: 2,
    title: "Ruby on Rails",
    author: "DHH",
    intro:  "#h1 Hello *World*!",
    extended: "Work in progress",
    publishedAt: '12-27-2011'
  }].to_json

end
