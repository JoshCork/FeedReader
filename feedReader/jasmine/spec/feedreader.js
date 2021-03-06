"use strict";
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    //Testing the rss feeds themselves.
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all have defined URLs', function() {
            for (var i = 0; i < allFeeds.length; i++) {

                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
                expect(allFeeds[i].url).not.toBe(null);

            }
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all have defined names', function() {
            for (var i = 0; i < allFeeds.length; i++) {

                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
                expect(allFeeds[i].name).not.toBe(null);

            }
        });
    });



    // testing that the menu functions properly.
    describe('the menu', function() {

        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should show toggle visibility when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

    });

    // Testing initial entries.
    describe('Initial Entries', function() {
        /* This test ensures that when the loadFeed
         * function is called and has completed its work, there is at least
         * a single .entry element within the .feed container.
         * The loadFeed() function is asynchronous so this test required
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() { done(); });
        });

        it('should have at least one entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            // done();
            /**
             * Here the done call is not needed, as long as there is no additional code waiting
             * for this it to finish. Also, apart from deleting the done() call, the done parameter
             * must be deleted as well.
             */
        });
    });

    /**
     * Tests changes to the feed.  This test simulates initializing
     * the feed reader (at id zero) and then loading a the feed at
     * position two.  Once that second feed has loaded it compares the
     * title of the first article to the title of the first article after
     * the feed has been switched.  It esnsures that they are not the same
     * title.
     */
    describe('New Feed Selection', function() {
        var initTitle;
        var newTitle;
        var currentFeedId = 0;

        beforeEach(function(done) {
            loadFeed(currentFeedId, function() {

                initTitle = $('.entry').find('h2').first().text();
                currentFeedId = 1;
                loadFeed(currentFeedId, function() {

                    newTitle = $('.entry').find('h2').first().text();
                    done();
                });

            });
        });


        it('should change the first entry.', function(done) {

            // expect(initTitle).not.toBe(newTitle);

            expect(initTitle).not.toEqual(newTitle);
            done();

        });


    });

}());
