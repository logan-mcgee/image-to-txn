# image-to-txn
Uses NUI to fetch an image then create a runtime texture

simple example:

```js
let isReady = false
const txd = CreateRuntimeTxd('test_txd2');
AddImage('https://via.placeholder.com/350x150', txd, 'test_txn3', () => isReady = true)

setTick(() => {
  if (!isReady) return;
  DrawSprite('test_txd2', 'test_txn3', 0.5, 0.5, 0.5, 0.5, 0.0, 255, 255, 255, 255);
})
```
