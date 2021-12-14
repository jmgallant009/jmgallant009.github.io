Josh Gallant

MET CS 601 Term Project

This website is built as a personal website / portfolio. It consists of five pages:

1. Home - This is the main index of the page, not too much to see here.
2. About - This is the about me page with an image of me and a brief blurb. They were built to be side-by-side which was accomplished through CSS Flex Box.
3. Resume - This was the most difficult page of the site as it's all built on Javascript. The resume contents are pulled from resume.json and then are dynamically added to the page in HTML elements through the Javascript.
4. Contact - This is a standard contact form which actually does work (I used a third party service for the destinatation endpoint.) The form will throw user errors if certain validation rules are not followed when filling out the form. This was accomplished through the contactFormValdiation.js file.
5. Wilburt - This is an image gallery which uses Vue.js. When hovering over any image, a secondary image will be revealed in its place.

All pages are built to be mobile responsive through the use of media queries and a hamburger menu when scaled down. This website was built with the local preview at a deliberate smaller size in order to keep the focus of the design on the mobile view. 

All pages include a header with my name and the subpages which can turn into a hamburger menu. All pages also have a header with working social media links / icons.