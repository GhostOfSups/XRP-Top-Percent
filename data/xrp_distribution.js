const xrpDistribution = [
    { minXRP: 0, holders: 66000 },      // Top 100%–99%: 0 XRP
    { minXRP: 0.59, holders: 66000 },   // Top 99%–98%: ~0.59 XRP
    { minXRP: 1.18, holders: 66000 },   // Top 98%–97%
    { minXRP: 1.77, holders: 66000 },   // Top 97%–96%
    { minXRP: 2.36, holders: 66000 },   // Top 96%–95%
    { minXRP: 2.95, holders: 66000 },   // Top 95%–94%
    { minXRP: 3.54, holders: 66000 },   // Top 94%–93%
    { minXRP: 4.13, holders: 66000 },   // Top 93%–92%
    { minXRP: 4.72, holders: 66000 },   // Top 92%–91%
    { minXRP: 5.31, holders: 66000 },   // Top 91%–90%
    { minXRP: 5.90, holders: 66000 },   // Top 90%–89%
    { minXRP: 6.49, holders: 66000 },   // Top 89%–88%
    { minXRP: 7.08, holders: 66000 },   // Top 88%–87%
    { minXRP: 7.67, holders: 66000 },   // Top 87%–86%
    { minXRP: 8.26, holders: 66000 },   // Top 86%–85%
    { minXRP: 8.85, holders: 66000 },   // Top 85%–84%
    { minXRP: 9.44, holders: 66000 },   // Top 84%–83%
    { minXRP: 10.03, holders: 66000 },  // Top 83%–82%
    { minXRP: 10.62, holders: 66000 },  // Top 82%–81%
    { minXRP: 11.21, holders: 66000 },  // Top 81%–80%
    { minXRP: 11.80, holders: 66000 },  // Top 80%–79%
    { minXRP: 12.39, holders: 66000 },  // Top 79%–78%
    { minXRP: 12.98, holders: 66000 },  // Top 78%–77%
    { minXRP: 13.57, holders: 66000 },  // Top 77%–76%
    { minXRP: 14.16, holders: 66000 },  // Top 76%–75%
    { minXRP: 14.75, holders: 66000 },  // Top 75%–74%
    { minXRP: 15.34, holders: 66000 },  // Top 74%–73%
    { minXRP: 15.93, holders: 66000 },  // Top 73%–72%
    { minXRP: 16.52, holders: 66000 },  // Top 72%–71%
    { minXRP: 17.11, holders: 66000 },  // Top 71%–70%
    { minXRP: 17.70, holders: 66000 },  // Top 70%–69%
    { minXRP: 18.29, holders: 66000 },  // Top 69%–68%
    { minXRP: 18.88, holders: 66000 },  // Top 68%–67%
    { minXRP: 19.47, holders: 66000 },  // Top 67%–66%
    { minXRP: 20, holders: 2838000 },   // Top 66%–33.48%: 2.21M accounts with 20 XRP
    { minXRP: 30, holders: 66000 },     // Top 33.48%–32.48%
    { minXRP: 45, holders: 66000 },     // Top 32.48%–31.48%
    { minXRP: 65, holders: 66000 },     // Top 31.48%–30.48%
    { minXRP: 90, holders: 66000 },     // Top 30.48%–29.48%
    { minXRP: 120, holders: 66000 },    // Top 29.48%–28.48%
    { minXRP: 160, holders: 66000 },    // Top 28.48%–27.48%
    { minXRP: 210, holders: 66000 },    // Top 27.48%–26.48%
    { minXRP: 280, holders: 66000 },    // Top 26.48%–25.48%
    { minXRP: 360, holders: 66000 },    // Top 25.48%–24.48%
    { minXRP: 460, holders: 66000 },    // Top 24.48%–23.48%
    { minXRP: 590, holders: 66000 },    // Top 23.48%–22.48%
    { minXRP: 750, holders: 66000 },    // Top 22.48%–21.48%
    { minXRP: 960, holders: 66000 },    // Top 21.48%–20.48%
    { minXRP: 1220, holders: 66000 },   // Top 20.48%–19.48%
    { minXRP: 1550, holders: 66000 },   // Top 19.48%–18.48%
    { minXRP: 1950, holders: 66000 },   // Top 18.48%–17.48%
    { minXRP: 2450, holders: 66000 },   // Top 17.48%–16.48%
    { minXRP: 2486, holders: 66000 },   // Top 16.48%–15.48% (top 10% starts)
    { minXRP: 3000, holders: 66000 },   // Top 15.48%–14.48%
    { minXRP: 3600, holders: 66000 },   // Top 14.48%–13.48%
    { minXRP: 4300, holders: 66000 },   // Top 13.48%–12.48%
    { minXRP: 5100, holders: 66000 },   // Top 12.48%–11.48%
    { minXRP: 6100, holders: 66000 },   // Top 11.48%–10.48%
    { minXRP: 7200, holders: 66000 },   // Top 10.48%–9.48%
    { minXRP: 8758, holders: 66000 },   // Top 9.48%–8.48% (top 5% starts)
    { minXRP: 10000, holders: 66000 },  // Top 8.48%–7.48%
    { minXRP: 12000, holders: 66000 },  // Top 7.48%–6.48%
    { minXRP: 14000, holders: 66000 },  // Top 6.48%–5.48%
    { minXRP: 17000, holders: 66000 },  // Top 5.48%–4.48%
    { minXRP: 21000, holders: 66000 },  // Top 4.48%–3.48%
    { minXRP: 26000, holders: 66000 },  // Top 3.48%–2.48%
    { minXRP: 32000, holders: 66000 },  // Top 2.48%–1.48%
    { minXRP: 40000, holders: 66000 },  // Top 1.48%–0.48%
    { minXRP: 50000, holders: 65537 },  // Top 0.48%–0.01% (top 1% starts)
    { minXRP: 100000, holders: 1320 },  // Top 0.01%–0.008%
    { minXRP: 500000, holders: 1320 },  // Top 0.008%–0.006%
    { minXRP: 1000000, holders: 1320 }, // Top 0.006%–0.004%
    { minXRP: 5000000, holders: 663 }   // Top 0.004%–0% (top 0.01%)
];
