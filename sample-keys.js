'use strict';

module.exports = {
	trelloKey:"",//Get ID from https://developers.trello.com/sandbox
	trelloClientSecret:"",//Get ID from https://developers.trello.com/sandbox
	trelloSession:"", //get it from //https://trello.com/1/authorize?key={{trelloKey}}&name=TrelloApp&expiration=never&response_type=token&scope=read,write,account
	spreadsheetId: '',//shown in the URL of the sheet
    worksheetId: "",//optional
    worksheetName: '',
    oauthEmail: 'gserviceaccount.com'//get this email from google app api and share the document to this email.
    oauthPemFilePath:'/key/{filename}.pem',//https://cloud.google.com/storage/docs/authentication#service_accounts WILL NEED TO CONVERT FROM .p12 TO .pem
    boardId:'',//create board on trello and get board Id from https://developers.trello.com/sandbox
	listId:''//create list under each board on trello and get list Id from https://developers.trello.com/sandbox
};
