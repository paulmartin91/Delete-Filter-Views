  function deleteAllFilterViews() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    
    for (var i = 0; i<sheets.length; i++) {
    var sheetName = sheets[i].getName()
 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var id = ss.getId();
 
  var myFilterViews = Sheets.Spreadsheets.get(id, {
    ranges: sheetName,
    fields: 'sheets/filterViews/filterViewId',
  }).sheets[0].filterViews;
     
      if (typeof myFilterViews !== "undefined"){   
        Sheets.Spreadsheets.batchUpdate({
          requests: myFilterViews.map(function(e) {
            return { deleteFilterView: { filterId: e['filterViewId'] } };
          }),
        },id)
      };
    }
};
