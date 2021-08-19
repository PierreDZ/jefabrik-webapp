const dotenv = require("dotenv");
dotenv.config();

/**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
 */
const propertyId = process.env.GOOGLE_API_PROPERTY_ID;

// Imports the Google Analytics Data API client library.
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();


// Runs a simple report.
module.exports.runReport = async () => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
    dimensions: [{ name: "date" }],
    metrics:    [{ name: "activeUsers" }],
  });

  // console.log("Report result:");
  // response.rows.forEach((row) => {
  //   console.log(row.dimensionValues[0], row.metricValues[0]);
  // });
  return response;
};

// Runs a simple report.
module.exports.runReport2 = async () => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
    dimensions: [{ name: "country" }],
    metrics:    [{ name: "activeUsers" }],
  });

  // console.log("Report result:");
  // response.rows.forEach((row) => {
  //   console.log(row.dimensionValues[0], row.metricValues[0]);
  // });
  return response;
};