A demonstration app written in Tapestry 5 showing different ways to structure JavaScript.
The app is a game of catch between dancing moosenbeaver, and albino moosenbeaver. Click
anywhere to have the moosenbeaver with the ball move to the cursor location. Click the
other moosenbeaver to have him throw the ball.

To start the application, run the jetty:run maven goal and navigate to
http://localhost:8080/javascriptpatterns

These are the patterns demonstrated:

+ Global functions and variables (global-vars.js)
+ Custom objects (custom-object.js)
+ Singletons (singleton.js)
+ Module pattern (module.js)
+ Module pattern with multiple instances (module-multiple-instances.js)

Each of these js files provides the same functionality. To swap between them, change the js
file specified in Index.java, in the @Import annotation.

To see module-multiple-instances.js in action, uncomment the second section of Index.tml.