# BSC套利

## 部署合约
1. 第10、11行，编辑 `hardhat.config.ts` 中的网络配置。

2. 拷贝私钥配置文件：

```bash
$ cp .secret.ts.sample .secret.ts
```

3. 填入部署账户的私钥和地址信息。然后运行脚本部署合约：

```bash
主网：
$ npx hardhat --network bsc run scripts/deploy.ts
测试网：
$ npx hardhat --network bscTestnet run scripts/deploy.ts
```
部署完成会显示合约地址

4. 编辑 `bot/config.ts` 中的13行，填入刚才部署好的合约地址；// your contract address
17行，自己去bscscan注册一个账户，填入API key
23行，minimumProfit填入多少利润启动套利

`scripts/add-basetoken.ts` 第8行 填入刚才部署好的合约地址
`scripts/show-status.ts` 第8行 填入刚才部署好的合约地址


## Bot

合约提供了 `getProfit(address pool1, address pool2)` 接口，可以计算出两个交易对之间套利的最大利润（以 Base Tokne计价）。

Bot 需要在多个 AMM DEX 的多个代币对之间，调用 `getProfit()` 查询利润，一但利润满足设定的阈值，即可调用 `flashArbitrage(pool1, pool2)` 进行套利，获得的收益将保存在合约中。

项目实现了 typescript 版本的 bot，运行方式：

```bash
$ yarn run bot
```
















## 运行 UT

```bash
$ npx hardhat test
```

`test/SwapTest.ts` 可调整67行数字测试多少利润启动 
