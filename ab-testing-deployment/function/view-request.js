exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;

    if(headers.cookie){
        const hasFlag = headers.cookie.some(cookie => cookie.value.indexOf("X-Redirect-Flag") >= 0);
        if(hasFlag){
            console.log("Source cookie found. Forwarding request as-is");
            callback(null, request);
            return;
        }
    }

    const cookie = Math.random() < 0.6 ? "X-Redirect-Flag=Pro" : "X-Redirect-Flag=Pre-Pro"
    headers.cookie = headers.cookie || [];
    headers.cookie.push({key : 'Cookie', value : cookie});

    callback(null, request);
}