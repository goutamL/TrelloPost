var express = require('express');
var app     = express();
var Trello = require('node-trello');
var Spreadsheet = require('edit-google-spreadsheet');
var _ = require('lodash');
var settings = require('./keys');

app.get('/loadData', function(req, res){
	var boardId = settings.boardId;
	var listId = settings.listId;
	var trello = new Trello(settings.trelloKey, settings.trelloSession);
	Spreadsheet.load({
	    debug: true,
	    spreadsheetId: settings.spreadsheetId,
	    worksheetId: settings.worksheetId,//optional
	    worksheetName: settings.worksheetName,
	    oauth : {
	        email: settings.oauthEmail,
	        keyFile: __dirname + settings.oauthPemFilePath
	    }

	}, function sheetReady(err, spreadsheet) {
	    if (err) {
	        throw err;
	    }
	    spreadsheet.receive(function(err, rows, info) {
	        if (err) {
	            throw err;
	        }
	        _.forEach(rows,function(n,key){
				setTimeout(function(){
					var title = n[1];
			    	var desc = 'Details:' + n[2] + '\n' + 'Line 2:' + n[3];
			    	var cardInfo = {
				        idBoard:boardId,
				        idList:listId,
				        due:null,
				        pos:"bottom",
				      	name:title,
				      	desc:desc
				    };
					trello.post('/1/cards', cardInfo, function(error, response) {
						if(error) {
							console.log(error);
						}
						console.log("send request " + key);
						// res.send((typeof response === 'string') ? 500 : response);
					});
				}, key * 200);
				if(key > 5000){
					return false;
				}
	        });
	        res.send({});
			res.end();
	    });
	});
});
app.listen('3002')
console.log('Magic happens on port 3002');
exports = module.exports = app;