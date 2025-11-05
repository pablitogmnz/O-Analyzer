document.addEventListener('DOMContentLoaded', (event) => {
    const analyzeButton = document.getElementById('analyzeButton');
    const codeInput = document.getElementById('codeInput');

    const apiUrl = 'http://192.168.1.100:8000/analyze';

    analyzeButton.addEventListener('click', async () => {
        const codeToAnalyze = codeInput.value;
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                code: codeToAnalyze})
        });

        const data = await response.json();
        console.log('Réponse de l\'API :', data);

        } catch (error) {
            console.error('Erreur lors de l\'appel API:', error);
        }
    });
});