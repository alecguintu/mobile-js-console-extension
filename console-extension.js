(function() {
  var addContainer, exLog, isMobile, mobileLog;
  exLog = console.log;
  console.log = function(msg) {
    if (isMobile.any()) {
      return mobileLog(msg);
    } else {
      return exLog.apply(this, arguments);
    }
  };
  mobileLog = function(msg) {
    addContainer();
    $('#mobile-log').append("<p style=\"margin-bottom: 5px; border-bottom: #ccc 1px solid; padding: 0 10px\">" + msg + "</p>");
    return $('#mobile-log').animate({
      scrollTop: $('#mobile-log').prop("scrollHeight")
    }, 500);
  };
  addContainer = function() {
    if ($('#mobile-log').length === 0) {
      return $('body').append("<div id=\"mobile-log\" style=\"\n  background:#eef;\n  width:100%;\n  height:150px;\n  position:absolute;\n  bottom:0;\n  left:0;\n  overflow-y: scroll;\n  z-index: 100;\n  border-top: 1px solid #000;\"\n></div>");
    }
  };
  return isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };
})();
RunLink