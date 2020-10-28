class cookieHandler {
    static setCookies(res) {
        const tokenExpiry = 24 * 60 * 60;
        res.cookie('token', '12345',
            {
                maxAge: tokenExpiry, // Token will be expired after one day
                httpOnly: true, // Can't be accessed from Client-Side
                secure: process.env.NODE_ENV === 'production'? true: false // Forces to use https
            });
        res.cookie('locale', 'en-US',
        {
            maxAge: tokenExpiry, // Token will be expired after one day
            httpOnly: true, // Can't be accessed from Client-Side
            secure: process.env.NODE_ENV === 'production'? true: false // Forces to use https
        });
    };
}

module.exports = cookieHandler;