export interface EnvConfig{
    url: string;
    dbConnectionString: string;
    apiKey: string;
}

export type TestEnvironment = 'DEV' | 'UAT' | 'QA' | 'STG' | 'PROD';

const devConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf'
};

const uatConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf'
};

const qaConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf'
};

const stgConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf'
};

const prodConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf'
};

const environment = process.env.TEST_ENV || 'UAT';
export {environment};

export const config: EnvConfig = (() => {
    switch (environment.toUpperCase()) {
        case 'DEV':
            return devConfig;
        case 'UAT':
            return uatConfig;
        case 'QA':
            return qaConfig;
        case 'STG':
            return stgConfig;
        case 'PROD':
            return prodConfig;
        default:
            return uatConfig;
    }
})();
