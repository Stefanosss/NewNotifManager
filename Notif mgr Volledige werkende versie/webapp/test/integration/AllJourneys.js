jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 NotificationInfoSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"Avelon/manualnotification/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Avelon/manualnotification/test/integration/pages/App",
	"Avelon/manualnotification/test/integration/pages/Browser",
	"Avelon/manualnotification/test/integration/pages/Master",
	"Avelon/manualnotification/test/integration/pages/Detail",
	"Avelon/manualnotification/test/integration/pages/Create",
	"Avelon/manualnotification/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Avelon.manualnotification.view."
	});

	sap.ui.require([
		"Avelon/manualnotification/test/integration/MasterJourney",
		"Avelon/manualnotification/test/integration/NavigationJourney",
		"Avelon/manualnotification/test/integration/NotFoundJourney",
		"Avelon/manualnotification/test/integration/BusyJourney",
		"Avelon/manualnotification/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});