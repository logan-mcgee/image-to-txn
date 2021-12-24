const waiting = {};

function AddImage(url, runtimeTex, cb) {
  var id = Math.random().toString(36).substring(7);
  waiting[id] = {
    url,
    runtimeTex,
    cb
  };

  SendNuiMessage(JSON.stringify({
    type: 'getimg',
    id,
    url
  }))
}

RegisterNuiCallbackType('recvImage')
on('__cfx_nui:recvImage', (data, cb) => {
  cb({ got: 'it' })

  const { id, imgData, width, height } = data;
  const { runtimeTex, cb: callback } = waiting[id];

  const uintData = new Uint8Array(imgData);
  SetRuntimeTextureArgbData(runtimeTex, uintData, uintData.length);

  if (callback) callback()
  delete waiting[id];
});

exports('AddImage', AddImage);