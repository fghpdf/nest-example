export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'claim_hub',
      entities: ["dist/**/*.entity{.ts,.js}"],
    }
  });