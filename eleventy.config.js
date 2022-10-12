module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    'src/fonts': './fonts',
    'src/images': './images',
    'src/styles/main.css': './styles/main.css',
  });

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setServerOptions({
    domdiff: false, // reload instead of domdiff
    port: 8888,
    showAllHosts: false, 
    showVersion: false,
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_partials/',
      layouts: '_partials/_layouts',
      data: '_data',
    },
  };
};
