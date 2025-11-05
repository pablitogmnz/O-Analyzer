document.addEventListener('DOMContentLoaded', () => {
    const analyzeButton = document.getElementById('analyzeButton');
    const codeInput = document.getElementById('codeInput');
    const resultArea = document.getElementById('resultArea');
    const apiUrl = 'http://192.168.1.100:8000/analyze';

    analyzeButton.addEventListener('click', async () => {
        const codeToAnalyze = codeInput.value;
        resultArea.innerHTML = '';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: codeToAnalyze })
            });

            const data = await response.json();

            if (data.status === 'succes') {
                const complexity = data.estimated_complexity;
                const depth = data.max_depth_found;

                resultArea.innerHTML = `
                    <div class="alert alert-success" role="alert">
                        <strong>Estimated Complexity: ${complexity}</strong>
                        <hr>
                        <p class="mb-0">Maximum nesting depth found: ${depth}</p>
                    </div>
                `;
            } else {
                resultArea.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <strong>Analysis Error:</strong>
                        <p class="mb-0">${data.message}</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error while calling API:', error);
            resultArea.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <strong>Connection Error:</strong>
                    <p class="mb-0">Unable to reach the analysis server. (Check your VPN or if the Pi is powered on)</p>
                </div>
            `;
        }
    });
});
