Etherpad on OpenShift
=====================

This git repository helps you get up and running quickly with latest Etherpad
installation on OpenShift (v.1.4.0).  The backend database is MongoDB and the database
name is the same as your application name (using $_ENV['OPENSHIFT_APP_NAME']).
You can name your application whatever you want.  However, the name of the
database will always match the application so you might have to update
.openshift/action_hooks/build.


Running on OpenShift
----------------------------

Create an account at https://www.openshift.com

Create a nodejs application with mongodb (you can call your application whatever
you want)

    rhc app create etherpad nodejs-0.10 mongodb-2 --from-code=https://github.com/openshift/etherpad-example

That's it, you can now checkout your application at:

    http://etherpad-$yournamespace.rhcloud.com


NOTES:

GIT_ROOT/settings.json.template:
    This is etherpad settings template, which contains all the possible 
    settings with comments.

GIT_ROOT/.openshift/action_hooks/deploy:
    This script is executed with every 'git push'.  Feel free to modify
    this script to learn how to use it to your advantage.  By default,
    this script will alter settings.json with proper OPENSHIFT_* values,
    as well it creates links needed for proper application setup on OpenShift.
