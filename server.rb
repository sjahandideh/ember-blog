require 'sinatra'
require 'json'

set :public_folder, 'public'

get '/' do
  redirect 'index.html'
end

get '/posts' do
  posts.to_json
  { posts: posts }.to_json
end

get '/posts/:id' do
  id = params[:id].to_i
  { post: posts[id - 1] }.to_json
end

def posts
  [{
    id: 1,
    title: "Ruby Meta Programming",
    author: "Dave Thomas",
    intro:  "*this is the introduction to Ruby Metaprogramming*",
    extended: "I don't know yet",
    publishedAt: '2-13-2012'
  }, {
    id: 2,
    title: "Ruby on Rails",
    author: "DHH",
    intro:  "*Hello **World**!*",
    extended: "Work in progress",
    publishedAt: '12-27-2011'
  }]
end
