#!/bin/bash
bundle
echo '++++++++++++++++++++'
echo '++++++++++++++++++++'
echo 'Bundle installed.'
echo '++++++++++++++++++++'
echo '++++++++++++++++++++'
bower install
cp ./bower_components/jquery/dist/jquery.js ./app/_assets/javascripts/foot
cp ./bower_components/modernizr/modernizr.js ./app/_assets/javascripts/head
cp ./bower_components/uikit/fonts/* ./app/_assets/fonts
cp ./bower_components/animate.css/animate.css ./app/_assets/stylesheets/vendor/_animate.scss
echo '++++++++++++++++++++++++++++'
echo '++++++++++++++++++++++++++++'
echo 'Bower programs installed.'
echo '++++++++++++++++++++++++++++'
echo '++++++++++++++++++++++++++++'
npm install
echo '++++++++++++++++++++++++++++'
echo '++++++++++++++++++++++++++++'
echo 'npm dependencies installed.'
echo 'The Script ends here.'
echo '++++++++++++++++++++++++++++'
echo '++++++++++++++++++++++++++++'
