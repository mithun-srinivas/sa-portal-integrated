module.exports = {
    resolve: {
        fallback: { "util": require.resolve("util/"), "stream": false, "https": false }
    }
};