# image-to-txn
Uses NUI to fetch an image then create a runtime texture

do note: this will not work on any urls which do not allow cors, so please be aware this will break if that is the case.

simple examples (not how id reccomend it to be used, but hey, use your brain and im sure youll realise the better way):

```js
const txd = CreateRuntimeTxd("example_txd");
const rt = CreateRuntimeTexture(txd, "cool_stuff", 350, 150)

AddImage("https://via.placeholder.com/350x150", rt, () => {
  setTick(() => {
    DrawSprite("example_txd", "cool_stuff", 0.5, 0.5, 0.5, 0.5, 0.0, 255, 255, 255, 255);
  })
})
```


```lua
local txd = CreateRuntimeTxd("example_txd")
local rt = CreateRuntimeTexture(txd, "cool_stuff", 350, 150)
AddImage("https://via.placeholder.com/350x150", rt, function()
  while true do
    Wait(0)
    DrawSprite("example_txd", "cool_stuff", 0.5, 0.5, 0.5, 0.5, 0.0, 255, 255, 255, 255)
  end
end)
```
