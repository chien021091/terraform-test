const getS3 = domainName => ({
    s3: {
      authMethod: "origin-access-identity",
      domainName,
      region: "us-east-1",
      path: "",
    },
});

const getHost = domainName => ([
    {
      key: "host",
      value: domainName,
    },
]);

exports.handler = async (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
  
    if (headers.cookie) {
      for (let i = 0; i < headers.cookie.length; i++) {
        if (headers.cookie[i].value.indexOf("X-Redirect-Flag=Pro") >= 0) {
            const domainName = "terraform-serries-s3-pro.s3.amazonaws.com";
            request.origin = getS3(domainName);
            headers["host"] = getHost(domainName)
            break;
        }
  
        if (headers.cookie[i].value.indexOf("X-Redirect-Flag=Pre-Pro") >= 0) {
            const domainName = "terraform-serries-s3-pre-pro.s3.amazonaws.com";
            request.origin = getS3(domainName);
            headers["host"] = getHost(domainName)
            break;
        }
      }
    }
  
    callback(null, request);
};
  