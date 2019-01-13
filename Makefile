build :
	npm run compile

release :
	npm run compile && \
		cp ../advpls_server/target/release/advpls_server bin/linux/

test : 
	npm run test

clean :

