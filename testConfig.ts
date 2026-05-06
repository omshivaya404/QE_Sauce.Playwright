export interface EnvConfig{
    url: string;
    dbConnectionString: string;
    apiKey: string;
    username?: string;
    password?: string;
}

export type TestEnvironment = 'DEV' | 'UAT' | 'QA' | 'STG' | 'PROD';

const devConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf',
    username: 'dev_user',
    password: 'secret_sauce'
};

const uatConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf',
    username: 'uat_user',
    password: 'uat_password',
};

const qaConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf',
    username: 'qa_user',
    password: 'qa_password',
};

const stgConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf',
    username: 'stg_user',
    password: 'stg_password',
};

const prodConfig: EnvConfig = {
    url: 'https://www.saucedemo.com/',
    dbConnectionString: 'Server=dev-db;Database=mydb;User Id=myuser;Password=mypassword;',
    apiKey: 'dfsf',
    username: 'prod_user',
    password: 'prod_password',
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
