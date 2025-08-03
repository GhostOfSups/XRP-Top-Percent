const xrpDistribution = [
    { minXRP: 0, holders: 66000, status: "Minimal or no holdings" },      // Top 100%–99%
    { minXRP: 0.59, holders: 66000, status: "Minimal or no holdings" },   // Top 99%–98%
    { minXRP: 1.18, holders: 66000, status: "Minimal or no holdings" },   // Top 98%–97%
    { minXRP: 1.77, holders: 66000, status: "Minimal or no holdings" },   // Top 97%–96%
    { minXRP: 2.36, holders: 66000, status: "Minimal or no holdings" },   // Top 96%–95%
    { minXRP: 2.95, holders: 66000, status: "Minimal or no holdings" },   // Top 95%–94%
    { minXRP: 3.54, holders: 66000, status: "Minimal or no holdings" },   // Top 94%–93%
    { minXRP: 4.13, holders: 66000, status: "Minimal or no holdings" },   // Top 93%–92%
    { minXRP: 4.72, holders: 66000, status: "Minimal or no holdings" },   // Top 92%–91%
    { minXRP: 5.31, holders: 66000, status: "Minimal or no holdings" },   // Top 91%–90%
    { minXRP: 5.90, holders: 66000, status: "Small retail holder" },      // Top 90%–89%
    { minXRP: 6.49, holders: 66000, status: "Small retail holder" },      // Top 89%–88%
    { minXRP: 7.08, holders: 66000, status: "Small retail holder" },      // Top 88%–87%
    { minXRP: 7.67, holders: 66000, status: "Small retail holder" },      // Top 87%–86%
    { minXRP: 8.26, holders: 66000, status: "Small retail holder" },      // Top 86%–85%
    { minXRP: 8.85, holders: 66000, status: "Small retail holder" },      // Top 85%–84%
    { minXRP: 9.44, holders: 66000, status: "Small retail holder" },      // Top 84%–83%
    { minXRP: 10.03, holders: 66000, status: "Small retail holder" },     // Top 83%–82%
    { minXRP: 10.62, holders: 66000, status: "Small retail holder" },     // Top 82%–81%
    { minXRP: 11.21, holders: 66000, status: "Small retail holder" },     // Top 81%–80%
    { minXRP: 11.80, holders: 66000, status: "Small retail holder" },     // Top 80%–79%
    { minXRP: 12.39, holders: 66000, status: "Small retail holder" },     // Top 79%–78%
    { minXRP: 12.98, holders: 66000, status: "Small retail holder" },     // Top 78%–77%
    { minXRP: 13.57, holders: 66000, status: "Small retail holder" },     // Top 77%–76%
    { minXRP: 14.16, holders: 66000, status: "Small retail holder" },     // Top 76%–75%
    { minXRP: 14.75, holders: 66000, status: "Small retail holder" },     // Top 75%–74%
    { minXRP: 15.34, holders: 66000, status: "Small retail holder" },     // Top 74%–73%
    { minXRP: 15.93, holders: 66000, status: "Small retail holder" },     // Top 73%–72%
    { minXRP: 16.52, holders: 66000, status: "Small retail holder" },     // Top 72%–71%
    { minXRP: 17.11, holders: 66000, status: "Small retail holder" },     // Top 71%–70%
    { minXRP: 17.70, holders: 66000, status: "Small retail holder" },     // Top 70%–69%
    { minXRP: 18.29, holders: 66000, status: "Small retail holder" },     // Top 69%–68%
    { minXRP: 18.88, holders: 66000, status: "Small retail holder" },     // Top 68%–67%
    { minXRP: 19.47, holders: 66000, status: "Small retail holder" },     // Top 67%–66%
    { minXRP: 20, holders: 2838000, status: "Small retail holder" },      // Top 66%–33.48%
    { minXRP: 132.73, holders: 66000, status: "Small retail holder" },    // Top 33.48%–32.48%
    { minXRP: 245.46, holders: 66000, status: "Small retail holder" },    // Top 32.48%–31.48%
    { minXRP: 358.19, holders: 66000, status: "Small retail holder" },    // Top 31.48%–30.48%
    { minXRP: 470.92, holders: 66000, status: "Small retail holder" },    // Top 30.48%–29.48%
    { minXRP: 583.65, holders: 66000, status: "Small retail holder" },    // Top 29.48%–28.48%
    { minXRP: 696.38, holders: 66000, status: "Small retail holder" },    // Top 28.48%–27.48%
    { minXRP: 809.11, holders: 66000, status: "Small retail holder" },    // Top 27.48%–26.48%
    { minXRP: 921.84, holders: 66000, status: "Small retail holder" },    // Top 26.48%–25.48%
    { minXRP: 1034.57, holders: 66000, status: "Small retail holder" },   // Top 25.48%–24.48%
    { minXRP: 1147.30, holders: 66000, status: "Small retail holder" },   // Top 24.48%–23.48%
    { minXRP: 1260.03, holders: 66000, status: "Small retail holder" },   // Top 23.48%–22.48%
    { minXRP: 1372.76, holders: 66000, status: "Small retail holder" },   // Top 22.48%–21.48%
    { minXRP: 1485.49, holders: 66000, status: "Small retail holder" },   // Top 21.48%–20.48%
    { minXRP: 1598.22, holders: 66000, status: "Small retail holder" },   // Top 20.48%–19.48%
    { minXRP: 1710.95, holders: 66000, status: "Small retail holder" },   // Top 19.48%–18.48%
    { minXRP: 1823.68, holders: 66000, status: "Small retail holder" },   // Top 18.48%–17.48%
    { minXRP: 1936.41, holders: 66000, status: "Small retail holder" },   // Top 17.48%–16.48%
    { minXRP: 2049.14, holders: 66000, status: "Small retail holder" },   // Top 16.48%–15.48%
    { minXRP: 2161.87, holders: 66000, status: "Small retail holder" },   // Top 15.48%–14.48%
    { minXRP: 2274.60, holders: 66000, status: "Small retail holder" },   // Top 14.48%–13.48%
    { minXRP: 2387.33, holders: 66000, status: "Small retail holder" },   // Top 13.48%–12.48%
    { minXRP: 2486, holders: 66000, status: "Entry-level for top 10% has slightly varied due to price fluctuations" }, // Top 12.48%–11.48%
    { minXRP: 2950, holders: 66000, status: "Approaching significant ranking" }, // Top 11.48%–10.48%
    { minXRP: 3414, holders: 66000, status: "Approaching significant ranking" }, // Top 10.48%–9.48%
    { minXRP: 3878, holders: 66000, status: "Approaching significant ranking" }, // Top 9.48%–8.48%
    { minXRP: 4342, holders: 66000, status: "Approaching significant ranking" }, // Top 8.48%–7.48%
    { minXRP: 4806, holders: 66000, status: "Approaching significant ranking" }, // Top 7.48%–6.48%
    { minXRP: 5270, holders: 66000, status: "Approaching significant ranking" }, // Top 6.48%–5.48%
    { minXRP: 8758, holders: 66000, status: "Reflects a moderate investment for significant ranking" }, // Top 5.48%–4.48%
    { minXRP: 10475, holders: 66000, status: "Significant holder" }, // Top 4.48%–3.48%
    { minXRP: 12192, holders: 66000, status: "Significant holder" }, // Top 3.48%–2.48%
    { minXRP: 13909, holders: 66000, status: "Significant holder" }, // Top 2.48%–1.48%
    { minXRP: 50000, holders: 65537, status: "Exclusive tier, often considered 'whale' status" }, // Top 1.48%–0.48%
    { minXRP: 100000, holders: 1320, status: "High-tier whale" }, // Top 0.48%–0.24%
    { minXRP: 500000, holders: 1320, status: "High-tier whale" }, // Top 0.24%–0.12%
    { minXRP: 1000000, holders: 1320, status: "High-tier whale" }, // Top 0.12%–0.06%
    { minXRP: 5000000, holders: 663, status: "Ultra-elite, typically exchanges, Ripple, or founders" } // Top 0.06%–0%
];
