document.getElementById('xrpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const xrpAmount = parseFloat(document.getElementById('xrpAmount').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(xrpAmount) || xrpAmount < 0) {
        resultDiv.innerHTML = '<p>Please enter a valid XRP amount.</p>';
        return;
    }

    console.log('Input XRP:', xrpAmount);

    // Calculate percentile
    const percentile = calculatePercentile(xrpAmount);

    // Find the correct bin for status and USD cost
    let currentBin = null;
    for (let i = xrpDistribution.length - 1; i >= 0; i--) {
        if (xrpAmount >= xrpDistribution[i].minXRP) {
            currentBin = xrpDistribution[i];
            break;
        }
    }
    if (!currentBin) {
        currentBin = xrpDistribution[0]; // Fallback to first bin if xrpAmount < 0
    }

    // Calculate USD cost using table's ranges
    let usdCost;
    if (xrpAmount >= 5000000) {
        usdCost = '$12,000,000+';
    } else if (xrpAmount >= 50000) {
        usdCost = '$108,742–$135,000';
    } else if (xrpAmount >= 8758) {
        usdCost = '$18,000–$19,000';
    } else if (xrpAmount >= 2486) {
        usdCost = '$5,000–$6,263';
    } else {
        const xrpPrice = 2.20; // Midpoint from table ($2.01–$2.40)
        usdCost = (xrpAmount * xrpPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    // Format percentile
    const percentileText = percentile <= 0.06 ? `top ${percentile.toFixed(2)}%` : `top ${percentile.toFixed(2)}%`;

    // Display result
    resultDiv.innerHTML = `
        <h2>Result</h2>
        <p><strong>XRP Amount:</strong> ${xrpAmount.toLocaleString()} XRP</p>
        <p><strong>Holder Percentile:</strong> ${percentileText}</p>
        <p><strong>Approximate USD Value:</strong> ${usdCost}</p>
        <p><strong>Status:</strong> ${currentBin.status}</p>
    `;
});

function calculatePercentile(xrpAmount) {
    let totalHolders = xrpDistribution.reduce((sum, bin) => sum + bin.holders, 0);
    let holdersBelow = 0;
    let currentBin = null;
    let nextBin = null;

    for (let i = 0; i < xrpDistribution.length; i++) {
        if (xrpAmount < xrpDistribution[i].minXRP) {
            nextBin = xrpDistribution[i];
            currentBin = xrpDistribution[i - 1] || { minXRP: 0, holders: 0 };
            break;
        }
        holdersBelow += xrpDistribution[i].holders;
        if (xrpAmount === xrpDistribution[i].minXRP) {
            return 100 * (1 - holdersBelow / totalHolders);
        }
    }

    let percentile;
    if (currentBin && nextBin && xrpAmount > currentBin.minXRP && xrpAmount < nextBin.minXRP) {
        let binRange = nextBin.minXRP - currentBin.minXRP;
        let xrpProgress = (xrpAmount - currentBin.minXRP) / binRange;
        let binPercentile = 100 * (1 - holdersBelow / totalHolders);
        let nextPercentile = 100 * (1 - (holdersBelow + nextBin.holders) / totalHolders);
        percentile = binPercentile - (binPercentile - nextPercentile) * xrpProgress;
    } else {
        percentile = 100 * (1 - holdersBelow / totalHolders);
    }

    console.log('Input XRP:', xrpAmount, 'Holders below:', holdersBelow, 'Total:', totalHolders, 'Percentile:', percentile);
    return percentile;
}
