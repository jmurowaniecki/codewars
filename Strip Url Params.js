function stripUrlParams(url, paramsToStrip){
	  var myString = url;
	    for (var i in paramsToStrip) {
			    myString = myString.replace(new RegExp('(\\?' + paramsToStrip[i] + '.*$)|(\\&' + paramsToStrip[i] + '.*$)', 'g'), '');
				  }
		  return myString;
}
