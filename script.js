// Fetch your Reddit profile information, put profile username in place of USERNAME
fetch('https://www.reddit.com/user/USERNAME/comments/.json?limit=1000') .then(response => response.json()).then(data => {
    // Create an object to store subreddit information
    const subredditCount = {};
  
    // Iterate through your comments
    data.data.children.forEach(comment => {
      // Get the subreddit the comment was posted in
      const subreddit = comment.data.subreddit;
      
      // If the subreddit is already in our object, increment the count
      if (subredditCount[subreddit]) {
        subredditCount[subreddit] += 1;
      } else {
        subredditCount[subreddit] = 1;
      }
    });
  
    // Sort the subreddits by count
    const sortedSubreddits = Object.entries(subredditCount).sort((a, b) => b[1] - a[1]);
  
    // Log the top 10 subreddits
    for (let i = 0; i < 10; i++) {
      console.log(sortedSubreddits[i]);
    }
  })
  .catch(error => console.log(error));
