var searchYouTube = (options, callback) => {

  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max || 5,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(response) {
      console.log('Request Failed');
    }
  });

};

export default searchYouTube;
