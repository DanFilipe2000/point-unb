const Papa = require('papaparse');

const inserirCSV = (csvPath, dado) => {
    Papa.parse(csvPath, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            results.data.push(dado);

            const novoCSV = Para.unparse(results.data, { header: true });

            console.log(novoCSV);
        }
    });
};

module.exports = {
    inserirCSV,
};
