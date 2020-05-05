const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

(async () => {
    try {
        const url = 'https://api.dependabot.com/release_notifications/private';
        const data = {
            "name": core.getInput('dependency-name', { required: true}),
            "version": core.getInput('dependency-version', { required: true}),
            "package-manager": core.getInput('dependency-package-manager', { required: true})
        };

        console.log(`Making post on: ${url} with: ${JSON.stringify(data)}`);
        const result = await axios.post(url, data,
            {
                headers: {
                    'Authorization' : `Personal ${githubAccessToken}`
                }
            });

        if(res.statusCode != 204) {
            throw new Error(`unexpected status code: ${res.statusCode}`);
        }


        console.log("Done");
    } catch (error) {
        core.setFailed(error.message);
    }
})();
