import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Mgo+DSMBaFt/QHFqVVhkW1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9jTXxRd0FmXHxXdHJTTg==;Mgo+DSMBPh8sVXJ0S0d+XE9AcVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xTckdhWHtbdXdcQmdbWQ==;ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFhW35adXFWT2RUWUw=;NjIyODM3QDMyMzAyZTMxMmUzMEFRM0Q1NEkyNEhhZzFzbnQ5NW0yYnF1cW8wUU1vamJod2tENE1zQjI0WmM9;NjIyODM4QDMyMzAyZTMxMmUzMFRPMFRDRTJEKzZzUjcwd1M0VnN3WW9EMVRtQ0VWVjd3VlgyVHhXWkZMZlE9;NRAiBiAaIQQuGjN/V0Z+XU9EaFtFVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdEVnW31fdHFQRWlZVEV+;NjIyODQwQDMyMzAyZTMxMmUzMGRIWDRGL2Z6ZWgrMFZZd21hNTRMeDRJTjArWnF4NSszRXUyRkpJTHlURDg9;NjIyODQxQDMyMzAyZTMxMmUzMGNkYkJMK2tqVXZTR29ZT2lDTU9UL0g4SVgyY1lmWXZFVy82MWhMeTljckE9;Mgo+DSMBMAY9C3t2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFhW35adXFWT2ZdUUc=;NjIyODQzQDMyMzAyZTMxMmUzMFJvbVBIZTlCMmFaRnNRTEluckxnTndYMGJsUTBGTW1IejI2a2VRTWJWQWc9;NjIyODQ0QDMyMzAyZTMxMmUzMGN3aWIvL2NUWGhXTHBMMUFSRU5tdXdFUzYwSWxXUVNUNi9DbGVxRGx2R0k9"
);

createApp(App).use(router).mount("#app");