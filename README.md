# image-to-txn
Uses NUI to fetch an image then create a runtime texture

do note: this will not work on any urls which do not allow cors, so please be aware this will break if that is the case.

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
