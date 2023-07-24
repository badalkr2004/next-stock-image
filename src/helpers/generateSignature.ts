export  function  generateSignature(callback:any, paramsToSign:any) {

   fetch(`/api/signature`, {
    method: "POST",
    body: JSON.stringify({
      paramsToSign,
    }),
  })
    .then((r) => r.json())
    .then(({ signature }) => {
      callback(signature);
    });
}

