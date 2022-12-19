function alertMessage(text) {
    alert(text)
}



//window.conditionalFormatting = (spreadsheetId, callback) {
//  const myRange = {
//    sheetId: 5,
//    startRowIndex: 1,
//    endRowIndex: 1000,
//    startColumnIndex: 0,
//    endColumnIndex: 4,
//  };
//  const requests = [{
//    addConditionalFormatRule: {
//      rule: {
//        ranges: [myRange],
//        booleanRule: {
//          condition: {
//            type: 'CUSTOM_FORMULA',
//            values: [{userEnteredValue: '=COUNTIF(A:A,A1)>1'}],
//          },
//          format: {
//            backgroundColor: {red: 1, green: 0.4, blue: 0.4},
//          },
//        },
//      },
//      index: 0,
//    },
//  }];
//
//  const body = {
//    requests,
//  };
//  try {
//    gapi.client.sheets.spreadsheets.batchUpdate({
//      spreadsheetId: spreadsheetId,
//      resource: body,
//    }).then((response) => {
//      const result = response.result;
//      console.log(`${result.replies.length} cells updated.`);
//      if (callback) callback(response);
//    });
//  } catch (err) {
//    document.getElementById('content').innerText = err.message;
//    return;
//  }
//}