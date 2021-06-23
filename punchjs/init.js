// Start here

let required = [
	'/punchjs/core.js',
	'/punchjs/route.js',
];

for( i = 0; i < required.length; i++)
{
	script = document.createElement('script');
	script.src = required[i];
	document.getElementsByTagName('head')[0].appendChild(script);
}

function dd(multivar, marker = null){
	if(marker == null) console.log(multivar);
	else console.log(marker, multivar);
	// throw new Error("end dd()");
}

// intercept link click, trigger routing component
function interceptClickEvent(e) {
    var href;
    var target = e.target || e.srcElement;
    if (target.tagName === 'A') {
        href = target.getAttribute('href');

        dd(href, 'href');
        
        exp = href.split('/');

        // check if internal domain
        is_internal = false;
        for(i=0; i<exp.length; i++)
        {
        	if(exp[i].indexOf(punch.base_url) !== -1) is_internal = true;
        }

        if(exp[0] == "") is_internal = true;

        //put your logic here...
        if (is_internal) {
        	dd('Trigger routing!');
           //tell the browser not to respond to the link click
           e.preventDefault();
        }
    }
}


//listen for link click events at the document level
if (document.addEventListener) {
    document.addEventListener('click', interceptClickEvent);
} else if (document.attachEvent) {
    document.attachEvent('onclick', interceptClickEvent);
}

// intercept form submit, send via ajax