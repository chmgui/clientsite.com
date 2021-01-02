module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("assets");
    
    return {
        passthroughFileCopy: true,
        dir: {
            markdownTemplateEngine: "njk",
            templateFormats: ["html", "njk", "md"],
            input: "src",
            output: "_site",
            includes: "includes"
        }
}
}