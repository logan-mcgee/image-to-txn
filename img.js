const waiting = {};

function AddImage(url, txd, txn, cb) {
  // generate a random id to store in an object
  var id = Math.random().toString(36).substring(7);
  waiting[id] = {
    url: url,
    txd,
    txn,
    cb
  };

  SendNuiMessage(JSON.stringify({
    type: 'getimg',
    id,
    url
  }))
}

RegisterNuiCallbackType('recvImage') // register the type
on('__cfx_nui:recvImage', (data, cb) => {
  cb({ got: 'it' })

  const { id, imgData, width, height } = data;
  const { txd, txn, cb: callback } = waiting[id];
  if (!txd || !txn) return delete waiting[id];

  const tex = CreateRuntimeTexture(txd, txn, width, height)
  const uintData = new Uint8Array(imgData);
  SetRuntimeTextureArgbData(tex, uintData, uintData.length);

  //? if using a callback we call it in order to add a way of knowing when the txn is "ready"
  if (callback) callback()
  delete waiting[id];
});

exports('AddImage', AddImage);