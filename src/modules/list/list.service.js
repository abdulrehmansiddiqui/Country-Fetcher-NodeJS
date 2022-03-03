const Countries = require("../../../countries.json");

module.exports = {

    async get({ id }) {
        
        ///////CYM have 62

        if (!id) return { message: 'The parameter is missing from the cli' }

        try {
            let CountryName = []
            Countries.forEach((val) => {

                let translations = Object.keys(val.translations);

                const isDataFound = translations.find(element => element == id);

                if (isDataFound) CountryName.push(val.name.official)

            })

            if (CountryName.length <= 0) return { message: 'The translation key does not exist' }

            return {
                length: CountryName.length,
                CountryFullLength: Countries.length,
                CountryName,
            }

        } catch (error) {
            return { error }
        }

    },

};
