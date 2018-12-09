$(document).ready(function() {
  $("#uipathButton").click(function() {

    var params = {
      "tenancyName": "renzotello",
      "usernameOrEmailAddress": "renzotj@outlook.com",
      "password": "C0lumb1a"
    };

    $.ajax({
      type: "POST",
      url: "https://platform.uipath.com/api/account/authenticate",
      data: JSON.stringify(params),
      contentType: "application/json",
      dataType: "json",
      success: authenticate,
      error: function(data) {
        console.log("error in login");
        console.log(data);
      }
    });

  });
});

$(document).ready(function() {
  $("#uipathInvoice").click(function() {

    var params = {
      "tenancyName": "Default",
      "usernameOrEmailAddress": "admin",
      "password": "P@ssw0rd"
    };

    $.ajax({
      type: "POST",
      url: "https://teaubneorcrpa.sdiad.simedarbyindustrial.com/api/account/authenticate",
      data: JSON.stringify(params),
      contentType: "application/json",
      dataType: "json",
      success: authenticateCopyInvoice,
      error: function(data) {
        console.log("Error in login Copy of Invoce");
        console.log(data);
      }
    });

  });
});

$(document).ready(function() {
  $("#uipathStatement").click(function() {

    var params = {
      "tenancyName": "Default",
      "usernameOrEmailAddress": "admin",
      "password": "P@ssw0rd"
    };

    $.ajax({
      type: "POST",
      url: "https://teaubneorcrpa.sdiad.simedarbyindustrial.com/api/account/authenticate",
      data: JSON.stringify(params),
      contentType: "application/json",
      dataType: "json",
      success: authenticateCopyStatement,
      error: function(data) {
        console.log("Error in login Copy of Statement");
        console.log(data);
      }
    });

  });
});
function authenticate(data) {
  console.log("successful Login");
  console.log(data);

  var returnedData = JSON.parse(JSON.stringify(data));

  // console.log(returnedData["error"]);
  // console.log(data["error"]);
  if (returnedData["error"] == null) {
    console.log("no error");
    executeRobot(returnedData);

  }

}

function authenticateCopyInvoice(data) {
  console.log("successful Login Copy of Invoice");
  console.log(data);

  var returnedData = JSON.parse(JSON.stringify(data));

  // console.log(returnedData["error"]);
  // console.log(data["error"]);
  if (returnedData["error"] == null) {
    console.log("no error");
    executeRobotCopyInvoice(returnedData);

  }

}
function authenticateCopyStatement(data) {
  console.log("successful login Copy of Satement");
  console.log(data);

  var returnedData = JSON.parse(JSON.stringify(data));

  // console.log(returnedData["error"]);
  // console.log(data["error"]);
  if (returnedData["error"] == null) {
    console.log("no error");
    executeRobotCopyStatement(returnedData);

  }

}
function executeRobotCopyInvoice(returnedData) {
  var result = returnedData["result"];

  var params = {
    "startInfo": {
      "ReleaseKey": "01cf97f8-3b27-4984-995f-8f651050aadb",
      "Strategy": "Specific",
      "RobotIds": [
        2
      ],
      "NoOfRobots": 0,
      "Source": "Manual"
    }
  };

  $.ajax({
    type: "POST",
    url: "https://teaubneorcrpa.sdiad.simedarbyindustrial.com/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs",
    data: JSON.stringify(params),
    contentType: "application/json",
    dataType: "json",
    headers: {
      'Authorization': `Bearer ${result}`
    },
    success: function(data){
      console.log(data);
      console.log("Robot executing copy of invoice");
    },
    error: function(data) {
      console.log("error in login");
      console.log(data);
    }
  });

}

function executeRobotCopyStatement(returnedData) {
  var result = returnedData["result"];

  var params = {
    "startInfo": {
      "ReleaseKey": "f4f5c9e6-b453-4b35-8f6a-ec710f6832c4",
      "Strategy": "Specific",
      "RobotIds": [
        2
      ],
      "NoOfRobots": 0,
      "Source": "Manual"
    }
  };

  $.ajax({
    type: "POST",
    url: "https://teaubneorcrpa.sdiad.simedarbyindustrial.com/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs",
    data: JSON.stringify(params),
    contentType: "application/json",
    dataType: "json",
    headers: {
      'Authorization': `Bearer ${result}`
    },
    success: function(data){
      console.log(data);
      console.log("Robot executing copy of invoice");
    },
    error: function(data) {
      console.log("error in login");
      console.log(data);
    }
  });

}

function executeRobot(returnedData) {
  var result = returnedData["result"];

  var params = {
    "startInfo": {
      "ReleaseKey": "f88edd00-879a-44b7-9efb-345a3b944e50",
      "Strategy": "Specific",
      "RobotIds": [
        77750
      ],
      "NoOfRobots": 0,
      "Source": "Manual"
    }
  };

  $.ajax({
    type: "POST",
    url: "https://platform.uipath.com/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs",
    data: JSON.stringify(params),
    contentType: "application/json",
    dataType: "json",
    headers: {
      'Authorization': `Bearer ${result}`
    },
    success: function(data){
      console.log(data);
      console.log("robot executing");
    },
    error: function(data) {
      console.log("error in login");
      console.log(data);
    }
  });

}
