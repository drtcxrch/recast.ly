var searchYouTube = (options, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', function () {
    console.log(options);
  });
};



export default searchYouTube;