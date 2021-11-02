Album.destroy_all

Album.create(:name => "Songs About Jane", :thumbs_up => true, :released => "2002-06-25", :image => "https://miro.medium.com/max/1400/1*WQblIRSiCHuFYl42GTqj2g.jpeg")
Album.create(:name => "It Won't Be Soon Before Long", :thumbs_up => true, :released => "2007-05-22", :image => "https://miro.medium.com/max/1400/1*tFQIAOSeG-lBYBZXmPLf1Q.jpeg")
Album.create(:name => "Hands All Over", :thumbs_up => true, :released => "2010-09-21", :image => "https://miro.medium.com/max/1400/1*ZrmbAn7VK3KUScieFJREoA.jpeg")
Album.create(:name => "Overexposed", :thumbs_up => true, :released => "2012-06-26", :image => "https://miro.medium.com/max/1400/1*BFxtQieFyZyJwkyXUnS6Ig.jpeg")
Album.create(:name => "V", :thumbs_up => true, :released => "2014-09-02", :image => "https://miro.medium.com/max/1400/1*HG56uVjMH0u7AUUxdrQGKA.jpeg")
Album.create(:name => "Red Pill Blues", :thumbs_up => true, :released => "2017-11-03", :image => "https://miro.medium.com/max/1400/1*kLYCI0ddHitvnMbjsURGRA.jpeg")
Album.create(:name => "Jordi", :thumbs_up => true, :released => "2021-06-11", :image => "https://miro.medium.com/max/1400/1*s63XzZhPwVwVMNCvUHqvvQ.png")

puts "#{ Album.count } albums created."

Song.destroy_all

Song.create(:name => "Beautiful Mistakes", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/5zFglKYiknIxks8geR8rcL?utm_source=generator")
Song.create(:name => "Memories", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/4cktbXiXOapiLBMprHFErI?utm_source=generator")
Song.create(:name => "Don't Wanna Know", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/5o3GnrcFtvkdf3zFznuSbA?utm_source=generator")
Song.create(:name => "Girls Like You", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/7npLlaPu9Mfno8hjk5OagD?utm_source=generator")
Song.create(:name => "Maps", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/0Zgvf8jIOmBg2fwJnJvUn8?utm_source=generator")
Song.create(:name => "Animals", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/1zjD0w4IqpQbqiKlbC5iRd?utm_source=generator")
Song.create(:name => "Sugar", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/2lpnxvSO8254hck9ZyNrp3?utm_source=generator")
Song.create(:name => "One More Night", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/6cpk00i5TxCqSeqNi2HuIe?utm_source=generator")
Song.create(:name => "Payphone", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/1XGmzt0PVuFgQYYnV2It7A?utm_source=generator")
Song.create(:name => "Daylight", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/1NNAI51EuoRWw1ydX1zV7S?utm_source=generator")
Song.create(:name => "Give A Little More", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/7uT1gmdO1Zm4wvSJxrp8kv?utm_source=generator")
Song.create(:name => "Hands All Over", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/00MWqNdJC8FIeCCf7c1LbI?utm_source=generator")
Song.create(:name => "Misery", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/0RZyUsKfiC7MtiGKatCtGc?utm_source=generator")
Song.create(:name => "If I Never See Your Face Again", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/4dHOg1U0mIHjqV0mmUtxZd?utm_source=generator")
Song.create(:name => "Makes Me Wonder", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/3PNOYDruQplC92lNc7mE9W?utm_source=generator")
Song.create(:name => "This Love", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/6YgV0EF8xJMZz0Zm6BTaT4?utm_source=generator")
Song.create(:name => "She Will Be Loved", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/7sapKrjDij2fpDVj0GxP66?utm_source=generator")
Song.create(:name => "Moves Like Jagger", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/7pYfyrMNPn3wtoCyqcTVoI?utm_source=generator")
Song.create(:name => "Lost", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/6tHQAadcluhVV4oD2IvHSk?utm_source=generator")
Song.create(:name => "Can't Leave You Alone", :thumbs_up => true, :link => "https://open.spotify.com/embed/track/5kS3Kw2elRTrodnsyQuhvI?utm_source=generator")

puts "#{ Song.count } songs created."
