# use node to download resources (使用node来抓取资源)

## why do this?(为什么有这个东东？)


> 在学习h5游戏开发的时候， 经常看网上的实例，在模仿练习的时候需要 下载demo使用到的一些资源，比如：图片、音频等
1. 网上的扒站工具貌似都不支持获取异步加载的资源，
2. 单个“另存为”的方式，有点苦逼。


## how to use?(如何使用)
1. install the dependencies
```
npm install
```
2. new an file which stores your want to get.
and now the fallowing stucture only be surpoted.
```
{
  "list":[
    {
      "src":"url"
    }
    ...
  ]
}
```

3. get the resources!!

```
  //config-path => the config file path
  //base-url => if surpoted the really request url = base-url + list[i].src
  node index.js -c config-path -base base-url

```
