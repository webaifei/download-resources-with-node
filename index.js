//#!/usr/bin/env node
/**
 * 下载静态资源到本地
 *
 */

var http = require('http');
var fs = require('fs');
var path = require('path');
var request = require('request');
var async = require('async');
//用于读取命令行参数
var argv = require('yargs').argv;


var _filepath = argv.config || argv.c;
var _imageBase = argv.base||"http:\/\/action.17m3.com/17m3/mobile/h5game/20151110/zhandoumm/";
var _soundBase = argv.base||"http:\/\/action.17m3.com/17m3/mobile/h5game/20151110/zhandoumm/";
var config = readJson(_filepath);
console.log(config)
getResources(config.list)


function getResources(arr){
	arr.forEach(function (item, index){
		var filename = path.basename(item.src)
		var sourceType = path.extname(filename);
		var url = '';
		var dist = ''
		//如果是带有http或者是https
		if(item.src.search(/^https?:\/\//g)>-1){
			url = item.src;
		}else{
			//如果是图片
			if(sourceType.search(/^\.jpg|png|gif/)>-1){
				url = _imageBase+item.src;
				dist = 'images'
			}else if(sourceType.search(/^\.mp3|ogg/)>-1){
				//声音
				url = _imageBase+item.src;
				dist = 'sounds'
			}else{
				//其他
				console.log('其他的资源可能下载失败！')
			}
		}
		console.log(url,'-----')
		request(url)
			.pipe(fs.createWriteStream(path.join(dist,filename)))
			.on('close', function (){
				callback(index)
			});

	})
}
function callback(index){
	console.log('end ', index)
}
/**
 * 读取json文件
 * @param { string } path 路径
 */

function readJson( filepath ){
	var _path = path.join(__dirname, filepath);
	var _ret = null;
	_ret = fs.readFileSync(_path, 'utf-8')
	return JSON.parse(_ret);
}
