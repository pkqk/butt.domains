var page = require('webpage').create();
//var root = 'http://www.iana.org/domains/root/db'
var root = 'root.html';
page.open(root, function(status) {
    if (status !== 'success') {
        console.log('failed to open domains db');
        phantom.exit(1);
    }
    page.onConsoleMessage = function(msg, line, src) {
        console.log('butt' + msg);
    };
    page.onError = function() {};
    page.evaluate(function() {
        var generic_domains = document.querySelectorAll("#tld-table tr.iana-type-2 .domain.tld a");
        for(var i=0; i < generic_domains.length; ++i) {
            var domain = generic_domains[i].innerText;
            if (/^\.[a-z]+$/.test(domain)) {
                console.log(generic_domains[i].innerText);
            }
        }
    });
    phantom.exit();
});
