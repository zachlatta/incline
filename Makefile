DIRS=scraper 

.PHONY: build push

build:
	for dir in $(DIRS) ; do \
		cd $$dir && make build; \
	done

push: 
	for dir in $(DIRS) ; do \
		cd $$dir && make push; \
	done
