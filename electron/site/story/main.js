const path = require("path");

stories.push(require(path.resolve('./site/story/story.js')));
stories.push(require(path.resolve('./site/story/storydemo.js')));

loadUserStory();
