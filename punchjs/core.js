
let punch = {};

punch.base_url = 'https://punchjs.local';
punch.app_name = 'PunchJS';
punch.version  = 'beta-00';
punch.route = window.location.pathname;
punch.uri_segment = function(no){
	if(punch.route != '/'){
		segment = punch.route.split('/');
		if(segment[no] == undefined) return null;
		else return segment[no];
	}else{
		return null;
	}
};

// get all (or specific key) element with 
// attribute punch and change the content accordingly
punch.draw = function(key = null){
	let keys = Object.keys(punch);
	
	if(key == null) elements = (document.querySelectorAll('[punch]'));
	else elements = (document.querySelectorAll('[punch="'+key+'"]'));
	
	if(elements.length > 0){
		for(i=0; i < elements.length; i++)
		{
			element = elements[i];
			key = element.getAttribute('punch');
			if(keys.indexOf(key) !== -1){
				str = punch[key];
				element.innerHTML = str;
			}
		}
	}
}

punch.draw('app_name');


