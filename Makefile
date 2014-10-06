root.html:
	curl "http://www.iana.org/domains/root/db" | grep -v "<script" > root.html

butts.txt: root.html
	for i in `phantomjs dotbutt.js `; do echo "$$i\n\n"; done > butts.txt

butts.aiff: butts.txt
	cat butts.txt | say -o butts.aiff
